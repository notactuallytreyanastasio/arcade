# Tumble

Tilt the floor, roll the ball to the gate. A slot machine deals three powers
at the start of every round, the board is generated after the reels stop, and
no board reaches the player until a bot has cleared it under those same
powers. It is drawn in cel-shaded 3D with WebGL. It is the arcade engine's
third game and the one `Arcade.Mat4`, `Arcade.Cel`, `Arcade.Mesh`,
`Arcade.Web.Gl`, `Arcade.Physics.Collide`, the keyboard in `Arcade.Web.Input`
and `Arcade.Draw.Wipe` were extracted from.

```
forge.toml               app; [deps] arcade, arcade-physics by path; [dev-deps] arcade-testkit
lib/tumble/board.march   Tumble.Board: tiles, cells, posts, gems, the spine
lib/tumble/power.march   Tumble.Power: the twelve powers, what they add up to, the reels
lib/tumble/roll.march    Tumble.Roll: the ball, one fixed step at a time
lib/tumble/bot.march     Tumble.Bot: a player that follows the spine
lib/tumble/course.march  Tumble.Course: TumbleCourse, an opaque board that a bot has cleared
lib/tumble/gen.march     Tumble.Gen: boards from a generator and an ease; the runway
lib/tumble/rules.march   Tumble.Rules: state, actions, play/apply, resume (Arcade.Replay)
lib/tumble/scene.march   Tumble.Scene: the board's mesh, the camera, a frame's Arcade.Cel items
lib/tumble/hud.march     Tumble.Hud: the overlay's Arcade.Draw ops: clock, powers, slot machine, cards
lib/tumble/cues.march    Tumble.Cues: TumbleCue, its Arcade.Synth voices
lib/tumble/app.march     Tumble.App: model, messages, update, effects as data, marks
shell/tumble_shell.march TumbleShell: the browser build's entry; the only module with a capability
shell/tumble_audio.march, tumble_worklet.march, tumble_names.march   the speakers
web/index.html, web/style.css
test/suites/tumble_suite.march      the rules, the roll, the generator, the bot
test/suites/tumble_app_suite.march  the app driven by messages, the picture
test/web/playtest.mjs               rounds played in headless Chrome
```

```
make check     # forge check + lint of lib/, march --check of the suites and shell/; fails on any warning
make test      # both suites on native and on JS; each must print HARNESS PASS
make web       # the browser build in dist/
make serve     # dist/ at http://127.0.0.1:8238/
make playtest  # PLAYTEST_MODULES=<dir whose node_modules has puppeteer-core>
```

## How it plays

Arrow keys or WASD tilt the floor; on a touch screen, press anywhere and drag,
70 px for a full tilt. Space, Enter or a tap spins. The ball rolls downhill,
the gate at the far end wins the round, the next board is harder. Falling off
or running out of time costs one of three lives. Gems are worth two seconds
and fifty points each.

A spin stops three reels, each on one of twelve powers, and the round is
played under all three:

| Power | What it does |
|---|---|
| Turbo | the tilt pulls 1.4 times as hard |
| Syrup | 0.8 of the pull, 2.5 times the drag |
| Ice | every floor tile plays, and is drawn, as ice |
| Bumper | posts kick back twice as hard |
| Magnet | within 2.5 m the gate pulls at 3 m/s^2 |
| Rails | the floor's edges are walls |
| Mirror | left and right are swapped |
| Quake | a random jolt of up to 1.2 m/s^2 an axis, redrawn every 0.375 s |
| Gust | a steady 0.9 m/s^2 wind, its direction drawn at the spin |
| Clock | ten more seconds |
| Tiny | a ball of 0.6 the radius |
| Giant | a ball of 1.35 the radius |

Powers stack: two Turbos are 1.96, two Mirrors cancel. A second Magnet reaches
further and pulls no harder, because a pull stronger than a full tilt drags
the ball over gaps nobody can fight (measured: three stacked 5 m/s^2 Magnets
lost 11 of 40 of the easiest boards). Three alike is a jackpot and triples
the round's score. Rails and Magnet have two stops of a reel's forty; most
others have four.

## Generated, and playable

`Tumble.Gen.board(num, ease, rng)` carves a board along a spine: up two or
three rows, sideways at least two columns, up again, to the top row, where the
gate goes. Then it widens the spine, ices it, and puts posts and gems on the
widening, by chance, with odds set by `ease` (0 to 8: nine rows to
twenty-five, wide and dry to narrow, icy and crowded).

A connected path with nothing on it is not the same as playable, because the
powers change the physics after the path exists. So the rules never hold a
board. They hold a `TumbleCourse`:

