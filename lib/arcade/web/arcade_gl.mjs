// arcade_gl.mjs: a cel-shading renderer on WebGL, for Arcade.Web.Gl (march
// copies this file beside the build). It draws what it is told: every number comes
// from Arcade.Cel (the frame's thirty floats, an item's twenty-two), and the
// fragment shader's tone is the same function as Arcade.Cel.tone. Values
// cross in March's JS shapes: lists as Cons/Nil.
//
// uPush is read by both shaders, and a uniform shared between them must be
// declared with one precision: a vertex shader's default float is highp and a
// fragment shader's here is mediump, which the driver refuses to link.
//
// Two passes an item. First the mesh itself, back faces culled, each pixel's
// light cut into bands. Then, if the item has ink, the mesh again with front
// faces culled and every vertex pushed out along its rim by the ink's width,
// in the ink colour: what shows past the first pass is the outline.

const STRIDE = 12;

const VERT = `
attribute vec3 aPos;
attribute vec3 aNormal;
attribute vec3 aColour;
attribute vec3 aRim;
uniform mat4 uModel;
uniform mat4 uViewProj;
uniform mediump float uPush;
varying vec3 vNormal;
varying vec3 vColour;
varying vec3 vWorld;
void main() {
  vec4 world = uModel * vec4(aPos, 1.0);
  if (uPush > 0.0) world.xyz += normalize(mat3(uModel) * aRim) * uPush;
  vNormal = mat3(uModel) * aNormal;
  vColour = aColour;
  vWorld = world.xyz;
  gl_Position = uViewProj * world;
}`;

const FRAG = `
precision mediump float;
uniform vec3 uLight;
uniform vec3 uEye;
uniform vec3 uTint;
uniform vec3 uInk;
uniform float uBands;
uniform float uDark;
uniform float uAlpha;
uniform float uGloss;
uniform float uPush;
varying vec3 vNormal;
varying vec3 vColour;
varying vec3 vWorld;
void main() {
  if (uPush > 0.0) { gl_FragColor = vec4(uInk, 1.0); return; }
  vec3 n = normalize(vNormal);
  float lit = clamp(dot(n, uLight) * 0.5 + 0.5, 0.0, 1.0);
  float band = min(floor(lit * uBands), uBands - 1.0);
  float tone = uDark + (1.0 - uDark) * band / (uBands - 1.0);
  vec3 colour = vColour * uTint * tone;
  if (uGloss > 0.0) {
    vec3 h = normalize(uLight + normalize(uEye - vWorld));
    if (dot(n, h) > 0.965) colour = mix(colour, vec3(1.0), uGloss);
  }
  gl_FragColor = vec4(colour, uAlpha);
}`;

let gl = null;
let canvas = null;
let uni = {};
let attr = {};
const meshes = new Map();
const stats = { frames: 0, draws: 0, triangles: 0, uploads: 0 };

function floatsOf(list, into) {
  let n = 0;
  for (let l = list; l.$ === "Cons"; l = l._1) n++;
  const out = into && into.length === n ? into : new Float32Array(n);
  let i = 0;
  for (let l = list; l.$ === "Cons"; l = l._1) out[i++] = l._0;
  return out;
}

function compile(type, source) {
  const s = gl.createShader(type);
  gl.shaderSource(s, source);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error("arcade_gl: " + gl.getShaderInfoLog(s));
  return s;
}

// A WebGL context on the canvas with this id, and the one program. False when
// the browser gives none. "?keep" in the page's address keeps the drawing
// buffer after a frame, so a playtest can read its pixels.
export function gl_open(id) {
  canvas = document.getElementById(id);
  if (!canvas) return false;
  const keep = typeof location !== "undefined" && location.search.includes("keep");
  gl = canvas.getContext("webgl", { antialias: true, alpha: false, preserveDrawingBuffer: keep });
  if (!gl) return false;
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("arcade_gl: " + gl.getProgramInfoLog(program));
  gl.useProgram(program);
  for (const name of ["uModel", "uViewProj", "uPush", "uLight", "uEye", "uTint", "uInk", "uBands", "uDark", "uAlpha", "uGloss"]) {
    uni[name] = gl.getUniformLocation(program, name);
  }
  for (const name of ["aPos", "aNormal", "aColour", "aRim"]) {
    attr[name] = gl.getAttribLocation(program, name);
    gl.enableVertexAttribArray(attr[name]);
  }
  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  globalThis.__arcadeGl = { stats, pixels: readPixels };
  return true;
}

