// Putt played in headless Chrome: dist/ served on PORT, a phone-sized page
// driven by touch and a desktop-sized page driven by the mouse.
//   node test/web/playtest.mjs <dist> <port> <dir holding puppeteer-core's node_modules>
// It reads the marks putt.mjs sets on <html> (shell/putt_shell.march, marks)
// and checks, on the phone: the first tee and what the bands say; that a tap
// and a pull inside the dead zone are no putt; that a pull's power is its
// length whatever its speed (86 px is 2.05 m/s fast or slow); that a
// quarter pull (49 px) toward the cup rolls about the 0.96 m still air
// gives it, the way it was aimed; then one whole hole, played as a player
// would play it (aim at the cup, lengthen the pull until the preview reaches
// it, let go, again from where it stops) until the ball is in the cup; the
// scorecard; the next tee; the new-game button; the speakers; a clean
// console. On the desktop: the tee, a held pull and the same quarter pull.
// The wind is drawn from a random seed, so distances are bounds, not pins.
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

// Every data-* mark on <html>, by its name without the prefix, and the
// commands the synth was sent.
const marks = (page) => page.evaluate(() => {
  const o = {};
  for (const a of document.documentElement.attributes) if (a.name.startsWith("data-")) o[a.name.slice(5)] = a.value;
  const a = globalThis.__puttAudio;
  o.sent = a ? a.log.flatMap((e) => e.cmds) : null;
  return o;
});
const brief = (m) => JSON.stringify({ phase: m.phase, hole: m.hole, strokes: m.strokes, rolling: m.rolling, putts: m.putts, ball: m.ball, result: m.result });
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

// One pointer, a finger (CDP touch events) or the mouse.
function pointer(page, touch) {
  if (!touch) {
    return {
      down: async (x, y) => { await page.mouse.move(x, y); await page.mouse.down(); },
      move: (x, y) => page.mouse.move(x, y),
      up: () => page.mouse.up(),
    };
  }
  let cdp = null;
  const at = (x, y) => [{ x, y, id: 1 }];
  return {
    down: async (x, y) => { cdp = await page.createCDPSession(); await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: at(x, y) }); },
    move: (x, y) => cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: at(x, y) }),
    up: async () => { await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] }); await cdp.detach(); },
  };
}

// Press at (x, y), drag by (dx, dy) over about ms, and hold. Returns the
// marks while held and the pointer, still down.
async function hold(page, touch, x, y, dx, dy, ms) {
  const p = pointer(page, touch);
  await p.down(x, y);
  const n = Math.max(2, Math.round(ms / 16));
  for (let i = 1; i <= n; i++) { await sleep(ms / n); await p.move(x + dx * i / n, y + dy * i / n); }
  await sleep(60);
  return { held: await marks(page), p };
}

const tap = async (page, touch, x, y) => { const p = pointer(page, touch); await p.down(x, y); await sleep(40); await p.up(); };

// The unit vector on screen that pulls away from the cup (course y is up,
// screen y down), and the metres between ball and cup.
function away(m) {
  const [bx, by] = xy(m.ball), [cx, cy] = xy(m.cup);
  const d = Math.hypot(cx - bx, cy - by);
  return { d, sx: -(cx - bx) / d, sy: (cy - by) / d, ux: (cx - bx) / d, uy: (cy - by) / d };
}

async function open(browser, width, height, touch, errors) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, hasTouch: touch, isMobile: touch, deviceScaleFactor: touch ? 2 : 1 });
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(`http://127.0.0.1:${port}/`);
  return page;
}

// A quarter pull toward the cup from a resting ball: 49 px is 1.075 m/s,
// which still air rolls 0.96 m (v^2 / 2 drag). The wind moves that a few
// centimetres; a putt half as long or half again as long is a regression.
async function quarterPull(page, touch, cx, cy, tag) {
  const m0 = await marks(page);
  const a = away(m0);
  const { held, p } = await hold(page, touch, cx, cy, a.sx * 49, a.sy * 49, 250);
  check(Math.abs(Number(held["aim-power"]) - 1.075) <= 0.02, `${tag}: a 49 px pull is 1.075 m/s (data-aim-power=${held["aim-power"]})`);
  check(Math.abs(Number(held["aim-reach"]) - 0.96) <= 0.02, `${tag}: its preview reaches 0.96 m (data-aim-reach=${held["aim-reach"]})`);
  await p.up();
  await waitFor(page, (m) => m.putts !== m0.putts, "the putt to start", 3000);
  const m1 = await waitFor(page, (m) => m.rolling === "0", "the ball to rest", 25000);
  const [bx, by] = xy(m0.ball), [ex, ey] = xy(m1.ball);
  const rolled = Math.hypot(ex - bx, ey - by);
  const along = ((ex - bx) * a.ux + (ey - by) * a.uy) / (rolled || 1);
  check(rolled >= 0.75 && rolled <= 1.2, `${tag}: the ball rolled ${rolled.toFixed(2)} m (want 0.75 to 1.20)`);
  check(along >= 0.97, `${tag}: toward the cup (cosine ${along.toFixed(3)}, want 0.97 or more)`);
  check(m1.strokes === String(Number(m0.strokes) + 1), `${tag}: one more stroke (${m0.strokes} to ${m1.strokes})`);
  return m1;
}

