# Putt

Top-down mini-golf on the arcade engine, and the engine's second game: nine
one-screen holes, a flick to putt, walls and blocks the ball bounces off, sand
that slows it, water that sends it back, slopes that turn it, and a wind on
every hole drawn from the game's seed. It uses only `Arcade.*` modules;
nothing in it knows about any other game.

```
forge.toml              app; [deps] arcade, arcade_physics by path; [dev-deps] arcade_testkit
lib/putt/course.march   Putt.Course: the nine holes (walls, blocks, sand, water, slopes, gust, tee, cup, par)
lib/putt/roll.march     Putt.Roll: one putt rolled out (Arcade.Physics.Sim + Kinematics)
lib/putt/rules.march    Putt.Rules: state, actions, play/apply, resume (Arcade.Replay), shot_of_flick (Arcade.Physics.Gesture)
lib/putt/view.march     Putt.View: orthographic Arcade.Camera and a frame's Arcade.Draw ops
lib/putt/cues.march     Putt.Cues: PuttCue, its Arcade.Synth voices, the AudioCmd(PuttCue) feed
shell/putt_shell.march  PuttShell: the browser build's entry, Arcade.Web.Runtime hooks
shell/putt_audio.march  PuttAudio: Arcade.Web.Audio setup and routing
shell/putt_worklet.march, shell/putt_names.march   the audio worklet build's entry; the names both builds share
web/index.html, web/style.css
test/suites/putt_suite.march, test/mains/putt_main.march, test/web/playtest.mjs
scripts/check.sh, scripts/run-suite.sh, scripts/serve.mjs
```

```
make check     # forge check + lint of lib/, march --check of the suites and shell/; fails on any warning
make test      # the suite on native and on JS; both must print HARNESS PASS
make web       # the browser build in dist/
make serve     # dist/ at http://127.0.0.1:8237/
make playtest  # one flick in headless Chrome
```

From the repository root, `make test-examples` runs `make test` here and
`make check-examples` runs `make check`; `make test` and `make check` include
them.

## How it plays

`Putt.Rules.play(rules(), action, state)` is the whole game. A state is on a
tee (`PuttAiming`), done with a hole (`PuttHoleDone`) or done with the course
(`PuttCourseDone`); the actions are `PuttStrike(shot)` and `PuttNext`. A shot
is a direction and a speed in m/s; `shot_of_flick` reads one from a flick's
`GestureMetrics`, aiming from where the flick began to where it was fastest.
The orthographic camera keeps screen up as course +y, so that direction on
screen is the putt's on the course. A hole ends when the ball drops or after
six strokes (picked up).

The wind is the only random thing. `new_game` seeds an `Arcade.Rng`, and each
tee draws two units from it, so a game is its seed plus the actions it
accepted: `resume(rules(), seed, actions)` replays them with
`Arcade.Replay.replay`. Each draw is a pull of up to 0.04 m/s^2 along an
axis, times the hole's `gust`: 1 everywhere but the eighth hole, where it is
3.

The roll is a fixed 1/256 s step: friction against the direction of travel
(five times as much in sand) plus, as a steady pull, the wind and the slope
the ball is on; then the rails, then the blocks, then water, then the cup,
which takes a ball over it at 1.25 m/s or less and lets a faster one lip out.
A ball whose centre enters water ends the roll there and is played again from
where it was struck, the stroke counted. A slope is a box with a pull in
m/s^2; a ball at rest on one stays put. It all uses only `+ - * /` and
`sqrt`, which every target rounds alike, so a game is bit-identical natively
and on JS. The suite pins that: the final-state and turn-by-turn digests of
seeded bot games, and three tees' canvas calls (82 on the first, which has
neither water nor slope), are one constant for both targets.

## The course

Par 27. Every hole is a walled rectangle; `Putt.Course.holes()` is the list.

