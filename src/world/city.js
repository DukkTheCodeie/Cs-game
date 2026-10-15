import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeCanvas, canvasTexture } from './textures.js';
import { mulberry32 } from '../core/util.js';
import { npcsAreNew } from './cast.js';

// THE CITY OUTSIDE the City Museum of Natural History: what you see through the lobby's south windows
// and doors (and, in the morning, from the plaza out front).
//
//   night: a dark city. A few lit windows, sodium streetlamps, a diner that never closes, a car now and then.
//   day:   shops open, people on the sidewalks, traffic... and the museum's 50th birthday PARADE.
//
// Layout (meters, y up, north = -z; the lobby's south wall is at z = 10):
//   museum front   z 9.5–10.2   x -44..44 (the lobby's wall is the middle, x -12..12)
//   plaza          z 10.2–16.4  x -16.4..16.4 (walkable in the morning), gardens on both sides
//   sidewalk       z 16.4–19.0
//   street         z 19.0–28.6  (y = -0.15): westbound lane, eastbound lane, parking lane
//   far sidewalk   z 28.6–31.5, then shops and apartments, a second row of towers, the skyline
//
// Performance: no real lights (bulbs are emissive, glows are additive billboards, the light pools on the
// ground and on the buildings are painted lightmaps), static things merged into a few meshes, repeated
// things instanced, and people drawn with one instanced mesh per body part (a whole crowd = ~14 draw calls).

export const CITY = {
  wall: 10.2, wing: 9.5, plaza: 16.4, curb: 19.0, farCurb: 28.6, front: 31.5,
  streetY: -0.15, laneW: 20.85, laneE: 24.75, park: 27.5, parade: 23.6,
  // the part of the outside you can walk on in the morning
  walk: { minX: -16.1, maxX: 16.1, minZ: 10.2, maxZ: 18.45 },
};
const Z_WALL = CITY.wall, Z_WING = CITY.wing, Z_PLAZA = CITY.plaza, Z_CURB = CITY.curb, Z_FAR = CITY.farCurb, Z_FRONT = CITY.front;
const Y_ST = CITY.streetY;
const X_END = 232;
const PI = Math.PI, TAU = PI * 2;

// ------------------------------------------------------------------ geometry helpers
const _v = new THREE.Vector3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3();
const _m = new THREE.Matrix4(), _c = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0), DOWN = new THREE.Vector3(0, -1, 0);

const BASE = new Map();
function baseGeo(key, make) {
  let g = BASE.get(key);
  if (!g) {
    g = make();
    if (g.index) g = g.toNonIndexed();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    BASE.set(key, g);
  }
  return g;
}
const GEO = {
  box: () => baseGeo('box', () => new THREE.BoxGeometry(1, 1, 1)),
  plane: () => baseGeo('plane', () => new THREE.PlaneGeometry(1, 1)),
  cyl: (n = 8) => baseGeo('cyl' + n, () => new THREE.CylinderGeometry(0.5, 0.5, 1, n)),
  tube: (n = 8) => baseGeo('tube' + n, () => new THREE.CylinderGeometry(0.5, 0.5, 1, n, 1, true)),
  cone: (n = 8) => baseGeo('cone' + n, () => new THREE.ConeGeometry(0.5, 1, n)),
  sph: (w = 10, h = 7) => baseGeo(`sph${w}_${h}`, () => new THREE.SphereGeometry(0.5, w, h)),
  dome: (w = 10, h = 4) => baseGeo(`dome${w}_${h}`, () => new THREE.SphereGeometry(0.5, w, h, 0, TAU, 0, PI / 2)),
  ico: (d = 1) => baseGeo('ico' + d, () => { const g = new THREE.IcosahedronGeometry(0.5, d); g.deleteAttribute('normal'); g.computeVertexNormals(); return g; }),
  halfCyl: (n = 12) => baseGeo('hcyl' + n, () => new THREE.CylinderGeometry(0.5, 0.5, 1, n, 1, false, -PI / 2, PI)),
  torus: (t = 0.3, rs = 8, ts = 20, arc = TAU) => baseGeo(`tor${t}_${rs}_${ts}_${arc.toFixed(3)}`, () => new THREE.TorusGeometry(0.5, t, rs, ts, arc)),
  // a triangular prism (pediments, roofs): base along x from -0.5..0.5 at y = 0, apex at (0, 1), depth z -0.5..0.5
  prism: () => baseGeo('prism', () => {
    const sh = new THREE.Shape([new THREE.Vector2(-0.5, 0), new THREE.Vector2(0.5, 0), new THREE.Vector2(0, 1)]);
    const g = new THREE.ExtrudeGeometry(sh, { depth: 1, bevelEnabled: false });
    g.translate(0, 0, -0.5);
    return g;
  }),
  pyramid: () => baseGeo('pyr', () => new THREE.ConeGeometry(0.5 * Math.SQRT2, 1, 4, 1).rotateY(PI / 4)),
  // half of a flat disc (radius 0.5, 1 thick) on the +x side of the y axis
  halfDisc: () => baseGeo('hdisc', () => new THREE.CylinderGeometry(0.5, 0.5, 1, 16, 1, false, 0, PI)),
};

function paint(g, color, k = 1) {
  const n = g.attributes.position.count, a = new Float32Array(n * 3);
  if (color == null) a.fill(1);
  else {
    if (color.isColor) _c.copy(color); else _c.set(color);
    for (let i = 0; i < n; i++) { a[i * 3] = _c.r * k; a[i * 3 + 1] = _c.g * k; a[i * 3 + 2] = _c.b * k; }
  }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
}

// Collects transformed, colored pieces and merges them into one geometry (= one draw call).
class Bag {
  constructor() { this.list = []; this.stack = [new THREE.Matrix4()]; }
  get m() { return this.stack[this.stack.length - 1]; }
  push(x = 0, y = 0, z = 0, ry = 0, s = 1, rx = 0, rz = 0) {
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(s, s, s));
    this.stack.push(this.m.clone().multiply(_m));
    return this;
  }
  pop() { this.stack.pop(); return this; }
  add(g, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0, k = 1) {
    const geo = g.clone();
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz)).premultiply(this.m);
    geo.applyMatrix4(_m);
    paint(geo, color, k);
    this.list.push(geo);
    return geo;
  }
  // centered box
  box(x, y, z, w, h, d, color, ry = 0, rx = 0, rz = 0) { return this.add(GEO.box(), color, x, y, z, w, h, d, rx, ry, rz); }
  // box standing on y0
  boxB(x, y0, z, w, h, d, color, ry = 0) { return this.add(GEO.box(), color, x, y0 + h / 2, z, w, h, d, 0, ry, 0); }
  cyl(x, y0, z, r, h, color, n = 8, r2 = null) {
    if (r2 == null) return this.add(GEO.cyl(n), color, x, y0 + h / 2, z, r * 2, h, r * 2);
    const g = baseGeo(`cylT${n}_${(r2 / r).toFixed(3)}`, () => new THREE.CylinderGeometry(0.5 * (r2 / r), 0.5, 1, n));
    return this.add(g, color, x, y0 + h / 2, z, r * 2, h, r * 2);
  }
  sph(x, y, z, r, color, w = 10, h = 7, sy = 1) { return this.add(GEO.sph(w, h), color, x, y, z, r * 2, r * 2 * sy, r * 2); }
  // a flat, textured quad facing +z (ry rotates it); rect = atlas uv rect
  quad(x, y, z, w, h, ry, rect, color = null) {
    const g = this.add(GEO.plane(), color, x, y, z, w, h, 1, 0, ry, 0);
    if (rect) setRect(g, rect);
    return g;
  }
  // a flat triangle (both sides), for pennants and the like
  tri(a, b, c, color, k = 1) {
    const g = new THREE.BufferGeometry();
    const p = [...a, ...b, ...c, ...a, ...c, ...b];
    g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(12), 2));
    g.computeVertexNormals();
    g.applyMatrix4(this.m);
    paint(g, color, k);
    this.list.push(g);
    return g;
  }
  geometry() {
    if (!this.list.length) return null;
    const g = mergeGeometries(this.list, false);
    for (const p of this.list) p.dispose();
    this.list = [];
    return g;
  }
}
function setRect(g, r) {
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, r.u0 + uv.getX(i) * (r.u1 - r.u0), r.v0 + uv.getY(i) * (r.v1 - r.v0));
}
// texture coordinates from world position (1 repeat = s meters), picked by which way each face points
function worldUV(g, su, sv = su, ox = 0, oy = 0) {
  const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (ay > ax && ay > az) uv.setXY(i, (x + ox) / su, (z + oy) / sv);
    else if (ax > az) uv.setXY(i, (z + ox) / su, (y + oy) / sv);
    else uv.setXY(i, (x + ox) / su, (y + oy) / sv);
  }
  return g;
}
// second uv set for the painted lightmaps (computed from world position after merging)
function addUV1(g, fn) {
  const p = g.attributes.position, n = g.attributes.normal, a = new Float32Array(p.count * 2), o = [0, 0];
  for (let i = 0; i < p.count; i++) {
    fn(p.getX(i), p.getY(i), p.getZ(i), n.getX(i), n.getY(i), n.getZ(i), o);
    a[i * 2] = o[0]; a[i * 2 + 1] = o[1];
  }
  g.setAttribute('uv1', new THREE.BufferAttribute(a, 2));
}

// ------------------------------------------------------------------ canvas helpers
const FONT = {
  serif: (s, w = 'bold') => `${w} ${s}px Georgia, 'Times New Roman', serif`,
  sans: (s, w = 'bold') => `${w} ${s}px Arial, Helvetica, sans-serif`,
  black: (s) => `900 ${s}px 'Arial Black', 'Arial Bold', Arial, sans-serif`,
  round: (s) => `900 ${s}px Nunito, 'Trebuchet MS', Arial, sans-serif`,
  deco: (s) => `${s}px Bungee, 'Arial Black', Impact, sans-serif`,
  script: (s) => `italic bold ${s}px 'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', Georgia, cursive`,
  mono: (s) => `bold ${s}px 'Courier New', monospace`,
};
function txt(x, str, cx, cy, maxW, font, fill, o = {}) {
  x.save();
  x.font = font;
  x.textAlign = o.align || 'center';
  x.textBaseline = 'middle';
  const tw = x.measureText(str).width;
  const sx = tw > maxW ? maxW / tw : 1;
  x.translate(cx, cy);
  x.scale(sx, 1);
  if (o.glow) { x.shadowColor = o.glow; x.shadowBlur = o.blur || 12; }
  if (o.shadow) { x.fillStyle = o.shadow; x.fillText(str, o.sd || 2, o.sd || 2); }
  if (o.stroke) { x.lineJoin = 'round'; x.lineWidth = o.lw || 4; x.strokeStyle = o.stroke; x.strokeText(str, 0, 0); }
  x.fillStyle = fill;
  x.fillText(str, 0, 0);
  x.restore();
}
function rrect(x, X, Y, W, H, r) {
  x.beginPath();
  x.moveTo(X + r, Y); x.lineTo(X + W - r, Y); x.quadraticCurveTo(X + W, Y, X + W, Y + r);
  x.lineTo(X + W, Y + H - r); x.quadraticCurveTo(X + W, Y + H, X + W - r, Y + H);
  x.lineTo(X + r, Y + H); x.quadraticCurveTo(X, Y + H, X, Y + H - r);
  x.lineTo(X, Y + r); x.quadraticCurveTo(X, Y, X + r, Y);
  x.closePath();
}
function speckle(x, X, Y, W, H, n, rnd, a = 0.06, dark = true) {
  for (let i = 0; i < n; i++) {
    x.fillStyle = dark ? `rgba(0,0,0,${rnd() * a})` : `rgba(255,255,255,${rnd() * a})`;
    x.fillRect(X + rnd() * W, Y + rnd() * H, 1 + rnd() * 2, 1 + rnd() * 2);
  }
}
function vgrad(x, X, Y, W, H, stops) {
  const g = x.createLinearGradient(0, Y, 0, Y + H);
  for (const [t, c] of stops) g.addColorStop(t, c);
  x.fillStyle = g;
  x.fillRect(X, Y, W, H);
}
// a pane of window glass: sky reflections by day, nearly black at night
function glassPane(x, X, Y, W, H, night, tint = 0) {
  const g = x.createLinearGradient(X, Y, X + W * 0.4, Y + H);
  if (night) { g.addColorStop(0, '#161d2b'); g.addColorStop(1, '#07090e'); }
  else if (tint) { g.addColorStop(0, '#9fc3cf'); g.addColorStop(0.5, '#4f7d8f'); g.addColorStop(1, '#25414f'); }
  else { g.addColorStop(0, '#b3c8da'); g.addColorStop(0.45, '#5f7890'); g.addColorStop(1, '#2b3848'); }
  x.fillStyle = g;
  x.fillRect(X, Y, W, H);
  x.save();
  x.beginPath(); x.rect(X, Y, W, H); x.clip();
  x.fillStyle = night ? 'rgba(130,160,220,0.07)' : 'rgba(255,255,255,0.2)';
  x.beginPath(); x.moveTo(X + W * 0.1, Y + H); x.lineTo(X + W * 0.42, Y + H); x.lineTo(X + W * 0.95, Y); x.lineTo(X + W * 0.62, Y); x.fill();
  x.restore();
}

// ------------------------------------------------------------------ facade styles
// Each style is a tile of 2 bays x 2 floors (256 px square) that repeats up the building. `win` is the
// window inside one bay/floor cell (fractions, y measured from the bottom), used for the lit windows at night.
function cellLoop(S, fn) { for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) fn(i * S / 2, j * S / 2, S / 2, i, j); }
function winPx(st, X, Y, C) { const [u0, v0, u1, v1] = st.win; return [X + u0 * C, Y + (1 - v1) * C, (u1 - u0) * C, (v1 - v0) * C]; }

const STYLES = {
  brickRed: { bay: 3.0, fh: 3.2, win: [0.27, 0.2, 0.73, 0.84], body: 0x8a4434, trim: 0xd8ccb6, kind: 'brick', wall: '#8e4636', mortar: '#a88f7e', frame: '#efe8dc', stone: '#d9cdb6' },
  brickBrown: { bay: 2.8, fh: 3.1, win: [0.28, 0.2, 0.72, 0.84], body: 0x5d4033, trim: 0xb9a993, kind: 'brick', wall: '#5f4335', mortar: '#7d6b5d', frame: '#26432f', stone: '#bcae97', arch: true },
  stone: { bay: 3.4, fh: 3.4, win: [0.3, 0.17, 0.7, 0.78], body: 0xc2b394, trim: 0xe0d6c0, kind: 'stone', wall: '#c9bb9b', frame: '#3b3a37', stone: '#e3d9c4' },
  stucco: { bay: 3.2, fh: 3.1, win: [0.33, 0.22, 0.67, 0.8], body: 0xdccfaf, trim: 0xf2ead8, kind: 'stucco', wall: '#e0d1ae', frame: '#f4efe4', shutter: '#3f6e52', flowers: true },
  pink: { bay: 3.0, fh: 3.0, win: [0.27, 0.22, 0.73, 0.82], body: 0xeaa6b9, trim: 0xffffff, kind: 'stucco', wall: '#f1b0c3', frame: '#ffffff', shutter: '#ffffff', flowers: false },
  teal: { bay: 3.0, fh: 3.0, win: [0.27, 0.22, 0.73, 0.82], body: 0x3f7d79, trim: 0xf2f0e8, kind: 'siding', wall: '#428883', frame: '#f4f2ea' },
  concrete: { bay: 4.0, fh: 3.6, win: [0.05, 0.3, 0.95, 0.84], body: 0x8e8e8a, trim: 0xa9a9a4, kind: 'concrete', wall: '#9d9c97' },
  glass: { bay: 3.0, fh: 3.8, win: [0.04, 0.12, 0.96, 0.97], body: 0x2f5368, trim: 0x9fb2bf, kind: 'glass', wall: '#2f4a5c' },
};

function paintStyle(st, night, seed) {
  const S = 256, [c, x] = makeCanvas(S, S), r = mulberry32(seed);
  x.fillStyle = st.wall;
  x.fillRect(0, 0, S, S);
  if (st.kind === 'brick') {
    for (let y = 0, row = 0; y < S; y += 5, row++) {
      for (let bx = (row % 2) * -6; bx < S; bx += 12) {
        const v = (r() - 0.5) * 26;
        x.fillStyle = `rgba(${v > 0 ? 255 : 0},${v > 0 ? 220 : 0},${v > 0 ? 200 : 0},${Math.abs(v) / 255 * 2.2})`;
        x.fillRect(bx, y, 11, 4);
      }
      x.fillStyle = st.mortar; x.globalAlpha = 0.55; x.fillRect(0, y + 4, S, 1); x.globalAlpha = 1;
    }
  } else if (st.kind === 'stone') {
    for (let y = 0, row = 0; y < S; y += 21, row++) {
      x.fillStyle = 'rgba(70,55,35,0.28)'; x.fillRect(0, y, S, 1.5);
      for (let bx = (row % 2) * 24; bx < S; bx += 48) x.fillRect(bx, y, 1.5, 21);
    }
    speckle(x, 0, 0, S, S, 900, r, 0.08);
  } else if (st.kind === 'stucco') {
    speckle(x, 0, 0, S, S, 1400, r, 0.05);
    speckle(x, 0, 0, S, S, 600, r, 0.08, false);
  } else if (st.kind === 'siding') {
    for (let y = 0; y < S; y += 8) { x.fillStyle = 'rgba(0,0,0,0.22)'; x.fillRect(0, y + 6, S, 2); x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(0, y, S, 2); }
  } else if (st.kind === 'concrete') {
    speckle(x, 0, 0, S, S, 1600, r, 0.07);
    x.fillStyle = 'rgba(0,0,0,0.18)';
    for (let i = 0; i <= 2; i++) { x.fillRect(i * S / 2, 0, 2, S); x.fillRect(0, i * S / 2, S, 2); }
  }
  cellLoop(S, (X, Y, C, i, j) => {
    const [wx, wy, ww, wh] = winPx(st, X, Y, C);
    if (st.kind === 'glass') {
      glassPane(x, X, Y, C, C, night, 1);
      x.fillStyle = '#25384a'; x.fillRect(X, Y + (1 - st.win[1]) * C, C, st.win[1] * C);
      x.fillStyle = '#c3ccd3'; x.fillRect(X, Y, 3, C); x.fillRect(X + C / 2, Y, 2, C); x.fillRect(X, Y + (1 - st.win[1]) * C, C, 3);
      return;
    }
    if (st.kind === 'concrete') {
      glassPane(x, wx, wy, ww, wh, night);
      x.fillStyle = '#2b2f33';
      for (let k = 0; k <= 4; k++) x.fillRect(wx + (k * ww) / 4 - 1.5, wy, 3, wh);
      x.fillRect(wx, wy, ww, 3); x.fillRect(wx, wy + wh - 3, ww, 3);
      return;
    }
    // sills, lintels, shutters
    if (st.kind === 'brick') {
      x.fillStyle = st.stone;
      x.fillRect(wx - 5, wy + wh, ww + 10, 6);
      if (st.arch) { x.beginPath(); x.ellipse(wx + ww / 2, wy + 10, ww / 2 + 5, 15, 0, PI, 0); x.fill(); }
      else { x.fillRect(wx - 5, wy - 8, ww + 10, 8); x.fillStyle = 'rgba(0,0,0,0.15)'; x.fillRect(wx + ww / 2 - 4, wy - 8, 8, 8); }
    } else if (st.kind === 'stone') {
      x.fillStyle = st.stone;
      x.beginPath(); x.moveTo(wx - 8, wy - 5); x.lineTo(wx + ww / 2, wy - 22); x.lineTo(wx + ww + 8, wy - 5); x.closePath(); x.fill();
      x.fillRect(wx - 8, wy - 6, ww + 16, 5);
      x.fillRect(wx - 6, wy + wh, ww + 12, 6);
      x.fillStyle = 'rgba(0,0,0,0.2)'; x.fillRect(wx - 6, wy + wh + 6, ww + 12, 2);
    } else if (st.kind === 'stucco' || st.kind === 'siding') {
      x.fillStyle = st.frame;
      x.fillRect(wx - 6, wy - 6, ww + 12, wh + 14);
      if (st.shutter) {
        x.fillStyle = st.shutter;
        x.fillRect(wx - 6 - ww * 0.42, wy - 2, ww * 0.42, wh + 4);
        x.fillRect(wx + ww + 6, wy - 2, ww * 0.42, wh + 4);
        x.fillStyle = 'rgba(0,0,0,0.25)';
        for (let k = 0; k < 6; k++) { x.fillRect(wx - 6 - ww * 0.42, wy + k * wh / 6 + 3, ww * 0.42, 1); x.fillRect(wx + ww + 6, wy + k * wh / 6 + 3, ww * 0.42, 1); }
      }
    }
    glassPane(x, wx, wy, ww, wh, night);
    // curtains in some windows (by day you can see them)
    if (!night && r() < 0.6) {
      x.fillStyle = ['#e9dfc6', '#c9d6e3', '#e6c7c7', '#d8e2c6'][Math.floor(r() * 4)];
      x.globalAlpha = 0.75;
      x.fillRect(wx + 2, wy + 2, ww * 0.22, wh - 4); x.fillRect(wx + ww * 0.78 - 2, wy + 2, ww * 0.22, wh - 4);
      x.globalAlpha = 1;
    } else if (!night && r() < 0.5) {
      x.fillStyle = 'rgba(235,230,215,0.8)'; x.fillRect(wx + 2, wy + 2, ww - 4, wh * (0.25 + r() * 0.3));
      x.fillStyle = 'rgba(0,0,0,0.12)'; for (let k = wy + 5; k < wy + wh * 0.5; k += 4) x.fillRect(wx + 2, k, ww - 4, 1);
    }
    x.strokeStyle = st.frame || '#eee';
    x.lineWidth = 4;
    x.strokeRect(wx, wy, ww, wh);
    x.lineWidth = 3;
    x.beginPath(); x.moveTo(wx, wy + wh * 0.5); x.lineTo(wx + ww, wy + wh * 0.5); x.stroke();
    if (st.kind !== 'brick') { x.beginPath(); x.moveTo(wx + ww / 2, wy); x.lineTo(wx + ww / 2, wy + wh); x.stroke(); }
    if (st.flowers && (i + j) % 2 === 0) {
      x.fillStyle = '#6b4a2c'; x.fillRect(wx - 2, wy + wh + 2, ww + 4, 8);
      for (let k = 0; k < 9; k++) { x.fillStyle = ['#e2445c', '#f2b134', '#f07fb0', '#ffffff'][k % 4]; x.beginPath(); x.arc(wx + 3 + k * (ww / 8.5), wy + wh, 3.5, 0, TAU); x.fill(); }
      x.fillStyle = '#3f7a3a'; for (let k = 0; k < 6; k++) x.fillRect(wx + k * ww / 5, wy + wh + 1, 4, 3);
    }
  });
  // a little grime toward the bottom of each floor
  for (let j = 0; j < 2; j++) vgrad(x, 0, j * S / 2 + S * 0.42, S, S * 0.08, [[0, 'rgba(0,0,0,0)'], [1, 'rgba(0,0,0,0.08)']]);
  return c;
}

// ------------------------------------------------------------------ texture atlas (shop fronts, signs, banners)
class Atlas {
  constructor(w, h) {
    [this.canvas, this.ctx] = makeCanvas(w, h);
    this.W = w; this.H = h; this.items = {};
    // skyline packing in 8 px columns: each item goes where it can sit lowest
    this.sky = new Int32Array(Math.ceil(w / 8));
  }
  add(key, w, h, draw) {
    const P = 3, CW = 8;
    w = Math.ceil(w); h = Math.ceil(h);
    const cols = Math.ceil((w + P * 2) / CW), N = this.sky.length;
    let bx = -1, by = Infinity;
    for (let i = 0; i + cols <= N; i++) {
      let y = 0;
      for (let k = i; k < i + cols && y < by; k++) if (this.sky[k] > y) y = this.sky[k];
      if (y < by) { by = y; bx = i; }
    }
    if (bx < 0 || by + h + P * 2 > this.H) {
      console.warn('[city] texture atlas is full:', key);
      return (this.items[key] = { u0: 0, u1: 0.001, v0: 0, v1: 0.001 });
    }
    for (let k = bx; k < bx + cols; k++) this.sky[k] = by + h + P * 2;
    const X = bx * CW + P, Y = by + P, x = this.ctx;
    x.save();
    x.translate(X, Y);
    x.beginPath(); x.rect(0, 0, w, h); x.clip();
    draw(x, w, h);
    x.restore();
    // bleed the edge pixels into the padding (no seams when the texture is mipmapped)
    x.drawImage(this.canvas, X, Y, w, 1, X, Y - P, w, P);
    x.drawImage(this.canvas, X, Y + h - 1, w, 1, X, Y + h, w, P);
    x.drawImage(this.canvas, X, Y - P, 1, h + P * 2, X - P, Y - P, P, h + P * 2);
    x.drawImage(this.canvas, X + w - 1, Y - P, 1, h + P * 2, X + w, Y - P, P, h + P * 2);
    return (this.items[key] = { u0: X / this.W, u1: (X + w) / this.W, v0: 1 - (Y + h) / this.H, v1: 1 - Y / this.H, w, h });
  }
}

// ---- shop fronts. Each one is the ground floor of a building (4.5 m tall), drawn at `ppm` pixels per meter.
const SHOP_H = 4.5;
function shopBase(x, W, H, o) {
  // wall around the shop front
  x.fillStyle = o.wall;
  x.fillRect(0, 0, W, H);
  // fascia (sign band)
  const fy = H * 0.1, fh = H * 0.24;
  x.fillStyle = o.fascia;
  x.fillRect(W * 0.02, fy, W * 0.96, fh);
  x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(W * 0.02, fy + fh - 3, W * 0.96, 3);
  if (o.trim) { x.fillStyle = o.trim; x.fillRect(W * 0.02, fy, W * 0.96, 3); x.fillRect(W * 0.02, fy + fh - 6, W * 0.96, 3); }
  // shop windows + door area
  const wy = H * 0.38, wh = H * 0.5;
  x.fillStyle = o.frame || '#2a2a2a';
  x.fillRect(W * 0.03, wy - 4, W * 0.94, H - wy + 4);
  // kick plate
  x.fillStyle = o.kick || '#3a3530';
  x.fillRect(W * 0.03, H * 0.88, W * 0.94, H * 0.12);
  return { fy, fh, wy, wh };
}
function shopWindows(x, W, H, L, o, night, interior) {
  // door in the middle (or at o.doorAt), display windows on both sides
  const dw = (o.doorW || 1.1) * o.ppm, dx = (o.doorAt != null ? o.doorAt : 0.5) * W - dw / 2;
  const panes = [[W * 0.045, dx - 6], [dx + dw + 6, W * 0.955]];
  for (const [a, b] of panes) {
    if (b - a < 8) continue;
    const X = a, Y = L.wy, WW = b - a, HH = L.wh;
    if (night && o.shutter) {
      x.fillStyle = '#5b5f63'; x.fillRect(X, Y - 2, WW, HH + 4);
      for (let y = Y; y < Y + HH; y += 4) { x.fillStyle = 'rgba(0,0,0,0.35)'; x.fillRect(X, y, WW, 1); x.fillStyle = 'rgba(255,255,255,0.08)'; x.fillRect(X, y + 1, WW, 1); }
    } else {
      x.fillStyle = night ? '#0b0d12' : '#3b3a39';
      x.fillRect(X, Y, WW, HH);
      if (interior) { x.save(); x.beginPath(); x.rect(X, Y, WW, HH); x.clip(); interior(x, X, Y, WW, HH, night); x.restore(); }
      // reflection on the glass
      x.save(); x.beginPath(); x.rect(X, Y, WW, HH); x.clip();
      x.fillStyle = night ? 'rgba(140,170,230,0.05)' : 'rgba(255,255,255,0.16)';
      for (let k = 0; k < WW; k += 140) { x.beginPath(); x.moveTo(X + k, Y + HH); x.lineTo(X + k + 50, Y + HH); x.lineTo(X + k + 110, Y); x.lineTo(X + k + 60, Y); x.fill(); }
      x.restore();
      x.strokeStyle = o.frame || '#2a2a2a'; x.lineWidth = 3; x.strokeRect(X, Y, WW, HH);
    }
  }
  // the door
  x.fillStyle = night && o.shutter ? '#55595d' : (o.door || '#2a2a2a');
  x.fillRect(dx, L.wy - 4, dw, H - L.wy + 4);
  if (night && o.shutter) {
    for (let y = L.wy; y < H; y += 4) { x.fillStyle = 'rgba(0,0,0,0.35)'; x.fillRect(dx, y, dw, 1); }
  } else {
    glassPane(x, dx + 5, L.wy + 2, dw - 10, H - L.wy - 8, night);
    x.fillStyle = '#c9a24a'; x.fillRect(dx + dw - 12, L.wy + (H - L.wy) * 0.5, 4, 14);
    if (!night && o.open !== false) {
      rrect(x, dx + dw * 0.18, L.wy + 10, dw * 0.64, 16, 4); x.fillStyle = '#c81e3c'; x.fill();
      txt(x, 'OPEN', dx + dw / 2, L.wy + 18, dw * 0.6, FONT.sans(12), '#fff');
    }
  }
  return { dx, dw };
}

