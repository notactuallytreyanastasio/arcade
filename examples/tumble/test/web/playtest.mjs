// Tumble played in headless Chrome: dist/ served on PORT, a desktop-sized
// page driven by the keyboard and a phone-sized page driven by touch.
//   node test/web/playtest.mjs <dist> <port> <dir holding puppeteer-core's node_modules>
// It reads the marks tumble.mjs sets on <html> (Tumble.App.marks) and the
// WebGL canvas's own pixels, and checks:
//   the title; that space spins, and how long the spin (the boards the bot
//   proves) holds the main thread; that the reels give way to the round;
//   that a round is won by holding the tilt the bot marks, with the arrow
//   keys on the desktop (on or off, as a player's are) and a dragged finger
//   on the phone; that the picture is a cel: nearly every pixel of the 3D
//   canvas is the sky, the ink, or a mesh colour times one of the look's
//   tones, as Tumble.Cel.tone says and the shader must agree (measured on
//   the pixels that are not sky); what a frame
//   costs in script time; the speakers; a clean console.
// Seeds are random, so rounds differ run to run: counts are bounds.
// Screenshots in test/web/shots/.
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { serve } from "../../scripts/serve.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const [dist, portArg, modules] = process.argv.slice(2);
if (!dist || !portArg || !modules) {
  console.log("usage: playtest.mjs <dist> <port> <dir with node_modules/puppeteer-core>");
  process.exit(2);
}
const port = Number(portArg);
const req = createRequire(join(resolve(modules), "package.json"));
const puppeteer = (await import(pathToFileURL(req.resolve("puppeteer-core")).href)).default;
const chrome = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const shots = join(here, "shots");
mkdirSync(shots, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
const check = (cond, msg) => { if (cond) console.log("ok   " + msg); else { failures++; console.log("FAIL " + msg); } };

const marks = (page) => page.evaluate(() => {
  const o = {};
  for (const a of document.documentElement.attributes) if (a.name.startsWith("data-")) o[a.name.slice(5)] = a.value;
  return o;
});
const brief = (m) => JSON.stringify({ show: m.show, phase: m.phase, level: m.level, lives: m.lives, powers: m.powers, ball: m.ball, left: m.left });
const xy = (s) => s.split(",").map(Number);

async function waitFor(page, pred, what, ms = 10000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const m = await marks(page);
    if (pred(m)) return m;
    await sleep(20);
  }
  const m = await marks(page);
  check(false, "timed out waiting for " + what + ": " + brief(m));
  return m;
}

// Script time per frame: every requestAnimationFrame callback is timed from
// before the page's own code loads.
const timeFrames = () => {
  const times = [];
  globalThis.__frameTimes = times;
  const raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = (cb) => raf((t) => {
    const t0 = performance.now();
    cb(t);
    times.push(performance.now() - t0);
  });
};

// The 3D canvas's pixels, counted by colour, and how many of them are a
// colour the look allows: the sky, the ink, or a palette colour times a tone
// (each within 3 of 255, which covers the shader's mediump rounding).
async function celCensus(page, m) {
  const counts = await page.evaluate(() => {
    const c = document.getElementById("stage");
    const px = globalThis.__tumbleGl.pixels(0, 0, c.width, c.height);
    const by = new Map();
    for (let i = 0; i < px.length; i += 4) {
      const k = (px[i] << 16) | (px[i + 1] << 8) | px[i + 2];
      by.set(k, (by.get(k) || 0) + 1);
    }
    return [...by.entries()];
  });
  const rgb = (s) => s.split("/").map(Number);
  const tones = m.tones.split(",").map((t) => Number(t) / 1000);
  const allowed = [rgb(m.sky), rgb(m.ink)];
  for (const c of m.palette.split(",").map(rgb)) for (const t of tones) allowed.push(c.map((x) => x * t));
  const near = (k) => {
    const p = [(k >> 16) & 255, (k >> 8) & 255, k & 255];
    return allowed.some((a) => Math.abs(a[0] - p[0]) <= 3 && Math.abs(a[1] - p[1]) <= 3 && Math.abs(a[2] - p[2]) <= 3);
  };
  let total = 0, flat = 0, sky = 0;
  const skyKey = rgb(m.sky).reduce((a, x) => (a << 8) | x, 0);
  for (const [k, n] of counts) { total += n; if (near(k)) flat += n; if (k === skyKey) sky += n; }
  const big = counts.filter(([, n]) => n >= total * 0.002).length;
  return { total, flat, sky, colours: counts.length, big };
}