const server = await serve(dist, port);
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ["--autoplay-policy=no-user-gesture-required"] });
try {
  // ---- The phone, by touch ----
  const errors = [];
  const [W, H] = [390, 844];
  const page = await open(browser, W, H, true, errors);
  const start = await waitFor(page, (m) => m.phase === "aiming", "the first tee");
  check(start.hole === "1" && start.strokes === "0" && start.rolling === "0", `first tee: hole 1, no strokes (${brief(start)})`);
  check(Number(start.holes) >= 1, `the course has holes (data-holes=${start.holes})`);
  const hudWant = new RegExp(`^HOLE 1/${start.holes} \\| .+ - par \\d+ \\| STROKE 1 \\| Score E \\| (Wind \\d+|Calm)$`);
  check(hudWant.test(start.hud), `the bands say hole, par, stroke, score and wind (${start.hud})`);
  // Beside the ball is the green's colour, not the ground's.
  const [ballX, ballY] = xy(start["ball-px"]);
  const painted = await page.evaluate((x, y) => {
    const c = document.getElementById("green");
    const k = c.width / c.clientWidth;
    const px = c.getContext("2d").getImageData(Math.round((x + 6) * k), Math.round(y * k), 1, 1).data;
    return [px[0], px[1], px[2]];
  }, ballX, ballY);
  check(painted.join() === "63,155,74", `the green is painted beside the ball (rgb ${painted.join()}, want 63,155,74)`);
  check(ballY > 104 && ballY < H - 44, `the ball is between the top band and the page's strip (y ${ballY} on ${H})`);
  await page.screenshot({ path: join(shots, "putt-1-tee.png") });

  // No putt: a tap, and a pull that stays inside the dead zone.
  await tap(page, true, W / 2, H / 2);
  const short = await hold(page, true, W / 2, H / 2, 0, 10, 100);
  check(short.held["aim-power"] === "", `a 10 px pull shows no putt (data-aim-power="${short.held["aim-power"]}")`);
  await short.p.up();
  await sleep(120);
  const idle = await marks(page);
  check(idle.putts === "0" && idle.strokes === "0", `a tap and a 10 px pull are no putt (${brief(idle)})`);

  // The power is the pull's length, not its speed. Dragged back to the
  // press, the pull is cancelled.
  const fast = await hold(page, true, W / 2, H / 2, 0, 86, 40);
  await fast.p.move(W / 2, H / 2);
  await fast.p.up();
  const slow = await hold(page, true, W / 2, H / 2, 0, 86, 700);
  await page.screenshot({ path: join(shots, "putt-2-pull.png") });
  await slow.p.move(W / 2, H / 2);
  await slow.p.up();
  check(fast.held["aim-power"] === "2.05" && slow.held["aim-power"] === "2.05", `an 86 px pull is 2.05 m/s in 40 ms or in 700 ms (${fast.held["aim-power"]}, ${slow.held["aim-power"]})`);
  const full = await hold(page, true, W / 2, H / 2 - 100, 0, 240, 200);
  await full.p.move(W / 2, H / 2 - 100);
  await full.p.up();
  check(full.held["aim-power"] === "4", `a pull past ${start["pull-full"]} px is the strongest putt (data-aim-power=${full.held["aim-power"]})`);
  await sleep(120);
  const cancelled = await marks(page);
  check(cancelled.putts === "0", `pulls dragged back to the press are cancelled (${brief(cancelled)})`);

  // A reasonable pull, a reasonable distance.
  let m = await quarterPull(page, true, W / 2, H / 2, "phone");
  await page.screenshot({ path: join(shots, "putt-3-rest.png") });

  // The rest of the hole, as a player: lengthen the pull until the preview
  // ends in the cup or runs a quarter metre past it.
  for (let stroke = 0; stroke < 8 && m.phase === "aiming"; stroke++) {
    const a = away(m);
    const p = pointer(page, true);
    await p.down(W / 2, H / 2);
    let held = m;
    for (let len = 14; len <= 164; len += 3) {
      await p.move(W / 2 + a.sx * len, H / 2 + a.sy * len);
      await sleep(34);
      held = await marks(page);
      if (held["aim-holes"] === "1" || Number(held["aim-reach"]) >= a.d + 0.25) break;
    }
    await p.up();
    const before = m.putts;
    await waitFor(page, (k) => k.putts !== before, "the putt to start", 3000);
    m = await waitFor(page, (k) => k.rolling === "0", "the ball to rest", 25000);
    console.log(`     stroke ${m.strokes}: ${a.d.toFixed(2)} m out, pulled to ${held["aim-power"]} m/s (preview ${held["aim-reach"]} m, holes=${held["aim-holes"]}) -> ${m.phase} ${m.result}`);
  }
  check(m.phase === "hole-done" && m.result === "holed", `hole 1 played to the cup (${brief(m)})`);
  check(m.ball === m.cup, `the ball is in the cup (ball ${m.ball}, cup ${m.cup})`);
  check(m.card === m.strokes && m.total === m.strokes, `the card has the hole's strokes (card "${m.card}", total ${m.total}, strokes ${m.strokes})`);
  check(m["card-title"] !== "" && m.hud.includes(`| IN ${m.strokes} |`) && m.hud.includes(" thru 1 |"), `the scorecard is up: "${m["card-title"]}" (${m.hud})`);
  await sleep(100);
  await page.screenshot({ path: join(shots, "putt-4-card.png") });

  // On: the next tee, or the final card on a one-hole course.
  await tap(page, true, W / 2, H / 2);
  if (Number(m.holes) > 1) {
    const next = await waitFor(page, (k) => k.hole === "2" && k.phase === "aiming", "the second tee");
    check(next.strokes === "0" && next.hud.startsWith(`HOLE 2/${next.holes} |`), `a tap tees up hole 2 (${next.hud})`);
    check(next.card === m.card, `the card keeps hole 1 (card "${next.card}")`);
    await page.screenshot({ path: join(shots, "putt-5-hole-2.png") });
  } else {
    await waitFor(page, (k) => k.phase === "course-done", "the final card");
  }

  // The new-game button, wherever the game is.
  const [nx, ny] = xy(m["new-game"]);
  await tap(page, true, nx, ny);
  const again = await waitFor(page, (k) => k.hole === "1" && k.phase === "aiming" && k.card === "", "a new game");
  check(again.strokes === "0" && again.total === "0" && again.hud.includes("| STROKE 1 | Score E |"), `the new-game button starts again (${again.hud})`);

  check(again["audio-path"] === "worklet", `the speakers came up in the worklet on the gesture (data-audio-path=${again["audio-path"]})`);
  const sent = again.sent || [];
  check(sent.some((c) => c === "CmdRumble(0)"), `the synth was sent a ball coming to rest (${sent.length} commands)`);
  check(sent.some((c) => c.startsWith("PcTap(")), "and the putter's tap");
  check(errors.length === 0, "phone: a clean console" + (errors.length ? ": " + JSON.stringify(errors) : ""));
  await page.close();

  // ---- The desktop, by mouse ----
  const deskErrors = [];
  const [DW, DH] = [1280, 800];
  const desk = await open(browser, DW, DH, false, deskErrors);
  const tee = await waitFor(desk, (k) => k.phase === "aiming", "the desktop's first tee");
  const [dx, dy] = xy(tee["ball-px"]);
  check(Math.abs(dx - DW / 2) < DW / 4 && dy > 104 && dy < DH - 44, `desktop: the ball is on screen between the top band and the page's strip (${tee["ball-px"]})`);
  const [bx, by] = xy(tee["new-game"]);
  check(bx > 0 && bx < DW && by > 62 && by < 104, `desktop: the new-game button is in the top band (${tee["new-game"]})`);
  await desk.screenshot({ path: join(shots, "putt-6-desktop-tee.png") });
  const a = away(tee);
  const aimed = await hold(desk, false, DW / 2, DH / 2, a.sx * 110, a.sy * 110, 300);
  await desk.screenshot({ path: join(shots, "putt-7-desktop-pull.png") });
  check(Math.abs(Number(aimed.held["aim-power"]) - 2.68) <= 0.03, `desktop: a 110 px mouse pull is 2.68 m/s (data-aim-power=${aimed.held["aim-power"]})`);
  await aimed.p.move(DW / 2, DH / 2);
  await aimed.p.up();
  await quarterPull(desk, false, DW / 2, DH / 2, "desktop");
  check(deskErrors.length === 0, "desktop: a clean console" + (deskErrors.length ? ": " + JSON.stringify(deskErrors) : ""));
  await desk.close();
} finally {
  await browser.close();
  server.close();
}
console.log(failures === 0 ? "PLAYTEST PASS putt" : `PLAYTEST FAIL putt (${failures})`);
process.exit(failures === 0 ? 0 : 1);