// Things you can see through the shop windows.
const INTERIORS = {
  donuts(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#0c0b0d'], [1, '#141014']] : [[0, '#fbe3ea'], [1, '#e8b9c8']]);
    if (night) return;
    const fr = ['#ff7eb6', '#6b3a1e', '#fff3e0', '#7ad3ff', '#ffd34d', '#b86bff'];
    for (let row = 0; row < 3; row++) {
      const yy = Y + H * (0.32 + row * 0.25);
      x.fillStyle = '#c9a07a'; x.fillRect(X, yy + 9, W, 3);
      for (let k = 0; X + 10 + k * 17 < X + W - 6; k++) {
        const cx = X + 12 + k * 17;
        x.fillStyle = '#d49a5c'; x.beginPath(); x.arc(cx, yy, 7.5, 0, TAU); x.fill();
        x.fillStyle = fr[(k + row * 2) % fr.length]; x.beginPath(); x.arc(cx, yy - 1, 6.5, 0, TAU); x.fill();
        x.fillStyle = '#e8b9c8'; x.beginPath(); x.arc(cx, yy - 1, 2.2, 0, TAU); x.fill();
      }
    }
  },
  books(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0a0b0c' : '#3b2a1c'; x.fillRect(X, Y, W, H);
    if (night) return;
    const r = mulberry32(5);
    const cols = ['#8c2f2f', '#2f5d8c', '#3f7a4f', '#c9a24a', '#5a3f7a', '#d9d2c2', '#1f1f1f', '#b5582f'];
    for (let row = 0; row < 4; row++) {
      const base = Y + H * (0.27 + row * 0.24);
      x.fillStyle = '#6b4a2c'; x.fillRect(X, base, W, 3);
      for (let bx = X + 2; bx < X + W - 4;) {
        const bw = 3 + r() * 4, bh = H * (0.12 + r() * 0.08);
        x.fillStyle = cols[Math.floor(r() * cols.length)];
        x.fillRect(bx, base - bh, bw, bh);
        bx += bw + 0.6;
      }
    }
  },
  bakery(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#0b0a09'], [1, '#100d0a']] : [[0, '#f6e7c8'], [1, '#d9b98a']]);
    if (night) return;
    for (let row = 0; row < 2; row++) {
      const yy = Y + H * (0.45 + row * 0.33);
      x.fillStyle = '#9a7a52'; x.fillRect(X, yy + 8, W, 3);
      for (let k = 0; X + 14 + k * 26 < X + W; k++) {
        x.fillStyle = k % 3 === 0 ? '#c98b45' : k % 3 === 1 ? '#e0b070' : '#b5733a';
        x.beginPath(); x.ellipse(X + 14 + k * 26, yy, 11, 7, 0, 0, TAU); x.fill();
        x.strokeStyle = 'rgba(255,240,210,0.6)'; x.lineWidth = 1.5;
        x.beginPath(); x.moveTo(X + 8 + k * 26, yy - 2); x.lineTo(X + 12 + k * 26, yy - 6); x.moveTo(X + 14 + k * 26, yy - 1); x.lineTo(X + 18 + k * 26, yy - 6); x.stroke();
      }
    }
    // a cake on a stand
    x.fillStyle = '#fff'; x.fillRect(X + W * 0.4, Y + H * 0.18, W * 0.14, H * 0.14);
    x.fillStyle = '#f28cb1'; x.fillRect(X + W * 0.4, Y + H * 0.18, W * 0.14, 4);
  },
  florist(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#090b09' : '#e8eadc'; x.fillRect(X, Y, W, H);
    if (night) return;
    const r = mulberry32(8);
    for (let k = 0; k < W / 9; k++) {
      const cx = X + 4 + k * 9 + r() * 3, cy = Y + H * (0.35 + r() * 0.4);
      x.fillStyle = '#3f7a3a'; x.fillRect(cx - 1, cy, 2, Y + H - cy);
      x.fillStyle = ['#e2445c', '#f2b134', '#f07fb0', '#ffffff', '#b86bff', '#ff8a3d'][Math.floor(r() * 6)];
      x.beginPath(); x.arc(cx, cy, 4 + r() * 3, 0, TAU); x.fill();
    }
  },
  laundry(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0a0c0e' : '#dfe8ec'; x.fillRect(X, Y, W, H);
    if (night) return;
    for (let k = 0; X + 6 + k * 30 < X + W - 24; k++) {
      const bx = X + 6 + k * 30;
      x.fillStyle = '#f4f6f7'; x.fillRect(bx, Y + H * 0.35, 26, H * 0.6);
      x.fillStyle = '#7d8b95'; x.beginPath(); x.arc(bx + 13, Y + H * 0.62, 9, 0, TAU); x.fill();
      x.fillStyle = '#9fc6e0'; x.beginPath(); x.arc(bx + 13, Y + H * 0.62, 6.5, 0, TAU); x.fill();
    }
  },
  diner(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#1a1410'], [1, '#0d0a08']] : [[0, '#f2e4c8'], [1, '#c9b48e']]);
    if (night) return;
    // counter, stools, a cook with a hat
    x.fillStyle = '#b8bec4'; x.fillRect(X, Y + H * 0.62, W, H * 0.08);
    x.fillStyle = '#c81e3c'; for (let k = 0; X + 10 + k * 22 < X + W; k++) { x.fillRect(X + 8 + k * 22, Y + H * 0.76, 10, 4); x.fillStyle = '#888'; x.fillRect(X + 12 + k * 22, Y + H * 0.8, 2, H * 0.2); x.fillStyle = '#c81e3c'; }
    x.fillStyle = '#fff'; x.beginPath(); x.arc(X + W * 0.62, Y + H * 0.36, 6, 0, TAU); x.fill(); x.fillRect(X + W * 0.62 - 7, Y + H * 0.24, 14, 6);
    x.fillStyle = '#e8e8e8'; x.fillRect(X + W * 0.62 - 7, Y + H * 0.42, 14, 18);
    for (const p of [0.2, 0.33, 0.8]) { x.fillStyle = '#4f6e9e'; x.fillRect(X + W * p - 6, Y + H * 0.5, 12, 18); x.fillStyle = '#e0b18f'; x.beginPath(); x.arc(X + W * p, Y + H * 0.45, 5, 0, TAU); x.fill(); }
  },
  pizza(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0b0909' : '#f3e2c4'; x.fillRect(X, Y, W, H);
    if (night) return;
    for (let k = 0; X + 10 + k * 40 < X + W; k++) {
      const tx = X + 8 + k * 40, ty = Y + H * 0.7;
      for (let a = 0; a < 4; a++) for (let b = 0; b < 2; b++) { x.fillStyle = (a + b) % 2 ? '#c81e1e' : '#fff'; x.fillRect(tx + a * 7, ty + b * 5, 7, 5); }
    }
    x.fillStyle = '#e8a33a'; x.beginPath(); x.arc(X + W * 0.5, Y + H * 0.35, 14, 0, TAU); x.fill();
    x.fillStyle = '#c0392b'; for (let k = 0; k < 6; k++) { x.beginPath(); x.arc(X + W * 0.5 + Math.cos(k) * 8, Y + H * 0.35 + Math.sin(k * 2) * 7, 2.5, 0, TAU); x.fill(); }
  },
  mart(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#e9f3ff'], [1, '#b9cbe0']] : [[0, '#f2f5f7'], [1, '#d5dde2']]);
    const r = mulberry32(12);
    for (let row = 0; row < 3; row++) {
      const yy = Y + H * (0.32 + row * 0.24);
      x.fillStyle = '#8a9299'; x.fillRect(X, yy + 10, W, 2);
      for (let bx = X + 2; bx < X + W - 6; bx += 7) { x.fillStyle = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#e67e22', '#9b59b6', '#ecf0f1'][Math.floor(r() * 7)]; x.fillRect(bx, yy, 6, 10); }
    }
    if (night) { x.fillStyle = 'rgba(40,60,90,0.6)'; x.fillRect(X + W * 0.7, Y + H * 0.45, 9, 26); x.beginPath(); x.arc(X + W * 0.7 + 4.5, Y + H * 0.41, 5, 0, TAU); x.fill(); }
  },
  hotel(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#2a1e12'], [1, '#120d08']] : [[0, '#e8d5b0'], [1, '#a88b5e']]);
    x.fillStyle = night ? 'rgba(255,200,120,0.5)' : '#f6e7b8';
    for (let k = 0; k < 3; k++) { x.beginPath(); x.arc(X + W * (0.2 + k * 0.3), Y + H * 0.2, 6, 0, TAU); x.fill(); }
    x.fillStyle = night ? '#1a120b' : '#7a1022'; x.fillRect(X, Y + H * 0.85, W, H * 0.15);
  },
  bank(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0b0b0c' : '#d8d2c4'; x.fillRect(X, Y, W, H);
    if (night) return;
    x.fillStyle = '#8a7f6a'; for (let k = 0; X + 20 + k * 40 < X + W; k++) x.fillRect(X + 16 + k * 40, Y + H * 0.45, 22, H * 0.4);
  },
  cafe(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0b0a09' : '#ead9c0'; x.fillRect(X, Y, W, H);
    if (night) return;
    for (let k = 0; X + 16 + k * 34 < X + W; k++) {
      const tx = X + 14 + k * 34;
      x.fillStyle = '#5a3a22'; x.fillRect(tx, Y + H * 0.66, 18, 3); x.fillRect(tx + 8, Y + H * 0.66, 2, H * 0.34);
      x.fillStyle = '#fff'; x.fillRect(tx + 4, Y + H * 0.6, 5, 6);
    }
  },
  hardware(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0a0a0a' : '#e2ddd2'; x.fillRect(X, Y, W, H);
    if (night) return;
    for (let k = 0; X + 10 + k * 16 < X + W; k++) { x.fillStyle = ['#c0392b', '#f39c12', '#7f8c8d', '#2c3e50'][k % 4]; x.fillRect(X + 8 + k * 16, Y + H * (0.3 + (k % 3) * 0.15), 10, 14); }
  },
  generic(x, X, Y, W, H, night) {
    x.fillStyle = night ? '#0a0b0c' : '#d9d4ca'; x.fillRect(X, Y, W, H);
    if (night) return;
    const r = mulberry32(Math.floor(W));
    for (let k = 0; X + 10 + k * 20 < X + W; k++) { x.fillStyle = `hsl(${r() * 360},40%,${45 + r() * 25}%)`; x.fillRect(X + 8 + k * 20, Y + H * (0.45 + r() * 0.2), 12, H * 0.3); }
  },
  tower(x, X, Y, W, H, night) {
    vgrad(x, X, Y, W, H, night ? [[0, '#14171c'], [1, '#0a0b0d']] : [[0, '#cfd8de'], [1, '#97a5ae']]);
    x.fillStyle = night ? '#2a2620' : '#5a6670'; x.fillRect(X + W * 0.4, Y + H * 0.62, W * 0.2, H * 0.2);
  },
};

// [key, width m, ppm, paint options]
function shopSpecs() {
  return {
    bank: { w: 24, ppm: 26, wall: '#cfc6b2', fascia: '#2b3a55', text: 'CITY SAVINGS BANK', tc: '#e9d7a8', font: FONT.serif, interior: 'bank', shutter: false, frame: '#1f2a3a' },
    pizza: { w: 16, ppm: 30, wall: '#5f4335', fascia: '#1f6e3a', text: "TONY'S PIZZA", tc: '#fff', font: FONT.black, interior: 'pizza', shutter: true, trim: '#c81e1e' },
    hotel: { w: 18, ppm: 32, wall: '#b9a98a', fascia: '#1d3b2f', text: 'HOTEL MAJESTIC', tc: '#e9cf8a', font: FONT.serif, interior: 'hotel', shutter: false, doorW: 2.4, trim: '#c9a24a', frame: '#2a241c', door: '#5a4020' },
    laundry: { w: 16, ppm: 32, wall: '#3f7d79', fascia: '#f4f2ea', text: 'SPIN CYCLE LAUNDROMAT', tc: '#2a6fb0', font: FONT.round, interior: 'laundry', shutter: true },
    florist: { w: 14, ppm: 36, wall: '#8e4636', fascia: '#f4efe4', text: 'PETAL & STEM', tc: '#3f7a4f', font: FONT.serif, interior: 'florist', shutter: true, trim: '#3f7a4f' },
    diner: { w: 12, ppm: 40, wall: '#c9cfd4', fascia: '#c81e3c', text: 'STARLIGHT DINER', tc: '#fff', font: FONT.deco, interior: 'diner', shutter: false, trim: '#ffffff', frame: '#9aa3ab', kick: '#c81e3c', doorAt: 0.2 },
    books: { w: 13, ppm: 38, wall: '#5f4335', fascia: '#1f3b2c', text: 'PAGE TURNER BOOKS', tc: '#e9cf8a', font: FONT.serif, interior: 'books', shutter: false, trim: '#c9a24a' },
    donuts: { w: 14, ppm: 40, wall: '#f1b0c3', fascia: '#ff6fa6', text: 'DOZEN DELUXE DONUTS', tc: '#fff', font: FONT.round, interior: 'donuts', shutter: true, trim: '#ffffff', frame: '#ffffff', kick: '#ff6fa6', door: '#ffffff' },
    cinema: { w: 13, ppm: 38, wall: '#e0d1ae', fascia: '#1a1a2e', text: 'ROXY', tc: '#ffd34d', font: FONT.deco, interior: 'generic', shutter: true },
    bakery: { w: 13, ppm: 38, wall: '#8e4636', fascia: '#f6e7b8', text: 'SUNRISE BAKERY', tc: '#c0392b', font: FONT.serif, interior: 'bakery', shutter: true, trim: '#f2b134' },
    mart: { w: 14, ppm: 36, wall: '#8e4636', fascia: '#ffffff', text: '24/7 MART', tc: '#d12f2f', font: FONT.black, interior: 'mart', shutter: false, trim: '#2a6fb0', open: true },
    tower: { w: 20, ppm: 26, wall: '#4a5a66', fascia: '#24313b', text: 'CITY TOWER', tc: '#dfe8ef', font: FONT.sans, interior: 'tower', shutter: false, doorW: 3, frame: '#1a2229' },
    hardware: { w: 22, ppm: 24, wall: '#8e8e8a', fascia: '#c0392b', text: 'ACE HARDWARE & PAINT', tc: '#fff', font: FONT.black, interior: 'hardware', shutter: true },
    cafe: { w: 28, ppm: 22, wall: '#5f4335', fascia: '#2b3a55', text: 'CORNER CAFE', tc: '#f4e3c3', font: FONT.serif, interior: 'cafe', shutter: true, trim: '#c9a24a' },
    genA: { w: 22, ppm: 22, wall: '#9d9c97', fascia: '#3f4f5f', text: 'PHARMACY', tc: '#9fe3b0', font: FONT.sans, interior: 'generic', shutter: true },
    genB: { w: 22, ppm: 22, wall: '#7a5a48', fascia: '#e9e2d0', text: 'SHOES & REPAIR', tc: '#5a2a2a', font: FONT.serif, interior: 'generic', shutter: true },
    genC: { w: 22, ppm: 22, wall: '#cdbf9f', fascia: '#5a2a3a', text: 'GALLERY 9', tc: '#fff', font: FONT.sans, interior: 'generic', shutter: true },
  };
}

function paintShop(x, W, H, o, night) {
  const L = shopBase(x, W, H, o);
  const interior = INTERIORS[o.interior];
  shopWindows(x, W, H, L, o, night, interior);
  // the sign
  const lit = night && (o.key === 'mart' || o.key === 'diner');
  txt(x, o.text, W / 2, L.fy + L.fh / 2 + 1, W * 0.86, o.font(Math.round(L.fh * 0.62)), night && !lit ? shade(o.tc) : o.tc, { shadow: 'rgba(0,0,0,0.35)', sd: 2 });
  if (night && o.shutter && o.key === 'donuts') {
    rrect(x, W * 0.62, H * 0.5, W * 0.2, H * 0.2, 6); x.fillStyle = '#ffffff'; x.fill();
    txt(x, 'CLOSED', W * 0.72, H * 0.57, W * 0.18, FONT.black(14), '#c81e3c');
    txt(x, 'see you at 6am!', W * 0.72, H * 0.65, W * 0.18, FONT.sans(10, 'normal'), '#333');
  }
  if (o.key === 'cinema') {
    // poster cases
    for (const px of [0.12, 0.88]) {
      x.fillStyle = '#c9a24a'; x.fillRect(W * px - 26, H * 0.4, 52, H * 0.5);
      x.fillStyle = px < 0.5 ? '#2f7a3f' : '#c9a24a';
      x.fillRect(W * px - 22, H * 0.42, 44, H * 0.46);
      x.fillStyle = px < 0.5 ? '#9be36b' : '#5a3a1e';
      if (px < 0.5) { x.beginPath(); x.ellipse(W * px, H * 0.62, 14, 10, 0, 0, TAU); x.fill(); x.fillRect(W * px + 6, H * 0.52, 8, 12); }
      else { x.fillStyle = '#e8dcc0'; x.fillRect(W * px - 8, H * 0.5, 16, 30); x.fillStyle = '#ff7eb6'; x.beginPath(); x.arc(W * px, H * 0.78, 8, 0, TAU); x.fill(); }
      txt(x, px < 0.5 ? 'DINO-MITE!' : 'MUMMY', W * px, H * 0.46, 40, FONT.black(9), '#fff');
    }
  }
}
function shade(css) { return css === '#fff' || css === '#ffffff' ? '#8d8d8d' : css; }


// ------------------------------------------------------------------ people (instanced), shared bits
// Same palette and proportions as people.js, so the crowd outside matches the visitors inside.
const SHIRTS = [0xe25555, 0x55a868, 0xf2b134, 0x8c6bd6, 0x2bb3b3, 0xf28cb1, 0xffffff, 0x333333, 0xff8a3d, 0x4f7bd9];
const PANTS = [0x2b3a55, 0x333333, 0x6b5a48, 0x1d1d1d, 0x4a6fa5];
const SKINS = [0xf1c7a4, 0xe0b18f, 0xc68e64, 0x8d5a3b, 0x5c3a24, 0xf7d9c0];
const HAIRS = [0x2b1d14, 0x111111, 0x8b5a2b, 0xd9b26a, 0x6b3b1f, 0x999999];
const ACCENTS = [0xe2445c, 0xffd34d, 0x2a6fb0, 0x3f9f4f, 0xff7eb6, 0xffffff, 0xff8a3d];
const CONF = [0xff4f7a, 0xffd34d, 0x5fd0ff, 0xffffff, 0x7dff6b, 0xff8a3d, 0xb86bff];
const CONF_PINK = [0xff4f7a, 0xff7eb6, 0xffffff, 0xffd9e6, 0xffd34d];
const M_IDLE = 0, M_WALK = 1, M_WAVE = 2, M_CHEER = 3, M_CLAP = 4, M_POINT = 5, M_MARCH = 6, M_SIT = 7, M_HOLD = 8;
const TGT = new Float32Array(17);
const _sph = new THREE.Sphere();
const PJ = {
  root: new THREE.Matrix4(), hips: new THREE.Matrix4(), torso: new THREE.Matrix4(), head: new THREE.Matrix4(), tmp: new THREE.Matrix4(),
  sh: [new THREE.Matrix4(), new THREE.Matrix4()], el: [new THREE.Matrix4(), new THREE.Matrix4()],
  hip: [new THREE.Matrix4(), new THREE.Matrix4()], knee: [new THREE.Matrix4(), new THREE.Matrix4()],
};
const _jm = new THREE.Matrix4(), _je = new THREE.Euler();
// out = parent × translate(t) × rotate(Euler XYZ r) — a joint, like a THREE.Group with position + rotation
function jmul(out, parent, tx, ty, tz, rx, ry, rz) {
  _je.set(rx, ry, rz);
  _jm.makeRotationFromEuler(_je);
  const e = _jm.elements;
  e[12] = tx; e[13] = ty; e[14] = tz;
  return out.multiplyMatrices(parent, _jm);
}
function angleTo(a, b) {
  let d = (b - a) % TAU;
  if (d > PI) d -= TAU;
  if (d < -PI) d += TAU;
  return d;
}
// pieces: [geometry, color slot (0 = its own color), color, x, y, z, sx, sy, sz, rx, ry, rz]
const S_SHIRT = 1, S_PANTS = 2, S_SKIN = 3, S_HAIR = 4, S_SLEEVE = 5, S_ACC = 6;
function partGeo(list) {
  const parts = list.map(([g0, slot, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0]) => {
    const g = g0.clone();
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
    g.applyMatrix4(_m);
    paint(g, color == null ? 0xffffff : color);
    g.setAttribute('slot', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count).fill(slot), 1));
    g.deleteAttribute('uv');
    return g;
  });
  return mergeGeometries(parts, false);
}
// two sets of body parts, like the two looks of people.js / people-classic.js (the "Characters" setting)
const PART_SETS = {};
function personParts(fresh) {
  const key = fresh ? 'new' : 'classic';
  if (PART_SETS[key]) return PART_SETS[key];
  const PARTS = (PART_SETS[key] = {});
  // (a little lower-poly than people.js: limbs are 6-sided, and there can be 60 of them on screen)
  const caps = (r, l, c, n) => baseGeo(`caps${r}_${l}_${c}_${n}`, () => new THREE.CapsuleGeometry(r, l, c, n));
  const limb = (r, l) => baseGeo(`limb${r}_${l}`, () => new THREE.CylinderGeometry(r, r * 0.88, l + r * 1.3, 6));
  // hair: a cap that stops at the forehead, and a back-and-sides piece that comes down to the ears
  const hairTop = baseGeo('hairTop', () => new THREE.SphereGeometry(0.145, 10, 3, 0, TAU, 0, PI * 0.36));
  const hairBack = baseGeo('hairBack', () => new THREE.SphereGeometry(0.145, 9, 4, PI * 0.8, PI * 1.4, 0, PI * 0.62));
  const smile = baseGeo('smile', () => new THREE.SphereGeometry(0.5, 8, 3, 0, TAU, PI / 2, PI / 2));
  PARTS.torso = partGeo([
    [caps(0.18, 0.3, 1, 8), S_SHIRT, null, 0, 0.27, 0, 1.05, 1, 0.72],
    [GEO.box(), 0, 0x111111, 0, 0.02, 0, 0.36, 0.06, 0.24],
    [GEO.cyl(5), S_SKIN, null, 0, 0.6, 0, 0.115, 0.1, 0.115],
    [GEO.box(), S_PANTS, null, 0, -0.08, 0, 0.34, 0.2, 0.21],
  ]);
  // the new face matches people.js: dark eyes with a glint, brows, a nose and a little half-moon smile
  const quad = GEO.plane();
  const head = fresh ? [
    [GEO.sph(9, 7), S_SKIN, null, 0, 0.12, 0, 0.27 * 0.95, 0.27 * 1.08, 0.27],
    ...[-1, 1].flatMap((s) => [
      [GEO.sph(6, 4), 0, 0x1c1820, s * 0.046, 0.135, 0.121, 0.022, 0.03, 0.014, 0, s * 0.33, 0],
      [GEO.sph(4, 3), 0, 0xffffff, s * 0.046 + 0.006, 0.143, 0.127, 0.007, 0.007, 0.007],
      [GEO.box(), S_HAIR, null, s * 0.047, 0.178, 0.112, 0.042, 0.01, 0.012, 0, s * 0.35, s * -0.08],
    ]),
    [GEO.sph(5, 4), S_SKIN, null, 0, 0.1, 0.133, 0.04, 0.044, 0.04],
    [smile, 0, 0x5a2028, 0, 0.078, 0.124, 0.05, 0.026, 0.02, 0.42, 0, 0],
    [hairTop, S_HAIR, null, 0, 0.13, -0.012],
    [hairBack, S_HAIR, null, 0, 0.13, -0.012],
  ] : [
    [GEO.sph(9, 7), S_SKIN, null, 0, 0.12, 0, 0.27 * 0.95, 0.27 * 1.08, 0.27],
    [quad, 0, 0x111111, -0.048, 0.14, 0.137, 0.034, 0.038, 1],
    [quad, 0, 0x111111, 0.048, 0.14, 0.137, 0.034, 0.038, 1],
    [GEO.ico(0), S_SKIN, null, 0, 0.1, 0.135, 0.046, 0.046, 0.046],
    [quad, 0, 0x5a2a2a, 0, 0.055, 0.126, 0.05, 0.014, 1],
    [hairTop, S_HAIR, null, 0, 0.13, -0.012],
    [hairBack, S_HAIR, null, 0, 0.13, -0.012],
  ];
  PARTS.headS = partGeo(head);
  PARTS.headL = partGeo([...head, fresh ? [GEO.sph(8, 5), S_HAIR, null, 0, 0.03, -0.07, 0.27, 0.34, 0.13] : [GEO.box(), S_HAIR, null, 0, 0, -0.09, 0.26, 0.28, 0.08]]);
  PARTS.uarm = partGeo([[limb(0.058, 0.2), S_SHIRT, null, 0, -0.14, 0]]);
  PARTS.farm = partGeo([[limb(0.052, 0.19), S_SLEEVE, null, 0, -0.13, 0], fresh ? [GEO.sph(6, 4), S_SKIN, null, 0, -0.28, 0, 0.11, 0.12, 0.1] : [GEO.ico(0), S_SKIN, null, 0, -0.28, 0, 0.12, 0.12, 0.12]]);
  PARTS.thigh = partGeo([[limb(0.075, 0.3), S_PANTS, null, 0, -0.21, 0]]);
  PARTS.shin = partGeo([[limb(0.066, 0.3), S_PANTS, null, 0, -0.2, 0], ...(fresh
    ? [[GEO.sph(8, 5), S_ACC, null, 0, -0.415, 0.045, 0.115, 0.08, 0.25], [GEO.cyl(10), 0, 0xe9e4da, 0, -0.443, 0.05, 0.125, 0.026, 0.265]] // a sneaker in the accent color on a light sole
    : [[GEO.box(), 0, 0x151515, 0, -0.42, 0.05, 0.11, 0.07, 0.25]])]);
  // things people wear and carry
  const coneB = baseGeo('bellcone', () => new THREE.ConeGeometry(0.5, 1, 12, 1, true));
  const taper = baseGeo('shakoBody', () => new THREE.CylinderGeometry(0.46, 0.5, 1, 12));
  PARTS.shako = partGeo([
    [taper, S_ACC, null, 0, 0.33, 0, 0.27, 0.26, 0.27],
    [GEO.cyl(12), 0, 0xd4a72c, 0, 0.215, 0, 0.28, 0.04, 0.28],
    [GEO.box(), 0, 0x161616, 0, 0.21, 0.13, 0.2, 0.02, 0.1],
    [GEO.cone(6), 0, 0xd01818, 0, 0.54, 0, 0.07, 0.16, 0.07],
  ]);
  PARTS.cap = partGeo([
    [GEO.dome(10, 4), S_ACC, null, 0, 0.19, 0, 0.296 * 1.04, 0.296 * 0.62, 0.296 * 1.08],
    [GEO.halfCyl(10), S_ACC, null, 0, 0.185, 0.12, 0.242, 0.014, 0.264],
  ]);
  PARTS.drum = partGeo([
    [GEO.cyl(12), 0, 0xf4f4f4, 0, 0, 0, 0.38, 0.16, 0.38],
    [GEO.cyl(12), 0, 0xc81e1e, 0, 0.07, 0, 0.4, 0.03, 0.4],
    [GEO.cyl(12), 0, 0xc81e1e, 0, -0.07, 0, 0.4, 0.03, 0.4],
  ]);
  PARTS.bell = partGeo([
    [GEO.cyl(6), 0, 0xd4a72c, 0, 0, 0.15, 0.036, 0.3, 0.036, PI / 2, 0, 0],
    [coneB, 0, 0xd4a72c, 0, 0, 0.36, 0.16, 0.16, 0.16, -PI / 2, 0, 0],
    [GEO.box(), 0, 0xb88f2a, 0, -0.03, 0.12, 0.05, 0.06, 0.06],
  ]);
  PARTS.stick = partGeo([[GEO.cyl(5), 0, 0xe8d5b0, 0, -0.2, 0, 0.024, 0.4, 0.024], [GEO.sph(5, 4), 0, 0xd4a72c, 0, -0.4, 0, 0.05, 0.05, 0.05]]);
  PARTS.flag = partGeo([[GEO.cyl(4), 0, 0x6b4a2c, 0, -0.22, 0, 0.016, 0.5, 0.016], [GEO.box(), S_ACC, null, 0, -0.38, 0.12, 0.006, 0.15, 0.24]]);
  PARTS.balloon = partGeo([[GEO.cyl(3), 0, 0xf4f4f4, 0, 0.25, 0.08, 0.008, 1.0, 0.008], [GEO.sph(10, 8), S_ACC, null, 0, 0.82, 0.08, 0.32, 0.38, 0.32]]);
  return PARTS;
}

// ------------------------------------------------------------------ the city
export class City {
  constructor(level, { night = false, rng = mulberry32(1974) } = {}) {
    const t0 = performance.now();
    this.level = level;
    this.game = level.game;
    this.night = !!night;
    this.rng = rng;
    this.t = 0;
    this.onParadeStart = null;
    this.onParadeEnd = null;
    this.root = new THREE.Group();
    this.root.name = 'city';
    // the city merges its own static meshes, and hides itself when you can't see it: the museum's
    // static batching must leave the whole subtree alone
    this.root.userData.dynamic = true;
    level.scene.add(this.root);
    const lvlDispose = level.dispose.bind(level);
    level.dispose = () => { this.dispose(); lvlDispose(); };
    this.lamps = [];      // streetlamp bulbs { x, y, z, kind }
    this.disposables = [];
    this.colliders = [];
    this._frustum = new THREE.Frustum();
    this._pv = new THREE.Matrix4();
    this._openings = [
      new THREE.Box3(new THREE.Vector3(-9.6, 0, 9.7), new THREE.Vector3(-5.4, 6.6, 10.4)),
      new THREE.Box3(new THREE.Vector3(-3.1, 0, 9.7), new THREE.Vector3(3.1, 4.3, 10.4)),
      new THREE.Box3(new THREE.Vector3(5.4, 0, 9.7), new THREE.Vector3(9.6, 6.6, 10.4)),
    ];

    this._textures();
    this._materials();
    this.bags = { vc: new Bag(), glow: new Bag(), shop: new Bag(), stone: new Bag(), lit: new Bag() };
    this.styleBags = {};
    for (const k of Object.keys(STYLES)) this.styleBags[k] = new Bag();
    this.groundBags = { paving: new Bag(), walk: new Bag(), street: new Bag(), lawn: new Bag() };

    this._ground();
    this._museumFront();
    this._plaza();
    this._streetFurniture();
    this._buildings();
    this._parkedCars();
    this._dayDecor();
    this._flush();
    this._sky();
    // light quads + glows (signals, car lights; at night also windows, lamps, the diner...)
    this._lightTex();
    this._glowMeshes();
    this.litDyn = this._quadInstances(64, this.litTex, true, true);
    this.litDyn.max = 64;
    this.litDyn.mesh.name = 'city-lights';
    this.root.add(this.litDyn.mesh);
    if (this.night) this._nightLights();
    this.brokenLamp = this.lamps.find((l) => l.broken) || null;
    this._traffic();
    this._blobs();
    // the morning: people, the parade, and the plaza you can walk on
    this.autoParade = !this.night;
    this.paradeTriggerZ = 4;
    if (!this.night) {
      this._crowdInit();
      this._populate();
      this._paradeInit();
      this._dayColliders();
    }
    this.buildMs = performance.now() - t0; // (how long building the city took)
  }

  // ---------------------------------------------------------------- textures & materials
  _textures() {
    const n = this.night;
    // facade tiles
    this.styleTex = {};
    let seed = 11;
    for (const [k, st] of Object.entries(STYLES)) {
      const t = canvasTexture(paintStyle(st, n, seed++));
      this.styleTex[k] = t;
    }
    // ground
    this.groundTex = { paving: canvasTexture(this._paintPaving()), walk: canvasTexture(this._paintSidewalk()), street: canvasTexture(this._paintAsphalt()), lawn: canvasTexture(this._paintLawn()) };
    this.museumStoneTex = canvasTexture(this._paintMuseumStone());
    // shop fronts and signs
    const A = (this.atlas = new Atlas(2048, 2048));
    this.shops = shopSpecs();
    // tall items first (the packer fills rows)
    this._paintSigns(A, 'first'); // (the full-width one goes in first)
    this._paintSigns(A, 'tall');
    for (const [key, o] of Object.entries(this.shops)) {
      o.key = key;
      o.rect = A.add('shop_' + key, o.w * o.ppm, SHOP_H * o.ppm, (x, W, H) => paintShop(x, W, H, { ...o, ppm: o.ppm }, n));
    }
    this._paintSigns(A, 'wide');
    this.atlasTex = canvasTexture(A.canvas);
    this.atlasTex.wrapS = this.atlasTex.wrapT = THREE.ClampToEdgeWrapping;
    this.disposables.push(this.atlasTex, this.museumStoneTex, ...Object.values(this.groundTex), ...Object.values(this.styleTex));
  }