```march
opaque type TumbleCourse = Proven(TumbleBoard, TumbleProof)

fn prove(c : TumbleCourt, noise : Rng) : Option(TumbleCourse) needs () do
  let r = trial(c, noise)
  match r.fate do
  FateCleared -> Some(Proven(c.board, { took: r.clock.t, bot_gems: r.got }))
  ...
```

`trial` has `Tumble.Bot` play the board under the round's own mods, wind and
quake generator, for up to sixty simulated seconds. The type is opaque, so
`prove` is the only way one comes to exist. A spin shows the bot up to five
generated boards, each two eases under the last, then a fixed five-by-nine
runway; reels under which even that fails are spun again, and after three
such jams the spin is refused as `TumbleNoPlayableBoard`. The round's limit is
twice the bot's time plus eight seconds, between 20 and 90, plus the Clock's.

The bot heads for the middle of the next spine cell, slows to 1.4 m/s onto
ice and 1.8 m/s into a turn, and leans against the wind, the jolt and the
magnet. With one power on, it clears 40 of 40 boards at every ease. With
three Quakes it clears 22 of 40 at ease 7; that is what the easier retries
are for. In the browser a spin, proofs included, holds the main thread about
60 ms.

## Pure core, imperative shell

Every module in `lib/` is `cap pure` and every fn `needs ()`, and the
compiler checks it. `Tumble.Rules.play(rules, action, state)` is the game:
the actions are `TumbleSpinReels`, `TumbleSteer(tilt)` and `TumbleStep(n)`,
and every random draw comes from the state's `Arcade.Rng`, so a game is its
seed plus its actions (`resume`). A phase holds only what exists in it:

```march
type TumblePhase =
  TumbleIdle
  | TumbleLive(TumbleRound)
  | TumbleWon(TumbleRound, Int)
  | TumbleLost(TumbleRound, TumbleLoss)
  | TumbleOver(TumbleRound, TumbleLoss)
```

`Tumble.App` is the program around it, also pure: `update(model, msg)`
returns the next model and a list of effects, and effects are data
(`FxAudio`, `FxMeshes`, `FxBuzz`). `shell/tumble_shell.march` is the only
module that `needs IO.Foreign`. It turns the frame clock, the pointer and the
keys into messages, performs the effects, paints `Tumble.App.overlay` and
draws `Tumble.App.picture`. It contains no rule, number or word of the game.

The roll is a fixed 1/128 s step using only `+ - * /` and `sqrt`, and the
picture's matrices are built without sin or cos, so a game is the same bits
natively and on JS: both suites pin one digest for both targets.

## The picture

`Tumble.Scene` builds the board as one mesh a round (slabs with the sides a
neighbour hides left out, posts, the gate's arch) and each frame an
`Arcade.Cel.CelFrame`: the board, the gems, the ball and its shadow, each
with a model matrix. The floor really tilts: the board is turned about the
point under the ball by the tilt the roll holds. `Arcade.Web.Gl` draws it in
two passes an item, four tones of light and an inked hull. `Tumble.Hud` is
drawn on a second canvas over it.

Measured by the playtest in headless Chrome at 1280 x 800: about 97% of the
drawn pixels are exactly the ink or a mesh colour times one of the four
tones `Arcade.Cel.tone` gives (the rest are antialiased edges, the highlight
and the shadow); a frame is 9 to 11 draw calls and about 1500 triangles, and
its script (update, overlay, GL calls) takes about 0.3 ms on average and
0.5 ms at the 95th percentile.

## What is checked, and what is not

`make test`: 12 cases and 592 values for the rules (the bot wins through the
rules on 13 seeds without losing a life, the game replays from its actions,
the runway is cleared under all 364 multisets of three powers, generated
boards keep the generator's promises) and 9 cases and 61 values for the app
(a round won through the app's own messages with the bot's tilt on a dragged
pointer; frame pacing; the overlay; the board's mesh).

`make playtest`: a round won with the arrow keys held all-or-nothing on a
desktop page and with a dragged finger on a phone page, the pixel census
above, the frame cost, the speakers, a clean console.

Not checked by anything, or not right:

- A real phone or a real GPU. Every number is from headless Chrome.
- Whether a board the bot clears is one a person enjoys. The bot is a better
  driver than a person; the time limit is the only allowance made for that.
- Scores, the reel's odds and the twelve powers' strengths were set by
  reasoning and by the bot's clear rates, not by people playing.
- A lost WebGL context is not restored: the page must be reloaded.
- On a very short window the cards' text overlaps the powers' chips.
- Safe-area insets are not read; under a notch the top band is covered.
- There is no pause, and no sound setting.