// Play rounds until one is won, steering with `steer(botX, botY)` every
// 25 ms. Returns how many rounds it took, or 0 if `most` rounds were lost.
async function playUntilWon(page, steer, release, go, most) {
  for (let round = 1; round <= most; round++) {
    let m = await waitFor(page, (x) => x.show === "play", "the round to start", 6000);
    const t0 = Date.now();
    while (m.show === "play" && Date.now() - t0 < 120000) {
      if (m.bot) { const [bx, by] = xy(m.bot); await steer(bx, by); }
      await sleep(25);
      m = await marks(page);
    }
    await release();
    console.log(`     round ${round}: ${m.phase} (${m.powers}) in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
    if (m.phase === "won") return round;
    if (m.phase === "over") return 0;
    await sleep(900);
    await go();
  }
  return 0;
}

async function page_(browser, w, h, touch) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2, hasTouch: touch, isMobile: touch });
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  page.on("pageerror", (e) => errors.push(String(e.message)));
  await page.evaluateOnNewDocument(timeFrames);
  await page.goto(`http://127.0.0.1:${port}/?keep`);
  await waitFor(page, (m) => m.show === "title", "the title");
  return { page, errors };
}

const server = serve(dist, port);
const browser = await puppeteer.launch({ executablePath: chrome, headless: "new", args: ["--autoplay-policy=no-user-gesture-required"] });

// ---- Desktop, by keyboard ----
{
  const { page, errors } = await page_(browser, 1280, 800, false);
  let m = await marks(page);
  check(m.phase === "idle" && m.headline === "TUMBLE" && m.lives === "3", "desktop: the title, three lives: " + brief(m));
  await page.screenshot({ path: join(shots, "desktop-title.png") });

  // The spin runs the bot over candidate boards before it answers.
  const spinMs = await page.evaluate(() => {
    const t0 = performance.now();
    window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space", bubbles: true }));
    window.dispatchEvent(new KeyboardEvent("keyup", { code: "Space", bubbles: true }));
    return performance.now() - t0;
  });
  m = await waitFor(page, (x) => x.show === "reels", "the reels");
  check(m.phase === "live" && m.powers.split(",").length === 3, "desktop: space spins three powers: " + m.powers);
  check(spinMs < 400, `desktop: the spin, boards proven by the bot included, held the main thread ${spinMs.toFixed(0)} ms (under 400)`);
  await sleep(900);
  await page.screenshot({ path: join(shots, "desktop-reels.png") });
  m = await waitFor(page, (x) => x.show === "play", "the round");
  check(Number(m.left) >= 19, "desktop: the round starts with its time on the clock: " + m.left + " s");

  // Arrow keys, each held or not: a player's tilt is all or nothing a key.
  const held = { ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false };
  const set = async (key, want) => {
    if (held[key] === want) return;
    held[key] = want;
    if (want) await page.keyboard.down(key); else await page.keyboard.up(key);
  };
  const steer = async (bx, by) => {
    await set("ArrowLeft", bx < -0.35);
    await set("ArrowRight", bx > 0.35);
    await set("ArrowDown", by < -0.35);
    await set("ArrowUp", by > 0.35);
  };
  const release = async () => { for (const k of Object.keys(held)) await set(k, false); };
  const go = async () => { await page.keyboard.press("Space"); };

  // The picture, mid-round.
  await steer(0, 1);
  await sleep(500);
  const mid = await marks(page);
  const census = await celCensus(page, mid);
  await page.screenshot({ path: join(shots, "desktop-round.png") });
  const drawn = census.total - census.sky;
  const share = (census.flat - census.sky) / drawn;
  check(drawn > census.total * 0.1, `desktop: ${(100 * drawn / census.total).toFixed(1)}% of the 3D canvas's ${census.total} pixels are not sky`);
  check(share >= 0.95, `desktop: of those, ${(share * 100).toFixed(2)}% are the ink or a mesh colour at one of the ${mid.tones.split(",").length} tones (at least 95%; the rest are antialiased edges, the highlight and the shadow)`);
  check(census.big <= 30, `desktop: ${census.big} colours cover 0.2% of the picture or more (a cel has few; ${census.colours} in all, the rest on edges)`);

  const won = await playUntilWon(page, steer, release, go, 9);
  check(won > 0, won > 0 ? `desktop: a round won with the arrow keys, on round ${won}` : "desktop: no round won with the arrow keys in a whole game");
  m = await marks(page);
  if (won > 0) check(m.headline === "CLEAR!" || m.headline === "JACKPOT!", "desktop: the card says so: " + m.headline);
  await page.screenshot({ path: join(shots, "desktop-card.png") });

  const cost = await page.evaluate(() => {
    const t = globalThis.__frameTimes.slice().sort((a, b) => a - b);
    const sum = t.reduce((a, b) => a + b, 0);
    return { n: t.length, mean: sum / t.length, p95: t[Math.floor(t.length * 0.95)], max: t[t.length - 1], gl: globalThis.__tumbleGl.stats };
  });
  check(cost.mean < 4 && cost.p95 < 8, `desktop: a frame's script (update, both canvases) took ${cost.mean.toFixed(2)} ms on average, ${cost.p95.toFixed(2)} ms at the 95th percentile, ${cost.max.toFixed(1)} ms at worst, over ${cost.n} frames (16.7 ms is a 60 Hz frame)`);
  check(cost.gl.draws <= 60 && cost.gl.triangles <= 8000, `desktop: the last frame was ${cost.gl.draws} draw calls and ${cost.gl.triangles} triangles; ${cost.gl.uploads} meshes uploaded all session`);
  check(m.audio === "running", "desktop: the speakers are up: " + m.audio + " via " + m["audio-path"]);
  check(errors.length === 0, "desktop: a clean console" + (errors.length ? ": " + errors.slice(0, 3).join(" | ") : ""));
  await page.close();
}

// ---- Phone, by touch ----
{
  const { page, errors } = await page_(browser, 390, 844, true);
  const cdp = await page.createCDPSession();
  const touch = (type, x, y) => cdp.send("Input.dispatchTouchEvent", { type, touchPoints: type === "touchEnd" ? [] : [{ x, y, id: 1 }] });
  const tap = async () => { await touch("touchStart", 195, 600); await sleep(40); await touch("touchEnd", 195, 600); };
  await tap();
  let m = await waitFor(page, (x) => x.show === "reels", "the reels after a tap");
  check(m.phase === "live", "phone: a tap spins: " + m.powers);
  await waitFor(page, (x) => x.show === "play", "the round");

  // A finger pressed at (195, 600) and dragged 70 px for a full tilt.
  let down = false;
  const steer = async (bx, by) => {
    if (!down) { await touch("touchStart", 195, 600); down = true; }
    await touch("touchMove", 195 + bx * 70, 600 - by * 70);
  };
  const release = async () => { if (down) { await touch("touchEnd", 195, 600); down = false; } };
  await steer(0, 1);
  await sleep(600);
  await page.screenshot({ path: join(shots, "phone-round.png") });
  const won = await playUntilWon(page, steer, release, tap, 9);
  check(won > 0, won > 0 ? `phone: a round won with a dragged finger, on round ${won}` : "phone: no round won by touch in a whole game");
  await page.screenshot({ path: join(shots, "phone-card.png") });
  check(errors.length === 0, "phone: a clean console" + (errors.length ? ": " + errors.slice(0, 3).join(" | ") : ""));
  await page.close();
}

await browser.close();
console.log(failures === 0 ? "PLAYTEST PASS" : `PLAYTEST FAIL (${failures})`);
process.exit(failures === 0 ? 0 : 1);
