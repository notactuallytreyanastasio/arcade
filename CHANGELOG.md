# Changelog

All notable changes to `arcade` are recorded here. Versions follow semver;
`forge publish --old-source` checks the bump against the public API surface.

## Unreleased

Extracted from `examples/tumble` once it worked there. Nothing that existed
changes what it computes.

- `Arcade.Mat4`: column-major 4x4 matrices built without sin or cos.
- `Arcade.Cel`: a cel-shaded frame as data, and `tone`, the banding function.
- `Arcade.Mesh`: box, post, disc, sphere and gem builders for `Arcade.Cel`.
- `Arcade.Web.Gl` and `arcade_gl.mjs`: a WebGL renderer for `Arcade.Cel`.
- `Arcade.Web.Input.on_keys`: the keyboard.
- `Arcade.Draw.Wipe` and `Arcade.Canvas.CvClearRect`: a frame that clears to
  transparent, for a canvas laid over another. A new constructor on both
  types: an exhaustive match over `DrawOp` or `CanvasCall` needs an arm.

## 0.1.0

The first version, extracted from a browser game whose Swift goldens it still
reproduces bit for bit.

- Pure core: `Arcade.U64`, `Arcade.Numerics`, `Arcade.Num`, `Arcade.Vec2`,
  `Arcade.Vec3`, `Arcade.Rng` (SplitMix64 as a value), `Arcade.Camera`
  (`Perspective` or `Orthographic` lens), `Arcade.CameraFit`, `Arcade.Draw`,
  `Arcade.Canvas`, `Arcade.Html`, `Arcade.Svg`, `Arcade.Float32`,
  `Arcade.Synth`, `Arcade.SynthFeed`, `Arcade.Replay`.
- Web shell (JS target only, `needs IO.Foreign`): `Arcade.Web.Runtime`,
  `Glue`, `Cell`, `Input`, `Canvas2d`, `Paint`, `Audio`, `SynthHost`,
  `SynthWorklet`, and the `arcade_*.mjs` glue beside them.
- MIT licensed.
