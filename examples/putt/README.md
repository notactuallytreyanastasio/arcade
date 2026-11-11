# Putt

Top-down mini-golf on the arcade engine, and the engine's second game: nine
one-screen holes, a pull back and a release to putt, walls and blocks the ball
bounces off, sand that slows it, water that sends it back, slopes that turn
it, and a wind on every hole drawn from the game's seed. It uses only
`Arcade.*` modules; nothing in it knows about any other game.

```
forge.toml              app; [deps] arcade, arcade-physics by path; [dev-deps] arcade-testkit
lib/putt/course.march   Putt.Course: the nine holes (walls, blocks, sand, water, slopes, gust, tee, cup, par)
lib/putt/roll.march     Putt.Roll: one putt rolled out (Arcade.Physics.Sim + Kinematics)
lib/putt/rules.march    Putt.Rules: state, actions, play/apply, resume (Arcade.Replay)
lib/putt/aim.march      Putt.Aim: a pull on screen as a putt, and the preview of that putt before it is struck
lib/putt/view.march     Putt.View: the hole and the ball as Arcade.Draw ops through an orthographic Arcade.Camera
lib/putt/hud.march      Putt.Hud: the frame the shell paints: its camera, the top band's words, the wind, the aim, the scorecard
lib/putt/cues.march     Putt.Cues: PuttCue, its Arcade.Synth voices, the AudioCmd(PuttCue) feed
shell/putt_shell.march  PuttShell: the browser build's entry, Arcade.Web.Runtime hooks
shell/putt_audio.march  PuttAudio: Arcade.Web.Audio setup and routing
shell/putt_worklet.march, shell/putt_names.march   the audio worklet build's entry; the names both builds share
web/index.html, web/style.css
test/suites/putt_suite.march, test/mains/putt_main.march             the rules, the roll, the sound
test/suites/putt_feel_suite.march, test/mains/putt_feel_main.march   the pull, the preview, the HUD's words and layout
test/web/playtest.mjs                                                the game played in headless Chrome
scripts/check.sh, scripts/run-suite.sh, scripts/serve.mjs
```

```
make check     # forge check + lint of lib/, march --check of the suites and shell/; fails on any warning
make test      # both suites on native and on JS; each must print HARNESS PASS
make web       # the browser build in dist/
make serve     # dist/ at http://127.0.0.1:8237/
make playtest  # a hole played in headless Chrome, by touch and by mouse
```

From the repository root, `make test-examples` runs `make test` here and
`make check-examples` runs `make check`; `make test` and `make check` include
them.

## How it plays

`Putt.Rules.play(rules(), action, state)` is the whole game. A state is on a
tee (`PuttAiming`), done with a hole (`PuttHoleDone`) or done with the course
(`PuttCourseDone`); the actions are `PuttStrike(shot)` and `PuttNext`. A shot
is a direction and a speed in m/s. A hole ends when the ball drops or after
six strokes (picked up).

The player makes a shot by pulling: press anywhere, drag away from where the
ball should go, let go. `Putt.Aim.shot_of_pull` aims the putt opposite the
pull (the camera keeps screen up as course +y, so only y flips) with a power
linear in the pull's length: nothing under 12 CSS px (the dead zone, which
is also how a pull is cancelled), `min_power` just past it, `max_power` at
160 px and beyond. An 86 px pull is 2.05 m/s and rolls 3.5 m on open green;
49 px is 1.075 m/s and 0.96 m. While the pull is held, `Putt.Aim.preview`
rolls that putt with the rules' own `Putt.Roll.roll` in still air and keeps
the path up to its first bounce off a wall or block: the dots on the green
are that path, one every 3/32 s of roll, so they close up as the ball
slows, and the ring is where the leg ends (gold when it ends in the cup).
The wind is left out of the preview on purpose; the compass in the top band
says which way it pulls and how hard (10 is `wind_max` on both axes).

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

The ball is 0.045 m in radius and the cup 0.1 m, about twice a real one's.
The first hole is drawn at 640 / 7 pixels a metre on a 360 x 640 screen, so
a real ball's 0.021 m was a disc of radius 1.9 pixels; it is now 4.1, and
the cup 9.1.

Every hole can be holed: the suite's bot rolls a ring of 48 directions at 8
powers with `Putt.Roll.roll` before each stroke, refines round the best, and
holes all nine at par or better under two seeds' winds (13 strokes for
seed 2026, 14 for seed 7), the same game on native and JS. The suite also checks each hole is
sound (tee and cup on open green, boxes inside the hole, slopes and gusted
wind together under the green's drag so a ball always rests, a way round to
the cup) and pins the card of a plain player who putts at the next corner
with flat-green pace and reads nothing: 2 3 3 2, picked up on Pond and Chicane, 2 on Sidehill, 1 on
Causeway, picked up on Home, 31 strokes for seed 2026.

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