  _materials() {
    const n = this.night;
    const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0, ...o });
    this.mats = {
      vc: std({ vertexColors: true, roughness: 0.75 }),
      glow: new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }),
      shop: std({ map: this.atlasTex, roughness: 0.7 }),
      stone: std({ map: this.museumStoneTex, roughness: 0.8 }),
    };
    this.styleMats = {};
    for (const k of Object.keys(STYLES)) this.styleMats[k] = std({ map: this.styleTex[k], roughness: k === 'glass' ? 0.35 : 0.85, metalness: k === 'glass' ? 0.25 : 0 });
    this.groundMats = {
      paving: std({ map: this.groundTex.paving, roughness: 0.8 }),
      walk: std({ map: this.groundTex.walk, roughness: 0.9 }),
      street: std({ map: this.groundTex.street, roughness: n ? 0.55 : 0.9 }),
      lawn: std({ map: this.groundTex.lawn, roughness: 1 }),
    };
    if (!n) {
      // the morning sun hits the plaza and the museum's front head-on (there are no shadows): tone them down
      this.groundMats.paving.color.setScalar(0.74);
      this.groundMats.walk.color.setScalar(0.84);
      this.mats.stone.color.setScalar(0.78);
    }
    if (n) {
      // a dark city: everything a little darker than the museum inside, except what's lit
      for (const m of Object.values(this.groundMats)) m.color.setScalar(0.4);
      for (const m of Object.values(this.styleMats)) m.color.setScalar(0.42);
      this.mats.shop.color.setScalar(0.68);
      this.mats.vc.color.setScalar(0.62);
      this.mats.stone.color.setScalar(0.7);
      // the streetlamps' light on the ground and on the buildings is painted, not computed
      this.groundLM = this._paintGroundLightmap();
      this.facadeLM = this._paintFacadeLightmap();
      for (const m of Object.values(this.groundMats)) { m.lightMap = this.groundLM; m.lightMapIntensity = 6.5; }
      for (const m of [...Object.values(this.styleMats), this.mats.shop]) { m.lightMap = this.facadeLM; m.lightMapIntensity = 5.0; }
      this.disposables.push(this.groundLM, this.facadeLM);
    }
  }

  _paintPaving() {
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(31);
    // big pale stone slabs (1 repeat = 4 m)
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const v = 196 + r() * 18;
      x.fillStyle = `rgb(${v},${v - 6},${v - 16})`;
      x.fillRect(i * S / 3, j * S / 3, S / 3, S / 3);
    }
    speckle(x, 0, 0, S, S, 5000, r, 0.07);
    x.fillStyle = 'rgba(60,50,40,0.45)';
    for (let i = 0; i <= 3; i++) { x.fillRect(i * S / 3 - 1, 0, 2, S); x.fillRect(0, i * S / 3 - 1, S, 2); }
    return c;
  }
  _paintSidewalk() {
    // u: 2.6 m along the street, v: across the sidewalk (curb at v = 0)
    const S = 512, [c, x] = makeCanvas(S, S), r = mulberry32(37);
    x.fillStyle = '#a7a39b'; x.fillRect(0, 0, S, S);
    speckle(x, 0, 0, S, S, 6000, r, 0.08);
    speckle(x, 0, 0, S, S, 2000, r, 0.06, false);
    x.fillStyle = 'rgba(40,40,40,0.35)';
    x.fillRect(0, 0, 2, S); x.fillRect(S / 2, 0, 2, S * 0.88); x.fillRect(0, S * 0.45, S, 2);
    // granite curb along the street edge
    x.fillStyle = '#bdb8ae'; x.fillRect(0, S * 0.9, S, S * 0.1);
    x.fillStyle = 'rgba(0,0,0,0.3)'; x.fillRect(0, S * 0.9, S, 2);
    for (let i = 0; i < 4; i++) x.fillRect(i * S / 4, S * 0.9, 2, S * 0.1);
    // gum spots and stains
    for (let i = 0; i < 26; i++) { x.fillStyle = `rgba(30,30,30,${0.08 + r() * 0.1})`; x.beginPath(); x.arc(r() * S, r() * S * 0.88, 1 + r() * 3, 0, TAU); x.fill(); }
    return c;
  }
  _paintAsphalt() {
    // u: 8 m along the street, v: the whole width (z 19.0 → 28.6, v = 0 at the near curb)
    const W = 512, H = 512, [c, x] = makeCanvas(W, H), r = mulberry32(41);
    x.fillStyle = '#3c3d3f'; x.fillRect(0, 0, W, H);
    speckle(x, 0, 0, W, H, 9000, r, 0.12);
    speckle(x, 0, 0, W, H, 5000, r, 0.06, false);
    const vz = (z) => H - ((z - Z_CURB) / (Z_FAR - Z_CURB)) * H; // canvas y for a z
    // worn darker tire tracks in each lane
    for (const lz of [CITY.laneW, CITY.laneE]) for (const o of [-0.75, 0.75]) {
      x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(0, vz(lz + o) - 10, W, 20);
    }
    // gutters
    x.fillStyle = 'rgba(0,0,0,0.2)'; x.fillRect(0, vz(Z_CURB + 0.35), W, vz(Z_CURB) - vz(Z_CURB + 0.35));
    x.fillRect(0, vz(Z_FAR), W, vz(Z_FAR - 0.35) - vz(Z_FAR));
    // double yellow center line + parking lane line
    x.fillStyle = '#d9b43a';
    x.fillRect(0, vz(22.85) - 3, W, 6); x.fillRect(0, vz(22.65) - 3, W, 6);
    x.fillStyle = '#d8d8d2';
    x.fillRect(0, vz(26.4) - 3, W, 6);
    // patches & cracks
    for (let i = 0; i < 5; i++) { x.fillStyle = `rgba(0,0,0,${0.08 + r() * 0.08})`; x.fillRect(r() * W, r() * H, 30 + r() * 60, 14 + r() * 30); }
    x.strokeStyle = 'rgba(0,0,0,0.35)'; x.lineWidth = 1;
    for (let i = 0; i < 8; i++) { x.beginPath(); let px = r() * W, py = r() * H; x.moveTo(px, py); for (let k = 0; k < 5; k++) { px += (r() - 0.5) * 40; py += (r() - 0.5) * 40; x.lineTo(px, py); } x.stroke(); }
    return c;
  }
  _paintLawn() {
    const S = 256, [c, x] = makeCanvas(S, S), r = mulberry32(43);
    x.fillStyle = '#4f7a35'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 4000; i++) { x.fillStyle = r() < 0.5 ? 'rgba(20,50,10,0.25)' : 'rgba(150,190,90,0.18)'; x.fillRect(r() * S, r() * S, 1, 2 + r() * 3); }
    return c;
  }
  _paintMuseumStone() {
    // pale limestone blocks (1 repeat = 3 m wide, 1.5 m tall)
    const W = 256, H = 128, [c, x] = makeCanvas(W, H), r = mulberry32(47);
    x.fillStyle = '#e6dcc6'; x.fillRect(0, 0, W, H);
    speckle(x, 0, 0, W, H, 2500, r, 0.06);
    for (let row = 0; row < 3; row++) {
      for (let k = 0; k < 4; k++) { const v = (r() - 0.5) * 14; x.fillStyle = `rgba(${v > 0 ? 255 : 90},${v > 0 ? 250 : 75},${v > 0 ? 235 : 50},${Math.abs(v) / 90})`; x.fillRect(((k + (row % 2) * 0.5) * W) / 4, (row * H) / 3, W / 4, H / 3); }
      x.fillStyle = 'rgba(90,75,55,0.35)';
      x.fillRect(0, (row * H) / 3, W, 1.5);
      for (let k = 0; k < 4; k++) x.fillRect(((k + (row % 2) * 0.5) * W) / 4 % W, (row * H) / 3, 1.5, H / 3);
    }
    return c;
  }

  // Night light painted onto the ground (z 8..34, x -128..128): pools under the streetlamps, spill from
  // the diner and the 24/7 store.
  _lmGround(x, z) { return [(x + 128) / 256, (z - 8) / 26]; }
  _paintGroundLightmap() {
    const W = 1024, H = 128, [c, x] = makeCanvas(W, H);
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    x.globalCompositeOperation = 'lighter';
    const px = (wx) => ((wx + 128) / 256) * W, py = (wz) => (1 - (wz - 8) / 26) * H;
    const pool = (wx, wz, rx, rz, color, a) => {
      x.save();
      x.translate(px(wx), py(wz));
      x.scale(1, (rz / 26 * H) / (rx / 256 * W));
      const R = (rx / 256) * W;
      const g = x.createRadialGradient(0, 0, 0, 0, 0, R);
      g.addColorStop(0, `rgba(${color},${a})`);
      g.addColorStop(0.35, `rgba(${color},${a * 0.55})`);
      g.addColorStop(1, `rgba(${color},0)`);
      x.fillStyle = g;
      x.beginPath(); x.arc(0, 0, R, 0, TAU); x.fill();
      x.restore();
    };
    for (const l of this._lampSpots()) {
      if (l.kind === 'cobra') pool(l.x, l.z, 8.5, 7.5, l.broken ? '120,80,40' : '255,170,80', l.broken ? 0.35 : 0.95);
      else pool(l.x, l.z, 5, 4.2, '255,214,160', 0.75);
    }
    // the diner and the 24/7 store spill light onto the sidewalk
    const spill = (x0, x1, color, a) => {
      const g = x.createLinearGradient(0, py(Z_FRONT), 0, py(Z_FRONT - 4.5));
      g.addColorStop(0, `rgba(${color},${a})`); g.addColorStop(1, `rgba(${color},0)`);
      x.fillStyle = g; x.fillRect(px(x0), py(Z_FRONT), px(x1) - px(x0), py(Z_FRONT - 4.5) - py(Z_FRONT));
    };
    spill(-31, -21, '255,190,110', 0.8);
    spill(37, 49, '200,225,255', 0.7);
    spill(-77, -66, '255,190,120', 0.35);
    x.globalCompositeOperation = 'source-over';
    // the edges stretch out past ±128 m: keep them dark
    x.fillStyle = '#000'; x.fillRect(0, 0, 3, H); x.fillRect(W - 3, 0, 3, H);
    const t = canvasTexture(c);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.channel = 1;
    return t;
  }
  // Light on the building fronts: top half = across the street (z 31.5), bottom half = the near side (z 16.4).
  // (uv 0.004, 0.25 is kept black: surfaces the lamps don't reach)
  _lmFacade(x, y, nz) { return [(x + 128) / 256, nz < 0 ? 0.5 + Math.min(1, y / 16) * 0.5 : Math.min(1, y / 16) * 0.5]; }
  _paintFacadeLightmap() {
    const W = 1024, H = 128, [c, x] = makeCanvas(W, H);
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    x.globalCompositeOperation = 'lighter';
    // 4 px per meter both ways; top half = far side, bottom half = near side
    const glow = (wx, wy, far, rx, ry, color, a) => {
      const X = ((wx + 128) / 256) * W, Y = far ? (1 - (0.5 + (wy / 16) * 0.5)) * H : (1 - (wy / 16) * 0.5) * H;
      x.save();
      x.beginPath(); x.rect(0, far ? 0 : H / 2, W, H / 2); x.clip();
      x.translate(X, Y); x.scale(1, ry / rx);
      const R = rx * 4, g = x.createRadialGradient(0, 0, 0, 0, 0, R);
      g.addColorStop(0, `rgba(${color},${a})`); g.addColorStop(0.5, `rgba(${color},${a * 0.45})`); g.addColorStop(1, `rgba(${color},0)`);
      x.fillStyle = g; x.beginPath(); x.arc(0, 0, R, 0, TAU); x.fill(); x.restore();
    };
    for (const l of this._lampSpots()) {
      if (l.kind !== 'cobra') continue;
      if (l.far) glow(l.x, 4.5, true, 9, 6, '255,165,75', l.broken ? 0.2 : 0.75);
      else if (Math.abs(l.x) > 40) glow(l.x, 4.5, false, 9, 6, '255,165,75', 0.6);
    }
    // light spilling out of the diner and the 24/7 store onto their own fronts
    glow(-26, 1.5, true, 7, 3, '255,190,110', 0.45);
    glow(43, 1.5, true, 8, 3, '200,225,255', 0.4);
    x.globalCompositeOperation = 'source-over';
    x.fillStyle = '#000'; x.fillRect(0, 0, 3, H); x.fillRect(W - 3, 0, 3, H);
    const t = canvasTexture(c);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.channel = 1;
    return t;
  }

  // ---------------------------------------------------------------- signs, banners
  _paintSigns(A, phase) {
    const n = this.night;
    const S = (this.signs ||= {});
    if (phase === 'first') {
      // museum frieze: the carved name
      S.frieze = A.add('frieze', 2040, 96, (x, W, H) => {
        x.fillStyle = '#e3d8c1'; x.fillRect(0, 0, W, H);
        speckle(x, 0, 0, W, H, 3000, mulberry32(3), 0.05);
        const t = 'CITY  MUSEUM  OF  NATURAL  HISTORY';
        txt(x, t, W / 2 + 2, H / 2 + 3, W * 0.94, FONT.serif(68), 'rgba(255,255,255,0.7)');
        txt(x, t, W / 2 - 1, H / 2 - 1, W * 0.94, FONT.serif(68), 'rgba(60,45,25,0.85)');
        txt(x, t, W / 2, H / 2, W * 0.94, FONT.serif(68), '#8a7a5e');
      });
      return;
    }
    if (phase === 'tall') {
      // museum banners (hang on the wings)
      const ban = (key, title, sub, bg, fg, icon) => {
        S[key] = A.add(key, 120, 400, (x, W, H) => {
          x.fillStyle = bg; x.fillRect(0, 0, W, H);
          x.fillStyle = fg; x.fillRect(6, 6, W - 12, 4); x.fillRect(6, H - 10, W - 12, 4);
          icon(x, W / 2, H * 0.3, fg);
          x.save(); x.translate(W / 2, H * 0.68); x.rotate(-PI / 2);
          txt(x, title, 0, -6, H * 0.5, FONT.black(30), fg);
          x.restore();
          txt(x, sub, W / 2, H * 0.94, W * 0.85, FONT.sans(13), fg);
        });
      };
      ban('ban_dino', 'DINOSAURS', 'NOW OPEN', '#2f6b3a', '#f4e8c4', (x, cx, cy, c) => {
        x.fillStyle = c; x.beginPath(); x.ellipse(cx, cy, 34, 22, 0, 0, TAU); x.fill();
        x.fillStyle = '#2f6b3a'; x.beginPath(); x.arc(cx + 10, cy - 6, 5, 0, TAU); x.fill();
        x.fillStyle = c; for (let k = 0; k < 5; k++) { x.beginPath(); x.moveTo(cx - 24 + k * 10, cy + 14); x.lineTo(cx - 20 + k * 10, cy + 26); x.lineTo(cx - 16 + k * 10, cy + 14); x.fill(); }
      });
      ban('ban_egypt', 'ANCIENT EGYPT', 'NEW WING', '#c9962e', '#1f2a55', (x, cx, cy, c) => { x.fillStyle = c; x.beginPath(); x.moveTo(cx - 40, cy + 30); x.lineTo(cx, cy - 34); x.lineTo(cx + 40, cy + 30); x.fill(); });
      ban('ban_rome', 'ROMAN EMPIRE', 'ALL ROADS', '#8a1022', '#f2d27a', (x, cx, cy, c) => {
        x.strokeStyle = c; x.lineWidth = 6; x.beginPath(); x.arc(cx, cy, 30, PI * 0.15, PI * 0.85, true); x.stroke();
        for (let k = 0; k < 7; k++) { const a = PI * (1.15 + k * 0.1); x.fillStyle = c; x.beginPath(); x.ellipse(cx + Math.cos(a) * 30, cy + Math.sin(a) * 30, 7, 3, a, 0, TAU); x.fill(); }
      });
      ban('ban_50', '50 YEARS', '1974 – 2024', '#1f3d8a', '#ffd34d', (x, cx, cy, c) => { txt(x, '50', cx, cy, 100, FONT.black(64), c); });
      // vertical blade signs
      S.blade_hotel = A.add('blade_hotel', 90, 420, (x, W, H) => {
        x.fillStyle = '#1d3b2f'; x.fillRect(0, 0, W, H); x.strokeStyle = '#c9a24a'; x.lineWidth = 6; x.strokeRect(5, 5, W - 10, H - 10);
        const L = 'HOTEL'; for (let i = 0; i < L.length; i++) txt(x, L[i], W / 2, 48 + i * 78, W * 0.8, FONT.serif(62), n ? '#7d6a3a' : '#f2d27a');
      });
      S.blade_roxy = A.add('blade_roxy', 110, 420, (x, W, H) => {
        x.fillStyle = '#1a1a2e'; x.fillRect(0, 0, W, H);
        for (let i = 0; i < 18; i++) { x.fillStyle = n ? '#5a5030' : '#fff6c0'; x.beginPath(); x.arc(10, 12 + i * 23.5, 3.5, 0, TAU); x.arc(W - 10, 12 + i * 23.5, 3.5, 0, TAU); x.fill(); }
        const L = 'ROXY'; for (let i = 0; i < L.length; i++) txt(x, L[i], W / 2, 62 + i * 98, W * 0.7, FONT.deco(84), n ? '#6a5a20' : '#ffd34d', { stroke: '#c81e3c', lw: 5 });
      });
      S.pole_banner = A.add('pole_banner', 96, 256, (x, W, H) => {
        x.fillStyle = '#1f3d8a'; x.fillRect(0, 0, W, H);
        txt(x, 'CITY', W / 2, H * 0.14, W * 0.8, FONT.black(24), '#fff');
        txt(x, 'MUSEUM', W / 2, H * 0.27, W * 0.85, FONT.black(20), '#fff');
        txt(x, '50', W / 2, H * 0.58, W * 0.9, FONT.black(86), '#ffd34d');
        txt(x, 'YEARS!', W / 2, H * 0.86, W * 0.85, FONT.black(22), '#ff7eb6');
      });
      S.busad = A.add('busad', 170, 300, (x, W, H) => {
        vgrad(x, 0, 0, W, H, [[0, '#1a1030'], [1, '#3a1a4a']]);
        x.fillStyle = '#d8ccb0';
        x.beginPath(); x.ellipse(W * 0.5, H * 0.42, W * 0.36, H * 0.13, -0.2, 0, TAU); x.fill();
        x.fillStyle = '#1a1030'; x.beginPath(); x.arc(W * 0.62, H * 0.38, 7, 0, TAU); x.fill();
        x.fillStyle = '#d8ccb0'; for (let k = 0; k < 6; k++) { x.beginPath(); x.moveTo(W * 0.25 + k * 14, H * 0.5); x.lineTo(W * 0.28 + k * 14, H * 0.58); x.lineTo(W * 0.31 + k * 14, H * 0.5); x.fill(); }
        txt(x, 'THE T-REX', W / 2, H * 0.12, W * 0.9, FONT.black(26), '#ffd34d');
        txt(x, 'IS BACK!', W / 2, H * 0.22, W * 0.9, FONT.black(26), '#ffd34d');
        txt(x, 'CITY MUSEUM', W / 2, H * 0.78, W * 0.9, FONT.serif(22), '#fff');
        txt(x, 'of Natural History', W / 2, H * 0.86, W * 0.9, FONT.serif(15, 'italic'), '#fff');
      });
    } else {
      S.pediment = A.add('pediment', 640, 110, (x, W, H) => {
        x.fillStyle = '#ddd1b8'; x.fillRect(0, 0, W, H);
        // a carved ammonite + two dinosaurs facing it
        x.strokeStyle = '#a8977a'; x.lineWidth = 5;
        x.beginPath(); for (let a = 0; a < 14; a += 0.1) { const rr = 3 + a * 2.6; x.lineTo(W / 2 + Math.cos(a) * rr, H * 0.6 + Math.sin(a) * rr); } x.stroke();
        x.fillStyle = '#b4a486';
        for (const sd of [-1, 1]) {
          x.save(); x.translate(W / 2 + sd * 150, H * 0.66); x.scale(sd, 1);
          x.beginPath(); x.ellipse(0, 0, 60, 18, 0, 0, TAU); x.fill();
          x.beginPath(); x.moveTo(-40, -8); x.quadraticCurveTo(-70, -60, -48, -66); x.lineTo(-38, -60); x.quadraticCurveTo(-48, -40, -26, -12); x.fill();
          x.beginPath(); x.moveTo(50, 0); x.lineTo(120, 20); x.lineTo(50, 12); x.fill();
          x.fillRect(-20, 10, 8, 24); x.fillRect(16, 10, 8, 24);
          x.restore();
        }
      });
      S.est = A.add('est', 420, 70, (x, W, H) => {
        x.fillStyle = '#ddd1b8'; x.fillRect(0, 0, W, H);
        x.strokeStyle = '#a8977a'; x.lineWidth = 3; x.strokeRect(5, 5, W - 10, H - 10);
        txt(x, 'EST.  MCMLXXIV', W / 2 + 1, H / 2 + 2, W * 0.86, FONT.serif(40), 'rgba(255,255,255,0.7)');
        txt(x, 'EST.  MCMLXXIV', W / 2, H / 2, W * 0.86, FONT.serif(40), '#7d6c50');
      });
      // the cinema marquee
      S.marquee = A.add('marquee', 640, 120, (x, W, H) => {
        x.fillStyle = n ? '#3a3628' : '#fffbe8'; x.fillRect(0, 0, W, H);
        x.fillStyle = '#1a1a2e'; x.fillRect(0, 0, W, 12); x.fillRect(0, H - 12, W, 12);
        for (let i = 0; i < 26; i++) { x.fillStyle = n ? '#4a4020' : '#ffd34d'; x.beginPath(); x.arc(12 + i * 24.4, 6, 3.5, 0, TAU); x.arc(12 + i * 24.4, H - 6, 3.5, 0, TAU); x.fill(); }
        txt(x, 'NOW SHOWING', W / 2, 30, W * 0.6, FONT.black(18), n ? '#222' : '#c81e3c');
        txt(x, 'RAPTOR RUN  ·  NIGHT OF THE MUMMY', W / 2, 62, W * 0.92, FONT.black(30), n ? '#1a1a1a' : '#111');
        txt(x, 'MUSEUM NIGHT  SAT 7PM', W / 2, 92, W * 0.7, FONT.black(18), n ? '#222' : '#1f3d8a');
      });
      S.diner_sign = A.add('diner_sign', 512, 128, (x, W, H) => {
        x.fillStyle = '#1b1b22'; rrect(x, 0, 0, W, H, 24); x.fill();
        x.strokeStyle = '#c9cfd4'; x.lineWidth = 6; rrect(x, 4, 4, W - 8, H - 8, 22); x.stroke();
        txt(x, 'Starlight', W * 0.42, H * 0.42, W * 0.7, FONT.script(70), n ? '#5a2030' : '#ff4f7a');
        txt(x, 'DINER', W * 0.5, H * 0.8, W * 0.5, FONT.deco(34), n ? '#20405a' : '#5fd0ff');
        x.fillStyle = n ? '#5a5020' : '#ffd34d';
        for (const [sx, sy, sr] of [[W * 0.86, H * 0.3, 12], [W * 0.92, H * 0.6, 7], [W * 0.08, H * 0.7, 8]]) { x.beginPath(); for (let k = 0; k < 10; k++) { const a = (k / 10) * TAU - PI / 2, rr = k % 2 ? sr * 0.45 : sr; x.lineTo(sx + Math.cos(a) * rr, sy + Math.sin(a) * rr); } x.fill(); }
      });
      S.billboard = A.add('billboard', 512, 200, (x, W, H) => {
        vgrad(x, 0, 0, W, H, [[0, '#ffd9e6'], [1, '#ff9fc2']]);
        x.fillStyle = '#d49a5c'; x.beginPath(); x.arc(W * 0.8, H * 0.55, 70, 0, TAU); x.fill();
        x.fillStyle = '#ff6fa6'; x.beginPath(); x.arc(W * 0.8, H * 0.52, 62, 0, TAU); x.fill();
        x.fillStyle = '#ffd9e6'; x.beginPath(); x.arc(W * 0.8, H * 0.52, 20, 0, TAU); x.fill();
        const sc = ['#fff', '#7ad3ff', '#ffd34d', '#7dff6b'];
        for (let k = 0; k < 22; k++) { const a = k * 2.4, rr = 30 + (k % 3) * 9; x.fillStyle = sc[k % 4]; x.save(); x.translate(W * 0.8 + Math.cos(a) * rr, H * 0.52 + Math.sin(a) * rr); x.rotate(a); x.fillRect(-5, -1.5, 10, 3); x.restore(); }
        txt(x, 'DOZEN DELUXE', W * 0.34, H * 0.3, W * 0.6, FONT.black(40), '#b3125a');
        txt(x, 'a dozen reasons', W * 0.34, H * 0.55, W * 0.6, FONT.serif(28, 'italic'), '#5a1030');
        txt(x, 'to get up in the morning', W * 0.34, H * 0.72, W * 0.6, FONT.serif(22, 'italic'), '#5a1030');
      });
      S.street_sign = A.add('street_sign', 256, 48, (x, W, H) => {
        x.fillStyle = '#1f6e3a'; rrect(x, 0, 0, W, H, 8); x.fill();
        x.strokeStyle = '#fff'; x.lineWidth = 2; rrect(x, 3, 3, W - 6, H - 6, 6); x.stroke();
        txt(x, 'MUSEUM AVE', W / 2, H / 2 + 1, W * 0.86, FONT.sans(30), '#fff');
      });
      S.bus_sign = A.add('bus_sign', 64, 96, (x, W, H) => {
        x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
        x.fillStyle = '#1f5fbf'; x.fillRect(0, 0, W, H * 0.4);
        txt(x, 'BUS', W / 2, H * 0.2, W * 0.8, FONT.black(20), '#fff');
        txt(x, '12', W / 2, H * 0.55, W * 0.8, FONT.black(24), '#111');
        txt(x, 'MUSEUM', W / 2, H * 0.82, W * 0.9, FONT.sans(11), '#111');
      });
      S.newspaper = A.add('newspaper', 160, 48, (x, W, H) => {
        x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
        txt(x, 'THE CITY HERALD', W / 2, H * 0.35, W * 0.9, FONT.serif(18), '#111');
        txt(x, 'MUSEUM TURNS 50', W / 2, H * 0.75, W * 0.95, FONT.sans(11), '#c81e1e');
      });
      if (!n) {
        S.viewing = A.add('viewing', 256, 96, (x, W, H) => {
          x.fillStyle = '#1f3d8a'; x.fillRect(0, 0, W, H);
          x.strokeStyle = '#ffd34d'; x.lineWidth = 4; x.strokeRect(4, 4, W - 8, H - 8);
          txt(x, 'PARADE VIEWING', W / 2, H * 0.36, W * 0.88, FONT.black(26), '#fff');
          txt(x, 'AREA  ★  SIDEWALK CLOSED', W / 2, H * 0.7, W * 0.88, FONT.black(17), '#ffd34d');
        });
        S.noparking = A.add('noparking', 256, 64, (x, W, H) => {
          x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
          x.strokeStyle = '#c81e1e'; x.lineWidth = 5; x.strokeRect(3, 3, W - 6, H - 6);
          txt(x, 'NO PARKING TODAY', W / 2, H * 0.36, W * 0.9, FONT.black(22), '#c81e1e');
          txt(x, 'PARADE ROUTE · 10 AM', W / 2, H * 0.72, W * 0.9, FONT.sans(16), '#111');
        });
        // the parade's banners and float signs
        const band = (key, W0, H0, bg, fg, edge, line1, line2, font) => {
          S[key] = A.add(key, W0, H0, (x, W, H) => {
            x.fillStyle = bg; x.fillRect(0, 0, W, H);
            x.fillStyle = edge; x.fillRect(0, 0, W, 7); x.fillRect(0, H - 7, W, 7);
            for (let i = 0; i < W; i += 46) { x.beginPath(); x.arc(i + 23, 3.5, 2.5, 0, TAU); x.arc(i + 23, H - 3.5, 2.5, 0, TAU); x.fillStyle = bg; x.fill(); }
            if (line2) {
              txt(x, line1, W / 2, H * 0.34, W * 0.9, font(Math.round(H * 0.28)), fg, { shadow: 'rgba(0,0,0,0.35)', sd: 2 });
              txt(x, line2, W / 2, H * 0.7, W * 0.92, font(Math.round(H * 0.3)), edge, { shadow: 'rgba(0,0,0,0.35)', sd: 2 });
            } else txt(x, line1, W / 2, H * 0.53, W * 0.92, font(Math.round(H * 0.5)), fg, { shadow: 'rgba(0,0,0,0.35)', sd: 3 });
          });
        };
        band('banner_parade', 800, 174, '#1f3d8a', '#ffffff', '#ffd34d', 'CITY MUSEUM OF NATURAL HISTORY', '50TH BIRTHDAY PARADE!', FONT.black);
        band('banner_museum', 768, 72, '#1f3d8a', '#ffffff', '#ffd34d', 'HAPPY 50TH, CITY MUSEUM!', null, FONT.black);
        band('banner_trex', 768, 72, '#2f8f3f', '#ffffff', '#f2d23a', 'THE KING IS BACK!  ★  DINOSAUR HALL', null, FONT.black);
        band('banner_egypt', 768, 72, '#1f3d8a', '#ffd34d', '#d4a72c', 'MUMMY MANIA  ★  EGYPTIAN WING', null, FONT.serif);
        band('banner_rome', 768, 72, '#8a1022', '#f2d27a', '#d4a72c', 'ALL ROADS LEAD TO THE MUSEUM', null, FONT.serif);
        band('banner_donut', 768, 72, '#ff6fa6', '#ffffff', '#ffffff', 'DOZEN DELUXE DONUTS  ♥  CITY MUSEUM', null, FONT.round);
        band('sweeper', 400, 86, '#f28c28', '#ffffff', '#ffffff', 'CITY CLEAN CREW', null, FONT.black);
        S.spqr = A.add('spqr', 320, 52, (x, W, H) => {
          x.fillStyle = '#8a1022'; x.fillRect(0, 0, W, H);
          x.strokeStyle = '#d4a72c'; x.lineWidth = 4; x.strokeRect(3, 3, W - 6, H - 6);
          txt(x, 'S · P · Q · R', W / 2, H / 2 + 1, W * 0.86, FONT.serif(34), '#f2d27a');
        });
      }
    }
  }

  // ---------------------------------------------------------------- lamp positions
  _lampSpots() {
    if (this._lampCache) return this._lampCache;
    const L = [];
    // cobra-head streetlamps: far side every 18 m (x = ±9, ±27...), near side every 18 m outside the plaza
    for (let x = -225; x <= 225; x += 18) L.push({ kind: 'cobra', far: true, x, pole: 28.95, z: 28.95 - 1.75, y: 7.35, broken: x === -63 });
    for (let x = -216; x <= 216; x += 18) if (Math.abs(x) >= 18) L.push({ kind: 'cobra', far: false, x, pole: 18.65, z: 18.65 + 1.75, y: 7.35 });
    // the plaza's double-globe lamps
    for (const x of [-13.4, -5.6, 5.6, 13.4]) L.push({ kind: 'globe', x, pole: 14.9, z: 14.9, y: 3.55 });
    return (this._lampCache = L);
  }

  // ---------------------------------------------------------------- ground
  _ground() {
    const G = this.groundBags;
    const flat = (bag, x0, x1, z0, z1, y, su, sv, uOff = 0, vFrom = null) => {
      const g = bag.add(GEO.plane(), null, (x0 + x1) / 2, y, (z0 + z1) / 2, x1 - x0, z1 - z0, 1, -PI / 2, 0, 0);
      const uv = g.attributes.uv, p = g.attributes.position;
      for (let i = 0; i < uv.count; i++) {
        const X = p.getX(i), Z = p.getZ(i);
        uv.setXY(i, (X + uOff) / su, vFrom != null ? vFrom(Z) : -Z / sv);
      }
      return g;
    };
    // plaza (and the gardens' paths) — 1 repeat = 4 m
    flat(G.paving, -16.4, 16.4, Z_WALL - 0.2, Z_PLAZA, 0, 4, 4); // (from the lobby floor's edge)
    // gardens
    flat(G.lawn, -44, -16.4, Z_WING, Z_PLAZA, 0.01, 4, 4);
    flat(G.lawn, 16.4, 44, Z_WING, Z_PLAZA, 0.01, 4, 4);
    // sidewalks: v = 0 at the curb
    flat(G.walk, -X_END, X_END, Z_PLAZA, Z_CURB, 0, 2.6, 1, 0, (z) => (Z_CURB - z) / (Z_CURB - Z_PLAZA) * 0.9 + 0.0);
    flat(G.walk, -X_END, X_END, Z_FAR, Z_FRONT + 0.6, 0, 2.6, 1, 0, (z) => (z - Z_FAR) / (Z_FRONT - Z_FAR) * 0.9);
    // the near side beyond the museum: sidewalk up to the buildings is the same strip
    // street
    flat(G.street, -X_END, X_END, Z_CURB, Z_FAR, Y_ST, 8, 1, 0, (z) => (z - Z_CURB) / (Z_FAR - Z_CURB));
    // curb faces
    const V = this.bags.vc;
    V.box(0, Y_ST / 2, Z_CURB + 0.02, X_END * 2, -Y_ST, 0.04, 0xb4afa5);
    V.box(0, Y_ST / 2, Z_FAR - 0.02, X_END * 2, -Y_ST, 0.04, 0xb4afa5);
    // crosswalk + stop lines
    for (let z = Z_CURB + 0.5; z < Z_FAR - 0.3; z += 1.0) V.box(0, Y_ST + 0.006, z + 0.25, 3.8, 0.012, 0.5, 0xe8e6df);
    V.box(-3.3, Y_ST + 0.006, (22.95 + 26.35) / 2, 0.4, 0.012, 26.35 - 22.95, 0xe8e6df);
    V.box(3.3, Y_ST + 0.006, (19.1 + 22.55) / 2, 0.4, 0.012, 22.55 - 19.1, 0xe8e6df);
    // manhole covers
    for (const [x, z] of [[-21, CITY.laneW], [16, CITY.laneE], [47, 22.9], [-55, CITY.laneE]]) V.cyl(x, Y_ST - 0.004, z, 0.36, 0.014, 0x2a2a2a, 14);
    // storm drains at the curbs
    for (const x of [-36, 30, -100, 96]) { V.box(x, Y_ST + 0.004, Z_CURB + 0.25, 0.9, 0.01, 0.4, 0x1c1c1c); V.box(x + 7, Y_ST + 0.004, Z_FAR - 0.25, 0.9, 0.01, 0.4, 0x1c1c1c); }
  }

  // ---------------------------------------------------------------- the museum's front
  _museumFront() {
    const V = this.bags.vc, St = this.bags.stone, Sh = this.bags.shop;
    const cream = 0xddd3bc, creamD = 0xc9bda1, dark = 0x7a6f5e;
    const stoneBox = (x, y, z, w, h, d) => worldUV(St.box(x, y, z, w, h, d, null), 3, 1.5);
    const F = Z_WALL; // front face of the lobby wall
    // cladding around the openings (doors x -3..3 to 4.2 m, windows x ±5.5..9.5 to 6.5 m)
    for (const [x0, x1] of [[-12.4, -9.5], [-5.5, -3], [3, 5.5], [9.5, 12.4]]) stoneBox((x0 + x1) / 2, 4.0, F + 0.12, x1 - x0, 8.0, 0.24);
    for (const s of [-1, 1]) stoneBox(s * 7.5, 7.25, F + 0.12, 4, 1.5, 0.24);
    stoneBox(0, 6.1, F + 0.12, 6, 3.8, 0.24);
    // window + door surrounds
    for (const s of [-1, 1]) {
      V.box(s * 7.5, 6.68, F + 0.3, 4.6, 0.36, 0.2, cream);
      V.box(s * 7.5, 6.95, F + 0.3, 0.5, 0.5, 0.24, creamD); // keystone
      for (const e of [-1, 1]) V.box(s * 7.5 + e * 2.15, 3.3, F + 0.3, 0.3, 6.6, 0.16, cream);
    }
    V.box(0, 4.42, F + 0.32, 6.8, 0.44, 0.24, cream);
    for (const e of [-1, 1]) V.box(e * 3.32, 2.2, F + 0.3, 0.34, 4.4, 0.2, cream);
    Sh.quad(0, 5.45, F + 0.25, 4.2, 0.7, 0, this.signs.est);
    // engaged columns between the openings
    for (const x of [-10.95, -4.25, 4.25, 10.95]) {
      V.box(x, 0.36 + 0.2, F + 0.45, 1.25, 0.4, 0.75, creamD);
      V.cyl(x, 0.76, F + 0.42, 0.46, 6.84, cream, 16, 0.4);
      V.box(x, 7.75, F + 0.45, 1.3, 0.5, 0.8, creamD);
      V.box(x, 7.55, F + 0.45, 1.05, 0.12, 0.7, cream);
    }
    // entablature: architrave, frieze (the name), cornice
    V.box(0, 8.22, F + 0.32, 25.2, 0.44, 0.6, cream);
    Sh.quad(0, 8.95, F + 0.63, 24.6, 1.02, 0, this.signs.frieze);
    V.box(0, 8.95, F + 0.3, 25.2, 1.04, 0.62, creamD);
    V.box(0, 9.58, F + 0.55, 25.8, 0.26, 1.15, cream);
    V.box(0, 9.82, F + 0.62, 26.2, 0.22, 1.3, creamD);
    // pediment
    const ped = (V.add(GEO.prism(), cream, 0, 9.93, F + 0.4, 25.6, 3.7, 0.8));
    void ped;
    // tympanum relief + raking cornices
    const tg = Sh.add(GEO.prism(), null, 0, 10.2, F + 0.81, 22.4, 3.0, 0.02);
    // map the relief onto the triangle (front face only matters)
    { const uv = tg.attributes.uv, p = tg.attributes.position, r = this.signs.pediment;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, r.u0 + ((p.getX(i) + 11.2) / 22.4) * (r.u1 - r.u0), r.v0 + ((p.getY(i) - 10.2) / 3.0) * (r.v1 - r.v0)); }
    const slope = Math.atan2(3.7, 12.8);
    for (const s of [-1, 1]) V.box(s * 6.3, 11.85, F + 0.9, 13.9, 0.32, 0.5, creamD, 0, 0, -s * slope);
    V.box(0, 13.7, F + 0.7, 0.9, 0.5, 0.6, cream); // acroterion
    // steps along the facade (they leave the entrance flat)
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) {
      const d = 1.2 - k * 0.4;
      V.box(s * (3.6 + 12.6) / 2, k * 0.12 + 0.06, F + d / 2, 9.0, 0.12, d, k % 2 ? 0xd8cfbb : 0xcfc5ae);
    }
    // the wings (set back 0.7 m), x ±12.4..44
    for (const s of [-1, 1]) {
      const x0 = s * 12.4, x1 = s * 44, cx = (x0 + x1) / 2, w = Math.abs(x1 - x0);
      V.box(cx, 0.55, Z_WING + 0.12, w, 1.1, 0.34, 0xb9ad94); // rusticated base
      stoneBox(cx, 4.65, Z_WING + 0.05, w, 7.1, 0.2);
      V.box(cx, 8.45, Z_WING + 0.35, w + 0.4, 0.5, 0.8, cream);
      V.box(cx, 9.05, Z_WING + 0.2, w, 0.7, 0.4, creamD);
      V.box(cx, 9.45, Z_WING + 0.25, w + 0.3, 0.14, 0.55, cream);
      // the corner where the middle block steps forward
      V.box(s * 12.55, 4.95, (Z_WING + F) / 2 + 0.1, 0.3, 9.9, F - Z_WING + 0.4, creamD);
      // tall blind windows with little pediments
      for (let k = 0; k < 7; k++) {
        const wx = s * (15.4 + k * 4.2);
        if (Math.abs(wx) > 42) continue;
        V.box(wx, 4.1, Z_WING + 0.16, 1.8, 4.2, 0.1, 0x2a3440);
        V.box(wx, 1.95, Z_WING + 0.25, 2.2, 0.16, 0.3, cream);
        V.box(wx, 6.35, Z_WING + 0.25, 2.3, 0.2, 0.3, cream);
        V.add(GEO.prism(), cream, wx, 6.45, Z_WING + 0.25, 2.5, 0.55, 0.3);
        for (const e of [-1, 1]) V.box(wx + e * 1.0, 4.1, Z_WING + 0.22, 0.2, 4.2, 0.16, cream);
      }
      // corner pavilion
      V.box(s * 42.5, 4.9, Z_WING + 0.35, 3, 9.8, 0.7, creamD);
      // banners hanging from the cornice
      const bans = s < 0 ? ['ban_dino', 'ban_50'] : ['ban_egypt', 'ban_rome'];
      bans.forEach((b, i) => {
        const bx = s * (17.5 + i * 8.4);
        V.box(bx, 7.95, Z_WING + 0.6, 1.7, 0.08, 0.08, 0x3a3a3a);
        Sh.quad(bx, 5.55, Z_WING + 0.56, 1.5, 4.8, 0, this.signs[b]);
      });
    }
    // a parapet over the wings' ends and the roofline behind the pediment (seen from far away)
    V.box(0, 10.6, F - 1.2, 25, 1.4, 2.4, 0xcfc5ae);
  }

  // ---------------------------------------------------------------- plaza
  _plaza() {
    const V = this.bags.vc, n = this.night;
    // low walls + hedges between the plaza and the gardens, hedges along the sidewalk
    for (const s of [-1, 1]) {
      V.box(s * 16.75, 0.3, (Z_WING + Z_PLAZA) / 2, 0.7, 0.6, Z_PLAZA - Z_WING, 0xc9bfa8);
      V.box(s * 16.75, 0.62, (Z_WING + Z_PLAZA) / 2, 0.8, 0.06, Z_PLAZA - Z_WING + 0.1, 0xd9cfb8);
      V.box(s * 17.6, 0.7, (Z_WING + 0.6 + Z_PLAZA) / 2, 1.0, 1.4, Z_PLAZA - Z_WING - 0.6, 0x3f6b33);
      V.box(s * 30.3, 0.55, Z_PLAZA - 0.55, 26.4, 1.1, 0.9, 0x456f36);
      // garden trees and flower beds
      for (const [tx, tz] of [[22, 12.6], [30, 13.4], [38, 12.4]]) this._tree(V, s * tx, tz, 1.25, 3 + tx);
      for (const fx of [25.8, 34]) {
        V.box(s * fx, 0.12, 13.2, 3.2, 0.24, 1.6, 0x5a3e2a);
        const r = mulberry32(fx * 7);
        for (let k = 0; k < 14; k++) V.add(GEO.ico(0), [0xe2445c, 0xf2b134, 0xf07fb0, 0xffffff][k % 4], s * fx + (r() - 0.5) * 2.8, 0.3, 13.2 + (r() - 0.5) * 1.3, 0.28, 0.28, 0.28);
      }
    }
    // double-globe lamps
    for (const l of this._lampSpots()) if (l.kind === 'globe') this._globeLamp(l);
    // benches facing the street
    for (const s of [-1, 1]) this._bench(V, s * 9.6, 15.55, 0);
    // trash + recycling
    for (const s of [-1, 1]) { this._bin(V, s * 7.7, 15.75, 0x2f4f3a); }
    // planters with small trees at the ends of the steps
    for (const s of [-1, 1]) {
      V.cyl(s * 14.4, 0, 12.0, 0.85, 0.7, 0xb9ad94, 16);
      V.cyl(s * 14.4, 0.7, 12.0, 0.92, 0.08, 0xd6caae, 16);
      V.cyl(s * 14.4, 0.62, 12.0, 0.78, 0.1, 0x3a2a1c, 12);
      this._tree(V, s * 14.4, 12.0, 0.8, 9 + s, 0.7);
    }
    // a bronze triceratops for kids to climb on
    this._statue(V, -10.2, 13.4);
    // bike rack
    for (let k = 0; k < 4; k++) V.add(GEO.torus(0.06, 6, 10, PI), 0x3a3a3a, 11.4 + k * 0.55, 0.05, 15.7, 0.7, 1.4, 0.7, 0, PI / 2, 0);
    void n;
  }

  _tree(V, x, z, s = 1, seed = 1, y0 = 0) {
    const r = mulberry32(Math.floor(seed * 1000) + 7);
    const far = Math.abs(x) > 40;
    V.cyl(x, y0, z, 0.13 * s, 2.6 * s, 0x5a4232, far ? 5 : 7, 0.08 * s);
    const greens = [0x4f7f3a, 0x5d8f44, 0x3f6e33, 0x6b9a4a];
    for (let k = 0; k < (far ? 3 : 4); k++) {
      const a = r() * TAU, d = k ? 0.6 * s : 0, rr = (k ? 0.9 : 1.2) * s * (0.85 + r() * 0.3);
      V.add(GEO.ico(far ? 0 : 1), greens[Math.floor(r() * greens.length)], x + Math.cos(a) * d, y0 + (2.9 + (k ? r() * 0.9 : 0.6)) * s, z + Math.sin(a) * d, rr * 2, rr * 1.8, rr * 2, r(), r(), 0);
    }
  }
  _bench(V, x, z, ry) {
    V.push(x, 0, z, ry);
    for (let k = 0; k < 3; k++) V.box(0, 0.45, -0.18 + k * 0.17, 2.0, 0.05, 0.13, 0x6b4a2c);
    for (let k = 0; k < 2; k++) V.box(0, 0.62 + k * 0.17, -0.3, 2.0, 0.1, 0.04, 0x6b4a2c);
    for (const e of [-0.85, 0.85]) { V.box(e, 0.22, 0, 0.06, 0.44, 0.48, 0x2a2a2a); V.box(e, 0.65, -0.3, 0.06, 0.45, 0.05, 0x2a2a2a); }
    V.pop();
  }
  _bin(V, x, z, color) {
    V.cyl(x, 0, z, 0.3, 0.95, color, 12);
    V.cyl(x, 0.95, z, 0.33, 0.08, 0x1f1f1f, 12);
  }
  _statue(V, x, z) {
    V.box(x, 0.45, z, 2.6, 0.9, 1.5, 0xb9ad94);
    V.box(x, 0.93, z, 2.75, 0.08, 1.62, 0xd6caae);
    // a bronze triceratops, its nose horn rubbed shiny by a million visitors
    const B = 0x5f4527, B2 = 0x6e5030, SH = 0xd2a659;
    V.push(x, 0.97, z, 0.35, 0.66);
    V.add(GEO.sph(12, 9), B, 0.05, 1.0, 0, 1.9, 0.98, 1.08); // body
    V.add(GEO.sph(10, 8), B, -0.55, 1.1, 0, 1.0, 0.95, 1.0); // hips
    V.add(GEO.cone(8), B, -1.4, 0.95, 0, 0.44, 1.25, 0.38, 0, 0, PI / 2 + 0.22); // tail
    for (const [lx, lz, r, h] of [[0.6, -0.34, 0.15, 0.66], [0.6, 0.34, 0.15, 0.66], [-0.58, -0.38, 0.2, 0.76], [-0.58, 0.38, 0.2, 0.76]]) {
      V.cyl(lx, 0, lz, r, h, B2, 8, r * 1.15);
      V.add(GEO.sph(8, 5), B2, lx + 0.05, 0.05, lz, r * 2.7, 0.14, r * 2.4); // foot
    }
    // head: skull, beak, frill (with knobs around its edge), brow horns, nose horn, eyes
    V.add(GEO.sph(10, 8), B2, 1.12, 1.02, 0, 0.82, 0.56, 0.54);
    V.add(GEO.cone(8), B2, 1.55, 0.88, 0, 0.27, 0.42, 0.25, 0, 0, -PI / 2 - 0.5);
    const th = PI / 2 + 0.55, fx = 0.84, fy = 1.18, fr = 0.78;
    V.add(GEO.halfDisc(), B, fx, fy, 0, fr * 2, 0.09, fr * 2, 0, 0, th);
    for (let k = 0; k <= 8; k++) {
      const a = (k / 8) * PI, sa = Math.sin(a);
      V.sph(fx + fr * sa * Math.cos(th), fy + fr * sa * Math.sin(th), fr * Math.cos(a), 0.075, B2, 6, 4);
    }
    for (const sz of [-0.16, 0.16]) {
      V.add(GEO.cone(8), B2, 1.46, 1.46, sz, 0.12, 0.8, 0.12, 0, 0, -1.0);
      V.sph(1.3, 1.12, sz * 1.3, 0.05, 0x1c140c, 6, 4);
    }
    V.add(GEO.cone(8), SH, 1.43, 1.13, 0, 0.1, 0.28, 0.1, 0, 0, -0.5);
    V.pop();
  }
  _globeLamp(l) {
    const V = this.bags.vc, n = this.night;
    const x = l.x, z = l.pole;
    V.cyl(x, 0, z, 0.2, 0.7, 0x1c1f1d, 10, 0.14);
    V.cyl(x, 0.7, z, 0.075, 2.7, 0x1c1f1d, 8);
    V.box(x, 3.3, z, 1.0, 0.07, 0.07, 0x1c1f1d);
    V.cyl(x, 3.36, z, 0.03, 0.55, 0x1c1f1d, 6);
    V.sph(x, 3.95, z, 0.07, 0x1c1f1d, 6, 4);
    for (const e of [-0.42, 0.42]) {
      V.cyl(x + e, 3.25, z, 0.07, 0.1, 0x1c1f1d, 8);
      if (n) this.bags.glow.sph(x + e, 3.55, z, 0.22, 0xffe6c0, 8, 6, 1); // lit globe
      else V.sph(x + e, 3.55, z, 0.22, 0xf4f1e8, 8, 6);
    }
    this.lamps.push({ x: x - 0.42, y: 3.55, z, kind: 'globe' }, { x: x + 0.42, y: 3.55, z, kind: 'globe' });
  }
  _cobraLamp(l) {
    const V = this.bags.vc, n = this.night;
    const dir = l.far ? -1 : 1, x = l.x, z = l.pole;
    const c = 0x3f4744, seg = Math.abs(x) > 80 ? 5 : 8;
    if (Math.abs(x) > 150) { this.lamps.push({ x, y: 7.3, z: z + dir * 1.78, kind: 'cobra', far: l.far, broken: l.broken }); return; }
    if (seg > 5) V.cyl(x, 0, z, 0.2, 0.6, c, 8, 0.15);
    V.cyl(x, seg > 5 ? 0.6 : 0, z, 0.11, seg > 5 ? 6.95 : 7.55, c, seg, 0.07);
    // arm reaching over the street
    V.box(x, 7.48, z + dir * 0.9, 0.08, 0.08, 1.85, c, 0, dir * 0.08);
    V.box(x, 7.45, z + dir * 1.78, 0.36, 0.17, 0.8, 0x5a625f);
    if (n && !l.broken) this.bags.glow.box(x, 7.34, z + dir * 1.78, 0.26, 0.04, 0.6, 0xffb35c, 0, 0, 0);
    else V.box(x, 7.35, z + dir * 1.78, 0.26, 0.04, 0.6, n ? 0x3a2a1a : 0xe6e2d6);
    this.lamps.push({ x, y: 7.3, z: z + dir * 1.78, kind: 'cobra', far: l.far, broken: l.broken });
    // festive banners on the far-side poles by day
    if (!n && l.far && Math.abs(x) < 100) {
      V.box(x, 6.6, z - 0.05, 0.05, 0.05, 0.9, 0x2a2a2a);
      this.bags.shop.quad(x, 5.6, z - 0.5, 0.8, 2.0, PI / 2, this.signs.pole_banner);
      this.bags.shop.quad(x, 5.6, z - 0.5, 0.8, 2.0, -PI / 2, this.signs.pole_banner);
    }
  }

  // ---------------------------------------------------------------- street furniture
  _streetFurniture() {
    const V = this.bags.vc, n = this.night;
    for (const l of this._lampSpots()) if (l.kind === 'cobra') this._cobraLamp(l);
    // sidewalk trees (far side and the near side beyond the museum)
    for (const x of [-198, -162, -126, -90, -54, -36, 36, 54, 90, 126, 162, 198, -18, 18]) {
      V.box(x, 0.005, 29.5, 1.2, 0.012, 1.2, 0x2a2622);
      this._tree(V, x, 29.5, 1.15, x * 0.37);
    }
    for (const x of [-207, -171, -135, -99, -63, 63, 99, 135, 171, 207]) {
      V.box(x, 0.005, 18.0, 1.2, 0.012, 1.2, 0x2a2622);
      this._tree(V, x, 18.0, 1.1, x * 0.53);
    }
    // traffic signals at the crosswalk
    this.signals = [];
    this._signal(3.0, 18.55, +1);   // for westbound cars (they come from +x)
    this._signal(-3.0, 29.05, -1);  // for eastbound cars (they come from -x)
    // street name sign on the far signal pole
    V.box(-3.0, 3.9, 29.05, 0.04, 0.04, 0.04, 0x333333);
    this.bags.shop.quad(-3.0, 3.95, 29.0, 2.1, 0.4, PI, this.signs.street_sign);
    this.bags.shop.quad(-3.0, 3.95, 29.1, 2.1, 0.4, 0, this.signs.street_sign);
    // fire hydrants
    for (const [x, z] of [[-14.6, 18.4], [-4.8, 29.05], [41, 29.05]]) {
      V.cyl(x, 0, z, 0.17, 0.55, 0xc81e1e, 10);
      V.sph(x, 0.58, z, 0.16, 0xc81e1e, 10, 5);
      V.add(GEO.cyl(8), 0xc81e1e, x, 0.4, z, 0.12, 0.42, 0.12, 0, 0, PI / 2);
      V.add(GEO.cyl(8), 0xc81e1e, x, 0.4, z, 0.12, 0.42, 0.12, PI / 2, 0, 0);
      V.cyl(x, 0.68, z, 0.05, 0.08, 0xd4a72c, 6);
    }
    // newspaper boxes by the donut shop
    [0x2a6fb0, 0xc81e1e, 0xf2b134].forEach((cl, k) => {
      const x = 8.1 + k * 0.62;
      V.box(x, 0.35, 30.9, 0.5, 0.7, 0.45, cl);
      V.box(x, 0.85, 30.9, 0.46, 0.3, 0.42, 0x333333);
      this.bags.shop.quad(x, 0.98, 30.67, 0.42, 0.13, PI, this.signs.newspaper);
    });
    // a mailbox
    V.box(-9.3, 0.6, 30.95, 0.55, 0.9, 0.5, 0x1f4fa0);
    V.add(GEO.halfCyl(10), 0x1f4fa0, -9.3, 1.05, 30.95, 0.55, 0.5, 0.5, PI / 2, 0, PI / 2);
    // benches, trash cans
    this._bench(V, -12.6, 30.95, PI);
    this._bin(V, -6.6, 31.0, 0x2a2a2a);
    this._bin(V, 15.2, 30.95, 0x2f4f3a);
    this._bin(V, -24.5, 30.95, 0x2a2a2a);
    // bus stop (in front of the bakery) with an ad for the museum
    {
      const bx = 25.2, bz = 30.3;
      for (const e of [-2.1, 2.1]) for (const f of [-0.6, 0.6]) V.box(bx + e, 1.25, bz + f, 0.08, 2.5, 0.08, 0x8f979c);
      V.box(bx, 2.55, bz, 4.6, 0.1, 1.6, 0x8f979c);
      V.box(bx, 1.3, bz + 0.62, 4.2, 2.1, 0.04, 0x9fb4bf);
      V.box(bx + 2.1, 1.3, bz, 0.04, 2.1, 1.1, 0x9fb4bf);
      V.box(bx - 2.1, 1.3, bz, 0.04, 2.1, 1.1, 0x9fb4bf);
      this.bags.shop.quad(bx - 2.15, 1.4, bz, 1.0, 1.8, -PI / 2, this.signs.busad);
      this.bags.shop.quad(bx + 1.1, 1.35, bz + 0.58, 1.05, 1.85, PI, this.signs.busad);
      for (let k = 0; k < 3; k++) V.box(bx - 0.6 + k * 0.6, 0.48, bz + 0.35, 0.5, 0.05, 0.4, 0x6b6f72);
      V.cyl(bx - 2.9, 0, Z_FAR + 0.4, 0.04, 2.9, 0x8f979c, 6);
      this.bags.shop.quad(bx - 2.9, 2.55, Z_FAR + 0.36, 0.42, 0.62, PI, this.signs.bus_sign);
    }
    // rooftop billboard over the bookstore
    // (built with the buildings)
    void n;
  }

  _signal(x, z, face) {
    // face = +1: the car signal looks toward +x (westbound drivers); -1: toward -x
    const V = this.bags.vc;
    const c = 0x2f3436;
    V.cyl(x, 0, z, 0.1, 3.6, c, 8);
    V.cyl(x, 0, z, 0.2, 0.3, c, 8);
    // car signal head
    const hx = x + face * 0.22;
    V.box(hx, 3.25, z, 0.3, 1.05, 0.36, 0x2b2b20);
    const lenses = [];
    [[3.6, 0x3a0c0c], [3.25, 0x3a2c08], [2.9, 0x0a2a14]].forEach(([y, cl]) => {
      V.add(GEO.cyl(10), cl, hx + face * 0.16, y, z, 0.24, 0.03, 0.24, 0, 0, PI / 2);
      V.add(GEO.halfCyl(8), 0x1e1e18, hx + face * 0.24, y + 0.08, z, 0.3, 0.16, 0.3, 0, 0, face * PI / 2);
      lenses.push(new THREE.Vector3(hx + face * 0.185, y, z));
    });
    // pedestrian signal (faces across the street)
    const pz = z + (face > 0 ? 0.2 : -0.2);
    V.box(x, 2.45, pz, 0.42, 0.42, 0.24, 0x2b2b20);
    V.box(x, 1.12, z + (face > 0 ? 0.11 : -0.11), 0.12, 0.18, 0.08, 0xd4a72c); // push button
    this.signals.push({ x, z, face, lenses, ped: new THREE.Vector3(x, 2.45, pz + (face > 0 ? 0.125 : -0.125)), pedFace: face > 0 ? 0 : PI });
  }

  // ---------------------------------------------------------------- buildings
  _buildings() {
    const far = [
      { x0: -232, x1: -196, h: 20, style: 'concrete', shop: 'genA' },
      { x0: -196, x1: -168, h: 28, style: 'brickBrown', shop: 'genB' },
      { x0: -168, x1: -144, h: 16, style: 'stucco', shop: 'genC' },
      { x0: -144, x1: -120, h: 24, style: 'stone', shop: 'genB' },
      { x0: -120, x1: -96, h: 22, style: 'concrete', shop: 'bank' },
      { x0: -96, x1: -80, h: 16, style: 'brickBrown', shop: 'pizza', escape: true, awning: [0x1f6e3a, 0xffffff] },
      { x0: -80, x1: -62, h: 27, style: 'stone', shop: 'hotel', blade: 'blade_hotel', water: true, canopy: true },
      { x0: -62, x1: -46, h: 19, style: 'teal', shop: 'laundry' },
      { x0: -46, x1: -32, h: 14, style: 'brickRed', shop: 'florist', escape: true, awning: [0x3f8f4f, 0xffffff] },
      { x0: -32, x1: -20, h: 5.4, style: null, shop: 'diner', diner: true },
      { x0: -20, x1: -7, h: 17, style: 'brickBrown', shop: 'books', escape: true, billboard: true },
      { x0: -7, x1: 7, h: 8.4, style: 'pink', shop: 'donuts', awning: [0xff6fa6, 0xffffff], donut: true },
      { x0: 7, x1: 20, h: 12.6, style: 'stucco', shop: 'cinema', cinema: true },
      { x0: 20, x1: 33, h: 20, style: 'brickRed', shop: 'bakery', awning: [0xf2b134, 0xffffff], water: true },
      { x0: 36, x1: 50, h: 15, style: 'brickRed', shop: 'mart', escape: true },
      { x0: 50, x1: 70, h: 46, style: 'glass', shop: 'tower' },
      { x0: 70, x1: 92, h: 24, style: 'concrete', shop: 'hardware' },
      { x0: 92, x1: 120, h: 18, style: 'brickBrown', shop: 'cafe', awning: [0x2b3a55, 0xf4e3c3] },
      { x0: 120, x1: 146, h: 26, style: 'stone', shop: 'genA' },
      { x0: 146, x1: 170, h: 15, style: 'brickRed', shop: 'genC' },
      { x0: 170, x1: 200, h: 30, style: 'concrete', shop: 'genB' },
      { x0: 200, x1: 232, h: 18, style: 'stucco', shop: 'genA' },
    ];
    for (const b of far) this._building({ ...b, z: Z_FRONT, side: -1, depth: 14 });
    // alley between the bakery and the mart
    this.bags.vc.box(34.5, 0.004, Z_FRONT + 6, 3, 0.01, 12, 0x2c2a28);
    this.bags.vc.box(34.5, 0.6, Z_FRONT + 4.5, 1.6, 1.2, 0.9, 0x2f5a3a); // dumpster
    this.bags.vc.box(34.5, 3, Z_FRONT + 13.5, 3, 6, 0.3, 0x3a3230);
    // the near side, past the museum's gardens
    const near = [
      { x0: 44, x1: 66, h: 18, style: 'brickRed', shop: 'genB' },
      { x0: 66, x1: 90, h: 24, style: 'stone', shop: 'genA', water: true },
      { x0: 90, x1: 118, h: 16, style: 'stucco', shop: 'genC' },
      { x0: 118, x1: 150, h: 30, style: 'concrete', shop: 'genB' },
      { x0: 150, x1: 190, h: 20, style: 'brickBrown', shop: 'genA' },
      { x0: 190, x1: 232, h: 26, style: 'stone', shop: 'genC' },
      { x0: -66, x1: -44, h: 20, style: 'teal', shop: 'genA' },
      { x0: -90, x1: -66, h: 26, style: 'brickBrown', shop: 'genC', escape: true },
      { x0: -118, x1: -90, h: 17, style: 'stone', shop: 'genB' },
      { x0: -150, x1: -118, h: 32, style: 'concrete', shop: 'genA' },
      { x0: -190, x1: -150, h: 18, style: 'brickRed', shop: 'genB' },
      { x0: -232, x1: -190, h: 24, style: 'stucco', shop: 'genC' },
    ];
    for (const b of near) this._building({ ...b, z: Z_PLAZA, side: 1, depth: 14 });
    // second row: taller buildings poking up behind
    const back = [
      { x0: -170, x1: -146, h: 46, style: 'glass' },
      { x0: -142, x1: -118, h: 40, style: 'concrete' },
      { x0: -112, x1: -86, h: 58, style: 'glass', beacon: true },
      { x0: -80, x1: -58, h: 34, style: 'brickBrown', water: true },
      { x0: -52, x1: -28, h: 48, style: 'stone' },
      { x0: -24, x1: -4, h: 36, style: 'concrete' },
      { x0: 2, x1: 16, h: 22, style: 'brickRed', water: true },
      { x0: 22, x1: 44, h: 74, style: 'glass', beacon: true, antenna: true },
      { x0: 76, x1: 100, h: 52, style: 'concrete', beacon: true },
      { x0: 106, x1: 130, h: 36, style: 'stone' },
      { x0: 140, x1: 170, h: 44, style: 'glass' },
    ];
    for (const b of back) this._building({ ...b, z: 50, side: -1, depth: 16, back: true });
    // behind the near side (seen along the street from the plaza)
    for (const b of [{ x0: 60, x1: 84, h: 44, style: 'glass' }, { x0: 120, x1: 140, h: 52, style: 'concrete', beacon: true }, { x0: -96, x1: -72, h: 48, style: 'stone' }, { x0: -150, x1: -126, h: 56, style: 'glass', beacon: true }]) {
      this._building({ ...b, z: -4, side: 1, depth: 14, back: true });
    }
  }

  _building(b) {
    const V = this.bags.vc;
    const st = b.style ? STYLES[b.style] : null;
    const w = b.x1 - b.x0, cx = (b.x0 + b.x1) / 2;
    const zf = b.z, side = b.side; // side -1: front faces -z (across the street); +1: faces +z (near side)
    const back = zf - side * b.depth, cz = (zf + back) / 2;
    const ry = side < 0 ? PI : 0;
    const G = b.back ? 0 : SHOP_H;
    const body = st ? st.body : 0xc9cfd4;
    // body (the front face is covered by the facade quads)
    V.box(cx, b.h / 2, cz, w, b.h, b.depth - 0.04, body);
    if (b.diner) { this._diner(b); return; }
    // storefront
    if (!b.back) {
      const o = this.shops[b.shop];
      this.bags.shop.quad(cx, SHOP_H / 2, zf + side * 0.03, w, SHOP_H, ry, o.rect);
      // belt course between the shop and the floors above
      V.box(cx, SHOP_H + 0.08, zf + side * 0.12, w, 0.3, 0.24, st.trim);
      // the sign band sticks out a little
      if (b.awning) this._awning(cx, zf, side, w * 0.86, b.awning);
      if (b.canopy) this._canopy(cx, zf, side);
    }
    // the floors above: a tiling facade
    const top = b.h - (b.back ? 0.6 : 1.2);
    const floors = Math.max(1, Math.floor((top - G) / st.fh));
    const fTop = G + floors * st.fh;
    const tileW = st.bay * 2, tileH = st.fh * 2;
    const bays = Math.max(1, Math.round(w / st.bay));
    const bayW = w / bays;
    const g = this.styleBags[b.style].quad(cx, (G + fTop) / 2, zf + side * 0.02, w, fTop - G, ry, null);
    { const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (bays * bayW) / (bayW * 2), uv.getY(i) * floors / 2); }
    void tileW; void tileH;
    // parapet band + cornice
    V.box(cx, (fTop + b.h) / 2, zf + side * 0.03, w, b.h - fTop, 0.08, st.trim);
    V.box(cx, b.h - 0.25, zf + side * 0.2, w + 0.3, 0.4, 0.5, st.trim);
    V.box(cx, b.h + 0.4, zf + side * 0.25, w, 0.8, 0.3, body); // parapet wall
    // windows the night lights up
    this._windowSlots(b, st, bays, bayW, floors, G);
    // extras
    if (b.escape) this._fireEscape(cx + w * 0.22, zf, side, G, floors, st.fh);
    if (b.water) this._waterTower(cx + w * 0.2, b.h, cz + side * 2);
    if (b.blade) this._blade(b, cx, zf, side);
    if (b.billboard) this._billboard(cx, b.h, zf, side);
    if (b.donut) this._giantDonut(cx, b.h, zf - 2.2);
    if (b.cinema) this._cinema(b);
    if (b.antenna) { V.cyl(cx, b.h, cz, 0.25, 9, 0x8f979c, 6); V.cyl(cx, b.h + 9, cz, 0.08, 6, 0x8f979c, 5); }
    if (b.beacon) (this.beacons ||= []).push(new THREE.Vector3(cx, b.h + (b.antenna ? 15.2 : 0.9), cz));
    // rooftop clutter
    const r = mulberry32(Math.floor(cx * 13 + b.h));
    for (let k = 0; k < (Math.abs(cx) < 100 ? Math.floor(w / 9) : 0); k++) {
      const ax = b.x0 + 2 + r() * (w - 4), az = cz + (r() - 0.5) * (b.depth - 4);
      if (r() < 0.6) V.box(ax, b.h + 0.5, az, 1.6, 1.0, 1.2, 0x9a9c9a);
      else V.cyl(ax, b.h, az, 0.25, 1.4, 0x6f6f6f, 6);
    }
  }

  _windowSlots(b, st, bays, bayW, floors, G) {
    if (!this.night) return;
    const slots = (this.winSlots ||= []);
    const [u0, v0, u1, v1] = st.win;
    // tiles are 2 bays wide: when bays*bayW doesn't divide evenly the texture still starts at x0 (or x1)
    for (let i = 0; i < bays; i++) for (let j = 0; j < floors; j++) {
      const lx = (i + (u0 + u1) / 2) * bayW; // from the building's left edge as seen from the front
      const x = b.side < 0 ? b.x1 - lx : b.x0 + lx;
      const y = G + (j + (v0 + v1) / 2) * st.fh;
      slots.push({ x, y, z: b.z + b.side * 0.04, w: (u1 - u0) * bayW, h: (v1 - v0) * st.fh, face: b.side < 0 ? PI : 0, style: b.style, back: !!b.back, bx: b.x0 });
    }
  }

  _awning(cx, zf, side, w, [c1, c2]) {
    const V = this.bags.vc;
    const n = Math.max(4, Math.round(w / 0.75));
    const sw = w / n, depth = 1.5, drop = 0.6;
    const a = Math.atan2(drop, depth);
    const len = Math.hypot(depth, drop);
    for (let k = 0; k < n; k++) {
      const x = cx - w / 2 + (k + 0.5) * sw, cl = k % 2 ? c2 : c1;
      V.box(x, 4.05 - drop / 2, zf + side * depth / 2, sw, 0.04, len, cl, 0, side * a);
      V.box(x, 4.05 - drop - 0.14, zf + side * depth, sw, 0.28, 0.03, cl);
    }
  }
  _canopy(cx, zf, side) {
    const V = this.bags.vc;
    V.box(cx, 3.9, zf + side * 2.2, 3.4, 0.22, 4.4, 0x1d3b2f);
    V.box(cx, 3.99, zf + side * 2.2, 3.5, 0.06, 4.5, 0xc9a24a);
    for (const e of [-1.5, 1.5]) V.cyl(cx + e, 0, zf + side * 4.2, 0.05, 3.85, 0xc9a24a, 6);
  }
  _fireEscape(x, zf, side, G, floors, fh) {
    const V = this.bags.vc, c = 0x1f1f1f;
    for (let j = 0; j < floors; j++) {
      const y = G + j * fh + 0.05;
      V.box(x, y, zf + side * 0.65, 3.0, 0.06, 1.2, c);
      V.box(x, y + 0.95, zf + side * 1.22, 3.0, 0.05, 0.05, c);
      for (const e of [-1.48, 1.48]) V.box(x + e, y + 0.48, zf + side * 0.65, 0.05, 0.95, 1.2, c);
      for (let k = 0; k < 6; k++) V.box(x - 1.25 + k * 0.5, y + 0.48, zf + side * 1.22, 0.03, 0.95, 0.03, c);
      if (j < floors - 1) V.box(x + 0.2, y + fh / 2, zf + side * 0.65, 0.08, 0.06, Math.hypot(2.6, fh) * 0.62, c, 0, 0, Math.atan2(fh, 2.6));
    }
  }
  _waterTower(x, y, z) {
    const V = this.bags.vc;
    for (const [dx, dz] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) V.cyl(x + dx, y, z + dz, 0.08, 2.4, 0x3a3a3a, 5);
    V.cyl(x, y + 2.4, z, 1.5, 2.8, 0x7a5a3c, 10);
    for (let k = 0; k < 2; k++) V.cyl(x, y + 2.9 + k * 1.3, z, 1.53, 0.07, 0x333333, 10);
    V.add(GEO.cone(10), 0x5a4030, x, y + 5.65, z, 3.3, 1.3, 3.3);
  }
  _blade(b, cx, zf, side) {
    const V = this.bags.vc;
    const x = side < 0 ? b.x1 - 1.4 : b.x0 + 1.4;
    V.box(x, 9.2, zf + side * 0.9, 0.3, 8.6, 1.5, 0x1d3b2f);
    this.bags.shop.quad(x - 0.16, 9.2, zf + side * 0.9, 1.4, 8.2, -PI / 2, this.signs[b.blade]);
    this.bags.shop.quad(x + 0.16, 9.2, zf + side * 0.9, 1.4, 8.2, PI / 2, this.signs[b.blade]);
  }
  _billboard(cx, h, zf, side) {
    const V = this.bags.vc;
    for (const e of [-3, 3]) V.box(cx + e, h + 1.6, zf + side * 3, 0.25, 3.2, 0.25, 0x4a4a4a);
    V.box(cx, h + 0.8, zf + side * 3, 8, 0.15, 0.15, 0x4a4a4a);
    V.box(cx, h + 4.6, zf + side * 3 + 0.12, 10.4, 4.2, 0.2, 0x3a3a3a);
    this.bags.shop.quad(cx, h + 4.6, zf + side * 3 - 0.0, 10, 3.9, side < 0 ? PI : 0, this.signs.billboard);
  }
  _giantDonut(cx, h, z) {
    // the shop's famous rooftop donut (frosted side faces the museum)
    const V = this.bags.vc;
    for (const e of [-1.3, 1.3]) V.box(cx + e, h + 0.7, z, 0.3, 1.4, 0.3, 0x8a8f93);
    V.box(cx, h + 0.2, z, 3.6, 0.4, 1.2, 0x8a8f93);
    const cy = h + 4.3, S = 5.2;
    // dough: ring radius 2.6 m, tube 1.04 m (a proper hole in the middle)
    V.add(GEO.torus(0.2, 10, 24), 0xd49a5c, cx, cy, z, S, S, S);
    // frosting on the front half, a bit bigger, squashed toward the street
    const FS = 5.35, FD = 3.4, ring = 0.5 * FS, tube = 0.19 * FS, depth = 0.19 * FD;
    V.add(GEO.torus(0.19, 10, 24), 0xff7eb6, cx, cy, z - 0.2, FS, FS, FD);
    const r = mulberry32(77), sc = [0xffffff, 0x7ad3ff, 0xffe14d, 0x7dff6b, 0xb86bff, 0xff3b3b];
    for (let k = 0; k < 40; k++) {
      const a = r() * TAU, s = (r() * 2 - 1) * tube * 0.8, rr = ring + s;
      const front = depth * Math.sqrt(Math.max(0, 1 - (s / tube) ** 2));
      V.box(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, z - 0.2 - front - 0.02, 0.36, 0.11, 0.08, sc[k % sc.length], 0, 0, r() * PI);
    }
  }
  _cinema(b) {
    const V = this.bags.vc, cx = (b.x0 + b.x1) / 2, zf = b.z, side = b.side;
    // marquee
    V.box(cx, 4.9, zf + side * 1.3, 8.4, 1.5, 2.6, 0x1a1a2e);
    this.bags.shop.quad(cx, 4.9, zf + side * 2.62, 8.0, 1.4, side < 0 ? PI : 0, this.signs.marquee);
    // vertical fins + the ROXY blade
    for (const e of [-5.6, 5.6]) V.box(cx + e, (SHOP_H + b.h) / 2, zf + side * 0.25, 0.5, b.h - SHOP_H, 0.5, 0xd6c9a5);
    V.box(cx, 9.4, zf + side * 0.8, 0.35, 6.4, 1.3, 0x1a1a2e);
    this.bags.shop.quad(cx - 0.18, 9.4, zf + side * 0.8, 1.2, 6.2, -PI / 2, this.signs.blade_roxy);
    this.bags.shop.quad(cx + 0.18, 9.4, zf + side * 0.8, 1.2, 6.2, PI / 2, this.signs.blade_roxy);
  }
  _diner(b) {
    // a one-storey chrome diner with a sign on the roof
    const V = this.bags.vc, cx = (b.x0 + b.x1) / 2, zf = b.z, side = b.side, w = b.x1 - b.x0;
    const ry = side < 0 ? PI : 0;
    this.bags.shop.quad(cx, SHOP_H / 2, zf + side * 0.03, w, SHOP_H, ry, this.shops.diner.rect);
    V.box(cx, (SHOP_H + b.h) / 2, zf + side * 0.06, w, b.h - SHOP_H, 0.12, 0xc9cfd4);
    V.box(cx, SHOP_H + 0.25, zf + side * 0.14, w, 0.18, 0.06, 0xc81e3c);
    V.box(cx, b.h - 0.1, zf + side * 0.3, w + 0.3, 0.2, 0.6, 0xaab2b9);
    // rooftop sign on two posts
    for (const e of [-2.6, 2.6]) V.box(cx + e, b.h + 1.0, zf + side * 3, 0.2, 2.0, 0.2, 0x5a5f63);
    V.box(cx, b.h + 3.4, zf + side * 3 + 0.15 * -side, 9.4, 2.6, 0.3, 0x1b1b22);
    this.dinerSign = { x: cx, y: b.h + 3.4, z: zf + side * 3 - 0.02 * -side, w: 9.0, h: 2.3, ry };
  }

  // ---------------------------------------------------------------- merge everything static
  _flush() {
    const mk = (geo, mat, name) => {
      if (!geo) return null;
      const m = new THREE.Mesh(geo, mat);
      m.name = 'city-' + name;
      m.receiveShadow = false;
      m.castShadow = false;
      this.root.add(m);
      return m;
    };
    const n = this.night;
    const lmG = (g) => n && addUV1(g, (x, y, z, nx, ny, nz, o) => { const [u, v] = this._lmGround(x, z); o[0] = u; o[1] = v; });
    const lmF = (g) => n && addUV1(g, (x, y, z, nx, ny, nz, o) => {
      if (Math.abs(nz) > 0.5 && ((nz < 0 && z > 30 && z < 32.5) || (nz > 0 && z < 17 && z > 15))) { const [u, v] = this._lmFacade(x, y, nz); o[0] = u; o[1] = v; } else { o[0] = 0.004; o[1] = 0.25; }
    });
    for (const [k, bag] of Object.entries(this.groundBags)) { const g = bag.geometry(); if (g) { lmG(g); mk(g, this.groundMats[k], 'ground-' + k); } }
    for (const [k, bag] of Object.entries(this.styleBags)) { const g = bag.geometry(); if (g) { lmF(g); mk(g, this.styleMats[k], 'facade-' + k); } }
    { const g = this.bags.shop.geometry(); if (g) { lmF(g); mk(g, this.mats.shop, 'shops'); } }
    mk(this.bags.stone.geometry(), this.mats.stone, 'stone');
    mk(this.bags.vc.geometry(), this.mats.vc, 'static');
    mk(this.bags.glow.geometry(), this.mats.glow, 'bulbs');
    if (this.bags.bar) mk(this.bags.bar.geometry(), new THREE.MeshStandardMaterial({ map: this._barricadeTex(), alphaTest: 0.5, side: THREE.DoubleSide, metalness: 0.35, roughness: 0.5 }), 'barricades');
  }

  // ---------------------------------------------------------------- sky
  _sky() {
    const n = this.night;
    const sky = (this.sky = new THREE.Group());
    sky.name = 'city-sky';
    sky.userData.dynamic = true;
    this.root.add(sky);
    // dome with a vertical color gradient (vertex colors), finer near the horizon
    const lat = [-90, -20, -4, -1, 0, 1.5, 3, 5, 8, 12, 17, 24, 33, 45, 60, 75, 90];
    const stops = n
      ? [[-90, 0x04060c], [-4, 0x080a12], [0, 0x2b2434], [3, 0x221f33], [8, 0x161a30], [17, 0x0d1328], [33, 0x080e20], [60, 0x050a18], [90, 0x03060f]]
      : [[-90, 0xc9d5df], [-4, 0xd3dde6], [0, 0xdfe7ee], [3, 0xd6e1eb], [8, 0xc3d5e8], [17, 0xa9c4e2], [33, 0x8bb1db], [60, 0x6c9bd3], [90, 0x5a8bcb]];
    const colorAt = (deg, out) => {
      for (let i = 1; i < stops.length; i++) {
        if (deg <= stops[i][0]) {
          const [d0, c0] = stops[i - 1], [d1, c1] = stops[i];
          const t = (deg - d0) / (d1 - d0);
          return out.set(c0).lerp(_c.set(c1), t);
        }
      }
      return out.set(stops[stops.length - 1][1]);
    };
    const seg = 40, R = 300;
    const pos = [], cols = [], idx = [];
    const cc = new THREE.Color();
    for (let i = 0; i < lat.length; i++) {
      const a = (lat[i] * PI) / 180;
      colorAt(lat[i], cc);
      for (let j = 0; j <= seg; j++) {
        const b = (j / seg) * TAU;
        pos.push(Math.cos(a) * Math.cos(b) * R, Math.sin(a) * R, Math.cos(a) * Math.sin(b) * R);
        cols.push(cc.r, cc.g, cc.b);
      }
    }
    for (let i = 0; i < lat.length - 1; i++) for (let j = 0; j < seg; j++) {
      const a = i * (seg + 1) + j, b2 = a + seg + 1;
      idx.push(a, a + 1, b2, a + 1, b2 + 1, b2);
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    dg.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    dg.setIndex(idx);
    const dome = new THREE.Mesh(dg, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, fog: false, depthWrite: false, transparent: true }));
    dome.renderOrder = -1000;
    dome.frustumCulled = false;
    sky.add(dome);
    // where the moon/sun is: south-southeast (like the museum's directional light), in a gap of the
    // skyline you can see from the lobby (moon) / higher up (the morning sun)
    const az = (22 * PI) / 180, el = ((n ? 34 : 50) * PI) / 180;
    const dir = (this.skyDir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)));
    if (n) {
      // stars
      const r = mulberry32(99);
      const N = 520, sp = new Float32Array(N * 3), sc = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        let x, y, z;
        do { x = r() * 2 - 1; y = r(); z = r() * 2 - 1; } while (x * x + y * y + z * z > 1 || y < 0.12);
        const l = Math.hypot(x, y, z);
        sp[i * 3] = (x / l) * 280; sp[i * 3 + 1] = (y / l) * 280; sp[i * 3 + 2] = (z / l) * 280;
        const b = 0.35 + r() * 0.65, tint = r();
        sc[i * 3] = b * (tint < 0.2 ? 0.8 : 1); sc[i * 3 + 1] = b * 0.92; sc[i * 3 + 2] = b * (tint > 0.8 ? 0.75 : 1.05);
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
      sg.setAttribute('color', new THREE.BufferAttribute(sc, 3));
      const [dc, dx] = makeCanvas(32, 32);
      const gr = dx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.35, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      dx.fillStyle = gr; dx.fillRect(0, 0, 32, 32);
      const dotTex = canvasTexture(dc);
      this.disposables.push(dotTex);
      const stars = new THREE.Points(sg, new THREE.PointsMaterial({ size: 2.6, sizeAttenuation: false, vertexColors: true, map: dotTex, transparent: true, depthWrite: false, fog: false }));
      stars.renderOrder = -999;
      stars.frustumCulled = false;
      sky.add(stars);
      // the moon
      const [mc, mx] = makeCanvas(256, 256);
      const halo = mx.createRadialGradient(128, 128, 30, 128, 128, 128);
      halo.addColorStop(0, 'rgba(200,215,255,0.35)'); halo.addColorStop(0.4, 'rgba(150,170,230,0.1)'); halo.addColorStop(1, 'rgba(120,140,220,0)');
      mx.fillStyle = halo; mx.fillRect(0, 0, 256, 256);
      const disc = mx.createRadialGradient(118, 118, 4, 128, 128, 44);
      disc.addColorStop(0, '#fffdf2'); disc.addColorStop(1, '#ddd6c2');
      mx.fillStyle = disc; mx.beginPath(); mx.arc(128, 128, 44, 0, TAU); mx.fill();
      mx.fillStyle = 'rgba(160,150,130,0.35)';
      for (const [x, y, rr] of [[112, 112, 9], [140, 122, 6], [124, 146, 11], [146, 142, 5], [108, 134, 4]]) { mx.beginPath(); mx.arc(x, y, rr, 0, TAU); mx.fill(); }
      const moonTex = canvasTexture(mc);
      this.disposables.push(moonTex);
      const moon = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), new THREE.MeshBasicMaterial({ map: moonTex, transparent: true, depthWrite: false, fog: false, color: new THREE.Color(1.6, 1.6, 1.6) }));
      moon.position.copy(dir).multiplyScalar(270);
      moon.lookAt(0, 0, 0);
      moon.renderOrder = -998;
      sky.add(moon);
    } else {
      // sun glow + clouds
      const [gc, gx] = makeCanvas(128, 128);
      const g = gx.createRadialGradient(64, 64, 0, 64, 64, 64);
      g.addColorStop(0, 'rgba(255,255,240,1)'); g.addColorStop(0.08, 'rgba(255,250,225,0.95)'); g.addColorStop(0.2, 'rgba(255,240,200,0.35)'); g.addColorStop(1, 'rgba(255,230,190,0)');
      gx.fillStyle = g; gx.fillRect(0, 0, 128, 128);
      const sunTex = canvasTexture(gc);
      this.disposables.push(sunTex);
      const sun = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshBasicMaterial({ map: sunTex, transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending, color: new THREE.Color(1.4, 1.35, 1.2) }));
      sun.position.copy(dir).multiplyScalar(270);
      sun.lookAt(0, 0, 0);
      sun.renderOrder = -998;
      sky.add(sun);
      const [cc2, cx2] = makeCanvas(256, 128);
      const r = mulberry32(5);
      for (let k = 0; k < 22; k++) {
        const x = 40 + r() * 176, y = 70 + (r() - 0.5) * 30, rr = 18 + r() * 26;
        const gg = cx2.createRadialGradient(x, y - rr * 0.2, 0, x, y, rr);
        gg.addColorStop(0, 'rgba(255,255,255,0.95)'); gg.addColorStop(0.6, 'rgba(250,252,255,0.75)'); gg.addColorStop(1, 'rgba(240,245,255,0)');
        cx2.fillStyle = gg; cx2.beginPath(); cx2.arc(x, y, rr, 0, TAU); cx2.fill();
      }
      cx2.globalCompositeOperation = 'source-atop';
      vgrad(cx2, 0, 0, 256, 128, [[0, 'rgba(255,255,255,0)'], [0.65, 'rgba(255,255,255,0)'], [1, 'rgba(170,185,210,0.55)']]);
      const cloudTex = canvasTexture(cc2);
      this.disposables.push(cloudTex);
      const cm = new THREE.MeshBasicMaterial({ map: cloudTex, transparent: true, depthWrite: false, fog: false });
      this.clouds = new THREE.Group();
      for (let k = 0; k < 9; k++) {
        const az = -1.4 + k * 0.36 + r() * 0.2, el = 0.12 + r() * 0.3, d = 250;
        const cl = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), cm);
        cl.position.set(Math.sin(az) * Math.cos(el) * d, Math.sin(el) * d, Math.cos(az) * Math.cos(el) * d);
        cl.lookAt(0, 0, 0);
        const sz = 70 + r() * 70;
        cl.scale.set(sz, sz * 0.45, 1);
        cl.renderOrder = -997;
        this.clouds.add(cl);
      }
      sky.add(this.clouds);
    }
    // distant skyline painted on a big cylinder (fixed in the world, not on the camera)
    const [kc, kx] = makeCanvas(2048, 256);
    const r = mulberry32(n ? 61 : 62);
    for (let i = 0; i < 2048;) {
      const bw = 18 + r() * 60, bh = 30 + r() * (r() < 0.2 ? 170 : 100);
      const shadeV = r();
      kx.fillStyle = n ? `rgb(${12 + shadeV * 8},${16 + shadeV * 8},${30 + shadeV * 10})` : `rgb(${150 + shadeV * 18},${165 + shadeV * 16},${185 + shadeV * 12})`;
      kx.fillRect(i, 256 - bh, bw, bh);
      if (r() < 0.25) kx.fillRect(i + bw * 0.4, 256 - bh - 14, 3, 14);
      if (n) {
        for (let k = 0; k < bw * bh / 260; k++) { kx.fillStyle = r() < 0.7 ? 'rgba(255,200,120,0.85)' : 'rgba(200,220,255,0.8)'; kx.fillRect(i + 2 + r() * (bw - 4), 256 - bh + 4 + r() * (bh - 8), 2, 2); }
      } else {
        kx.fillStyle = 'rgba(255,255,255,0.12)';
        for (let y = 256 - bh + 6; y < 252; y += 7) kx.fillRect(i + 3, y, bw - 6, 2);
      }
      i += bw + (r() < 0.3 ? 4 + r() * 20 : 0);
    }
    // fade the bottom into the haze
    kx.globalCompositeOperation = 'source-atop';
    vgrad(kx, 0, 0, 2048, 256, n ? [[0, 'rgba(0,0,0,0)'], [0.6, 'rgba(0,0,0,0)'], [1, 'rgba(40,34,50,0.85)']] : [[0, 'rgba(0,0,0,0)'], [0.45, 'rgba(0,0,0,0)'], [1, 'rgba(214,224,233,0.95)']]);
    const skyTex = canvasTexture(kc);
    skyTex.repeat.set(5, 1);
    this.disposables.push(skyTex);
    const sk = new THREE.Mesh(new THREE.CylinderGeometry(260, 260, 90, 64, 1, true), new THREE.MeshBasicMaterial({ map: skyTex, alphaTest: 0.5, side: THREE.BackSide, fog: false }));
    sk.position.set(0, 45 + 0.4, 20);
    sk.name = 'city-skyline';
    this.root.add(sk);
  }

  // ---------------------------------------------------------------- night: lit windows, glows, light cones
  // the light textures: lit-window cells, signal lenses, walk/don't-walk symbols (4x4 atlas)
  _lightTex() {
    const S = 256, C = 64, [c, x] = makeCanvas(S, S);
    x.fillStyle = '#000'; x.fillRect(0, 0, S, S);
    const cell = (i, j, fn) => { x.save(); x.translate(i * C, j * C); x.beginPath(); x.rect(0, 0, C, C); x.clip(); fn(x, C); x.restore(); };
    const room = (x2, C2) => { vgrad(x2, 0, 0, C2, C2, [[0, '#fff3dc'], [0.5, '#ffd9a0'], [1, '#d99a58']]); };
    cell(0, 0, room);
    cell(1, 0, (x2, C2) => { room(x2, C2); x2.fillStyle = 'rgba(120,40,30,0.75)'; x2.fillRect(0, 0, C2 * 0.25, C2); x2.fillRect(C2 * 0.75, 0, C2 * 0.25, C2); });
    cell(2, 0, (x2, C2) => { room(x2, C2); x2.fillStyle = 'rgba(80,50,20,0.45)'; for (let y = 2; y < C2; y += 6) x2.fillRect(0, y, C2, 3); });
    cell(3, 0, (x2, C2) => { room(x2, C2); x2.fillStyle = 'rgba(40,25,15,0.85)'; x2.beginPath(); x2.arc(C2 * 0.6, C2 * 0.45, 7, 0, TAU); x2.fill(); x2.fillRect(C2 * 0.6 - 9, C2 * 0.55, 18, C2 * 0.45); });
    cell(0, 1, (x2, C2) => { vgrad(x2, 0, 0, C2, C2, [[0, '#f4fbff'], [1, '#b9d2ea']]); x2.fillStyle = 'rgba(255,255,255,0.8)'; x2.fillRect(4, 3, C2 - 8, 4); });
    cell(1, 1, (x2, C2) => { vgrad(x2, 0, 0, C2, C2, [[0, '#7fa6ff'], [1, '#2d4ab0']]); x2.fillStyle = 'rgba(200,230,255,0.7)'; x2.fillRect(C2 * 0.3, C2 * 0.35, C2 * 0.4, C2 * 0.3); });
    cell(2, 1, (x2, C2) => { const g = x2.createRadialGradient(C2 / 2, C2 / 2, 0, C2 / 2, C2 / 2, C2 / 2); g.addColorStop(0, '#fff'); g.addColorStop(0.55, '#fff'); g.addColorStop(0.75, 'rgba(255,255,255,0.4)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x2.fillStyle = g; x2.fillRect(0, 0, C2, C2); });
    cell(3, 1, (x2, C2) => { x2.fillStyle = '#ff7a1a'; x2.beginPath(); x2.ellipse(C2 * 0.5, C2 * 0.55, C2 * 0.22, C2 * 0.3, 0, 0, TAU); x2.fill(); for (let k = 0; k < 4; k++) x2.fillRect(C2 * 0.3 + k * C2 * 0.1, C2 * 0.15, C2 * 0.07, C2 * 0.35); });
    cell(0, 2, (x2, C2) => { x2.fillStyle = '#f2f6ff'; x2.beginPath(); x2.arc(C2 * 0.5, C2 * 0.18, C2 * 0.1, 0, TAU); x2.fill(); x2.lineWidth = C2 * 0.1; x2.strokeStyle = '#f2f6ff'; x2.lineCap = 'round'; x2.beginPath(); x2.moveTo(C2 * 0.5, C2 * 0.3); x2.lineTo(C2 * 0.47, C2 * 0.6); x2.lineTo(C2 * 0.32, C2 * 0.85); x2.moveTo(C2 * 0.47, C2 * 0.6); x2.lineTo(C2 * 0.62, C2 * 0.85); x2.moveTo(C2 * 0.3, C2 * 0.5); x2.lineTo(C2 * 0.5, C2 * 0.38); x2.lineTo(C2 * 0.68, C2 * 0.52); x2.stroke(); });
    const litTex = canvasTexture(c);
    litTex.wrapS = litTex.wrapT = THREE.ClampToEdgeWrapping;
    this.disposables.push(litTex);
    this.litTex = litTex;
    const CELL = { warm: [0, 0], curtain: [1, 0], blinds: [2, 0], person: [3, 0], office: [0, 1], tv: [1, 1], disc: [2, 1], hand: [3, 1], walk: [0, 2] };
    this.CELL = CELL;
  }

  _nightLights() {
    const CELL = this.CELL;
    // lit windows (static): a few random ones
    const slots = this.winSlots || [];
    const r = mulberry32(2024);
    const picks = [];
    for (const sl of slots) {
      const p = sl.back ? 0.05 : sl.style === 'glass' ? 0.03 : 0.075;
      if (r() < p) picks.push(sl);
    }
    // a whole lit office floor in the big glass tower (the cleaners are in)
    for (const sl of slots) if (sl.style === 'glass' && sl.back && sl.bx === 22 && Math.abs(sl.y - 41) < 1.5) picks.push(sl);
    const N = picks.length + 4;
    const lit = (this.litWin = this._quadInstances(N, this.litTex, false));
    let k = 0;
    const warm = [0xffd9a0, 0xffc77a, 0xffe2b8, 0xfff0d0];
    for (const sl of picks) {
      const isOffice = sl.style === 'glass' || sl.style === 'concrete';
      const cellK = isOffice ? 'office' : ['warm', 'curtain', 'blinds', 'person', 'warm'][Math.floor(r() * 5)];
      const tint = isOffice ? 0xdfeaff : warm[Math.floor(r() * warm.length)];
      const dim = sl.back ? 0.75 : 1;
      this._setQuad(lit, k++, sl.x, sl.y, sl.z, sl.w * 0.98, sl.h * 0.98, sl.face, CELL[cellK], tint, dim);
    }
    // the flickering TV: an apartment above the bookstore
    const tvSlot = slots.find((s) => !s.back && s.style === 'brickBrown' && s.bx === -20 && s.y > 8 && s.y < 10.5) || slots[0];
    if (tvSlot) {
      this.tv = { i: k, slot: tvSlot };
      this._setQuad(lit, k++, tvSlot.x, tvSlot.y, tvSlot.z - 0.005, tvSlot.w * 0.98, tvSlot.h * 0.98, tvSlot.face, CELL.tv, 0x8fb0ff, 1);
    }
    lit.mesh.count = k;
    lit.mesh.name = 'city-litwindows';
    this.root.add(lit.mesh);

    // the diner's lit windows and the 24/7 store (and the hotel lobby) glow through the night
    this._litShops();
    // glows around every bulb + light cones under the lamps (static part of the glow/beam meshes)
    this._lampGlows();
  }

  // A batch of flat, unlit quads with cells from a small texture atlas (windows, signal lenses...).
  _quadInstances(count, tex, dynamic, additive = false) {
    const geo = new THREE.PlaneGeometry(1, 1);
    const off = new THREE.InstancedBufferAttribute(new Float32Array(count * 2), 2);
    off.setUsage(dynamic ? THREE.DynamicDrawUsage : THREE.StaticDrawUsage);
    geo.setAttribute('uvOff', off);
    const mat = new THREE.MeshBasicMaterial({ map: tex, fog: false });
    if (additive) { mat.transparent = true; mat.blending = THREE.AdditiveBlending; mat.depthWrite = false; }
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <uv_pars_vertex>', '#include <uv_pars_vertex>\nattribute vec2 uvOff;')
        .replace('#include <uv_vertex>', '#include <uv_vertex>\nvMapUv = vMapUv * 0.25 + uvOff;');
    };
    mat.customProgramCacheKey = () => 'city-quads';
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(dynamic ? THREE.DynamicDrawUsage : THREE.StaticDrawUsage);
    mesh.setColorAt(0, _c.set(0xffffff));
    mesh.userData.dynamic = true;
    return { mesh, off };
  }
  _setQuad(q, i, x, y, z, w, h, ry, cell, color, k = 1) {
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(0, ry, 0)), _s.set(w, h, 1));
    q.mesh.setMatrixAt(i, _m);
    q.mesh.setColorAt(i, _c.set(color).multiplyScalar(k));
    q.off.setXY(i, cell[0] * 0.25, 1 - (cell[1] + 1) * 0.25);
    q.mesh.instanceMatrix.needsUpdate = true;
    q.mesh.instanceColor.needsUpdate = true;
    q.off.needsUpdate = true;
  }

  _litShops() {
    // big lit panels in front of the shop windows, painted crisply on their own small texture
    const W = 1024, H = 256, [c, x] = makeCanvas(W, H);
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    // diner interior (x 0..512): warm, a counter, stools, a cook and one lonely customer
    vgrad(x, 0, 0, 512, 256, [[0, '#fff1cf'], [0.55, '#ffd48a'], [1, '#e09a50']]);
    for (let k = 0; k < 6; k++) { x.fillStyle = 'rgba(255,255,255,0.9)'; x.fillRect(30 + k * 85, 14, 40, 6); }
    x.fillStyle = '#c8ccd0'; x.fillRect(0, 150, 512, 20);
    x.fillStyle = '#8a5a3a'; x.fillRect(0, 170, 512, 86);
    for (let k = 0; k < 10; k++) { x.fillStyle = '#c81e3c'; x.fillRect(22 + k * 50, 188, 26, 8); x.fillStyle = '#666'; x.fillRect(33 + k * 50, 196, 4, 60); }
    // the cook
    x.fillStyle = '#fff'; x.fillRect(318, 60, 30, 14); x.fillStyle = '#f0d0b0'; x.beginPath(); x.arc(333, 86, 12, 0, TAU); x.fill(); x.fillStyle = '#f4f4f4'; x.fillRect(317, 98, 32, 52);
    // the customer (hunched over coffee)
    x.fillStyle = '#2f3b4f'; x.beginPath(); x.ellipse(160, 160, 22, 30, 0.25, 0, TAU); x.fill();
    x.fillStyle = '#d8b090'; x.beginPath(); x.arc(170, 122, 12, 0, TAU); x.fill();
    x.fillStyle = '#4a3a2a'; x.beginPath(); x.ellipse(166, 114, 13, 7, 0, PI, TAU); x.fill();
    x.fillStyle = '#fff'; x.fillRect(196, 140, 10, 10);
    // the 24/7 store (x 512..896): fluorescent white, shelves
    vgrad(x, 512, 0, 384, 256, [[0, '#f6fbff'], [1, '#c9daea']]);
    for (let k = 0; k < 5; k++) { x.fillStyle = '#fff'; x.fillRect(530 + k * 75, 10, 50, 8); }
    const rr = mulberry32(5);
    for (let row = 0; row < 3; row++) { const yy = 70 + row * 60; x.fillStyle = '#8a9299'; x.fillRect(512, yy + 30, 384, 5); for (let bx = 516; bx < 890; bx += 11) { x.fillStyle = ['#e74c3c', '#f1c40f', '#3498db', '#2ecc71', '#e67e22', '#9b59b6'][Math.floor(rr() * 6)]; x.fillRect(bx, yy, 9, 30); } }
    x.fillStyle = 'rgba(40,60,90,0.85)'; x.fillRect(700, 120, 22, 70); x.beginPath(); x.arc(711, 108, 12, 0, TAU); x.fill();
    // hotel lobby (x 896..1024): dim warm
    vgrad(x, 896, 0, 128, 256, [[0, '#ffcf8a'], [1, '#8a5a2a']]);
    x.fillStyle = '#fff3c0'; x.beginPath(); x.arc(960, 50, 14, 0, TAU); x.fill();
    const tex = canvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    this.disposables.push(tex);
    const L = new Bag();
    const rect = (u0, u1) => ({ u0, u1, v0: 0, v1: 1 });
    // diner windows: x -32..-20 (the door is at 20% from the left as you look at it)
    const sideFront = Z_FRONT - 0.05;
    L.quad(-23.2, 2.45, sideFront, 6.0, 2.2, PI, rect(0.04, 0.5));
    L.quad(-30.2, 2.45, sideFront, 2.6, 2.2, PI, rect(0.0, 0.16));
    // 24/7 store x 36..50
    L.quad(46.3, 2.35, sideFront, 6.2, 2.15, PI, rect(0.5, 0.74));
    L.quad(39.7, 2.35, sideFront, 6.2, 2.15, PI, rect(0.62, 0.875));
    // hotel lobby x -80..-62 (dim)
    L.quad(-66.6, 2.4, sideFront, 6.5, 2.1, PI, rect(0.875, 1));
    const mesh = new THREE.Mesh(L.geometry(), new THREE.MeshBasicMaterial({ map: tex, color: new THREE.Color(1.15, 1.1, 1.05), fog: false }));
    mesh.name = 'city-litshops';
    this.root.add(mesh);
    // the diner's rooftop neon (flickers): its own little material
    if (this.dinerSign) {
      const s = this.dinerSign;
      const [nc, nx] = makeCanvas(512, 128);
      nx.fillStyle = '#000'; nx.fillRect(0, 0, 512, 128);
      txt(nx, 'Starlight', 215, 54, 360, FONT.script(70), '#ff4f7a', { glow: '#ff4f7a', blur: 10 });
      txt(nx, 'DINER', 256, 102, 256, FONT.deco(34), '#5fd0ff', { glow: '#5fd0ff', blur: 8 });
      const ntex = canvasTexture(nc);
      this.disposables.push(ntex);
      this.neonMat = new THREE.MeshBasicMaterial({ map: ntex, color: new THREE.Color(2.2, 2.2, 2.2), fog: false, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
      const neon = new THREE.Mesh(new THREE.PlaneGeometry(s.w, s.h), this.neonMat);
      neon.position.set(s.x, s.y, s.z);
      neon.rotation.y = s.ry;
      neon.name = 'city-neon';
      neon.userData.dynamic = true;
      this.root.add(neon);
    }
  }

  // Camera-facing glow quads (bulbs, traffic lights, car lights, beacons) and soft light cones. Both are
  // one instanced mesh each: a fixed part written once, then a part rewritten every frame.
  _glowMeshes() {
    const glowMat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */`
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          vUv = uv;
          #ifdef USE_INSTANCING_COLOR
            vCol = instanceColor;
          #else
            vCol = vec3(1.0);
          #endif
          vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float size = length(instanceMatrix[0].xyz);
          // pull the glow toward the camera so the lamp it surrounds doesn't cut it in half
          c.xyz += normalize(-c.xyz) * min(size * 0.45, 1.2);
          c.xy += position.xy * size;
          gl_Position = projectionMatrix * c;
        }`,
      fragmentShader: /* glsl */`
        varying vec2 vUv;
        varying vec3 vCol;
        void main() {
          float d = length(vUv - 0.5) * 2.0;
          float a = max(0.0, 1.0 - d);
          a = a * a * a * 0.8 + pow(a, 10.0) * 1.6;
          gl_FragColor = vec4(vCol * a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    });
    this.glowMax = 220;
    const glow = (this.glowMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), glowMat, this.glowMax));
    glow.frustumCulled = false;
    glow.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    glow.setColorAt(0, _c.set(0));
    glow.instanceColor.setUsage(THREE.DynamicDrawUsage);
    glow.name = 'city-glows';
    glow.renderOrder = 2;
    glow.count = 0;
    this.root.add(glow);
    this.glowCount = 0;
    this.staticGlows = 0;
    if (!this.night) return;
    // light cones under the streetlamps and in front of cars' headlights
    const beamMat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */`
        varying float vAlong;
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vCol;
        void main() {
          vAlong = uv.y;
          #ifdef USE_INSTANCING_COLOR
            vCol = instanceColor;
          #else
            vCol = vec3(1.0);
          #endif
          vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
          vV = -mv.xyz;
          vN = normalize(normalMatrix * mat3(instanceMatrix) * normal);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        varying float vAlong;
        varying vec3 vN;
        varying vec3 vV;
        varying vec3 vCol;
        void main() {
          float f = abs(dot(normalize(vN), normalize(vV)));
          float a = pow(f, 2.2) * (0.12 + 0.88 * vAlong * vAlong);
          gl_FragColor = vec4(vCol * a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
    });
    const coneGeo = new THREE.ConeGeometry(1, 1, 18, 1, true);
    coneGeo.translate(0, -0.5, 0); // apex at the origin, opening downward (-y)
    this.beamMax = 100;
    const beams = (this.beamMesh = new THREE.InstancedMesh(coneGeo, beamMat, this.beamMax));
    beams.frustumCulled = false;
    beams.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    beams.setColorAt(0, _c.set(0));
    beams.instanceColor.setUsage(THREE.DynamicDrawUsage);
    beams.name = 'city-beams';
    beams.renderOrder = 1;
    beams.count = 0;
    this.root.add(beams);
    this.beamCount = 0;
    this.staticBeams = 0;
  }
  _lampGlows() {
    for (const l of this.lamps) {
      if (l.broken) continue; // (it flickers: drawn every frame)
      if (l.kind === 'cobra') this._addGlow(l.x, l.y - 0.05, l.z, 3.2, 0xffa040, 1.25);
      else this._addGlow(l.x, l.y, l.z, 1.6, 0xffd7a0, 1.1);
    }
    this.staticGlows = this.glowCount;
    this.glowMesh.count = this.glowCount;
    for (const l of this.lamps) {
      if (l.broken) continue;
      if (l.kind === 'cobra') this._addBeam(l.x, l.y - 0.05, l.z, 3.4, l.y - Y_ST - 0.1, 0, 0, 0xff9a40, 0.3);
      else this._addBeam(l.x, l.y - 0.1, l.z, 1.6, l.y - 0.1, 0, 0, 0xffd7a0, 0.16);
    }
    this.staticBeams = this.beamCount;
    this.beamMesh.count = this.beamCount;
  }
  _addGlow(x, y, z, size, color, k) {
    const i = this.glowCount++;
    _m.makeScale(size, size, size).setPosition(x, y, z);
    this.glowMesh.setMatrixAt(i, _m);
    this.glowMesh.setColorAt(i, _c.set(color).multiplyScalar(k));
    this.glowMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceColor.needsUpdate = true;
    return i;
  }
  _addBeam(x, y, z, radius, length, rx, rz, color, k) {
    const i = this.beamCount++;
    _m.compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, 0, rz)), _s.set(radius, length, radius));
    this.beamMesh.setMatrixAt(i, _m);
    this.beamMesh.setColorAt(i, _c.set(color).multiplyScalar(k));
    this.beamMesh.instanceMatrix.needsUpdate = true;
    this.beamMesh.instanceColor.needsUpdate = true;
    return i;
  }

  // ---- the per-frame part: call _dynBegin(), add things, then _dynEnd()
  _dynBegin() {
    this.gN = this.staticGlows;
    this.bN = this.staticBeams || 0;
    this.qN = 0;
  }
  _dynGlow(x, y, z, size, r, g, b) {
    if (this.gN >= this.glowMax) return;
    const i = this.gN++, a = this.glowMesh.instanceMatrix.array, o = i * 16, c = this.glowMesh.instanceColor.array;
    a[o] = size; a[o + 1] = 0; a[o + 2] = 0; a[o + 3] = 0;
    a[o + 4] = 0; a[o + 5] = size; a[o + 6] = 0; a[o + 7] = 0;
    a[o + 8] = 0; a[o + 9] = 0; a[o + 10] = size; a[o + 11] = 0;
    a[o + 12] = x; a[o + 13] = y; a[o + 14] = z; a[o + 15] = 1;
    c[i * 3] = r; c[i * 3 + 1] = g; c[i * 3 + 2] = b;
  }
  // a light cone with its apex at x,y,z pointing along (dx, dy, dz) (unit vector)
  _dynBeam(x, y, z, dx, dy, dz, radius, length, r, g, b) {
    if (!this.beamMesh || this.bN >= this.beamMax) return;
    const i = this.bN++;
    _v.set(dx, dy, dz);
    _q.setFromUnitVectors(DOWN, _v);
    _m.compose(_v.set(x, y, z), _q, _s.set(radius, length, radius));
    _m.toArray(this.beamMesh.instanceMatrix.array, i * 16);
    const c = this.beamMesh.instanceColor.array;
    c[i * 3] = r; c[i * 3 + 1] = g; c[i * 3 + 2] = b;
  }
  // a small lit quad (signal lens, walk symbol, car light) facing direction ry
  _dynQuad(x, y, z, w, h, ry, cell, r, g, b) {
    const q = this.litDyn;
    if (this.qN >= q.max) return;
    const i = this.qN++;
    _m.compose(_v.set(x, y, z), _q.setFromAxisAngle(UP, ry), _s.set(w, h, 1));
    _m.toArray(q.mesh.instanceMatrix.array, i * 16);
    const c = q.mesh.instanceColor.array;
    c[i * 3] = r; c[i * 3 + 1] = g; c[i * 3 + 2] = b;
    q.off.array[i * 2] = cell[0] * 0.25;
    q.off.array[i * 2 + 1] = 1 - (cell[1] + 1) * 0.25;
  }
  _dynEnd() {
    const gm = this.glowMesh;
    gm.count = this.gN;
    gm.visible = this.gN > 0;
    gm.instanceMatrix.needsUpdate = true;
    gm.instanceColor.needsUpdate = true;
    if (this.beamMesh) {
      this.beamMesh.count = this.bN;
      this.beamMesh.visible = this.bN > 0;
      this.beamMesh.instanceMatrix.needsUpdate = true;
      this.beamMesh.instanceColor.needsUpdate = true;
    }
    const q = this.litDyn;
    q.mesh.count = this.qN;
    q.mesh.visible = this.qN > 0;
    q.mesh.instanceMatrix.needsUpdate = true;
    q.mesh.instanceColor.needsUpdate = true;
    q.off.needsUpdate = true;
  }

  // ---------------------------------------------------------------- people
  // They're built and animated exactly like the museum's visitors (people.js: same body parts, sizes,
  // joints, walk cycle and colors), but every body part of every person is one instance of a shared
  // mesh, so the whole crowd costs about 14 draw calls instead of ~20 per person.
  _crowdInit() {
    const mat = (this.crowdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }));
    mat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <color_pars_vertex>', `#include <color_pars_vertex>