// A mesh's triangles, uploaded once and kept under its id. Uploading an id
// again replaces it.
export function gl_mesh(id, floats) {
  const data = floatsOf(floats, null);
  let m = meshes.get(id);
  if (!m) { m = { buffer: gl.createBuffer(), count: 0 }; meshes.set(id, m); }
  gl.bindBuffer(gl.ARRAY_BUFFER, m.buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  m.count = data.length / STRIDE;
  stats.uploads++;
}

const frameFloats = new Float32Array(30);
const itemFloats = new Float32Array(22);

// Start a frame on a canvas of w by h CSS pixels at dpr: size it, clear it to
// the sky, set what every item shares.
export function gl_begin(w, h, dpr, floats) {
  const f = floatsOf(floats, frameFloats);
  const bw = Math.max(1, Math.round(w * dpr)), bh = Math.max(1, Math.round(h * dpr));
  if (canvas.width !== bw) canvas.width = bw;
  if (canvas.height !== bh) canvas.height = bh;
  gl.viewport(0, 0, bw, bh);
  gl.depthMask(true);
  gl.clearColor(f[0], f[1], f[2], 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.uniform3f(uni.uLight, f[3], f[4], f[5]);
  gl.uniform3f(uni.uEye, f[6], f[7], f[8]);
  gl.uniform1f(uni.uBands, f[9]);
  gl.uniform1f(uni.uDark, f[10]);
  gl.uniform3f(uni.uInk, f[11], f[12], f[13]);
  gl.uniformMatrix4fv(uni.uViewProj, false, f.subarray(14, 30));
  stats.frames++;
  stats.draws = 0;
  stats.triangles = 0;
}

// One item: its mesh, then its outline. An id that was never uploaded is a
// bug in the caller, and says so.
export function gl_draw(id, floats) {
  const m = meshes.get(id);
  if (!m) throw new Error("arcade_gl: mesh " + id + " was drawn before it was uploaded");
  const f = floatsOf(floats, itemFloats);
  const bytes = STRIDE * 4;
  gl.bindBuffer(gl.ARRAY_BUFFER, m.buffer);
  gl.vertexAttribPointer(attr.aPos, 3, gl.FLOAT, false, bytes, 0);
  gl.vertexAttribPointer(attr.aNormal, 3, gl.FLOAT, false, bytes, 12);
  gl.vertexAttribPointer(attr.aColour, 3, gl.FLOAT, false, bytes, 24);
  gl.vertexAttribPointer(attr.aRim, 3, gl.FLOAT, false, bytes, 36);
  gl.uniform3f(uni.uTint, f[0], f[1], f[2]);
  gl.uniform1f(uni.uAlpha, f[3]);
  gl.uniform1f(uni.uGloss, f[5]);
  gl.uniformMatrix4fv(uni.uModel, false, f.subarray(6, 22));
  const sheer = f[3] < 1;
  if (sheer) { gl.enable(gl.BLEND); gl.depthMask(false); }
  gl.cullFace(gl.BACK);
  gl.uniform1f(uni.uPush, 0);
  gl.drawArrays(gl.TRIANGLES, 0, m.count);
  if (sheer) { gl.disable(gl.BLEND); gl.depthMask(true); }
  stats.draws++;
  stats.triangles += m.count / 3;
  if (f[4] > 0) {
    gl.cullFace(gl.FRONT);
    gl.uniform1f(uni.uPush, f[4]);
    gl.drawArrays(gl.TRIANGLES, 0, m.count);
    stats.draws++;
    stats.triangles += m.count / 3;
  }
}

export function gl_end() { gl.flush(); }

// For a playtest: the pixels of a w by h block whose lower left is (x, y),
// in device pixels from the canvas's lower left, as [r, g, b, a, ...].
// Only meaningful with "?keep" in the address.
function readPixels(x, y, w, h) {
  const out = new Uint8Array(w * h * 4);
  gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, out);
  return Array.from(out);
}
