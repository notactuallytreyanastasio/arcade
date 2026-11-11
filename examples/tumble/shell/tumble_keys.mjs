// tumble_keys.mjs: the keyboard for TumbleKeys (march copies this file beside
// the build). heard((code, down)) for every key that goes down (once, not on
// auto-repeat) or comes up, with its KeyboardEvent.code. Keys held with a
// modifier are left to the browser. The arrows and space would scroll the
// page, so their default is prevented. What a key means is the game's.
// Values cross in March's JS shapes: tuples { _0, _1 }, closures called as
// f._0(f, args...).
const SCROLLS = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"]);

export function keys_listen(heard) {
  const on = (down) => (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (SCROLLS.has(e.code)) e.preventDefault();
    if (down && e.repeat) return;
    heard._0(heard, { _0: e.code, _1: down });
  };
  window.addEventListener("keydown", on(true));
  window.addEventListener("keyup", on(false));
}