attribute float slot;
attribute vec3 pal0;
attribute vec3 pal1;
vec3 cityUnpack(float f) {
  float r = floor(f / 65536.0);
  float g = floor((f - r * 65536.0) / 256.0);
  float b = f - r * 65536.0 - g * 256.0;
  return pow(vec3(r, g, b) / 255.0, vec3(2.2));
}`)
        .replace('#include <color_vertex>', `#include <color_vertex>
if (slot > 0.5) {
  float f = slot < 1.5 ? pal0.x : slot < 2.5 ? pal0.y : slot < 3.5 ? pal0.z : slot < 4.5 ? pal1.x : slot < 5.5 ? pal1.y : pal1.z;
  vColor.rgb = cityUnpack(f);
}`);
    };
    mat.customProgramCacheKey = () => 'city-crowd';
    const PG = personParts(npcsAreNew());
    const N = 96;
    const mk = (name, max) => {
      const geo = PG[name].clone();
      const pal0 = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
      const pal1 = new THREE.InstancedBufferAttribute(new Float32Array(max * 3), 3);
      pal0.setUsage(THREE.DynamicDrawUsage); pal1.setUsage(THREE.DynamicDrawUsage);
      geo.setAttribute('pal0', pal0);
      geo.setAttribute('pal1', pal1);
      const mesh = new THREE.InstancedMesh(geo, mat, max);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      mesh.count = 0;
      mesh.visible = false;
      mesh.name = 'city-crowd-' + name;
      this.root.add(mesh);
      return { mesh, pal0, pal1, max, n: 0, owner: new Int32Array(max).fill(-1), dirty: false };
    };
    this.parts = {
      torso: mk('torso', N), headS: mk('headS', N), headL: mk('headL', N),
      uarm: mk('uarm', N * 2), farm: mk('farm', N * 2), thigh: mk('thigh', N * 2), shin: mk('shin', N * 2),
      shako: mk('shako', 24), cap: mk('cap', 24), drum: mk('drum', 8), bell: mk('bell', 10), stick: mk('stick', 16), flag: mk('flag', 16), balloon: mk('balloon', 10),
    };
    this.partList = Object.values(this.parts);
    this.people = [];
    this.pid = 0;
    this.shown = [];
  }

  // a person: { x, y, z, yaw, scale, mode, pal: [shirt, pants, skin, hair, sleeve, accent] (0xRRGGBB) ... }
  _person(r, o = {}) {
    const pickR = (arr) => arr[Math.floor(r() * arr.length)];
    const kid = o.kid != null ? o.kid : r() < 0.3;
    const scale = o.scale || (kid ? 0.62 + r() * 0.12 : 0.95 + r() * 0.1);
    const skin = o.skin != null ? o.skin : pickR(SKINS);
    const shirt = o.shirt != null ? o.shirt : pickR(SHIRTS);
    const sleeves = o.sleeves || (r() < 0.5 ? 'short' : 'long');
    const hairStyle = o.hairStyle || (r() < 0.4 ? 'long' : r() < 0.1 ? 'bald' : 'short');
    const hair = hairStyle === 'bald' ? skin : o.hair != null ? o.hair : pickR(HAIRS);
    const p = {
      id: ++this.pid, kid, scale, height: 1.75 * scale,
      x: 0, y: 0, z: 0, yaw: 0, look: 0, mode: M_IDLE, speed: 0, phase: r() * TAU, t0: r() * 50,
      pal: [shirt, o.pants != null ? o.pants : pickR(PANTS), skin, hair, sleeves === 'short' ? skin : shirt, o.accent != null ? o.accent : pickR(ACCENTS)],
      long: hairStyle === 'long', props: [], a: new Float32Array(17), active: true, inst: o.inst || null, style: M_CHEER,
      walkable: false, hand: new THREE.Vector3(), seen: false,
    };
    // start from a relaxed pose
    p.a[0] = 0.92;
    this.people.push(p);
    return p;
  }
  _prop(p, type, joint, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
    const m = new THREE.Matrix4().compose(_v.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _s.set(sx, sy, sz));
    p.props.push({ type, joint, m });
  }

  // ---- animation (the same targets as people.js, plus a few parade moves)
  _pose(p, dt) {
    const T = TGT, t = this.t + p.t0;
    T[0] = 0.92; T[1] = 0; T[2] = 0; T[3] = 0; T[4] = p.look;
    T[5] = 0; T[6] = 0.15; T[7] = 0; T[8] = 0; T[9] = 0.15; T[10] = 0;
    T[11] = 0; T[12] = 0; T[13] = 0; T[14] = 0; T[15] = 0; T[16] = 0;
    switch (p.mode) {
      case M_IDLE:
        T[0] = 0.92 + Math.sin(t * 2) * 0.005;
        T[4] += Math.sin(t * 0.5) * 0.15;
        T[5] = 0.05; T[6] = -0.15; T[7] = 0.1; T[8] = 0.05; T[9] = -0.15; T[10] = -0.1;
        break;
      case M_WALK: case M_HOLD: {
        const ph = p.phase, s = Math.sin(ph), c = Math.cos(ph);
        T[11] = -0.5 * s; T[12] = Math.max(0, -c) * 0.7; T[13] = 0.5 * s; T[14] = Math.max(0, c) * 0.7;
        T[0] = 0.92 - Math.abs(c) * 0.03;
        if (p.mode === M_WALK) { T[5] = 0.4 * s; T[6] = -0.2; T[7] = 0.08; T[8] = -0.4 * s; T[9] = -0.2; T[10] = -0.08; }
        else { T[5] = -2.3; T[6] = -0.25; T[7] = 0.15; T[8] = -2.3; T[9] = -0.25; T[10] = -0.15; T[2] = -0.12; T[3] = -0.35; }
        break;
      }
      case M_WAVE:
        T[8] = -2.7; T[9] = -0.3; T[10] = -0.5 + Math.sin(t * 10) * 0.45;
        T[5] = 0.05; T[6] = -0.15; T[7] = 0.1;
        T[0] = 0.92 + Math.abs(Math.sin(t * 6)) * 0.04;
        break;
      case M_CHEER: {
        const w = Math.sin(t * 9);
        T[5] = -2.85; T[6] = -0.25; T[7] = 0.32 + w * 0.22; T[8] = -2.85; T[9] = -0.25; T[10] = -0.32 - w * 0.22;
        const j = Math.max(0, Math.sin(t * 7));
        T[15] = j * 0.13; T[11] = T[13] = -0.12 * (1 - j); T[12] = T[14] = 0.25 * (1 - j);
        T[3] = -0.15;
        break;
      }
      case M_CLAP: {
        const k = (Math.sin(t * 15) + 1) / 2;
        T[5] = -1.2; T[6] = -0.95; T[7] = 0.55 - k * 0.42; T[8] = -1.2; T[9] = -0.95; T[10] = -0.55 + k * 0.42;
        T[0] = 0.92 + Math.abs(Math.sin(t * 7.5)) * 0.015;
        break;
      }
      case M_POINT:
        T[8] = -1.55; T[9] = 0; T[10] = 0.15; T[5] = 0.05; T[6] = -0.15; T[7] = 0.1;
        break;
      case M_SIT:
        T[0] = 0.55; T[11] = T[13] = -1.45; T[12] = T[14] = 1.5; T[2] = 0.05; T[16] = 0.55;
        T[5] = -0.7; T[6] = -1.0; T[7] = 0.25; T[8] = -0.7; T[9] = -1.0; T[10] = -0.25;
        if (p.excited) { T[8] = -2.7; T[9] = -0.3; T[10] = -0.5 + Math.sin(t * 10) * 0.45; }
        break;
      case M_MARCH: {
        const s = Math.sin(p.phase), u0 = Math.max(0, s), u1 = Math.max(0, -s);
        T[11] = -1.05 * u0; T[12] = 1.45 * u0; T[13] = -1.05 * u1; T[14] = 1.45 * u1;
        T[0] = 0.92 - 0.025 * (u0 + u1);
        switch (p.inst) {
          case 'drum': { const b = Math.sin(t * 13); T[5] = -0.55; T[6] = -1.25 + Math.max(0, b) * 0.5; T[7] = 0.3; T[8] = -0.55; T[9] = -1.25 + Math.max(0, -b) * 0.5; T[10] = -0.3; break; }
          case 'bass': { const b = Math.sin(t * 6.5); T[5] = -0.75; T[6] = -0.8 + b * 0.35; T[7] = 0.75; T[8] = -0.75; T[9] = -0.8 - b * 0.35; T[10] = -0.75; break; }
          case 'horn': T[5] = -1.35; T[6] = -1.6; T[7] = 0.42; T[8] = -1.35; T[9] = -1.6; T[10] = -0.42; T[3] = -0.08; break;
          case 'tuba': T[5] = -0.75; T[6] = -1.45; T[7] = 0.2; T[8] = -1.2; T[9] = -1.55; T[10] = -0.4; break;
          case 'baton': T[8] = -2.5 + Math.sin(t * 4.2) * 0.55; T[9] = -0.35; T[10] = -0.2; T[5] = 0.15; T[6] = -0.5; T[7] = 0.25; break;
          case 'carry': T[5] = -1.05; T[6] = -1.15; T[7] = 0.12; T[8] = -1.05; T[9] = -1.15; T[10] = -0.12; break;
          default: T[5] = 0.55 * s; T[6] = -0.4; T[8] = -0.55 * s; T[9] = -0.4; break;
        }
        break;
      }
      default: break;
    }
    const a = p.a, k = dt > 0 ? 1 - Math.exp(-12 * dt) : 1;
    for (let i = 0; i < 17; i++) a[i] += (T[i] - a[i]) * k;
  }

  _drawPerson(p) {
    const a = p.a, s = p.scale, R = PJ.root, e = R.elements;
    R.makeRotationY(p.yaw);
    e[0] *= s; e[1] *= s; e[2] *= s; e[4] *= s; e[5] *= s; e[6] *= s; e[8] *= s; e[9] *= s; e[10] *= s;
    e[12] = p.x; e[13] = p.y + a[15]; e[14] = p.z;
    jmul(PJ.hips, R, 0, a[0], 0, a[1], 0, 0);
    jmul(PJ.torso, PJ.hips, 0, 0.08, 0, a[2], 0, 0);
    jmul(PJ.head, PJ.torso, 0, 0.64, 0, a[3], a[4], 0);
    for (let i = 0; i < 2; i++) {
      const side = i ? 1 : -1;
      jmul(PJ.sh[i], PJ.torso, side * 0.235, 0.5, 0, a[5 + i * 3], 0, a[7 + i * 3] + side * 0.08);
      jmul(PJ.el[i], PJ.sh[i], 0, -0.29, 0, a[6 + i * 3], 0, 0);
      jmul(PJ.hip[i], PJ.hips, side * 0.095, -0.06, 0, a[11 + i * 2], 0, side * a[16]);
      jmul(PJ.knee[i], PJ.hip[i], 0, -0.42, 0, a[12 + i * 2], 0, 0);
    }
    this._put('torso', p, PJ.torso);
    this._put(p.long ? 'headL' : 'headS', p, PJ.head);
    for (let i = 0; i < 2; i++) {
      this._put('uarm', p, PJ.sh[i]);
      this._put('farm', p, PJ.el[i]);
      this._put('thigh', p, PJ.hip[i]);
      this._put('shin', p, PJ.knee[i]);
    }
    for (const pr of p.props) {
      const j = pr.joint === 'head' ? PJ.head : pr.joint === 'torso' ? PJ.torso : pr.joint === 'handL' ? PJ.el[0] : PJ.el[1];
      PJ.tmp.multiplyMatrices(j, pr.m);
      this._put(pr.type, p, PJ.tmp);
    }
    p.hand.set(0, -0.3, 0).applyMatrix4(PJ.el[1]);
  }
  _put(type, p, m) {
    const P = this.parts[type];
    if (P.n >= P.max) return;
    const i = P.n++;
    m.toArray(P.mesh.instanceMatrix.array, i * 16);
    if (P.owner[i] !== p.id) {
      P.owner[i] = p.id;
      const a0 = P.pal0.array, a1 = P.pal1.array, c = p.pal, o = i * 3;
      a0[o] = c[0]; a0[o + 1] = c[1]; a0[o + 2] = c[2];
      a1[o] = c[3]; a1[o + 1] = c[4]; a1[o + 2] = c[5];
      P.dirty = true;
    }
  }
  _drawCrowd(dt) {
    for (const P of this.partList) P.n = 0;
    const F = this._frustum;
    this.blobPeople = 0;
    for (const p of this.people) {
      if (!p.active) continue;
      _sph.center.set(p.x, p.y + 0.9 * p.scale, p.z);
      _sph.radius = 1.3 * p.scale + (p.props.length ? 0.8 : 0);
      if (!F.intersectsSphere(_sph)) { p.seen = false; continue; }
      p.seen = true;
      this._pose(p, dt);
      this._drawPerson(p);
      if (p.y < 0.5) this._blob(p.x, p.y, p.z, 0.75 * p.scale, 0.75 * p.scale, 0);
    }
    for (const P of this.partList) {
      P.mesh.count = P.n;
      P.mesh.visible = P.n > 0;
      if (P.n) P.mesh.instanceMatrix.needsUpdate = true;
      if (P.dirty) { P.pal0.needsUpdate = true; P.pal1.needsUpdate = true; P.dirty = false; }
    }
  }

  // ---- who's out in the morning
  _populate() {
    const r = mulberry32(5150);
    const fam = (p) => p;
    // people walking along the far sidewalk (end to end)
    this.walkers = [];
    for (let i = 0; i < 9; i++) {
      const p = this._person(r);
      p.role = 'walker';
      p.dir = r() < 0.5 ? 1 : -1;
      p.x = -120 + r() * 240;
      p.z = 29.8 + r() * 1.0;
      p.baseZ = p.z;
      p.speed = (p.kid ? 1.3 : 1.05) + r() * 0.35;
      if (r() < 0.25) this._prop(p, 'cap', 'head', 0, 0, 0);
      this.walkers.push(p);
    }
    // the near side, beyond the plaza: strolling back and forth
    for (let i = 0; i < 4; i++) {
      const p = this._person(r);
      p.role = 'stroller';
      const sd = i % 2 ? 1 : -1;
      p.seg = [sd * 18.5, sd * 75];
      p.x = sd * (20 + r() * 40);
      p.z = 17.0 + r() * 0.6;
      p.speed = 1.0 + r() * 0.3;
      p.tx = p.x;
      this.walkers.push(p);
    }
    // plaza: a few people wandering around in front of the museum
    for (let i = 0; i < 3; i++) {
      const p = this._person(r, { kid: i === 2 });
      p.role = 'wander';
      p.walkable = true;
      p.x = -8 + i * 6; p.z = 13.2 + (i % 2) * 1.5;
      p.tx = p.x; p.tz = p.z; p.wait = r() * 3;
      p.speed = p.kid ? 1.25 : 1.0;
      if (p.kid) this._prop(p, 'balloon', 'hand', 0, -0.32, 0.05, 0, 0, 0, 1);
      this.walkers.push(p);
    }
    // spectators waiting along the barricades: families, friends, a kid on dad's shoulders...
    this.spectators = [];
    const spot = (x, z, yaw, o = {}) => {
      const p = this._person(r, o);
      p.role = 'spectator';
      p.x = x; p.z = z; p.yaw = yaw; p.baseYaw = yaw;
      p.style = [M_CHEER, M_WAVE, M_CLAP, M_WAVE, M_CHEER, M_POINT][Math.floor(r() * 6)];
      p.walkable = z < Z_CURB && Math.abs(x) < 16.4;
      if (r() < 0.22) this._prop(p, 'cap', 'head', 0, 0, 0);
      else if (r() < 0.2) this._prop(p, 'flag', 'hand', 0, -0.3, 0.02, 0.2, 0, 0, 1);
      this.spectators.push(p);
      return p;
    };
    // far side (behind the barricade), facing the museum
    const farX = [-40.5, -39.6, -33, -26.4, -25.6, -24.7, -16.2, -11.5, -10.6, -4.8, 3.9, 4.8, 5.6, 12.4, 18.8, 19.6, 26.9, 33.8, 34.6, 42];
    farX.forEach((x, i) => spot(x + (r() - 0.5) * 0.3, 29.3 + r() * 0.35, PI + (r() - 0.5) * 0.3, { kid: i % 4 === 1 }));
    // near side, in front of the museum
    for (const [x, kid] of [[-13.2, 0], [-12.4, 1], [-8.6, 0], [-5.9, 0], [-5.2, 1], [6.6, 0], [9.8, 0], [10.6, 1], [14.0, 0]]) spot(x, 18.05 + r() * 0.25, (r() - 0.5) * 0.3, { kid: !!kid });
    // and past the plaza
    for (const x of [-34, -33.2, -24, 22, 28.6, 29.4, 38]) spot(x, 18.1, (r() - 0.5) * 0.3);
    // a kid on dad's shoulders (far side) — dad holds still, the kid waves
    {
      const dad = spot(8.2, 29.4, PI, { kid: false, scale: 1.04 });
      dad.style = M_POINT;
      const k = this._person(r, { kid: true });
      k.role = 'rider';
      k.mode = M_SIT;
      k.parent = dad;
      k.yaw = PI;
      this.spectators.push(k);
    }
    // police officers closing the sidewalk at both ends of the plaza
    for (const sd of [-1, 1]) {
      const p = this._person(r, { kid: false, shirt: 0x1d2c4a, pants: 0x1b2440, sleeves: 'long', hairStyle: 'short', accent: 0x1b2440 });
      p.role = 'officer';
      p.x = sd * 17.6; p.z = 17.7; p.yaw = -sd * PI / 2; p.baseYaw = p.yaw;
      this._prop(p, 'cap', 'head', 0, 0, 0);
      this.spectators.push(p);
    }
    void fam;
  }

  // ---- per frame (people that aren't in the parade)
  _updatePeople(dt, playerPos) {
    const P = this.parade, on = P && P.state !== 'idle';
    for (const p of this.walkers) {
      if (on && p.role !== 'wander') {
        // everybody stops to watch the parade go by
        p.mode = this._excite(p);
        const want = p.z > 24 ? PI : 0;
        p.yaw += angleTo(p.yaw, want) * Math.min(1, dt * 3);
        continue;
      }
      if (p.role === 'walker') {
        p.x += p.dir * p.speed * dt;
        if (p.x > 125) p.x = -125; else if (p.x < -125) p.x = 125;
        p.yaw = p.dir > 0 ? PI / 2 : -PI / 2;
        p.mode = M_WALK;
        p.phase += (p.speed / 1.5) * TAU * dt;
      } else if (p.role === 'stroller') {
        const d = p.tx - p.x;
        if (Math.abs(d) < 0.3) { p.tx = p.seg[0] + Math.random() * (p.seg[1] - p.seg[0]); p.mode = M_IDLE; }
        else {
          const dir = Math.sign(d);
          p.x += dir * p.speed * dt;
          p.yaw += angleTo(p.yaw, dir > 0 ? PI / 2 : -PI / 2) * Math.min(1, dt * 6);
          p.mode = M_WALK;
          p.phase += (p.speed / 1.5) * TAU * dt;
        }
      } else if (p.role === 'wander') {
        if (p.wait > 0) {
          p.wait -= dt;
          p.mode = M_IDLE;
          if (p.wait <= 0) this._wanderTarget(p);
        } else {
          const dx = p.tx - p.x, dz = p.tz - p.z, dd = Math.hypot(dx, dz);
          if (dd < 0.25) { p.wait = 2 + Math.random() * 5; p.mode = M_IDLE; }
          else {
            const k = Math.min(dd, p.speed * dt) / dd;
            p.x += dx * k; p.z += dz * k;
            p.yaw += angleTo(p.yaw, Math.atan2(dx, dz)) * Math.min(1, dt * 6);
            p.mode = M_WALK;
            p.phase += (p.speed / 1.5) * TAU * dt;
          }
        }
      }
    }
    for (const p of this.spectators) {
      if (p.role === 'rider') {
        // on the shoulders
        const d = p.parent;
        p.x = d.x + Math.sin(d.yaw) * -0.05; p.z = d.z + Math.cos(d.yaw) * -0.05;
        p.y = d.y + d.a[15] + 1.52 * d.scale - 0.55 * p.scale;
        p.yaw = d.yaw;
        p.excited = on && this._nearest(p) < 16;
        continue;
      }
      if (p.role === 'officer') { p.mode = on && this._nearest(p) < 8 ? M_WAVE : M_IDLE; continue; }
      p.mode = on ? this._excite(p) : M_IDLE;
      // look at the nearest float (or up the street, where the parade will come from)
      if (on && this._nearestU) {
        const u = this._nearestU;
        p.look = Math.max(-1.1, Math.min(1.1, angleTo(p.yaw, Math.atan2(u.x - p.x, CITY.parade - p.z))));
      } else p.look = Math.sin(this.t * 0.13 + p.t0) * 0.5 - (p.z > 24 ? -0.35 : 0.35);
    }
    // you can't walk through people (and they don't walk through each other)
    if (playerPos) {
      for (const p of this.people) {
        if (!p.active || !p.walkable) continue;
        const dx = playerPos.x - p.x, dz = playerPos.z - p.z, dd = dx * dx + dz * dz;
        const R = 0.3 + 0.3 * p.scale;
        if (dd < R * R && dd > 1e-6) { const d = Math.sqrt(dd); playerPos.x += (dx / d) * (R - d); playerPos.z += (dz / d) * (R - d); }
      }
    }
  }
  _wanderTarget(p) {
    const W = CITY.walk;
    for (let k = 0; k < 12; k++) {
      const x = W.minX + 1 + Math.random() * (W.maxX - W.minX - 2), z = 12 + Math.random() * 5.4;
      if (this._clearLine(p.x, p.z, x, z)) { p.tx = x; p.tz = z; return; }
    }
    p.wait = 1;
  }
  _clearLine(x0, z0, x1, z1) {
    for (let i = 1; i <= 10; i++) {
      const x = x0 + ((x1 - x0) * i) / 10, z = z0 + ((z1 - z0) * i) / 10;
      for (const c of this.colliders) if (x > c.minX - 0.45 && x < c.maxX + 0.45 && z > c.minZ - 0.45 && z < c.maxZ + 0.45) return false;
    }
    return true;
  }
  // how far the nearest parade unit is (along the street), and which one it is
  _nearest(p) {
    const P = this.parade;
    let best = 1e9;
    this._nearestU = null;
    if (!P || P.state === 'idle') return best;
    for (const u of P.units) {
      if (!u.on) continue;
      const d = Math.abs(u.x - p.x) - u.len / 2;
      if (d < best) { best = d; this._nearestU = u; }
    }
    return Math.max(0, best);
  }
  _excite(p) {
    const d = this._nearest(p);
    if (d < 7) return p.style;
    if (d < 20) return p.style === M_CLAP ? M_CLAP : M_WAVE === p.style || p.style === M_CHEER ? M_WAVE : M_POINT;
    return M_IDLE;
  }

  // ---------------------------------------------------------------- the parade
  // The City Museum's 50th birthday parade (the museum opened in 1974). It walks along the street from
  // west to east at 1.5 m/s: a police car, the banner, the marching band, five floats and two giant
  // balloons, and a street sweeper picking up the confetti. About 120 m long: ~80 s to go past the museum.
  _paradeInit() {
    const P = (this.parade = { state: 'idle', t: 0, head: -60, speed: 1.5, units: [], armed: true, ended: false, endT: -1e9 });
    const r = mulberry32(50);
    const unit = (kind, offset, len, group, wid = 3.6) => {
      const u = { kind, offset, len, wid, group, x: -999, on: false, people: [], seed: r() * 10, cannonT: 2 + r() * 3 };
      if (group) {
        group.visible = false;
        group.userData.dynamic = true;
        group.position.set(-999, Y_ST, CITY.parade);
        this.root.add(group);
      }
      P.units.push(u);
      return u;
    };
    const ride = (u, p, lx, lz, ly = 1.05, yaw = null) => { p.active = false; p.role = 'parade'; u.people.push({ p, lx, lz, ly, yaw }); return p; };
    // 1. police car
    const cop = this._vehicle('police', 0xf4f4f4);
    const uc = unit('police', 0, cop.L, cop.g, cop.W);
    uc.name = 'police';
    uc.car = cop;
    // 2. the banner, carried by two people walking one behind the other
    {
      const g = new THREE.Group(), T = new Bag(), V = new Bag();
      for (const e of [-2.35, 2.35]) V.box(e, 1.6, 0, 0.06, 2.2, 0.06, 0xd4a72c);
      V.box(0, 2.72, 0, 4.8, 0.06, 0.06, 0xd4a72c);
      T.quad(0, 2.2, -0.03, 4.6, 1.0, PI, this.signs.banner_parade);
      T.quad(0, 2.2, 0.03, 4.6, 1.0, 0, this.signs.banner_parade);
      g.add(new THREE.Mesh(V.geometry(), this.mats.vc), new THREE.Mesh(T.geometry(), this.mats.shop));
      const u = unit('banner', 6.5, 5.5, g, 0.6);
      for (const e of [-2.35, 2.35]) {
        const p = ride(u, this._person(r, { kid: false, shirt: 0x1f3d8a, pants: 0xf2f2f2, sleeves: 'long', accent: 0xffffff }), e - 0.28, 0, 0);
        p.mode = M_MARCH; p.inst = 'carry';
      }
    }
    // 3. the marching band: drum major + 3 rows of 4
    {
      const u = unit('band', 15, 10, null, 5);
      u.name = 'band';
      const uni = { kid: false, shirt: 0xc0262e, pants: 0xf2f2f2, sleeves: 'long', accent: 0xffffff, hairStyle: 'short' };
      const dm = ride(u, this._person(r, { ...uni, shirt: 0x1f3d8a, accent: 0x161616 }), 4.6, 0, 0);
      dm.mode = M_MARCH; dm.inst = 'baton';
      this._prop(dm, 'shako', 'head', 0, 0, 0, 0, 0, 0, 1.1, 1.7, 1.1);
      this._prop(dm, 'stick', 'hand', 0, -0.3, 0, 0, 0, 0, 1.6, 2.6, 1.6);
      const rows = [['horn', 'horn', 'horn', 'horn'], ['tuba', 'horn', 'horn', 'tuba'], ['drum', 'drum', 'bass', 'drum']];
      rows.forEach((row, ri) => row.forEach((inst, ci) => {
        const p = ride(u, this._person(r, uni), 2.4 - ri * 2.3, (ci - 1.5) * 1.3, 0);
        p.mode = M_MARCH; p.inst = inst;
        this._prop(p, 'shako', 'head', 0, 0, 0);
        if (inst === 'horn') this._prop(p, 'bell', 'head', 0, 0.06, 0.2, 0, 0, 0, 1);
        if (inst === 'tuba') this._prop(p, 'bell', 'torso', 0.05, 0.98, 0.12, -0.9, 0, 0, 3.2);
        if (inst === 'drum') {
          this._prop(p, 'drum', 'torso', 0, -0.06, 0.27, 0.32, 0, 0, 1);
          this._prop(p, 'stick', 'hand', 0, -0.3, 0.05, 1.2, 0, 0, 1);
          this._prop(p, 'stick', 'handL', 0, -0.3, 0.05, 1.2, 0, 0, 1);
        }
        if (inst === 'bass') this._prop(p, 'drum', 'torso', 0, 0.12, 0.38, 0, 0, PI / 2, 2.0, 1.9, 2.0);
      }));
    }
    // 4. floats and balloons
    const fm = this._floatMuseum(), um = unit('float', 29, 10, fm.group);
    um.name = 'museum';
    um.anim = fm.anim; um.cannon = new THREE.Vector3(1.0, 1.6, 0);
    ride(um, this._person(r, { kid: false, shirt: 0x8fb3e0, pants: 0x1b2440, skin: 0xc68e64, hair: 0x111111, accent: 0x1b2440, sleeves: 'long', hairStyle: 'short' }), 0.4, -0.75).mode = M_WAVE;
    this._prop(um.people[0].p, 'cap', 'head', 0, 0, 0);
    ride(um, this._person(r, { kid: false, shirt: 0x2b2b2b, pants: 0x2b2b2b, sleeves: 'long', hairStyle: 'bald' }), 0.4, 0.75).mode = M_WAVE;
    {
      const b = this._balloonPtero(), u = unit('balloon', 42, 8, b.group, 5);
      u.anim = b.anim; u.anchors = b.anchors; u.alt = 9.2;
      for (const [lx, lz] of [[1.8, -1.9], [1.8, 1.9], [-1.8, -1.9], [-1.8, 1.9]]) {
        const p = ride(u, this._person(r, { kid: false, shirt: 0x6a4ac0, pants: 0x6a4ac0, sleeves: 'long', accent: 0xffd34d }), lx, lz, 0);
        p.mode = M_HOLD;
        this._prop(p, 'cap', 'head', 0, 0, 0);
      }
    }
    const ft = this._floatTRex(), ut = unit('float', 55, 11, ft.group, 3.8);
    ut.name = 'trex';
    ut.anim = ft.anim;
    ride(ut, this._person(r, { kid: false, shirt: 0xc9a46c, pants: 0x6b5a48, sleeves: 'short', accent: 0xc9a46c }), -3.0, 0.9).mode = M_WAVE;
    this._prop(ut.people[0].p, 'cap', 'head', 0, 0, 0);
    const fe = this._floatEgypt(), ue = unit('float', 68, 10, fe.group);
    ue.name = 'egypt';
    ue.anim = fe.anim;
    const mummy = ride(ue, this._person(r, { kid: false, shirt: 0xd8ccae, pants: 0xd2c6a8, skin: 0xe0d6bc, hair: 0xd8ccae, sleeves: 'long', hairStyle: 'bald', accent: 0xd8ccae }), 2.4, 0);
    mummy.mode = M_WAVE;
    mummy.pal[3] = 0xe0d6bc;
    {
      const b = this._balloonWhale(), u = unit('balloon', 81, 10, b.group, 5);
      u.anim = b.anim; u.anchors = b.anchors; u.alt = 8.6;
      for (const [lx, lz] of [[2.2, -1.9], [2.2, 1.9], [-2.0, -1.9], [-2.0, 1.9]]) {
        const p = ride(u, this._person(r, { kid: false, shirt: 0x2a6fb0, pants: 0x2a6fb0, sleeves: 'long', accent: 0xffffff }), lx, lz, 0);
        p.mode = M_HOLD;
        this._prop(p, 'cap', 'head', 0, 0, 0);
      }
    }
    const fr = this._floatRome(), ur = unit('float', 94, 10, fr.group);
    ur.name = 'rome';
    ur.anim = fr.anim;
    const emp = ride(ur, this._person(r, { kid: false, shirt: 0xf4f1e8, pants: 0xf4f1e8, sleeves: 'long', accent: 0xd4a72c, hairStyle: 'short' }), 1.15, 0, 1.25);
    emp.mode = M_WAVE;
    emp.pal[4] = 0xa01020;
    this._prop(emp, 'shako', 'head', 0, -0.03, 0, 0, 0, 0, 1.05, 0.8, 1.15);
    const fd = this._floatDonut(), ud = unit('float', 107, 10, fd.group);
    ud.name = 'donut';
    ud.anim = fd.anim; ud.cannon = new THREE.Vector3(0.3, 4.6, 0);
    ride(ud, this._person(r, { kid: false, shirt: 0xff6fa6, pants: 0xffffff, sleeves: 'short', accent: 0xff6fa6 }), -2.0, -0.8).mode = M_CHEER;
    ride(ud, this._person(r, { kid: true, shirt: 0xffd9e6, accent: 0xff6fa6 }), -2.0, 0.8).mode = M_WAVE;
    // 5. the street sweeper, cleaning up
    const sw = this._sweeper(), us = unit('sweeper', 118, 5.2, sw.group, 2.2);
    us.anim = sw.anim;
    this.sweeperUnit = us;
    P.tailOffset = 121;
    // ropes from the balloon handlers' hands to the balloons
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(16 * 6), 3).setUsage(THREE.DynamicDrawUsage));
    const ropes = (this.ropes = new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0x2b2b2b })));
    ropes.frustumCulled = false;
    ropes.visible = false;
    ropes.name = 'city-ropes';
    this.root.add(ropes);
    this._confettiInit();
  }

  // start the parade (day only). Returns false if it can't start right now.
  startParade() {
    const P = this.parade;
    if (this.night || !P || P.state !== 'idle') return false;
    P.state = 'running';
    P.t = 0;
    P.ended = false;
    // start out of sight: just past what you can see from the lobby, farther if you're outside
    const cam = this.game.camera.position;
    P.head = cam.z > Z_WALL - 0.3 ? -128 : -48;
    for (const u of P.units) u.x = P.head - u.offset;
    this.onParadeStart?.();
    return true;
  }
  stopParade() {
    const P = this.parade;
    if (!P || P.state === 'idle') return;
    this._paradeOff();
  }
  get paradeActive() { return !!(this.parade && this.parade.state !== 'idle'); }
  // where a part of the parade ('police', 'band', 'museum', 'trex', 'egypt', 'rome', 'donut') is along the
  // street right now (its x), or null when it isn't marching where anyone could see it
  paradeX(name) {
    const P = this.parade;
    if (!P || P.state === 'idle') return null;
    for (const u of P.units) if (u.name === name) return u.on ? u.x : null;
    return null;
  }
  // 0..1: how close the marching band is to the museum's front door (for the music volume)
  get paradeNear() {
    const P = this.parade;
    if (!P || P.state === 'idle') return 0;
    const bx = P.head - 15;
    return Math.max(0, 1 - Math.abs(bx) / 70);
  }
  _paradeOff() {
    const P = this.parade;
    P.state = 'idle';
    P.armed = false;
    P.endT = this.t;
    for (const u of P.units) {
      u.on = false;
      if (u.group) u.group.visible = false;
      for (const pp of u.people) pp.p.active = false;
    }
    this.ropes.visible = false;
    if (!P.ended) { P.ended = true; this.onParadeEnd?.(); }
  }

  _updateParade(dt, playerPos) {
    const P = this.parade;
    if (!P) return;
    if (P.state === 'idle') {
      // walk up to the windows (or out the door) and the parade starts. It comes back later if you leave
      // and come back again.
      if (playerPos && !P.armed && playerPos.z < this.paradeTriggerZ - 5 && this.t - P.endT > 20) P.armed = true;
      if (this.autoParade && P.armed && playerPos && playerPos.z > this.paradeTriggerZ && this.game.mode === 'explore') this.startParade();
      return;
    }
    P.t += dt;
    // far away it hurries to get here; in sight it's walking pace
    const v = 1.5 + Math.min(1, Math.max(0, (-60 - P.head) / 12)) * 5;
    P.speed = v;
    P.head += v * dt;
    const t = this.t;
    for (const u of P.units) {
      u.x = P.head - u.offset;
      const on = u.x > -150 && u.x < 150;
      u.on = on;
      if (u.group) u.group.visible = on;
      for (const pp of u.people) pp.p.active = on;
      if (!on) continue;
      if (u.group) {
        u.group.position.x = u.x;
        if (u.kind === 'balloon') {
          u.group.position.y = u.alt + Math.sin(t * 0.9 + u.seed) * 0.3;
          u.group.rotation.y = Math.sin(t * 0.37 + u.seed) * 0.12;
          u.group.rotation.z = Math.sin(t * 0.61 + u.seed) * 0.05;
          u.group.rotation.x = Math.sin(t * 0.53 + u.seed) * 0.05;
        } else if (u.kind === 'float') {
          u.group.position.y = Y_ST + Math.sin(t * 2.1 + u.seed) * 0.015;
          u.group.rotation.x = Math.sin(t * 1.3 + u.seed) * 0.008;
        }
        u.anim?.(t, u);
      }
      for (const pp of u.people) {
        const p = pp.p;
        p.x = u.x + pp.lx;
        p.z = CITY.parade + pp.lz;
        p.y = (u.kind === 'float' ? u.group.position.y : Y_ST) + pp.ly + (pp.ly ? 0 : 0);
        if (u.kind === 'float') {
          // riders turn to wave at one side of the street, then the other
          const side = Math.sin(t * 0.35 + pp.lx + u.seed) > 0 ? 0 : PI;
          p.yaw += angleTo(p.yaw, side + Math.sin(t * 0.8 + pp.lz) * 0.3) * Math.min(1, dt * 2);
        } else {
          p.yaw = PI / 2;
          p.phase += TAU * dt * (v / 1.5) * 0.95;
          if (u.kind === 'band' || u.kind === 'banner') p.phase = P.t * TAU * 0.95 * (v / 1.5);
        }
      }
      // floats with confetti cannons
      if (u.cannon && Math.abs(u.x) < 45) {
        u.cannonT -= dt;
        if (u.cannonT <= 0) {
          u.cannonT = 4 + Math.random() * 4;
          this._burst(u.x + u.cannon.x, Y_ST + u.cannon.y, CITY.parade + u.cannon.z, 70, u.offset > 100);
        }
      }
    }
    // ticker tape from the windows across the street while the parade goes by
    const mid = P.head - 60;
    if (Math.abs(mid) < 80) {
      this.tapeAcc = (this.tapeAcc || 0) + dt * 28;
      while (this.tapeAcc > 1) {
        this.tapeAcc--;
        this._tape();
      }
    }
    if (!P.ended && P.head - P.tailOffset > 40) { P.ended = true; this.onParadeEnd?.(); }
    if (P.head - P.tailOffset > 130) this._paradeOff();
  }

  // ---- drawing the parade (only when you can see the city)
  _drawParade() {
    const P = this.parade;
    if (!P || P.state === 'idle') { if (this.ropes) this.ropes.visible = false; return; }
    const pos = this.ropes.geometry.attributes.position.array;
    let n = 0;
    for (const u of P.units) {
      if (!u.on) continue;
      if (u.kind === 'float') this._blob(u.x, Y_ST, CITY.parade, u.len * 1.08, u.wid * 1.2, 0);
      else if (u.kind === 'police' || u.kind === 'sweeper') this._blob(u.x, Y_ST, CITY.parade, u.len + 0.6, u.wid + 0.7, 0);
      else if (u.kind === 'balloon') {
        this._blob(u.x, Y_ST, CITY.parade, u.len * 0.9, 3.2, 0);
        // ropes: hand → anchor on the balloon
        u.group.updateMatrix();
        for (let i = 0; i < u.people.length && n < 16; i++) {
          _v.copy(u.anchors[i % u.anchors.length]).applyMatrix4(u.group.matrix);
          const q = u.people[i].p, h = q.hand;
          if (q.seen) { pos[n * 6] = h.x; pos[n * 6 + 1] = h.y; pos[n * 6 + 2] = h.z; }
          else { pos[n * 6] = q.x; pos[n * 6 + 1] = q.y + 2.0 * q.scale; pos[n * 6 + 2] = q.z; }
          pos[n * 6 + 3] = _v.x; pos[n * 6 + 4] = _v.y; pos[n * 6 + 5] = _v.z;
          n++;
        }
      }
    }
    this.ropes.geometry.setDrawRange(0, n * 2);
    this.ropes.geometry.attributes.position.needsUpdate = true;
    this.ropes.visible = n > 0;
  }
  // flashing lights (police car, sweeper beacon)
  _paradeLights() {
    const P = this.parade;
    if (!P || P.state === 'idle') return;
    const t = this.t, n = this.night, CELL = this.CELL;
    for (const u of P.units) {
      if (!u.on) continue;
      if (u.kind === 'police') {
        const red = Math.floor(t * 4) % 2 === 0;
        const y = Y_ST + 1.64, zz = CITY.parade + (red ? 0.3 : -0.3);
        this._dynGlow(u.x - 0.15, y, zz, n ? 2.2 : 1.4, red ? 2.2 : 0.2, red ? 0.1 : 0.4, red ? 0.1 : 2.4);
        for (const sz of [1, -1]) this._dynQuad(u.x - 0.15, y - 0.08, zz + sz * 0.28, 0.3, 0.14, sz > 0 ? 0 : PI, CELL.disc, red ? 3 : 0.3, red ? 0.2 : 0.6, red ? 0.2 : 3);
      } else if (u.kind === 'sweeper' && t % 1 < 0.5) {
        this._dynGlow(u.x + 1.5, Y_ST + 2.32, CITY.parade, n ? 1.8 : 1.1, 2.2, 1.2, 0.1);
      }
    }
  }

  // ---- confetti (and ticker tape): cheap instanced paper bits
  _confettiInit() {
    const N = (this.confMax = 700);
    const geo = new THREE.PlaneGeometry(0.075, 0.1);
    const mat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
    const m = (this.confMesh = new THREE.InstancedMesh(geo, mat, N));
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.setColorAt(0, _c.set(0xffffff));
    m.instanceColor.setUsage(THREE.DynamicDrawUsage);
    m.frustumCulled = false;
    m.count = 0;
    m.visible = false;
    m.name = 'city-confetti';
    this.root.add(m);
    this.conf = { p: new Float32Array(N * 3), v: new Float32Array(N * 3), r: new Float32Array(N * 3), w: new Float32Array(N * 3), life: new Float32Array(N), state: new Uint8Array(N), col: new Float32Array(N * 3), next: 0 };
  }
  _spawnBit(x, y, z, vx, vy, vz, pink) {
    const C = this.conf, N = this.confMax;
    // reuse the oldest slot
    const i = C.next;
    C.next = (C.next + 1) % N;
    C.state[i] = 1;
    C.p[i * 3] = x; C.p[i * 3 + 1] = y; C.p[i * 3 + 2] = z;
    C.v[i * 3] = vx; C.v[i * 3 + 1] = vy; C.v[i * 3 + 2] = vz;
    C.r[i * 3] = Math.random() * TAU; C.r[i * 3 + 1] = Math.random() * TAU; C.r[i * 3 + 2] = Math.random() * TAU;
    C.w[i * 3] = 4 + Math.random() * 8; C.w[i * 3 + 1] = 3 + Math.random() * 6; C.w[i * 3 + 2] = Math.random() * 3;
    C.life[i] = 50 + Math.random() * 20;
    const pal = pink ? CONF_PINK : CONF;
    _c.set(pal[Math.floor(Math.random() * pal.length)]);
    C.col[i * 3] = _c.r; C.col[i * 3 + 1] = _c.g; C.col[i * 3 + 2] = _c.b;
  }
  _burst(x, y, z, n, pink) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * TAU, s = 0.8 + Math.random() * 2.2;
      this._spawnBit(x, y, z, Math.cos(a) * s, 6.5 + Math.random() * 4, Math.sin(a) * s, pink);
    }
  }
  _tape() {
    const x = -40 + Math.random() * 80, y = 5.5 + Math.random() * 9;
    this._spawnBit(x, y, Z_FRONT - 0.3, (Math.random() - 0.5) * 0.6, 0.3, -0.5 - Math.random() * 1.2, false);
  }
  _updateConfetti(dt, draw) {
    const C = this.conf;
    if (!C) return;
    const N = this.confMax, m = this.confMesh, arr = m.instanceMatrix.array, col = m.instanceColor.array;
    const sweepX = this.sweeperUnit && this.sweeperUnit.on ? this.sweeperUnit.x + 2.6 : -1e9;
    let n = 0;
    for (let i = 0; i < N; i++) {
      const st = C.state[i];
      if (!st) continue;
      const o = i * 3;
      let x = C.p[o], y = C.p[o + 1], z = C.p[o + 2];
      if (st === 1) {
        let vx = C.v[o], vy = C.v[o + 1], vz = C.v[o + 2];
        vy -= 9.8 * dt;
        if (vy < -1.15) vy = -1.15 + (vy + 1.15) * 0.2; // paper flutters down slowly
        const drag = Math.exp(-1.6 * dt);
        vx *= drag; vz *= drag;
        x += (vx + Math.sin(this.t * C.w[o + 2] + i) * 0.5) * dt;
        y += vy * dt;
        z += vz * dt;
        C.v[o] = vx; C.v[o + 1] = vy; C.v[o + 2] = vz;
        C.r[o] += C.w[o] * dt; C.r[o + 1] += C.w[o + 1] * dt;
        const ground = z > Z_CURB && z < Z_FAR ? Y_ST : 0;
        if (y <= ground + 0.012 && vy < 0) { y = ground + 0.012; C.state[i] = 2; C.r[o] = -PI / 2; C.r[o + 1] = 0; }
        C.p[o] = x; C.p[o + 1] = y; C.p[o + 2] = z;
      } else {
        C.life[i] -= dt;
        // the sweeper picks up what's on the street
        if (C.life[i] <= 0 || (x < sweepX && x > sweepX - 4 && z > Z_CURB && z < Z_FAR)) { C.state[i] = 0; continue; }
      }
      if (!draw) continue;
      _e.set(C.r[o], C.r[o + 2], C.r[o + 1]);
      _m.makeRotationFromEuler(_e);
      _m.elements[12] = x; _m.elements[13] = y; _m.elements[14] = z;
      _m.toArray(arr, n * 16);
      col[n * 3] = C.col[o]; col[n * 3 + 1] = C.col[o + 1]; col[n * 3 + 2] = C.col[o + 2];
      n++;
    }
    if (draw) {
      m.count = n;
      m.visible = n > 0;
      if (n) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; }
    }
  }

  // ---- float building blocks
  _floatBase(B, len, wid, c1, c2, deck, trim) {
    const H = 1.05;
    B.box(0, H - 0.1, 0, len, 0.2, wid, deck);
    // pleated skirt down to the street (it hides the wheels)
    const n = Math.max(6, Math.round(len / 0.36)), m = Math.max(4, Math.round(wid / 0.36));
    for (let k = 0; k < n; k++) {
      const x = -len / 2 + (k + 0.5) * (len / n), cl = k % 2 ? c1 : c2;
      for (const s of [-1, 1]) B.add(GEO.plane(), cl, x, (H - 0.1) / 2 + 0.03, s * (wid / 2 + 0.03), (len / n) * 1.03, H - 0.1, 1, -s * 0.07, s > 0 ? 0 : PI, 0);
    }
    for (let k = 0; k < m; k++) {
      const z = -wid / 2 + (k + 0.5) * (wid / m), cl = k % 2 ? c1 : c2;
      for (const s of [-1, 1]) B.add(GEO.plane(), cl, s * (len / 2 + 0.03), (H - 0.1) / 2 + 0.03, z, (wid / m) * 1.03, H - 0.1, 1, 0, s * PI / 2, 0);
    }
    for (const s of [-1, 1]) {
      B.box(0, H - 0.05, s * (wid / 2 + 0.07), len + 0.16, 0.12, 0.06, trim);
      B.box(s * (len / 2 + 0.07), H - 0.05, 0, 0.06, 0.12, wid + 0.16, trim);
      // a fringe of tinsel along the bottom
      B.box(0, 0.06, s * (wid / 2 + 0.1), len, 0.1, 0.04, trim);
    }
    return H;
  }
  _floatGroup(B, T, extra = []) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(B.geometry(), this.mats.vc));
    const tg = T && T.geometry();
    if (tg) g.add(new THREE.Mesh(tg, this.mats.shop));
    for (const e of extra) g.add(e);
    g.traverse((o) => { if (o.isMesh) o.name = o.name || 'city-float'; });
    return g;
  }
  _skirtSign(T, len, wid, rect, h = 0.7) {
    T.quad(0, 0.55, -(wid / 2 + 0.09), len * 0.78, h, PI, rect);
    T.quad(0, 0.55, wid / 2 + 0.09, len * 0.78, h, 0, rect);
  }
  _balloonBunch(B, x, y, z) {
    const cols = [0xff4f7a, 0xffd34d, 0x5fd0ff, 0x7dff6b, 0xb86bff];
    B.cyl(x, y - 1.2, z, 0.02, 1.2, 0xffffff, 4);
    for (let k = 0; k < 4; k++) B.sph(x + Math.cos(k * 1.7) * 0.22, y + 0.1 + (k % 2) * 0.25, z + Math.sin(k * 1.7) * 0.22, 0.22, cols[(k + Math.floor(x * 3)) % cols.length], 8, 6, 1.15);
  }

  _floatMuseum() {
    const B = new Bag(), T = new Bag();
    const H = this._floatBase(B, 10, 3.6, 0x1f3d8a, 0xffd34d, 0xf4f1e8, 0xffd34d);
    this._skirtSign(T, 10, 3.6, this.signs.banner_museum);
    // a little museum (temple) at the back
    B.box(-3.0, H + 0.12, 0, 4.0, 0.24, 2.9, 0xe9e0cb);
    for (const cx of [-4.6, -3.55, -2.45, -1.4]) for (const cz of [-1.15, 1.15]) {
      B.cyl(cx, H + 0.24, cz, 0.15, 2.0, 0xffffff, 10);
      B.box(cx, H + 2.3, cz, 0.36, 0.12, 0.36, 0xe9e0cb);
    }
    B.box(-3.0, H + 2.5, 0, 4.0, 0.3, 2.9, 0xe9e0cb);
    B.add(GEO.prism(), 0xe9e0cb, -3.0, H + 2.65, 0, 3.0, 0.8, 4.2, 0, PI / 2, 0);
    T.quad(-3.0, H + 2.5, -1.46, 3.9, 0.22, PI, this.signs.frieze);
    T.quad(-3.0, H + 2.5, 1.46, 3.9, 0.22, 0, this.signs.frieze);
    // a big gold "50" on a board, readable from both sides of the street
    const bx = 2.9, by = H + 0.25;
    B.box(bx, by + 1.35, 0, 3.6, 2.7, 0.12, 0x1f3d8a);
    B.box(bx, by + 2.74, 0, 3.7, 0.08, 0.16, 0xffd34d);
    B.box(bx, by - 0.02, 0, 3.7, 0.08, 0.16, 0xffd34d);
    const gold = 0xffc72c;
    for (const f of [-1, 1]) {
      // f = -1: the side facing the museum (-z), f = 1: facing the far side
      const zz = f * 0.17, five = bx - f * 0.8, zero = bx + f * 0.8;
      // 5
      const w = 1.1, h = 2.0, th = 0.28, y0 = by + 0.35;
      B.box(five, y0 + h - th / 2, zz, w, th, 0.2, gold);
      // (the top stroke of a 5 is on the viewer's left: +x seen from the museum, -x from across the street)
      B.box(five - f * (w / 2 - th / 2), y0 + h * 0.75, zz, th, h / 2, 0.2, gold);
      B.box(five, y0 + h / 2, zz, w, th, 0.2, gold);
      B.box(five + f * (w / 2 - th / 2), y0 + h * 0.25, zz, th, h / 2, 0.2, gold);
      B.box(five, y0 + th / 2, zz, w, th, 0.2, gold);
      // 0
      B.add(GEO.torus(0.22, 8, 18), gold, zero, y0 + h / 2, zz, 1.05, 1.9, 0.75);
    }
    for (const [x, z] of [[-4.7, -1.55], [-4.7, 1.55], [4.7, -1.55], [4.7, 1.55]]) this._balloonBunch(B, x, H + 2.6, z);
    return { group: this._floatGroup(B, T), anim: null };
  }

  _floatTRex() {
    const B = new Bag(), T = new Bag();
    const H = this._floatBase(B, 11, 3.8, 0x2f8f3f, 0xf2d23a, 0x6a5a2a, 0xf2d23a);
    this._skirtSign(T, 11, 3.8, this.signs.banner_trex);
    const r = mulberry32(17);
    // jungle: ferns, rocks, a little volcano
    for (let k = 0; k < 12; k++) {
      const x = -5 + r() * 10, z = (r() < 0.5 ? -1 : 1) * (1.1 + r() * 0.6);
      B.add(GEO.cone(6), [0x3f8f3a, 0x4fa34a, 0x2f7a32][k % 3], x, H + 0.35, z, 0.7, 0.7, 0.7);
    }
    for (let k = 0; k < 5; k++) B.add(GEO.ico(0), 0x8a8a80, -4.6 + r() * 9, H + 0.15, (r() - 0.5) * 3, 0.6, 0.4, 0.5, r(), r(), 0);
    B.add(GEO.cone(10), 0x6b4a32, -4.3, H + 1.0, 0, 2.6, 2.0, 2.6);
    B.cyl(-4.3, H + 1.85, 0, 0.32, 0.2, 0xff6a1a, 10);
    for (let k = 0; k < 3; k++) B.sph(-4.3 + k * 0.2, H + 2.4 + k * 0.45, 0.1 * k, 0.28 + k * 0.08, 0xb9b9b9, 8, 6);
    // the friendly T-Rex
    const G = 0x6cc04a, BELLY = 0xe2eca4, SPOT = 0x4f9a35;
    B.add(GEO.sph(14, 10), G, 0.2, H + 2.0, 0, 3.0, 2.2, 1.9, 0, 0, 0.42);
    B.add(GEO.sph(12, 8), BELLY, 0.65, H + 1.85, 0, 1.9, 1.7, 1.55, 0, 0, 0.42);
    for (const s of [-1, 1]) {
      B.add(GEO.sph(10, 8), G, -0.25, H + 1.25, s * 0.72, 1.3, 1.5, 0.75);
      B.cyl(0.05, H, s * 0.85, 0.27, 1.0, G, 10);
      B.box(0.32, H + 0.14, s * 0.85, 0.85, 0.28, 0.55, G);
      for (let c = -1; c <= 1; c++) B.add(GEO.cone(5), 0xffffff, 0.8, H + 0.12, s * 0.85 + c * 0.17, 0.1, 0.2, 0.1, 0, 0, -PI / 2);
    }
    B.add(GEO.cone(12), G, -2.35, H + 1.3, 0, 1.5, 3.6, 1.3, 0, 0, PI / 2 + 0.22);
    for (let k = 0; k < 6; k++) B.add(GEO.cone(5), SPOT, -1.6 + k * 0.55, H + 2.55 + k * 0.28 - (k > 3 ? (k - 3) * 0.3 : 0), 0, 0.3, 0.45, 0.3, 0, 0, 0.3);
    B.cyl(1.25, H + 2.6, 0, 0.55, 1.0, G, 10);
    // head (nods and looks around) and the tiny arms (wave)
    const hb = new Bag();
    hb.add(GEO.sph(14, 10), G, 0.5, 0.35, 0, 1.55, 1.1, 1.15);
    hb.add(GEO.sph(12, 8), G, 1.15, 0.15, 0, 1.15, 0.75, 0.95);
    hb.box(1.05, -0.05, 0, 1.05, 0.06, 0.92, 0x7a1a2a); // the smile
    for (let k = 0; k < 7; k++) for (const s of [-1, 1]) hb.add(GEO.cone(4), 0xffffff, 0.62 + k * 0.14, -0.1, s * (0.42 - k * 0.025), 0.07, 0.13, 0.07, PI, 0, 0);
    for (const s of [-1, 1]) {
      hb.sph(0.75, 0.75, s * 0.36, 0.24, 0xffffff, 10, 8);
      hb.sph(0.86, 0.77, s * 0.5, 0.12, 0x111111, 8, 6);
      hb.sph(0.9, 0.84, s * 0.55, 0.04, 0xffffff, 5, 4);
      hb.sph(1.66, 0.36, s * 0.16, 0.05, 0x1f3a1a, 5, 4);
    }
    // a party hat
    hb.add(GEO.cone(10), 0xff4f7a, 0.35, 1.25, 0, 0.5, 0.75, 0.5, 0, 0, -0.25);
    hb.sph(0.26, 1.62, 0, 0.08, 0xffd34d, 6, 5);
    const head = new THREE.Mesh(hb.geometry(), this.mats.vc);
    head.position.set(1.45, H + 3.0, 0);
    const ab = new Bag();
    for (const s of [-1, 1]) {
      ab.add(GEO.cyl(6), G, 0.25, -0.15, s * 0.68, 0.18, 0.55, 0.18, 0, 0, 1.0);
      ab.add(GEO.cone(4), 0xffffff, 0.5, -0.32, s * 0.68, 0.06, 0.14, 0.06, 0, 0, 1.6);
    }
    const arms = new THREE.Mesh(ab.geometry(), this.mats.vc);
    arms.position.set(1.0, H + 2.3, 0);
    const anim = (t, u) => {
      head.rotation.z = Math.sin(t * 1.3 + u.seed) * 0.12;
      head.rotation.y = Math.sin(t * 0.55 + u.seed) * 0.45;
      arms.rotation.z = Math.sin(t * 5) * 0.35;
    };
    return { group: this._floatGroup(B, T, [head, arms]), anim };
  }

  _floatEgypt() {
    const B = new Bag(), T = new Bag();
    const H = this._floatBase(B, 10, 3.6, 0x1f3d8a, 0xd4a72c, 0xd9b56a, 0xd4a72c);
    this._skirtSign(T, 10, 3.6, this.signs.banner_egypt);
    B.add(GEO.pyramid(), 0xd8b066, -2.6, H + 1.4, 0, 3.0, 2.8, 3.0);
    B.add(GEO.pyramid(), 0xffd34d, -2.6, H + 2.53, 0, 0.6, 0.56, 0.6);
    // palm trees
    for (const s of [-1, 1]) {
      const px = 0.2, pz = s * 1.15;
      for (let k = 0; k < 4; k++) B.cyl(px + k * 0.04, H + k * 0.6, pz, 0.13 - k * 0.015, 0.62, 0x8a6a3a, 7);
      for (let k = 0; k < 7; k++) {
        const a = (k / 7) * TAU;
        B.box(px + Math.cos(a) * 0.75, H + 2.35, pz + Math.sin(a) * 0.75, 1.6, 0.05, 0.36, 0x3f8f3a, -a, 0, -0.45);
      }
    }
    // the sarcophagus, standing open behind its mummy
    B.add(GEO.cyl(12), 0xd4a72c, 3.3, H + 1.2, 0, 0.9, 2.2, 0.55);
    B.box(3.32, H + 1.4, 0, 0.5, 1.4, 0.58, 0x1f3d8a);
    B.sph(3.3, H + 2.3, 0, 0.32, 0xd4a72c, 10, 8);
    // obelisks
    for (const s of [-1, 1]) {
      B.box(4.55, H + 1.0, s * 1.35, 0.32, 2.0, 0.32, 0x8a4a3a);
      B.add(GEO.pyramid(), 0xffd34d, 4.55, H + 2.12, s * 1.35, 0.33, 0.25, 0.33);
    }
    // a cat statue (Bastet)
    B.sph(-0.8, H + 0.4, 1.2, 0.3, 0x1a1a1a, 10, 8, 1.6);
    B.sph(-0.72, H + 0.95, 1.2, 0.18, 0x1a1a1a, 8, 6);
    for (const e of [-0.08, 0.08]) B.add(GEO.cone(4), 0x1a1a1a, -0.72, H + 1.13, 1.2 + e, 0.07, 0.16, 0.07);
    B.add(GEO.torus(0.15, 6, 12), 0xd4a72c, -0.74, H + 0.78, 1.2, 0.36, 0.36, 0.36, PI / 2, 0, 0);
    return { group: this._floatGroup(B, T), anim: null };
  }

  _floatRome() {
    const B = new Bag(), T = new Bag();
    const H = this._floatBase(B, 10, 3.6, 0x8a1022, 0xd4a72c, 0xcfc5b0, 0xd4a72c);
    this._skirtSign(T, 10, 3.6, this.signs.banner_rome);
    for (const cx of [-4.3, -2.3]) for (const cz of [-1.2, 1.2]) {
      B.box(cx, H + 0.1, cz, 0.55, 0.2, 0.55, 0xe9e0cb);
      B.cyl(cx, H + 0.2, cz, 0.2, 2.5, 0xffffff, 12);
      B.box(cx, H + 2.78, cz, 0.55, 0.16, 0.55, 0xe9e0cb);
    }
    B.box(-3.3, H + 3.05, 0, 2.7, 0.38, 3.0, 0xe9e0cb);
    T.quad(-3.3, H + 3.05, -1.52, 2.2, 0.36, PI, this.signs.spqr);
    T.quad(-3.3, H + 3.05, 1.52, 2.2, 0.36, 0, this.signs.spqr);
    // the chariot (the emperor rides in it) and two white horses
    B.box(1.15, H + 0.65, 0, 1.2, 0.9, 1.15, 0x8a6a3a);
    B.box(1.15, H + 1.12, 0, 1.25, 0.08, 1.2, 0xd4a72c);
    for (const s of [-1, 1]) {
      B.add(GEO.torus(0.1, 6, 18), 0x5a3a22, 1.0, H + 0.5, s * 0.68, 1.0, 1.0, 1.0);
      for (let k = 0; k < 3; k++) B.box(1.0, H + 0.5, s * 0.68, 0.04, 0.95, 0.04, 0x5a3a22, 0, 0, (k * PI) / 3);
    }
    for (const s of [-1, 1]) {
      this._horse(B, 2.95, H, s * 0.48, 0xf2f0ea, 0x8a5a2a);
      B.box(2.35, H + 1.32, s * 0.36, 1.3, 0.03, 0.03, 0x5a3a22); // reins
    }
    B.add(GEO.torus(0.07, 6, 20), 0x3f8f3a, 4.75, H + 1.4, 0, 1.2, 1.2, 1.2);
    return { group: this._floatGroup(B, T), anim: null };
  }

  // a horse with a red plume, facing +x, hooves on y (for the Roman float)
  _horse(B, x, y, z, color, mane) {
    B.push(x, y, z);
    B.add(GEO.sph(10, 8), color, 0, 1.12, 0, 1.25, 0.6, 0.52); // barrel
    B.add(GEO.sph(10, 8), color, 0.5, 1.17, 0, 0.6, 0.62, 0.5); // chest
    B.add(GEO.sph(10, 8), color, -0.5, 1.2, 0, 0.62, 0.62, 0.52); // rump
    B.add(GEO.cyl(8), color, 0.78, 1.55, 0, 0.3, 0.8, 0.26, 0, 0, -0.65); // neck
    B.add(GEO.box(), color, 1.17, 1.69, 0, 0.55, 0.24, 0.22, 0, 0, -0.9); // head
    B.sph(1.34, 1.47, 0, 0.12, color, 8, 6); // muzzle
    for (const ez of [-0.06, 0.06]) {
      B.add(GEO.cone(6), color, 0.98, 2.02, ez, 0.06, 0.15, 0.05);
      B.sph(1.2, 1.78, ez * 1.9, 0.03, 0x161616, 5, 4);
    }
    B.box(0.72, 1.74, 0, 0.1, 0.72, 0.06, mane, 0, 0, -0.65);
    B.add(GEO.cone(7), mane, -0.99, 0.97, 0, 0.24, 0.8, 0.18, 0, 0, -0.47); // tail
    for (const [lx, lz] of [[0.5, -0.15], [0.5, 0.15], [-0.5, -0.15], [-0.5, 0.15]]) {
      B.cyl(lx, 0.55, lz, 0.07, 0.5, color, 7, 0.09);
      B.cyl(lx, 0.07, lz, 0.05, 0.52, color, 6);
      B.cyl(lx, 0, lz, 0.065, 0.09, 0x2a2420, 7);
    }
    B.box(0.46, 1.2, 0, 0.06, 0.5, 0.56, 0xa01020); // harness
    B.sph(0.5, 1.25, 0, 0.06, 0xd4a72c, 8, 6); // (its gold boss)
    B.add(GEO.cone(6), 0xd01818, 0.98, 2.2, 0, 0.13, 0.38, 0.13); // plume
    B.pop();
  }

  _floatDonut() {
    const B = new Bag(), T = new Bag();
    const H = this._floatBase(B, 10, 3.6, 0xff6fa6, 0xffffff, 0xffd9e6, 0xffffff);
    this._skirtSign(T, 10, 3.6, this.signs.banner_donut);
    // stand + the giant spinning donut
    B.cyl(0.3, H, 0, 0.3, 0.9, 0xffffff, 10);
    const db = new Bag();
    db.add(GEO.torus(0.24, 10, 22), 0xd49a5c, 0, 0, 0, 3.0, 3.0, 3.0);
    const r = mulberry32(31), sc = [0xffffff, 0x7ad3ff, 0xffe14d, 0x7dff6b, 0xb86bff, 0xff3b3b];
    for (const f of [-1, 1]) {
      db.add(GEO.torus(0.23, 10, 22), 0xff7eb6, 0, 0, f * 0.12, 3.08, 3.08, 1.9);
      for (let k = 0; k < 24; k++) {
        const a = r() * TAU, s = (r() * 2 - 1) * 0.55, rr = 1.54 + s;
        const front = 0.44 * Math.sqrt(Math.max(0, 1 - (s / 0.71) ** 2));
        db.box(Math.cos(a) * rr, Math.sin(a) * rr, f * (0.12 + front + 0.02), 0.22, 0.07, 0.05, sc[k % sc.length], 0, 0, r() * PI);
      }
    }
    const donut = new THREE.Mesh(db.geometry(), this.mats.vc);
    donut.position.set(0.3, H + 3.1, 0);
    // stacks of smaller donuts
    const fro = [0x6b3a1e, 0x7ad3ff, 0xffd34d, 0xff7eb6, 0xfff3e0];
    for (const [x, z] of [[-3.4, -0.8], [-3.4, 0.8], [3.6, -1.0]]) for (let k = 0; k < 3; k++) {
      B.add(GEO.torus(0.3, 8, 16), 0xd49a5c, x, H + 0.2 + k * 0.4, z, 1.1, 1.1, 1.1, PI / 2, 0, 0);
      B.add(GEO.torus(0.28, 8, 16), fro[(k + Math.floor(x)) & 3], x, H + 0.27 + k * 0.4, z, 1.12, 1.12, 0.8, PI / 2, 0, 0);
    }
    // a giant cup of coffee
    B.cyl(3.5, H, 0.9, 0.55, 1.1, 0xffffff, 14);
    B.cyl(3.5, H + 1.08, 0.9, 0.5, 0.04, 0x5a3a1e, 14);
    B.add(GEO.torus(0.18, 6, 12), 0xffffff, 3.5, H + 0.55, 1.45, 0.6, 0.6, 0.6, 0, PI / 2, 0);
    for (let k = 0; k < 3; k++) B.sph(3.5 + Math.sin(k) * 0.1, H + 1.45 + k * 0.4, 0.9, 0.18 + k * 0.05, 0xf4f4f4, 8, 6);
    const anim = (t) => { donut.rotation.y = t * 0.6; };
    return { group: this._floatGroup(B, T, [donut]), anim };
  }

  _balloonPtero() {
    const B = new Bag();
    const P1 = 0x7a5ad6, P2 = 0xcbbaf2, OR = 0xf2a03a;
    B.add(GEO.sph(14, 10), P1, 0, 0, 0, 2.7, 1.2, 1.15);
    B.add(GEO.sph(12, 8), P2, 0.1, -0.2, 0, 2.1, 0.85, 0.95);
    B.add(GEO.sph(12, 10), P1, 1.55, 0.4, 0, 1.05, 0.9, 0.85);
    B.add(GEO.cone(10), OR, 2.55, 0.28, 0, 0.42, 1.7, 0.36, 0, 0, -PI / 2 + 0.1);
    B.add(GEO.cone(8), OR, 0.95, 0.85, 0, 0.32, 1.3, 0.2, 0, 0, PI / 2 + 0.55);
    for (const s of [-1, 1]) {
      B.sph(1.82, 0.62, s * 0.3, 0.17, 0xffffff, 10, 8);
      B.sph(1.9, 0.64, s * 0.4, 0.085, 0x111111, 8, 6);
      B.sph(-0.3, -0.6, s * 0.3, 0.14, OR, 6, 5);
    }
    B.add(GEO.cone(8), P1, -1.6, 0.05, 0, 0.35, 1.0, 0.3, 0, 0, PI / 2);
    const g = new THREE.Group();
    g.add(new THREE.Mesh(B.geometry(), this.mats.vc));
    const wings = [-1, 1].map((s) => {
      const W = new Bag();
      W.tri([0.75, 0, 0], [0.15, 0.3, s * 4.4], [-0.65, 0, s * 2.2], 0x3bb8a8);
      W.tri([0.75, 0, 0], [-0.65, 0, s * 2.2], [-0.95, 0, 0], 0x3bb8a8);
      W.box(0.45, 0.15, s * 2.2, 0.12, 0.12, 4.4, P1, 0, 0.1 * s);
      const w = new THREE.Mesh(W.geometry(), this.mats.vc);
      w.position.set(0.1, 0.25, s * 0.45);
      g.add(w);
      return w;
    });
    const anim = (t, u) => {
      const f = Math.sin(t * 1.5 + u.seed) * 0.35 + 0.1;
      wings[0].rotation.x = -f;
      wings[1].rotation.x = f;
    };
    const anchors = [new THREE.Vector3(1.2, -0.7, -0.35), new THREE.Vector3(1.2, -0.7, 0.35), new THREE.Vector3(-1.0, -0.7, -0.35), new THREE.Vector3(-1.0, -0.7, 0.35)];
    return { group: g, anim, anchors };
  }

  _balloonWhale() {
    const B = new Bag();
    const BL = 0x3d7fc4, BE = 0xc4e2f7;
    B.add(GEO.sph(16, 12), BL, 0, 0, 0, 5.4, 1.9, 1.9);
    B.add(GEO.sph(14, 10), BE, 0.3, -0.35, 0, 4.6, 1.35, 1.6);
    B.add(GEO.cone(12), BL, -3.4, 0.1, 0, 1.1, 2.6, 1.0, 0, 0, PI / 2 + 0.05);
    for (const s of [-1, 1]) {
      B.sph(1.75, 0.12, s * 0.8, 0.2, 0xffffff, 10, 8);
      B.sph(1.82, 0.12, s * 0.92, 0.1, 0x111111, 8, 6);
      B.box(2.1, -0.3, s * 0.72, 0.6, 0.05, 0.06, 0x1f3a6a, 0, 0, -0.35);
      B.add(GEO.sph(8, 6), BL, 0.7, -0.75, s * 1.0, 1.2, 0.14, 0.55, 0, s * 0.5, s * 0.4);
    }
    for (let k = 0; k < 3; k++) B.sph(1.3 + k * 0.05, 1.05 + k * 0.4, 0, 0.2 + k * 0.07, k ? 0xe8f6ff : 0xbfe8ff, 8, 6);
    const g = new THREE.Group();
    g.add(new THREE.Mesh(B.geometry(), this.mats.vc));
    const F = new Bag();
    for (const s of [-1, 1]) F.add(GEO.sph(10, 6), BL, -0.5, 0, s * 0.85, 1.0, 0.14, 1.4, 0, s * 0.45, 0);
    const flukes = new THREE.Mesh(F.geometry(), this.mats.vc);
    flukes.position.set(-4.5, 0.15, 0);
    g.add(flukes);
    const anim = (t, u) => { flukes.rotation.z = Math.sin(t * 1.3 + u.seed) * 0.3; };
    const anchors = [new THREE.Vector3(2.1, -1.0, -0.5), new THREE.Vector3(2.1, -1.0, 0.5), new THREE.Vector3(-1.9, -0.9, -0.5), new THREE.Vector3(-1.9, -0.9, 0.5)];
    return { group: g, anim, anchors };
  }

  _sweeper() {
    const B = new Bag(), T = new Bag();
    const wheel = (x, z) => { B.add(GEO.cyl(12), 0x151515, x, 0.42, z, 0.84, 0.3, 0.84, PI / 2, 0, 0); };
    B.box(1.65, 1.25, 0, 1.6, 1.8, 2.0, 0xf2f2f2);
    B.box(2.46, 1.6, 0, 0.04, 0.8, 1.7, 0x1a232b);
    for (const s of [-1, 1]) B.box(1.65, 1.6, s * 1.01, 1.1, 0.7, 0.04, 0x1a232b);
    B.box(-0.75, 1.3, 0, 3.2, 1.9, 2.1, 0xf28c28);
    B.box(-0.75, 0.35, 0, 4.8, 0.3, 1.9, 0x333333);
    B.box(1.65, 2.25, 0, 0.3, 0.16, 0.3, 0xffa31a);
    for (const z of [0.85, -0.85]) { wheel(1.6, z); wheel(-1.6, z); }
    T.quad(-0.75, 1.45, -1.06, 2.9, 0.62, PI, this.signs.sweeper);
    T.quad(-0.75, 1.45, 1.06, 2.9, 0.62, 0, this.signs.sweeper);
    const BR = new Bag();
    for (let k = 0; k < 8; k++) BR.box(0, 0.12, 0, 0.9, 0.18, 0.06, k % 2 ? 0x3a3a3a : 0x5a4a2a, (k * PI) / 8);
    const bg = BR.geometry();
    const b1 = new THREE.Mesh(bg, this.mats.vc), b2 = new THREE.Mesh(bg, this.mats.vc);
    b1.position.set(2.35, 0, 0.85);
    b2.position.set(2.35, 0, -0.85);
    const anim = (t) => { b1.rotation.y = t * 9; b2.rotation.y = -t * 9; };
    return { group: this._floatGroup(B, T, [b1, b2]), anim };
  }

  // ---------------------------------------------------------------- parade day: barricades, bunting
  _dayDecor() {
    if (this.night) return;
    const V = this.bags.vc, Sh = this.bags.shop;
    const B = (this.bags.bar = new Bag());
    const PLAIN = { u0: 0.006, u1: 0.494, v0: 0, v1: 1 }, SIGN = { u0: 0.506, u1: 0.994, v0: 0, v1: 1 };
    const section = (x, z, ry, sign) => {
      B.quad(x, 0.58, z, 2.3, 1.12, ry, sign ? SIGN : PLAIN);
      const c = Math.cos(ry), s = Math.sin(ry);
      if (Math.abs(x) < 20 && z < 20) for (const e of [-1.06, 1.06]) V.box(x + c * e, 0.025, z - s * e, 0.07, 0.05, 0.6, 0x7d8388, ry);
    };
    const row = (x0, x1, z, every) => {
      const n = Math.max(1, Math.round((x1 - x0) / 2.34)), w = (x1 - x0) / n;
      for (let k = 0; k < n; k++) section(x0 + (k + 0.5) * w, z, PI, k % every === 2);
    };
    row(-16.4, 16.4, 18.72, 4);
    row(17.2, 62, 18.72, 5);
    row(-62, -17.2, 18.72, 5);
    row(-62, 62, 28.8, 6);
    // the sidewalk is closed at both ends of the plaza
    for (const s of [-1, 1]) {
      section(s * 16.75, 17.55, PI / 2, false);
      Sh.quad(s * 16.79, 1.45, 17.55, 1.5, 0.56, s > 0 ? PI / 2 : -PI / 2, this.signs.viewing);
      Sh.quad(s * 16.71, 1.45, 17.55, 1.5, 0.56, s > 0 ? -PI / 2 : PI / 2, this.signs.viewing);
    }
    for (let x = -50; x <= 50; x += 20) Sh.quad(x + 0.6, 1.0, 28.735, 0.9, 0.225, PI, this.signs.noparking);
    // pennants across the street and along the shops
    const COLS = [0xe2445c, 0xffd34d, 0x2a6fb0, 0x3f9f4f, 0xffffff, 0xff7eb6, 0xff8a3d];
    const bunting = (a, b, sag) => {
      const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]), n = Math.max(3, Math.floor(len / 0.55));
      const pt = (t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t - sag * 4 * t * (1 - t), a[2] + (b[2] - a[2]) * t];
      for (let k = 0; k < n; k++) {
        const p0 = pt(k / n), p1 = pt((k + 1) / n);
        V.tri(p0, p1, [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 - 0.035, (p0[2] + p1[2]) / 2], 0x333333);
        const m = pt((k + 0.5) / n), q0 = pt((k + 0.1) / n), q1 = pt((k + 0.9) / n);
        V.tri(q0, q1, [m[0], m[1] - 0.42, m[2]], COLS[k % COLS.length]);
      }
    };
    for (const x of [-27, -9, 9, 27]) {
      const wing = Math.abs(x) > 12.5;
      bunting([x, 6.9, 28.95], [x, wing ? 8.35 : 8.1, wing ? Z_WING + 0.78 : Z_WALL + 0.64], 1.4);
    }
    for (const x of [-63, -45, -27, -9, 9, 27, 45]) bunting([x, 6.4, 28.95], [x + 18, 6.4, 28.95], 0.9);
    for (const x of [-72, -54, -36, 18, 36, 54]) bunting([x, 6.4, 18.65], [x + 18, 6.4, 18.65], 0.9);
    // red-white-blue fans on the museum
    for (const fx of [-7.5, 0, 7.5]) {
      const cy = 7.92, cz = Z_WALL + 0.66;
      for (const [r0, r1, col] of [[1.25, 0.98, 0xc81e3c], [0.98, 0.7, 0xffffff], [0.7, 0.42, 0x1f3d8a]]) for (let k = 0; k < 10; k++) {
        const a0 = PI + (k / 10) * PI, a1 = PI + ((k + 1) / 10) * PI;
        const p = (rr, a) => [fx + Math.cos(a) * rr, cy + Math.sin(a) * rr, cz];
        V.tri(p(r0, a0), p(r0, a1), p(r1, a1), col);
        V.tri(p(r0, a0), p(r1, a1), p(r1, a0), col);
      }
    }
  }
  _barricadeTex() {
    const [c, x] = makeCanvas(256, 128);
    for (const off of [0, 128]) {
      x.fillStyle = '#9aa1a6';
      x.fillRect(off + 3, 8, 122, 8);
      x.fillRect(off + 3, 98, 122, 7);
      x.fillRect(off + 3, 8, 7, 120);
      x.fillRect(off + 118, 8, 7, 120);
      for (let k = 1; k < 12; k++) x.fillRect(off + 6 + k * 9.6, 16, 3, 82);
      x.fillStyle = 'rgba(255,255,255,0.45)';
      x.fillRect(off + 3, 8, 122, 2);
    }
    x.fillStyle = '#1f3d8a'; x.fillRect(150, 34, 84, 46);
    x.strokeStyle = '#ffd34d'; x.lineWidth = 2; x.strokeRect(152, 36, 80, 42);
    txt(x, 'PARADE', 192, 49, 72, FONT.black(15), '#fff');
    txt(x, 'ROUTE', 192, 66, 72, FONT.black(14), '#ffd34d');
    const t = canvasTexture(c);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    this.disposables.push(t);
    return t;
  }

  // In the morning you can walk out onto the plaza and the sidewalk in front of the museum, but not into
  // the street or past the ends of the plaza.
  _dayColliders() {
    const L = this.level;
    const C = (x0, x1, z0, z1, top) => { const c = L.addCollider(x0, x1, z0, z1); c.top = top; this.colliders.push(c); return c; };
    C(-18.6, -16.25, 9.3, 20.4, 1.4); C(16.25, 18.6, 9.3, 20.4, 1.4); // ends: low walls, hedges, closed sidewalk
    C(-18.6, 18.6, 18.58, 20.4, 1.15); // barricades along the curb
    C(-16.3, -12.3, 9.3, 9.72, 9); C(12.3, 16.3, 9.3, 9.72, 9); // the museum's wings
    C(-12.75, -12.25, 9.5, 10.75, 9); C(12.25, 12.75, 9.5, 10.75, 9);
    C(-12.7, -3.55, 10.0, 11.45, 0.36); C(3.55, 12.7, 10.0, 11.45, 0.36); // steps (and the columns on them)
    for (const x of [-13.4, -5.6, 5.6, 13.4]) C(x - 0.24, x + 0.24, 14.66, 15.14, 4);
    for (const s of [-1, 1]) {
      C(s * 9.6 - 1.05, s * 9.6 + 1.05, 15.25, 15.85, 0.9); // bench
      C(s * 7.7 - 0.34, s * 7.7 + 0.34, 15.41, 16.09, 1.0); // bin
      C(s * 14.4 - 0.95, s * 14.4 + 0.95, 11.05, 12.95, 1.5); // planter
    }
    C(-11.65, -8.75, 12.55, 14.25, 2.4); // statue
    C(11.1, 13.25, 15.5, 15.9, 0.9); // bike rack
    C(-14.82, -14.38, 18.18, 18.62, 0.8); // hydrant
    C(2.84, 3.16, 18.39, 18.71, 3.6); // traffic signal
  }

  // Draw everything once right after loading (hidden things too: cars, floats, confetti...), so every
  // shader is ready before you get to see the city and nothing compiles in the middle of the parade.
  _warmup() {
    const objs = [], groups = [];
    this.root.traverse((o) => {
      if (!o.visible) { groups.push(o); o.visible = true; }
      if (!(o.isMesh || o.isPoints || o.isLine)) return;
      const rec = [o, o.frustumCulled, o.isInstancedMesh ? o.count : -1, null];
      o.frustumCulled = false;
      if (o.isInstancedMesh && o.count === 0) {
        o.count = 1;
        rec[3] = o.instanceMatrix.array.slice(0, 16);
        _m.makeTranslation(0, -500, 0).toArray(o.instanceMatrix.array, 0);
        o.instanceMatrix.needsUpdate = true;
      }
      objs.push(rec);
    });
    this._warm = { objs, groups };
  }
  _endWarmup() {
    for (const [o, fc, count, saved] of this._warm.objs) {
      o.frustumCulled = fc;
      if (count >= 0) o.count = count;
      if (saved) { o.instanceMatrix.array.set(saved, 0); o.instanceMatrix.needsUpdate = true; }
    }
    for (const o of this._warm.groups) o.visible = false;
    this._warm = null;
  }

  // ---------------------------------------------------------------- per frame
  // Is any part of the outside visible? From inside the museum you can only see it through the lobby's
  // south windows and doors, so when the camera can't see those openings the whole city is skipped.
  _canSee() {
    const cam = this.game.camera;
    const p = cam.position;
    if (p.z > Z_WALL - 0.05) return true;
    if (p.x < -20.5 || p.x > 40.5) return false;
    // from the Dinosaur Hall you see out through its doorway, across the lobby and out the front windows
    if (p.z < -10.5 && (p.z < -46.5 || !this._throughDinoDoor(p))) return false;
    cam.updateMatrixWorld();
    this._pv.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(this._pv);
    for (const b of this._openings) if (this._frustum.intersectsBox(b)) return true;
    return false;
  }
  // Does a line from p to one of the lobby's front openings pass through the Dinosaur Hall's doorway
  // (x -3..3, up to 6.2 m high, at z = -10)? Each opening, seen from p, lands on the doorway's wall as a rectangle.
  _throughDinoDoor(p) {
    for (const b of this._openings) {
      const k = (-10 - p.z) / (b.min.z - p.z);
      const x0 = p.x + (b.min.x - p.x) * k, x1 = p.x + (b.max.x - p.x) * k;
      const y0 = p.y + (b.min.y - p.y) * k, y1 = p.y + (b.max.y - p.y) * k;
      if (x1 > -3 && x0 < 3 && y1 > 0 && y0 < 6.2) return true;
    }
    return false;
  }

  // ---------------------------------------------------------------- traffic
  // A car, bus, van or taxi (facing +x, standing on y = 0), added to `bag` (a fresh one if none).
  _vehicle(kind, color, bag = null) {
    const B = bag || new Bag();
    const glass = 0x1a232b, dark = 0x1c1c1c, grey = 0x55595d;
    const wheel = (x, z, r = 0.34) => {
      B.add(GEO.cyl(12), 0x151515, x, r, z, r * 2, 0.26, r * 2, PI / 2, 0, 0);
      B.add(GEO.cyl(8), 0x8f959a, x, r, z + Math.sign(z) * 0.02, r * 1.1, 0.24, r * 1.1, PI / 2, 0, 0);
    };
    let L, W, head, tail;
    if (kind === 'bus') {
      L = 11.6; W = 2.5;
      B.box(0, 0.95, 0, L, 1.2, W, 0xe9e9e3);
      B.box(0, 1.98, 0, L - 0.08, 0.9, W - 0.04, glass);
      for (let k = 0; k < 8; k++) B.box(-L / 2 + 1.3 + k * 1.35, 1.98, 0, 0.16, 0.9, W + 0.02, 0xe9e9e3);
      B.box(0, 2.72, 0, L, 0.58, W, 0xe9e9e3);
      B.box(0, 3.06, -0.2, 3.2, 0.14, 1.6, 0xcfd2d4);
      B.box(0, 1.1, 0, L + 0.02, 0.22, W + 0.02, color);
      B.box(L / 2 - 0.03, 2.66, 0, 0.06, 0.3, 1.7, 0xffa31a);
      B.box(L / 2 - 0.03, 1.92, 0, 0.08, 1.0, W - 0.25, glass);
      B.box(L / 2, 0.45, 0, 0.12, 0.3, W, grey);
      B.box(-L / 2, 0.5, 0, 0.12, 0.3, W, grey);
      for (const z of [W / 2 - 0.12, -W / 2 + 0.12]) { wheel(L / 2 - 2.3, z, 0.5); wheel(-L / 2 + 2.7, z, 0.5); }
      head = [[L / 2, 0.75, 0.85], [L / 2, 0.75, -0.85]];
      tail = [[-L / 2, 0.95, 0.95], [-L / 2, 0.95, -0.95]];
    } else if (kind === 'van') {
      L = 5.1; W = 1.98;
      B.box(-0.15, 1.2, 0, L - 0.3, 1.72, W, color);
      B.box(L / 2 - 0.42, 0.62, 0, 0.6, 0.62, W, color);
      B.box(L / 2 - 0.3, 1.5, 0, 0.08, 0.72, W - 0.2, glass);
      B.box(1.55, 1.52, 0, 0.9, 0.58, W + 0.02, glass);
      B.box(-0.6, 1.15, 0, 3.2, 0.24, W + 0.02, 0xffffff);
      B.box(L / 2 - 0.1, 0.42, 0, 0.14, 0.22, W, grey);
      B.box(-L / 2 + 0.1, 0.42, 0, 0.14, 0.22, W, grey);
      for (const z of [W / 2 - 0.12, -W / 2 + 0.12]) { wheel(L / 2 - 1.0, z, 0.36); wheel(-L / 2 + 1.0, z, 0.36); }
      head = [[L / 2 - 0.12, 0.78, 0.68], [L / 2 - 0.12, 0.78, -0.68]];
      tail = [[-L / 2 + 0.02, 1.0, 0.82], [-L / 2 + 0.02, 1.0, -0.82]];
    } else {
      // sedan / taxi / police / hatchback
      const hatch = kind === 'hatch';
      L = hatch ? 3.95 : 4.6; W = 1.8;
      B.box(0, 0.6, 0, L - 0.1, 0.62, W, color);
      const cab = baseGeo('cab' + (hatch ? 'H' : 'S'), () => {
        const pts = hatch
          ? [[-1.7, 0], [0.75, 0], [0.2, 0.6], [-1.62, 0.62]]
          : [[-1.45, 0], [1.0, 0], [0.45, 0.56], [-0.95, 0.56]];
        const sh = new THREE.Shape(pts.map(([px, py]) => new THREE.Vector2(px, py)));
        const g = new THREE.ExtrudeGeometry(sh, { depth: 1, bevelEnabled: false });
        g.translate(0, 0, -0.5);
        return g;
      });
      B.add(cab, glass, 0, 0.9, 0, 1, 1, W - 0.16);
      B.add(cab, color, 0, 0.93, 0, 0.82, 1, W - 0.12); // the roof, and pillars hiding in the glass
      B.box(L / 2 - 0.02, 0.42, 0, 0.12, 0.22, W + 0.02, grey);
      B.box(-L / 2 + 0.02, 0.45, 0, 0.12, 0.22, W + 0.02, grey);
      B.box(L / 2 + 0.01, 0.65, 0, 0.04, 0.14, 0.7, dark);
      for (const z of [0.6, -0.6]) {
        B.box(L / 2 - 0.02, 0.73, z, 0.06, 0.12, 0.34, 0xf2f0dc);
        B.box(-L / 2 + 0.02, 0.78, z * 1.05, 0.06, 0.12, 0.3, 0x9a1515);
      }
      for (const z of [W / 2 + 0.06, -W / 2 - 0.06]) B.box(hatch ? 0.5 : 0.8, 1.0, z, 0.12, 0.1, 0.1, color);
      const wx = hatch ? 1.25 : 1.45;
      for (const z of [W / 2 - 0.12, -W / 2 + 0.12]) { wheel(wx, z); wheel(-wx, z); }
      if (kind === 'taxi') {
        B.box(-0.25, 1.56, 0, 0.55, 0.2, 0.3, 0xfff1b0);
        for (let k = 0; k < 10; k++) for (const z of [W / 2 + 0.005, -W / 2 - 0.005]) B.box(-1.6 + k * 0.32, 0.75, z, 0.16, 0.08, 0.01, k % 2 ? 0x111111 : 0xffffff);
      }
      if (kind === 'police') {
        for (const z of [W / 2 + 0.005, -W / 2 - 0.005]) B.box(-0.1, 0.62, z, 2.1, 0.5, 0.01, 0x111111);
        B.box(-0.15, 1.56, 0.3, 0.3, 0.14, 0.55, 0xd01818);
        B.box(-0.15, 1.56, -0.3, 0.3, 0.14, 0.55, 0x1840d0);
      }
      head = [[L / 2, 0.73, 0.6], [L / 2, 0.73, -0.6]];
      tail = [[-L / 2, 0.78, 0.63], [-L / 2, 0.78, -0.63]];
    }
    if (bag) return { L, W };
    const mesh = new THREE.Mesh(B.geometry(), this.mats.vc);
    mesh.name = 'city-car-' + kind;
    const g = new THREE.Group();
    g.add(mesh);
    g.userData.dynamic = true;
    g.visible = false;
    g.position.set(0, -500, 0);
    return { g, kind, L, W, head, tail, x: 0, z: 0, dir: 1, v: 0, cruise: 10, active: false, braking: false };
  }

  _parkedCars() {
    if (!this.night) return;
    const V = this.bags.vc;
    for (const [x, kind, color, flip] of [[-44, 'sedan', 0x4a5560, 0], [-57, 'hatch', 0x7a2a2a, 1], [13.6, 'sedan', 0x2a3a4a, 0], [62, 'van', 0xd8d8d0, 0], [88, 'sedan', 0x3a3a3a, 1], [-104, 'sedan', 0x5a4a3a, 0]]) {
      V.push(x, Y_ST, CITY.park + 0.05, flip ? PI : 0);
      this._vehicle(kind, color, V);
      V.pop();
    }
  }

  _traffic() {
    const n = this.night;
    const kinds = n
      ? [['sedan', 0x8f98a0], ['sedan', 0x6d2b33], ['taxi', 0xf2c12e], ['hatch', 0x2f5d9e], ['van', 0xe8e8e8], ['bus', 0x2a6fb0], ['sedan', 0x1e1f22], ['taxi', 0xf2c12e]]
      : [['sedan', 0xc0392b], ['sedan', 0x2f5d9e], ['sedan', 0xe8e8e8], ['taxi', 0xf2c12e], ['taxi', 0xf2c12e], ['hatch', 0x3f7a4f], ['van', 0xff8fb8], ['bus', 0x2a6fb0], ['sedan', 0xa7adb3], ['hatch', 0xcdbb94]];
    this.cars = kinds.map(([kind, color]) => {
      const v = this._vehicle(kind, color);
      this.root.add(v.g);
      return v;
    });
    this.spawnT = n ? 4 + Math.random() * 5 : 0.5;
    this.light = 0;
    this.walk = false;
    this.handFlash = false;
  }

  _spawnCar() {
    const n = this.night;
    let free = 0;
    for (const c of this.cars) if (!c.active) free++;
    if (!free) return;
    // night: mostly ordinary cars, sometimes a taxi or the night bus
    const want = Math.random() < 0.14 ? 'bus' : Math.random() < 0.3 ? 'taxi' : null;
    let pick = null;
    if (want) for (const c of this.cars) if (!c.active && c.kind === want) { pick = c; break; }
    if (!pick) {
      let k = Math.floor(Math.random() * free);
      for (const c of this.cars) if (!c.active && c.kind !== 'bus' && k-- <= 0) { pick = c; break; }
    }
    if (!pick) return;
    const dir = Math.random() < 0.5 ? 1 : -1;
    const x0 = -dir * 150;
    // don't spawn on top of another car in that lane
    for (const c of this.cars) if (c.active && c.dir === dir && Math.abs(c.x - x0) < 18) return;
    pick.active = true;
    pick.dir = dir;
    pick.x = x0;
    pick.z = dir > 0 ? CITY.laneE : CITY.laneW;
    pick.cruise = (pick.kind === 'bus' ? 9 : n ? 12 : 10) + Math.random() * 3;
    pick.v = pick.cruise;
    pick.g.visible = true;
    pick.g.rotation.y = dir > 0 ? 0 : PI;
    pick.g.position.set(pick.x, Y_ST, pick.z);
  }

  // traffic light: one cycle for both directions (it's a crosswalk in the middle of the block)
  _signalState() {
    const c = (this.t + 6) % 30;
    this.light = c < 15 ? 0 : c < 18 ? 1 : 2; // green, yellow, red
    this.walk = c >= 18.5 && c < 25.5;
    this.handFlash = c >= 25.5 && c < 29;
  }

  _updateTraffic(dt) {
    const paradeOn = !!(this.parade && this.parade.state !== 'idle');
    if (!paradeOn) {
      this.spawnT -= dt;
      if (this.spawnT <= 0) {
        this._spawnCar();
        this.spawnT = this.night ? 8 + Math.random() * 17 : 2.2 + Math.random() * 4;
      }
    }
    for (const c of this.cars) {
      if (!c.active) continue;
      const d = c.dir;
      let target = c.cruise;
      // stop for a red (or for a yellow there's still room to stop for)
      const front = c.x + (d * c.L) / 2;
      const toLine = d > 0 ? -3.7 - front : front - 3.7;
      if (toLine > -0.2 && (this.light === 2 || (this.light === 1 && toLine > (c.v * c.v) / 9))) {
        target = Math.min(target, Math.sqrt(Math.max(0, 2 * 3.2 * (toLine - 0.4))));
      }
      // keep a gap to the car in front
      for (const o of this.cars) {
        if (o === c || !o.active || o.dir !== d) continue;
        const gap = (o.x - c.x) * d - (o.L + c.L) / 2;
        if (gap > -1 && gap < 30) target = Math.min(target, Math.max(0, (gap - 2.5) * 1.1));
      }
      // parade on the street: cars still in sight drive off, the rest turn off somewhere
      if (paradeOn && Math.abs(c.x) > 44) { c.active = false; c.g.visible = false; continue; }
      c.braking = target < c.v - 0.3;
      c.v = target > c.v ? Math.min(target, c.v + 2.6 * dt) : Math.max(target, c.v - 5.5 * dt);
      c.x += d * c.v * dt;
      c.g.position.x = c.x;
      if (Math.abs(c.x) > 156) { c.active = false; c.g.visible = false; }
    }
  }

  // lights that change every frame: signals, cars, the flickering lamp, beacons
  _updateLights() {
    const n = this.night, t = this.t, CELL = this.CELL;
    this._dynBegin();
    for (const s of this.signals) {
      const lens = s.lenses[this.light === 0 ? 2 : this.light === 1 ? 1 : 0];
      const r = this.light === 0 ? 0.25 : this.light === 1 ? 2.6 : 2.8;
      const g = this.light === 0 ? 2.4 : this.light === 1 ? 1.5 : 0.25;
      const b = this.light === 0 ? 1.1 : this.light === 1 ? 0.15 : 0.12;
      this._dynQuad(lens.x + s.face * 0.006, lens.y, lens.z, 0.25, 0.25, s.face > 0 ? PI / 2 : -PI / 2, CELL.disc, r, g, b);
      if (n) this._dynGlow(lens.x + s.face * 0.1, lens.y, lens.z, 1.2, r * 0.3, g * 0.3, b * 0.3);
      const hand = !this.walk && (!this.handFlash || t % 1 < 0.55);
      if (this.walk || hand) {
        const dz = s.pedFace === 0 ? 0.004 : -0.004;
        this._dynQuad(s.ped.x, s.ped.y, s.ped.z + dz, 0.34, 0.34, s.pedFace, this.walk ? CELL.walk : CELL.hand, this.walk ? 1.5 : 1.9, this.walk ? 1.6 : 1.0, this.walk ? 1.7 : 0.35);
        if (n) this._dynGlow(s.ped.x, s.ped.y, s.ped.z + dz * 25, 0.9, this.walk ? 0.35 : 0.5, this.walk ? 0.38 : 0.25, this.walk ? 0.42 : 0.06);
      }
    }
    for (const c of this.cars) {
      if (!c.active) continue;
      const d = c.dir, ry = d > 0 ? PI / 2 : -PI / 2;
      if (n) for (const h of c.head) {
        const wx = c.x + d * h[0], wy = Y_ST + h[1], wz = c.z + d * h[2];
        this._dynQuad(wx + d * 0.04, wy, wz, 0.34, 0.17, ry, CELL.disc, 2.3, 2.2, 1.9);
        this._dynGlow(wx + d * 0.12, wy, wz, 1.6, 0.85, 0.8, 0.66);
        this._dynBeam(wx + d * 0.05, wy, wz, d * 0.988, -0.155, 0, 2.8, 14, 0.2, 0.19, 0.15);
      }
      if (n || c.braking) for (const h of c.tail) {
        const wx = c.x + d * h[0], wy = Y_ST + h[1], wz = c.z + d * h[2], k = c.braking ? 1.8 : 1;
        this._dynQuad(wx - d * 0.04, wy, wz, 0.3, 0.15, -ry, CELL.disc, 2.2 * k, 0.12, 0.08);
        if (n) this._dynGlow(wx - d * 0.12, wy, wz, 0.75 * k, 0.55 * k, 0.03, 0.02);
      }
      if (n && c.kind === 'bus') {
        // the night bus, lit up inside (nobody on it)
        for (const sz of [1, -1]) this._dynQuad(c.x, Y_ST + 1.98, c.z + sz * (c.W / 2 + 0.02), c.L - 1.0, 0.82, sz > 0 ? 0 : PI, CELL.warm, 0.42, 0.36, 0.26);
      } else if (n && c.kind === 'taxi') {
        for (const sz of [1, -1]) this._dynQuad(c.x - d * 0.25, Y_ST + 1.56, c.z + sz * 0.16, 0.5, 0.16, sz > 0 ? 0 : PI, CELL.disc, 1.8, 1.5, 0.5);
      }
    }
    if (n) {
      // aviation lights on the towers blink together
      if (this.beacons && t % 2.4 < 0.3) for (const b of this.beacons) this._dynGlow(b.x, b.y, b.z, 3.4, 1.5, 0.15, 0.05);
      // one streetlamp is on the fritz
      const l = this.brokenLamp;
      if (l && Math.sin(t * 13) * Math.sin(t * 3.1) + Math.sin(t * 0.7) * 0.3 > 0.3) this._dynGlow(l.x, l.y - 0.05, l.z, 3.0, 1.0, 0.55, 0.22);
    }
    this._paradeLights();
    this._dynEnd();
  }

  // dark soft blobs under cars and people (there are no real shadows outside)
  _blobs() {
    const [c, x] = makeCanvas(64, 64);
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.5, 'rgba(255,255,255,0.65)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    const tex = canvasTexture(c);
    this.disposables.push(tex);
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.rotateX(-PI / 2);
    const mat = new THREE.MeshBasicMaterial({ map: tex, color: 0x000000, transparent: true, opacity: this.night ? 0.4 : 0.42, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -4 });
    this.blobMax = 200;
    const m = (this.blobMesh = new THREE.InstancedMesh(geo, mat, this.blobMax));
    m.frustumCulled = false;
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    m.count = 0;
    m.name = 'city-blobs';
    this.root.add(m);
    this.blobN = 0;
  }
  _blob(x, y, z, sx, sz, ry) {
    if (this.blobN >= this.blobMax) return;
    const a = this.blobMesh.instanceMatrix.array, o = this.blobN++ * 16;
    const c = Math.cos(ry), s = Math.sin(ry);
    a[o] = c * sx; a[o + 1] = 0; a[o + 2] = -s * sx; a[o + 3] = 0;
    a[o + 4] = 0; a[o + 5] = 1; a[o + 6] = 0; a[o + 7] = 0;
    a[o + 8] = s * sz; a[o + 9] = 0; a[o + 10] = c * sz; a[o + 11] = 0;
    a[o + 12] = x; a[o + 13] = y + 0.012; a[o + 14] = z; a[o + 15] = 1;
  }

  // ---------------------------------------------------------------- per frame
  update(dt, playerPos) {
    if (!(dt > 0)) dt = 0;
    if (dt > 0.1) dt = 0.1;
    if (this._warm) this._endWarmup();
    else if (!this._warmed && !this.level.persistent) {
      this._warmed = true;
      this._warmup();
      this.root.visible = true;
      return;
    }
    this.t += dt;
    this._signalState();
    this._updateTraffic(dt);
    if (this.parade) {
      this._updateParade(dt, playerPos);
      this._updatePeople(dt, playerPos);
    }
    this._sounds(dt);
    if (!this.night) {
      // out in the sun almost everything is brighter than the glow threshold: raise it out there
      const k = Math.min(1, Math.max(0, (this.game.camera.position.z - 8) / 4));
      this.level.bloomThreshold = 0.82 + 0.45 * k;
    }
    const show = this._canSee();
    this.root.visible = show;
    if (this.conf) this._updateConfetti(dt, show);
    if (!show) return;
    const cam = this.game.camera;
    cam.updateMatrixWorld();
    this._pv.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(this._pv);
    this.sky.position.copy(cam.position);
    if (this.clouds) this.clouds.rotation.y = this.t * 0.0015;
    if (this.night) this._updateNight();
    this.blobN = 0;
    for (const c of this.cars) if (c.active) this._blob(c.x, Y_ST, c.z, c.L + 0.6, c.W + 0.7, 0);
    if (this.parade) {
      this._drawCrowd(dt);
      this._drawParade();
    }
    this.blobMesh.count = this.blobN;
    this.blobMesh.visible = this.blobN > 0;
    this.blobMesh.instanceMatrix.needsUpdate = true;
    this._updateLights();
  }

  // ---------------------------------------------------------------- sounds
  // Cars driving past (inside the lobby you still hear them, quieter, through the glass), a honk now
  // and then by day, and the crowd cheering as the parade goes by.
  _sounds(dt) {
    const audio = this.game.audio;
    if (!audio || !audio.ctx || this.level.persistent) return;
    const p = this.game.camera.position;
    // how well you can hear the street from where you are: out front, or from the lobby
    const k = p.z > Z_WALL - 0.3 ? 1
      : p.z > -10 && p.x > -12 && p.x < 12 ? Math.min(1, Math.max(0, (p.z + 10) / 20)) * (this.night ? 0.6 : 0.35) : 0;
    for (const c of this.cars) {
      if (!c.active) { c.heard = false; continue; }
      if (c.heard) continue;
      // start the sound so it's loudest as the car passes you
      const dur = c.kind === 'bus' ? 4.4 : 3.2;
      const ahead = (p.x - c.x) * c.dir;
      if (ahead > 0 && ahead < Math.max(4, c.v) * dur * 0.5) {
        c.heard = true;
        if (k > 0.03) audio.play('carby', { vol: k * (c.kind === 'bus' ? 1.4 : 1) * (this.night ? 1 : 0.55), dur });
      }
    }
    if (this.night || k < 0.03) return;
    this.honkT = (this.honkT ?? 10 + Math.random() * 20) - dt;
    if (this.honkT <= 0) {
      this.honkT = 16 + Math.random() * 30;
      audio.play('honk', { vol: k * (this.paradeActive ? 0.25 : 0.45) });
    }
    if (!this.paradeActive) return;
    this.cheerT = (this.cheerT ?? 0) - dt;
    if (this.cheerT > 0) return;
    for (const u of this.parade.units) {
      if (u.on && Math.abs(u.x - p.x) < 22) {
        this.cheerT = 3.5 + Math.random() * 4;
        audio.play('cheer', { vol: k * 0.7 });
        return;
      }
    }
  }

  _updateNight() {
    const t = this.t;
    // the TV in the apartment over the bookstore
    if (this.tv) {
      const k = 0.55 + 0.45 * Math.abs(Math.sin(t * 7.3) * Math.sin(t * 2.9 + 1)) + (Math.sin(t * 31) > 0.85 ? 0.4 : 0);
      const hue = 0.58 + Math.sin(t * 0.7) * 0.06;
      this.litWin.mesh.setColorAt(this.tv.i, _c.setHSL(hue, 0.6, 0.55).multiplyScalar(k));
      this.litWin.mesh.instanceColor.needsUpdate = true;
    }
    // neon buzz
    if (this.neonMat) {
      const f = Math.sin(t * 50) > 0.97 || (t % 7.3 > 6.9 && Math.sin(t * 40) > 0) ? 0.25 : 1;
      this.neonMat.color.setScalar(2.2 * f);
    }
  }

  dispose() {
    this.root.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
    for (const t of this.disposables) t.dispose();
  }
}