The shell is the hooks `Arcade.Web.Runtime.launch` runs one model with;
the runtime owns the canvas, the frame loop and the pointer. A press made
while no putt is rolling starts a drag (where it pressed, where it is now);
on release `Putt.Aim.shot_of_pull` makes it a putt or, inside the dead zone,
nothing. The rules roll the whole putt at once; the shell then plays its
sampled path back at real time (straight lines between samples) and sends
`Putt.Cues.audio_between` for each frame's slice of time to
`Arcade.Web.Audio`. When the path ends the state moves on to the turn's
`after`. A press made while a putt is shown is dropped whole, so a finger
already down when the ball drops cannot tap the scorecard away; on a
finished hole a tap tees up the next, and on a finished course a tap starts
a new game seeded from the last one's generator. A press and release on the
new-game button does that at any time. The synth runs `Putt.Cues.voices` in
the worklet (processor `putt-synth`), or on the main thread where worklets
are missing.

Every frame is `Putt.Hud.frame`: the hole (`Putt.View.field_ops`) through
the HUD's own camera, which fits it between a 104 px band along the top and
44 px along the bottom left to the page's own strip of links; a ring round
the resting ball or the held pull's preview; the ball; the top band (hole of
how many, name and par, the wind's compass and force, the stroke, the score
against par through the holes finished; under them the hint or the pull's
power, and the new-game button); and, once a hole or the course is done, the
scorecard (verdict, every hole's par and strokes, the total against par,
what a tap does). Text is only ever centred on a point: `Arcade.Draw` has no
other alignment and nothing measures a string, so every line is kept short.

`make playtest` builds `dist/`, serves it on `PORT` and plays it in headless
Chrome: a 390 x 844 page by touch, then a 1280 x 800 page by mouse.
`PLAYTEST_MODULES` must name a directory whose `node_modules` holds
puppeteer-core; there is no default. It reads the marks the shell sets on
`<html>` (`data-phase`, `data-hole`, `data-holes`, `data-strokes`,
`data-rolling`, `data-putts`, `data-ball`, `data-cup`, `data-ball-px`,
`data-card`, `data-total`, `data-result`, `data-hud`, `data-card-title`,
`data-new-game`, and for a held pull `data-aim-power`, `data-aim-reach`,
`data-aim-holes`) and fails unless: a tap and a 10 px pull are no putt; an
86 px pull reads 2.05 m/s whether it took 40 ms or 700 ms; a 49 px pull
toward the cup rolls 0.75 to 1.20 m that way (0.96 m in still air; the wind
comes from a random seed, so distances are bounds); hole 1 is played into
the cup the way a player would (aim at the cup, lengthen the pull until the
preview reaches it, let go, again from where it stops); the scorecard comes
up with the hole's strokes; a tap tees up hole 2; the new-game button starts
again; the speakers come up in the worklet; the console is clean.
Screenshots go to `test/web/shots/`.

## What was measured, and what is not checked

The game first shipped with a flick. In headless Chrome on hole 1 (cup 4.6 m
from the tee): a 543 px/s touch flick was a 0.73 m/s putt that rolled
0.43 m; 1415 px/s rolled 2.87 m; a flick down the screen (966 px/s) or
across it (670 px/s) was no putt at all, because
`Arcade.Physics.Gesture.measure` reads upward speed only; and the same
150 px mouse flick was a 0.72 m/s putt in one run and nothing in the next,
depending on how long after the last move the button came up. Nothing could
be shown before release, because a flick's power does not exist until the
finger lifts. The pull replaced it: the same 100 px pull is 2.42 m/s in
60 ms or 900 ms, by touch or mouse. Dragging toward the target instead of
away from it was the other candidate; it puts the hand over the line and
the cup.

Not checked by anything, or not right:

- A real phone. Every number here is from headless Chrome with CDP touch
  events. Safe-area insets are not read: as a home-screen app the top band
  would sit under the status bar.
- The ball is drawn at its true size, a 2.3 CSS px radius on a 390 x 844
  phone. The ring round it at rest is how it is found.
- The preview ignores the wind, so a putt it shows dropping can miss: in
  one playtest run a 3.59 m putt previewed into the cup stopped 0.40 m out
  under a force 7 wind.
- On a phone on its side (844 x 390) the scorecard overlaps the top band.
- `Putt.Rules.shot_of_flick` and `tune.power_per_speed` are no longer used
  by the game; the suite still pins them.
- The held pull's band is drawn from the ball back along the pull and can
  run into the bottom 44 px the page's strip covers.