| # | Hole | Par | Size (m) | What it asks |
|---|------|-----|----------|--------------|
| 1 | Straight | 2 | 1.6 x 6.0 | Pace: 4.6 m, nothing in the way. |
| 2 | Bunker | 3 | 2.4 x 6.5 | Sand from the right wall across the line, a 0.6 m lane of green on the left: through it hard, round it in two, or off the left wall. |
| 3 | Bank | 3 | 3.0 x 6.0 | A block across the middle with 0.5 m either side: the line off a side wall passes the gap as it bounces. |
| 4 | Dogleg | 3 | 4.0 x 5.0 | The cup is out of sight round a corner; sand in the outside corner takes a lay-up hit too hard. |
| 5 | Pond | 3 | 3.2 x 6.5 | Water on the line. The wide way round (0.9 m) is sand, the narrow way (0.6 m) is clean. |
| 6 | Chicane | 3 | 3.0 x 6.5 | Two walls, the first open 0.6 m on the left, the second 0.6 m on the right, sand on the diagonal between. |
| 7 | Sidehill | 3 | 3.2 x 6.5 | The top half slopes right at 0.3 m/s^2 toward water, the cup on the slope: aim above it. |
| 8 | Causeway | 3 | 3.6 x 7.2 | A 0.6 m causeway between two ponds, a third pond 0.6 m behind the cup, and three times the wind. |
| 9 | Home | 4 | 4.2 x 7.2 | Three legs round two walls: water past the first gap, sand on the line to the second, then along a slope that runs up to water, the cup on it. |

Every hole can be holed: the suite's bot rolls a ring of 48 directions at 8
powers with `Putt.Roll.roll` before each stroke, refines round the best, and
holes all nine at par or better under two seeds' winds (14 strokes for
seed 2026, 13 for seed 7), the same game on native and JS. The suite also checks each hole is
sound (tee and cup on open green, boxes inside the hole, slopes and gusted
wind together under the green's drag so a ball always rests, a way round to
the cup) and pins the card of a plain player who putts at the next corner
with flat-green pace and reads nothing: 2 3 3 2, picked up on Pond and Chicane, 3 on Sidehill, picked
up on Causeway and Home, 37 strokes for seed 2026.

Not checked by anything: the pars, and how the holes play by hand. The pars
were set from the layouts and from simulated players (in the commit that
added the course), not from people playing.

## In the browser

`make web` builds `dist/`, a static site: `putt.mjs` from
`shell/putt_shell.march`, the audio worklet's own build
`putt_synth_worklet.mjs` from `shell/putt_worklet.march`, March's runtime
modules, the engine's glue (`arcade_*.mjs`, copied by march), and
`web/index.html` and `web/style.css`. `make serve` serves it at
`http://127.0.0.1:8237/` (`PORT=...` to change).

The shell is the hooks `Arcade.Web.Runtime.launch` runs one model with; the
runtime owns the canvas, the frame loop and the pointer. A drag's samples
are kept until the pointer lifts, then measured as a flick
(`Arcade.Physics.Gesture.measure` with `flick_limits`) and turned into a putt
by `shot_of_flick`. The rules roll the whole putt at once; the shell then
plays its sampled path back at real time (straight lines between samples),
drawing `Putt.View.scene_with_ball` from the state it was struck from, and
sends `Putt.Cues.audio_between` for each frame's slice of time to
`Arcade.Web.Audio`. When the path ends the state moves on to the turn's
`after`. Touches are ignored while a putt is shown; on a finished hole a tap
tees up the next, and on a finished course a tap starts a new game seeded
from the last one's generator. The synth runs `Putt.Cues.voices` in the
worklet (processor `putt-synth`), or on the main thread where worklets are
missing.

`make playtest` builds `dist/`, serves it on `PORT` and flicks once in
headless Chrome. `PLAYTEST_MODULES` must name a directory whose
`node_modules` holds puppeteer-core; there is no default. It reads the marks the shell sets on
`<html>` (`data-phase`, `data-hole`, `data-strokes`, `data-rolling`,
`data-putts`) and checks the first tee, the green's colour at the canvas's
centre, the flick becoming a putt that rolls and rests with one stroke on
the card, the speakers coming up in the worklet and being sent the putt's
commands, and a clean console. Screenshots go to `test/web/shots/`.

Not checked by anything: how far a flick sends the ball. The playtest's
flick (8 px every 10 ms by its own clock, about 800 px/s) is measured as a
lift speed near 267 px/s, a 0.67 m/s putt that stops about a third of a
metre up the 6 m first hole (from the screenshots). `power_per_speed` was
tuned without a browser.
