# Changelog

All notable changes to `arcade-physics` are recorded here. Versions follow
semver; `forge publish --old-source` checks the bump against the public API
surface.

## Unreleased

- `Arcade.Physics.Collide`: `off_box` and `off_disc`, a moving disc against
  a fixed box or disc. `off_box` is the push-out `examples/putt` had as
  `Putt.Roll.block`, operation for operation: putt now calls it and its
  pinned digests did not move.

## 0.1.0

The first version, split out of the engine core so a game that needs no
simulation does not depend on one. Depends on `arcade` 0.1.0.

- `Arcade.Physics.Sim`: `SimClock`, `tick`, `Timed` and `Sampled` records,
  the tail-recursive step loop `run_steps`.
- `Arcade.Physics.Kinematics`: `ballistic`, `ballistic_height`,
  `integrate_friction`, `reflect`, `reflect_approaching`, `clamp_to_bound`.
- `Arcade.Physics.Trig`: `SinCos`, `SineBook`, `sine_of`, `sin_cos`, the seam
  where recorded sines replace libm for bit-exact replays across targets.
- `Arcade.Physics.Gesture`: `TrackPoint`, `GestureLimits`, `measure` to
  `GestureMetrics`.
- MIT licensed.
