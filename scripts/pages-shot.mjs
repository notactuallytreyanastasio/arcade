// Retakes the landing page's two pictures from the built site, in headless
// Chrome (run as `scripts/pages.sh shot`):
//   <site>/putt.png   the demo at /arcade/putt/ in a 390 x 844 window at 2x,
//                     once the shell has marked its first phase on <html>
//   <site>/card.png   site/card.html (which shows putt.png) at 1200 x 630
//   node scripts/pages-shot.mjs <built site> <port> <dir holding puppeteer-core's node_modules> <site source dir>
// Fails if the demo does not boot under the prefix, paints nothing, or logs
// an error.
import { createRequire } from "node:module";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { serve } from "./pages-serve.mjs";

const [out, portArg, modules, siteDir] = process.argv.slice(2);
if (!out || !portArg || !modules || !siteDir) {
  console.error("usage: pages-shot.mjs <built site> <port> <dir with node_modules/puppeteer-core> <site source dir>");
  process.exit(2);
}
const port = Number(portArg);
const req = createRequire(join(resolve(modules), "package.json"));
const puppeteer = (await import(pathToFileURL(req.resolve("puppeteer-core")).href)).default;
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fail = (msg) => { console.error("pages-shot: " + msg); process.exitCode = 1; };

const server = await serve(out, port, "/arcade/");
const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("requestfailed", (r) => errors.push("request failed: " + r.url()));
  page.on("response", (r) => { if (r.status() >= 400) errors.push(r.status() + " " + r.url()); });

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto(`http://127.0.0.1:${port}/arcade/putt/`);
  const t0 = Date.now();
  let phase = null;
  while (Date.now() - t0 < 10000 && !phase) {
    phase = await page.evaluate(() => document.documentElement.getAttribute("data-phase"));
    if (!phase) await sleep(20);
  }
  if (!phase) fail("the demo set no data-phase on <html> within 10 s; it did not boot under /arcade/putt/");
  await sleep(300);
  const painted = await page.evaluate(() => {
    const c = document.querySelector("canvas");
    const px = c.getContext("2d").getImageData(Math.floor(c.width / 2), Math.floor(c.height / 2), 1, 1).data;
    return px[3];
  });
  if (painted !== 255) fail("the canvas's centre is not painted");
  if (errors.length) fail("the demo's console is not clean: " + JSON.stringify(errors));
  if (process.exitCode) throw new Error("not taking pictures of a demo that failed");
  await page.screenshot({ path: join(siteDir, "putt.png") });
  console.log(`pages-shot: ${join(siteDir, "putt.png")} (phase ${phase})`);

  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(resolve(siteDir, "card.html")).href, { waitUntil: "load" });
  await page.screenshot({ path: join(siteDir, "card.png") });
  console.log(`pages-shot: ${join(siteDir, "card.png")}`);
} catch (e) {
  fail(String(e.message || e));
} finally {
  await browser.close();
  server.close();
}
