import * as THREE from 'three';
import { damp } from '../core/util.js';
import { batchJoints, bakeColors } from './batch.js';

// People: the guard (you!), Aaron, the morning visitors, the mummy and the marble statues.
//
// Stylized, rounded low-poly folks: lathed torsos and tapered limbs, mitten hands with a thumb, proper
// shoes, shaped heads with a simple face (eyes with a glint, brows, nose, ears, the talking mouth) and
// a pile of hairstyles, hats and outfits. Every plain-colored piece is baked to vertex colors and the
// static pieces under each joint are merged, so a whole person is 13 joints + the mouth = 14 draw calls.

// ------------------------------------------------------------------ small helpers
const matCache = new Map();
function mat(color, rough = 0.75) {
  const k = color + ':' + rough;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough }));
  return matCache.get(k);
}
const G = new Map();
const geo = (k, f) => {
  let g = G.get(k);
  if (!g) G.set(k, (g = f()));
  return g;
};
const C = new THREE.Color();
// multiply a hex color's brightness (and nudge it toward another color)
function shadeHex(hex, k, toward = null, t = 0) {
  C.setHex(hex);
  if (toward != null) C.lerp(new THREE.Color(toward), t);
  C.multiplyScalar(k);
  return C.getHex();
}
const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const lerp = (a, b, t) => a + (b - a) * t;

// vertex normals that ignore UV seams (deformed spheres would otherwise show a crease at the seam)
function smoothNormals(g) {
  g.computeVertexNormals();
  const p = g.attributes.position, n = g.attributes.normal;
  const acc = new Map();
  for (let i = 0; i < p.count; i++) {
    const k = `${Math.round(p.getX(i) * 1e4)},${Math.round(p.getY(i) * 1e4)},${Math.round(p.getZ(i) * 1e4)}`;
    let a = acc.get(k);
    if (!a) acc.set(k, (a = [0, 0, 0, []]));
    a[0] += n.getX(i); a[1] += n.getY(i); a[2] += n.getZ(i); a[3].push(i);
  }
  for (const a of acc.values()) {
    const l = Math.hypot(a[0], a[1], a[2]) || 1;
    for (const i of a[3]) n.setXYZ(i, a[0] / l, a[1] / l, a[2] / l);
  }
  n.needsUpdate = true;
  return g;
}

const V2 = (r, y) => new THREE.Vector2(Math.max(0, r), y);
// a lathe from [r, y] pairs listed bottom → top (so the faces point outwards)
function lathe(pts, seg = 10, phiStart = 0, phiLen = Math.PI * 2) {
  return new THREE.LatheGeometry(pts.map(([r, y]) => V2(r, y)), seg, phiStart, phiLen);
}
// a smooth curve through [r, y] control points, resampled to n points
function spline(ctrl, n) {
  const c = new THREE.SplineCurve(ctrl.map(([r, y]) => new THREE.Vector2(r, y)));
  return c.getPoints(n - 1).map((v) => [v.x, v.y]);
}
// a limb: a capsule that tapers from r1 (at y = 0, the joint) to r2 (at y = -len)
function taper(r1, r2, len, seg = 8, rings = 0) {
  return geo(`taper${r1.toFixed(4)},${r2.toFixed(4)},${len.toFixed(4)},${seg},${rings}`, () => {
    const pts = [];
    const cap = (r, y0, from, to, steps) => {
      for (let i = 0; i <= steps; i++) {
        const a = lerp(from, to, i / steps);
        pts.push([Math.cos(a) * r, y0 + Math.sin(a) * r]);
      }
    };
    cap(r2, -len, -Math.PI / 2, 0, 2);
    for (let i = 1; i <= rings; i++) {
      const t = i / (rings + 1);
      pts.push([lerp(r2, r1, t), -len + len * t]);
    }
    cap(r1, 0, 0, Math.PI / 2, 2);
    return lathe(pts, seg);
  });
}
const sphere = (w = 10, h = 8) => geo(`sph${w},${h}`, () => new THREE.SphereGeometry(1, w, h));
const cyl = (seg = 10, top = 1, hs = 1) => geo(`cyl${seg},${top},${hs}`, () => new THREE.CylinderGeometry(top, 1, 1, seg, hs));
const box = () => geo('box', () => new THREE.BoxGeometry(1, 1, 1));
// a box with soft, rounded edges (a squashed sphere): bags, pockets
const rbox = () => geo('rbox', () => {
  const g = new THREE.SphereGeometry(1, 10, 8);
  const p = g.attributes.position;
  const f = (v) => Math.sign(v) * Math.abs(v) ** 0.4;
  for (let i = 0; i < p.count; i++) p.setXYZ(i, f(p.getX(i)), f(p.getY(i)), f(p.getZ(i)));
  return smoothNormals(g);
});
// a closed band (a short tube with some thickness) — collars, cuffs, belts, hair ties
const band = (seg = 12) => geo(`band${seg}`, () => lathe([[0.8, -0.5], [1, -0.45], [1, 0.45], [0.8, 0.5]], seg));
// half a disc with some thickness, pointing +z (cap brims)
const brimG = () => geo('brim', () => new THREE.CylinderGeometry(1, 1, 1, 14, 1, false, -Math.PI / 2, Math.PI));
const torus = (r, tube, rs = 4, ts = 12) => geo(`tor${r},${tube},${rs},${ts}`, () => new THREE.TorusGeometry(r, tube, rs, ts));

// ------------------------------------------------------------------ body shapes (adult units)
// torso profile [r, y] in torso space (y = 0 at the waist); the mesh is scaled to an oval cross-section
const TORSO = [[0.152, -0.09], [0.155, 0.0], [0.16, 0.12], [0.176, 0.25], [0.19, 0.36], [0.197, 0.45], [0.192, 0.5], [0.165, 0.54], [0.09, 0.575], [0.0, 0.595]];
function torsoProfile(belly = 0, n = 11) {
  return geo('torsoP' + belly.toFixed(2) + ',' + n, () => {
    const ctrl = TORSO.map(([r, y]) => [r + belly * Math.exp(-(((y - 0.12) / 0.13) ** 2)) * 0.06, y]);
    return spline(ctrl, n);
  });
}
// the radius of a profile at height y
function profR(pts, y) {
  for (let i = 1; i < pts.length; i++) {
    if (pts[i][1] >= y) {
      const [r0, y0] = pts[i - 1], [r1, y1] = pts[i];
      return lerp(r0, r1, (y - y0) / Math.max(1e-6, y1 - y0));
    }
  }
  return pts[pts.length - 1][0];
}
// a closed shell hugging part of a profile (jackets, stripes, belts): offset `out` outside it, `th` thick
function hugShell(pts, y0, y1, out, th, n = 6, seg = 14, phiStart = 0, phiLen = Math.PI * 2, open = false) {
  const o = [], i = [];
  for (let k = 0; k <= n; k++) {
    const y = lerp(y0, y1, k / n);
    const r = profR(pts, y);
    o.push([r + out, y]);
    i.push([Math.max(0.001, r + out - th), y]);
  }
  // (open: just the outside plus a lip at each end, for bands around something solid)
  if (open) return lathe([i[0], ...o, i[i.length - 1]], seg, phiStart, phiLen);
  return lathe([...o, ...i.reverse(), o[0]], seg, phiStart, phiLen);
}

// ------------------------------------------------------------------ palettes
const SHIRTS = [0xe8665a, 0x2fa39a, 0xe8b53a, 0x9b84d8, 0x5aa6e0, 0xf08fb0, 0xf2efe8, 0x3a3f47, 0xf28a3c, 0x3f8a5a, 0xc8423b, 0x8fd6b4, 0x2c3e66, 0xefe2c4, 0x6c8fd6];
const PANTS = [0x3d5a8a, 0x2a3550, 0xb59d74, 0x23252b, 0x6b6f78, 0x6b4e3a, 0x6f8fbf, 0x4a5a3a];
const SKINS = [0xf6d2b4, 0xeebf98, 0xe0a982, 0xc68e64, 0xa86e48, 0x8d5a3b, 0x6a4128, 0xf7ddc8];
const HAIRS = [0x1d1612, 0x3b2516, 0x6b4126, 0x8f3f22, 0xd8b56a, 0xe8d39a, 0x2a1c14, 0x4e3322];
const GRAYS = [0x9a9a9a, 0xd8d4cc, 0x7a7670];
const ACCENTS = [0xe2445c, 0xffd34d, 0x2a6fb0, 0x3f9f4f, 0xff7eb6, 0xf2efe8, 0xff8a3d, 0x7a4fd0];
const STRIPES = [0xf2efe8, 0x23252b, 0x2c3e66, 0xe8b53a, 0xc8423b, 0x2fa39a];
const colorDist = (a, b) => Math.hypot(((a >> 16) & 255) - ((b >> 16) & 255), ((a >> 8) & 255) - ((b >> 8) & 255), (a & 255) - (b & 255));
const SHOES = [0xf2efe8, 0x2b2b30, 0xc8423b, 0x2a6fb0, 0x6b4e3a, 0xe8b53a, 0x3a3f47];

// ------------------------------------------------------------------ the mummy's bandage texture
// 8 strips per tile; each one climbs exactly one strip across the tile, so wrapped around a limb they
// join up into a seamless spiral. Two more strips cross over diagonally. Color + a matching bump map.
function bandageMaps() {
  const N = 256, K = 8, sp = N / K;
  const mk = () => {
    const c = document.createElement('canvas');
    c.width = c.height = N;
    return [c, c.getContext('2d')];
  };
  const [cc, x] = mk(), [bc, b] = mk();
  x.fillStyle = '#d8ccae';
  x.fillRect(0, 0, N, N);
  b.fillStyle = '#808080';
  b.fillRect(0, 0, N, N);
  let rs = 7;
  const rnd = () => ((rs = (rs * 16807) % 2147483647) / 2147483647);
  // (draw everything at the tile's offsets too, so it wraps)
  const wrapDraw = (f) => { for (const dx of [-N, 0, N]) for (const dy of [-N, 0, N]) f(dx, dy); };
  const strip = (y0, rise, w, tone, hi) => wrapDraw((dx, dy) => {
    const p = [[dx, y0 + dy], [N + dx, y0 + rise + dy], [N + dx, y0 + rise + w + dy], [dx, y0 + w + dy]];
    const poly = (ctx) => { ctx.beginPath(); ctx.moveTo(...p[0]); for (const q of p.slice(1)) ctx.lineTo(...q); ctx.closePath(); };
    poly(x); x.fillStyle = tone; x.fill();
    // a shadow along the lower edge, a light fold along the top
    x.lineWidth = 3; x.strokeStyle = 'rgba(70,50,25,0.55)';
    x.beginPath(); x.moveTo(p[3][0], p[3][1] - 1); x.lineTo(p[2][0], p[2][1] - 1); x.stroke();
    x.lineWidth = 2; x.strokeStyle = 'rgba(255,250,235,0.4)';
    x.beginPath(); x.moveTo(p[0][0], p[0][1] + 2); x.lineTo(p[1][0], p[1][1] + 2); x.stroke();
    poly(b); b.fillStyle = hi; b.fill();
    b.lineWidth = 4; b.strokeStyle = '#202020';
    b.beginPath(); b.moveTo(p[3][0], p[3][1]); b.lineTo(p[2][0], p[2][1]); b.stroke();
    b.lineWidth = 2; b.strokeStyle = '#606060';
    b.beginPath(); b.moveTo(p[0][0], p[0][1] + 1); b.lineTo(p[1][0], p[1][1] + 1); b.stroke();
  });
  for (let k = 0; k < K; k++) strip(k * sp, sp, sp + 2, `hsl(42, ${22 + rnd() * 10}%, ${70 + rnd() * 8}%)`, '#b0b0b0');
  // two strips wrapping across the others
  strip(40, -N, sp * 0.8, 'hsl(40, 26%, 74%)', '#e0e0e0');
  strip(170, -N, sp * 0.7, 'hsl(44, 20%, 68%)', '#d8d8d8');
  // grime and weave
  for (let i = 0; i < 2400; i++) {
    const px = rnd() * N, py = rnd() * N;
    x.fillStyle = `rgba(${60 + rnd() * 30},${40 + rnd() * 20},20,${rnd() * 0.14})`;
    x.fillRect(px, py, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  for (let i = 0; i < 14; i++) {
    const px = rnd() * N, py = rnd() * N, r = 6 + rnd() * 18;
    wrapDraw((dx, dy) => {
      const gr = x.createRadialGradient(px + dx, py + dy, 0, px + dx, py + dy, r);
      gr.addColorStop(0, 'rgba(90,65,30,0.22)');
      gr.addColorStop(1, 'rgba(90,65,30,0)');
      x.fillStyle = gr;
      x.fillRect(px + dx - r, py + dy - r, r * 2, r * 2);
    });
  }
  const map = new THREE.CanvasTexture(cc), bump = new THREE.CanvasTexture(bc);
  map.colorSpace = THREE.SRGBColorSpace;
  for (const t of [map, bump]) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 4;
  }
  return { map, bump };
}

// One leg's walk cycle at phase u (0..1): planted for the first half, the foot sweeping back from +Z to
// -Z at a constant speed (legs straight, so `h` is the hip's height above the ankle), then an eased
// swing forward with the knee bending to lift the foot.
function gait(u, Z, L, lift) {
  u -= Math.floor(u);
  if (u < 0.5) {
    const z = Z * (1 - 4 * u);
    return { hip: -Math.asin(z / L), knee: 0.03, h: Math.sqrt(L * L - z * z) };
  }
  const s = (u - 0.5) * 2;
  const z = -Z + 2 * Z * s * s * (3 - 2 * s);
  const kn = lift * Math.sin(Math.PI * s) ** 1.3;
  return { hip: -Math.asin(z / L) - kn * 0.45, knee: 0.03 + kn, h: 0 };
}

// ------------------------------------------------------------------ the person
export class Person {
  constructor(opts = {}) {
    const o = (this.opts = {
      shirt: 0x7fa6d9, pants: 0x1d2a44, skin: 0xe0b18f, hair: 0x2b1d14, shoes: 0x151515,
      cap: false, badge: false, hairStyle: 'short', scale: 1, nameTag: null, eyeMat: null,
      // the newer looks (all optional): top 'tshirt' | 'shirt' | 'jacket' | 'hoodie' | 'sweater' | 'dress',
      // bottom 'pants' | 'shorts' | 'skirt', hat null | 'baseball' | 'beanie' | 'sunhat', plus extras
      top: 'tshirt', bottom: 'pants', jacket: null, accent: 0xffd34d, sole: null, hat: null, hatColor: null,
      glasses: null, backpack: null, beard: null, mustache: false, stripes: null, socks: null, build: 1, kid: false, mummy: false,
      ...opts,
    });
    this.kid = !!o.kid;
    this.mummy = !!o.mummy;
    // proportions: kids get a bigger head, shorter legs and a shorter body
    const K = this.kid;
    const W = (this.W = K ? 0.94 : o.build); // girth
    const Wj = 1 + (W - 1) * 0.55; // how far apart the joints sit
    const Lf = (this.Lf = K ? 0.8 : 1); // legs
    const Tf = (this.Tf = K ? 0.8 : 1); // torso
    const Af = K ? 0.8 : 1; // arms
    const Hd = (this.Hd = K ? 1.34 : o.head ?? 1.07); // head
    this.hipH = 0.08 + 0.84 * Lf; // (hip joints 6 cm below, the soles 2 cm under the ankles)
    this.legLen = 0.84 * Lf;
    this.tOff = ((o.shirt * 13 + o.skin * 7 + o.hair) % 997) / 37; // so a crowd doesn't breathe in sync

    this.group = new THREE.Group();
    const root = (this.root = new THREE.Group());
    root.scale.setScalar(o.scale);
    this.group.add(root);

    const hi = this.mummy; // the mummy gets denser meshes for its bandage ridges
    const lo = this.kid; // kids are small: a few less polygons
    const parts = (this._parts = []);
    const add = (parent, g, color, p = [0, 0, 0], s = 1, r = [0, 0, 0], extra = null) => {
      const mesh = new THREE.Mesh(g, extra?.mat || mat(color, extra?.rough));
      mesh.castShadow = true;
      mesh.position.set(p[0], p[1], p[2]);
      if (typeof s === 'number') mesh.scale.setScalar(s);
      else mesh.scale.set(s[0], s[1], s[2]);
      if (extra?.order) mesh.rotation.order = extra.order;
      mesh.rotation.set(r[0], r[1], r[2]);
      if (extra?.keep) mesh.userData.keepColor = true;
      parent.add(mesh);
      parts.push(mesh);
      return mesh;
    };
    const skin = o.skin, skinD = shadeHex(skin, 0.86, 0x8a3a2a, 0.12);
    const shirt = o.shirt, pants = o.pants;
    const topC = o.top === 'jacket' && o.jacket != null ? o.jacket : shirt;
    const sleeveC = topC; // long sleeves are the outer layer's color
    const shortSleeves = o.sleeves === 'short' && o.top !== 'jacket' && o.top !== 'hoodie' && o.top !== 'sweater';
    const sole = o.sole != null ? o.sole : o.shoes === 0x151515 ? 0x0c0c0e : shadeHex(o.shoes, 1, 0xf2efe8, 0.85);

    // ---------------------------------------------------------- hips
    const hips = (this.hips = new THREE.Group());
    hips.position.y = this.hipH;
    root.add(hips);
    const skirt = o.bottom === 'skirt' || o.top === 'dress';
    const pelvisC = skirt ? (o.top === 'dress' ? shirt : pants) : pants;
    const pelvisPts = [[0, -0.095], [0.1, -0.09], [0.15, -0.06], [0.163, -0.01], [0.162, 0.06], [0.155, 0.12], [0, 0.13]];
    add(hips, geo('pelvis' + hi, () => lathe(hi ? spline(pelvisPts, 16) : pelvisPts, hi ? 20 : 12)), pelvisC, [0, 0, 0], [W, 1, 0.64 * (0.85 + W * 0.15)]);
    if (skirt) {
      const dress = o.top === 'dress';
      const sc = dress ? shirt : pants;
      const len = dress ? 0.4 : 0.32;
      const g = geo('skirt' + len, () => lathe([[0.155, 0.12], [0.2, 0.0], [0.27, -len], [0.255, -len - 0.01], [0.185, 0.0], [0.14, 0.12], [0.155, 0.12]], 16));
      add(hips, g, sc, [0, 0, 0], [W * 1.02, 1, 0.82]);
      if (!dress) add(hips, band(14), shadeHex(sc, 0.8), [0, 0.1, 0], [0.165 * W, 0.04, 0.165 * 0.8]);
    }

    // ---------------------------------------------------------- torso
    const torso = (this.torso = new THREE.Group());
    torso.position.y = 0.08 * Tf;
    hips.add(torso);
    const belly = !K && W > 1.06 ? (W - 1) * 2.2 : 0;
    const tp = torsoProfile(belly);
    const tpHi = hi ? torsoProfile(belly, 20) : tp;
    const tS = [1.1 * W, Tf, 0.7 * (0.9 + W * 0.1)]; // torso mesh scale
    const zOf = (y, x = 0) => profR(tp, y) * tS[2] * Math.sqrt(Math.max(0, 1 - (x / (profR(tp, y) * tS[0])) ** 2)); // front surface depth
    add(torso, geo('torso' + belly.toFixed(2) + hi + lo, () => lathe(tpHi, hi ? 22 : lo ? 10 : 12)), shirt, [0, 0, 0], tS);
    // neck
    add(torso, cyl(hi ? 14 : 8, 0.88, hi ? 6 : 1), skin, [0, 0.6 * Tf, 0], [0.064 * Hd ** 0.5, 0.16 * Tf, 0.062 * Hd ** 0.5]);
    // waist: a belt for trousers, a hem otherwise
    if (this.mummy) {
      // (no belt on a mummy)
    } else if (!skirt && o.top !== 'hoodie' && o.top !== 'sweater') {
      const beltC = o.badge ? 0x141414 : o.top === 'jacket' ? 0x3b2a1e : shadeHex(pants, 0.55);
      add(torso, geo('belt' + belly.toFixed(2), () => hugShell(tp, -0.035, 0.015, 0.008, 0.03, 1, 12, 0, Math.PI * 2, true)), beltC, [0, 0, 0], tS);
      add(torso, box(), o.badge ? 0xd8d2c0 : 0xc9a24a, [0, -0.01 * Tf, zOf(-0.01) + 0.006], [0.05, 0.04 * Tf, 0.012]);
    } else if (o.top === 'hoodie' || o.top === 'sweater') {
      add(torso, geo('hem' + belly.toFixed(2), () => hugShell(tp, -0.09, -0.02, 0.01, 0.03, 1, 12, 0, Math.PI * 2, true)), shadeHex(shirt, 0.85), [0, 0, 0], tS);
    }
    // stripes across the chest
    if (o.stripes != null && o.top !== 'jacket') {
      for (const y of [0.16, 0.26, 0.36]) add(torso, geo('stripe' + y + belly.toFixed(2), () => hugShell(tp, y, y + 0.045, 0.003, 0.012, 1, 12, 0, Math.PI * 2, true)), o.stripes, [0, 0, 0], tS);
    }
    // collars
    const neckY = 0.555 * Tf;
    if (o.badge || o.top === 'shirt' || o.top === 'jacket') {
      // a shirt collar: two flaps folded down over the shoulders + a button line
      const cc = o.badge ? shadeHex(shirt, 0.93) : shirt;
      const flap = geo('flap', () => new THREE.CylinderGeometry(1, 1, 1, 3));
      for (const s of [-1, 1]) add(torso, flap, cc, [s * 0.036, neckY - 0.022 * Tf, zOf(0.53, 0.036) + 0.004], [0.036, 0.012, 0.048], [Math.PI / 2 - 0.55, 0, s * 0.62], { order: 'ZXY' });
      add(torso, band(10), cc, [0, neckY + 0.008, -0.008], [0.07, 0.04, 0.062], [-0.25, 0, 0]);
      if (o.top !== 'jacket' || o.badge) {
        for (let i = 0; i < 3; i++) add(torso, sphere(6, 4), shadeHex(shirt, 0.8), [0, (0.47 - i * 0.12) * Tf, zOf(0.47 - i * 0.12) + 0.002], 0.009);
      }
    } else if (o.top === 'hoodie') {
      // the hood bunched behind the neck, a pouch pocket and the drawstrings
      add(torso, sphere(8, 5), shadeHex(shirt, 0.92), [0, 0.53 * Tf, -0.08], [0.15 * W, 0.075, 0.09]);
      add(torso, band(10), shadeHex(shirt, 0.92), [0, neckY, 0], [0.08, 0.05, 0.075]);
      add(torso, box(), shadeHex(shirt, 0.9), [0, 0.1 * Tf, zOf(0.1) + 0.004], [0.2 * W, 0.11 * Tf, 0.02]);
      for (const s of [-1, 1]) add(torso, taper(0.006, 0.006, 0.12, 5), 0xf2efe8, [s * 0.035, 0.52 * Tf, zOf(0.45) + 0.012], 1, [-0.12, 0, 0]);
    } else if (!this.mummy) {
      // crew neck
      add(torso, band(10), shadeHex(shirt, o.top === 'dress' ? 1 : 0.86), [0, neckY + 0.005, 0], [0.072, 0.03, 0.066]);
    }
    if (o.top === 'jacket') {
      // an open jacket over the shirt: a shell with a gap down the front, lapels and pockets
      const jc = o.jacket ?? 0x3a3f47;
      add(torso, geo('jacket' + belly.toFixed(2), () => hugShell(tp, -0.11, 0.53, 0.012, 0.03, 5, 14, 0.32, Math.PI * 2 - 0.64)), jc, [0, 0, 0], tS);
      for (const s of [-1, 1]) {
        add(torso, box(), shadeHex(jc, 0.85), [s * 0.07, 0.43 * Tf, zOf(0.43, 0.07) + 0.012], [0.05, 0.16 * Tf, 0.016], [0.08, 0, s * 0.35]);
        add(torso, box(), shadeHex(jc, 0.85), [s * 0.11, 0.05 * Tf, zOf(0.05, 0.11) + 0.012], [0.08, 0.012, 0.03]);
      }
    }
    if (o.top === 'sweater') add(torso, band(10), shadeHex(shirt, 0.85), [0, neckY, 0], [0.078, 0.05, 0.072]);
    // the uniform: badge, radio, pockets, tie, epaulettes
    if (o.badge) {
      const navy = 0x1b2440, gold = 0xe8b830;
      // tie
      add(torso, box(), navy, [0, 0.36 * Tf, zOf(0.36) + 0.012], [0.04, 0.2 * Tf, 0.012], [0.06, 0, 0]);
      add(torso, sphere(6, 4), navy, [0, 0.5 * Tf, zOf(0.5) + 0.01], [0.022, 0.02, 0.014]);
      add(torso, geo('tieTip', () => new THREE.CylinderGeometry(0.03, 0.0, 0.04, 4)), navy, [0, 0.245 * Tf, zOf(0.25) + 0.016], [1, Tf, 0.3], [0.06, Math.PI / 4, 0]);
      // chest pockets with flaps
      for (const s of [-1, 1]) {
        const x = s * 0.095;
        add(torso, box(), shadeHex(shirt, 0.92), [x, 0.355 * Tf, zOf(0.355, x) + 0.004], [0.075, 0.08 * Tf, 0.012], [0, s * 0.2, 0]);
        add(torso, box(), shadeHex(shirt, 0.82), [x, 0.4 * Tf, zOf(0.4, x) + 0.008], [0.08, 0.022 * Tf, 0.012], [0, s * 0.2, 0]);
      }
      // the badge (a little gold shield) on the left pocket
      add(torso, geo('shield', () => new THREE.CylinderGeometry(1, 1, 1, 5)), gold, [0.095, 0.345 * Tf, zOf(0.345, 0.095) + 0.016], [0.026, 0.008, 0.03], [Math.PI / 2, 0, Math.PI]);
      // radio on the right shoulder strap
      add(torso, box(), 0x1e1f24, [-0.11, 0.455 * Tf, zOf(0.455, 0.11) + 0.02], [0.045, 0.075, 0.03], [0, -0.2, 0]);
      add(torso, taper(0.005, 0.004, 0.06, 4), 0x1e1f24, [-0.125, 0.53 * Tf, zOf(0.455, 0.11) + 0.02], 1, [0, 0, 0.1]);
      // epaulettes
      for (const s of [-1, 1]) add(torso, box(), navy, [s * 0.15 * W, 0.515 * Tf, 0], [0.11, 0.014, 0.08], [0, 0, s * -0.38]);
      // holster with the spare flashlight + a key ring on the belt
      add(torso, box(), 0x141414, [-0.19 * W, -0.06 * Tf, 0.04], [0.045, 0.1, 0.06], [0, 0, 0.08]);
      add(torso, cyl(8), 0x2a2a2e, [-0.19 * W, 0.0, 0.04], [0.02, 0.06, 0.02]);
      add(torso, torus(0.022, 0.004, 3, 10), 0xc9c9c9, [0.18 * W, -0.05 * Tf, 0.06], 1, [0, Math.PI / 2, 0]);
    }
    if (o.nameTag) add(torso, box(), 0xffffff, [-0.095, 0.425 * Tf, zOf(0.425, 0.095) + 0.014], [0.07, 0.02, 0.008], [0, -0.2, 0]);
    // backpack
    if (o.backpack != null) {
      const bc = o.backpack;
      const bz = -profR(tp, 0.3) * tS[2];
      add(torso, rbox(), bc, [0, 0.3 * Tf, bz - 0.055], [0.13 * W, 0.17 * Tf, 0.07]);
      add(torso, rbox(), shadeHex(bc, 0.82), [0, 0.22 * Tf, bz - 0.12], [0.09 * W, 0.065 * Tf, 0.03]);
      add(torso, rbox(), shadeHex(bc, 0.9), [0, 0.43 * Tf, bz - 0.07], [0.12 * W, 0.04 * Tf, 0.065], [-0.2, 0, 0]);
      for (const s of [-1, 1]) {
        const x = s * 0.1 * W;
        add(torso, box(), shadeHex(bc, 0.7), [x, 0.37 * Tf, zOf(0.37, x) + 0.004], [0.032, 0.24 * Tf, 0.012], [-0.08, s * 0.25, 0]);
        add(torso, box(), shadeHex(bc, 0.7), [x, 0.52 * Tf, 0], [0.034, 0.012, 0.22], [0, 0, s * -0.42]);
      }
    }

    // ---------------------------------------------------------- head
    const head = (this.head = new THREE.Group());
    head.position.y = 0.64 * Tf;
    torso.add(head);
    const R = 0.148 * Hd, RY = 0.158 * Hd, RZ = 0.152 * Hd;
    const cy = 0.112 * Hd; // skull center
    this.skull = { R, RY, RZ, cy };
    const v3 = new THREE.Vector3();
    // the skull's shape as a function of a direction: a rounded jaw, a flatter face, a fuller back
    const shape = (x, y, z) => {
      const jaw = y < 0 ? 1 - 0.2 * y * y : 1 - 0.05 * y * y;
      let sx = x * jaw, sz = z * (y < 0 ? 1 - 0.1 * y * y : 1);
      sz *= z > 0 ? 0.95 : 1.05;
      if (y < -0.4 && z > 0) sz += 0.06 * (-y - 0.4) * z;
      return v3.set(sx * R, y * RY + cy, sz * RZ);
    };
    const onSkull = (x, y, z, out = 0) => {
      const l = Math.hypot(x, y, z);
      const p = shape(x / l, y / l, z / l).clone();
      p.y -= cy;
      p.multiplyScalar(1 + out);
      p.y += cy;
      return p;
    };
    const skullGeo = (k, w, h, thick) => geo(k, () => {
      const g = new THREE.SphereGeometry(1, w, h);
      const pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        const t = thick ? thick(x, y, z) : 0;
        const p = shape(x, y, z);
        pos.setXYZ(i, p.x * (1 + t), (p.y - cy) * (1 + t) + cy, p.z * (1 + t));
      }
      return smoothNormals(g);
    });
    // a cap of hair (or a beanie…) hugging the skull: columns run around the head, rows from the crown
    // (or from `top(a)`) down to exactly the hairline `line(a)` (a: 0 at the front … 1 at the back), then
    // one more row tucks under the skin, so the edge is a clean, smooth curve
    const capGeo = (k, line, thick, W = 16, Hn = 8, top = null) => geo(k, () => {
      const pos = [], uvs = [], idx = [];
      const rows = [];
      if (top) rows.push(-1);
      for (let i = 0; i <= Hn; i++) rows.push(i / Hn);
      rows.push(2);
      const n = rows.length;
      for (let j = 0; j <= W; j++) {
        const ph = (j / W) * Math.PI * 2;
        const a = Math.abs(Math.atan2(Math.sin(ph), Math.cos(ph))) / Math.PI;
        const y1 = line(a);
        const th1 = Math.acos(Math.max(-1, Math.min(1, y1)));
        const th0 = top ? Math.acos(Math.max(-1, Math.min(1, top(a)))) : 0;
        for (const f of rows) {
          const th = f === -1 ? th0 - 0.07 : f === 2 ? th1 + 0.07 : lerp(th0, th1, top ? f : f ** 0.85);
          const dx = Math.sin(th) * Math.sin(ph), dy = Math.cos(th), dz = Math.sin(th) * Math.cos(ph);
          const t = f === -1 || f === 2 ? -0.045 : thick(dx, dy, dz, a, dy - y1, f);
          const q = shape(dx, dy, dz);
          pos.push(q.x * (1 + t), (q.y - cy) * (1 + t) + cy, q.z * (1 + t));
          uvs.push(j / W, f);
        }
      }
      for (let j = 0; j < W; j++) {
        for (let i = 0; i < n - 1; i++) {
          const a0 = j * n + i, b0 = (j + 1) * n + i;
          idx.push(a0, a0 + 1, b0, a0 + 1, b0 + 1, b0);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      g.setIndex(idx);
      return smoothNormals(g);
    });
    this._capGeo = capGeo;
    add(head, skullGeo(`skull${Hd}${hi}`, hi ? 24 : lo ? 13 : 14, hi ? 22 : lo ? 9 : 10), skin).userData.skull = true;

    // face
    const eyeS = (K ? 1.18 : 1) * Hd;
    const eyeX = 0.34, eyeY = K ? -0.02 : 0.04;
    const eyeColor = 0x1c1820;
        for (const s of [-1, 1]) {
      const p = onSkull(s * eyeX, eyeY, 0.94, -0.004);
      add(head, sphere(this.mummy ? 12 : lo ? 6 : 7, this.mummy ? 8 : 5), eyeColor, [p.x, p.y, p.z], this.mummy ? [0.026, 0.017, 0.012] : [0.021 * eyeS, 0.029 * eyeS, 0.012 * eyeS], [0, s * 0.33, 0], o.eyeMat ? { mat: o.eyeMat } : null);
      if (!o.eyeMat && !this.mummy) {
        // a glint, so they look alive
        const q = onSkull(s * eyeX + 0.045, eyeY + 0.07, 0.94, 0.04);
        add(head, sphere(5, 3), 0xffffff, [q.x, q.y, q.z], 0.0068 * eyeS);
      }
      if (this.mummy) {
        this._eyeY = p.y;
      } else {
        // brows
        const b = onSkull(s * 0.36, 0.3 + (K ? -0.04 : 0), 0.9, 0.012);
        const browC = o.hairStyle === 'bald' || [0xd8b56a, 0xe8d39a, 0xd8d4cc, 0x9a9a9a].includes(o.hair) ? shadeHex(o.hair, 0.6, 0x5a4030, 0.3) : shadeHex(o.hair, 0.9);
        add(head, taper(0.0085 * Hd, 0.0075 * Hd, 0.046 * Hd, 5), browC, [b.x - s * 0.023 * Hd, b.y, b.z], 1, [0, s * 0.3, s * (Math.PI / 2 - 0.1)]);
        // ears
        const ep = onSkull(s, 0.0, 0.06, -0.06);
        add(head, sphere(5, 4), skin, [ep.x, ep.y, ep.z - 0.005], [0.022 * Hd, 0.036 * Hd, 0.026 * Hd], [0, s * 0.35, 0]);
        if (K) {
          const c = onSkull(s * 0.56, -0.2, 0.8, -0.006);
          add(head, sphere(5, 3), shadeHex(skin, 1, 0xff7a8a, 0.35), [c.x, c.y, c.z], [0.03, 0.019, 0.01], [0, s * 0.55, 0]);
        }
      }
    }
    if (this.mummy) {
      // two wraps framing the eye slit
      for (const dy of [0.045, -0.04]) {
        const yy = this._eyeY + dy;
        const yn = (yy - cy) / RY, h = yn / Math.sqrt(1 - yn * yn);
        const w = onSkull(1, h, 0).x, dpt = onSkull(0, h, 1).z;
        add(head, geo('mumWrap', () => new THREE.TorusGeometry(1, 0.08, 5, 18, Math.PI)), 0xffffff, [0, yy, 0], [w * 1.0, dpt * 1.0, 0.16], [Math.PI / 2, 0, 0], { order: 'YXZ' });
      }
    } else {
      const n = onSkull(0, -0.14, 1, -0.004);
      add(head, sphere(6, 4), skinD, [n.x, n.y, n.z], [0.02 * Hd, 0.024 * Hd, 0.022 * Hd]);
    }
    // the talking mouth: a little half-moon smile that opens up
    const mp = onSkull(0, K ? -0.38 : -0.42, 0.92, -0.008);
    this.mouth = new THREE.Mesh(geo('mouth', () => new THREE.SphereGeometry(1, 10, 4, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2)), mat(0x5a2028, 0.6));
    this.mouth.position.copy(mp);
    this.mouth.rotation.x = 0.42;
    this.mouth.scale.set(0.034 * Hd, 0.016 * Hd, 0.012);
    this.mouthBase = this.mouth.scale.clone();
    head.add(this.mouth);

    // hair
    this._hair(head, add, skullGeo, onSkull, o, hi);
    // facial hair
    if (o.beard && !this.mummy) {
      const bc = shadeHex(o.hair, 0.95);
      add(head, skullGeo(`beard${Hd}`, 14, 10, (x, y, z) => {
        const d = Math.min(lerp(0.02, -0.3, Math.min(1, Math.max(0, z))) - y, z + 0.3);
        if (d < 0) return -0.12;
        // keep the mouth clear
        if (Math.abs(x) < 0.3 && y > -0.62 && y < -0.28 && z > 0.6) return -0.12;
        return 0.06 * smoothstep(0, 0.1, d);
      }), bc);
    }
    if ((o.mustache || o.beard) && !this.mummy) {
      for (const s of [-1, 1]) {
        const p = onSkull(s * 0.12, -0.3, 0.95, 0.01);
        add(head, sphere(6, 4), shadeHex(o.hair, 0.95), [p.x + s * 0.008, p.y, p.z], [0.03 * Hd, 0.012 * Hd, 0.014 * Hd], [0.2, s * 0.25, s * 0.22]);
      }
    }
    // glasses
    if (o.glasses != null && !this.mummy) {
      const gc = o.glasses;
      const ps = [-1, 1].map((s) => onSkull(s * eyeX, eyeY, 0.94, 0.09));
      for (const p of ps) add(head, torus(1, 0.17, 3, 12), gc, [p.x, p.y, p.z], [0.034 * Hd, 0.03 * Hd, 0.034 * Hd], [0, 0, 0]);
      add(head, box(), gc, [0, ps[0].y + 0.004, ps[0].z - 0.002], [0.04 * Hd, 0.007, 0.007]);
      for (const s of [-1, 1]) {
        const p = ps[s < 0 ? 0 : 1];
        const a = new THREE.Vector3(p.x + s * 0.033 * Hd, p.y + 0.004, p.z - 0.006), b = new THREE.Vector3(s * R * 1.03, p.y + 0.008, -0.01);
        const len = a.distanceTo(b);
        add(head, box(), gc, [(a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2], [0.007, 0.007, len], [0, Math.atan2(b.x - a.x, b.z - a.z), 0]);
      }
    }
    // hats
    this._hats(head, add, onSkull, o, Hd, R);

    // ---------------------------------------------------------- arms
    const upLen = 0.29 * Af, foLen = 0.28 * Af;
    const armR = (K ? 1.0 : 1) * (0.95 + W * 0.05);
    this.arms = [-1, 1].map((s) => {
      const sh = new THREE.Group();
      sh.position.set(s * 0.235 * Wj * (K ? 0.92 : 1), 0.5 * Tf, 0);
      torso.add(sh);
      // the shoulder (moves with the arm, so there's never a gap)
      add(sh, sphere(hi ? 14 : 7, hi ? 10 : 5), topC, [-s * 0.03, -0.04, 0], [0.058 * armR, 0.062 * armR, 0.06 * armR]);
      add(sh, taper(0.058 * armR, 0.048 * armR, upLen - 0.05, hi ? 12 : lo ? 6 : 8, hi ? 5 : 0), shortSleeves ? skin : sleeveC, [0, -0.03, 0]);
      if (shortSleeves) add(sh, geo('sleeve' + armR.toFixed(3), () => lathe([[0.05 * armR, -0.17], [0.07 * armR, -0.165], [0.074 * armR, -0.025], [0.05 * armR, 0.0], [0.05 * armR, -0.17]], 10)), sleeveC);
      if (o.badge) {
        // shoulder patch
        add(sh, cyl(8), 0x1b2440, [s * 0.064 * armR, -0.07, 0], [0.032, 0.006, 0.038], [0, 0, Math.PI / 2 + s * 0.08]);
        add(sh, cyl(8), 0xe8b830, [s * 0.066 * armR, -0.07, 0], [0.018, 0.007, 0.022], [0, 0, Math.PI / 2 + s * 0.08]);
      }
      const el = new THREE.Group();
      el.position.y = -0.29 * Af;
      sh.add(el);
      add(el, taper(0.049 * armR, 0.039 * armR, foLen - 0.07, hi ? 12 : lo ? 6 : 8, hi ? 5 : 0), shortSleeves || o.top === 'dress' ? skin : sleeveC);
      if (!shortSleeves && o.top !== 'dress' && !this.mummy) add(el, band(8), o.top === 'jacket' ? shadeHex(sleeveC, 0.85) : o.badge ? shadeHex(shirt, 0.9) : shadeHex(sleeveC, 0.88), [0, -foLen + 0.072, 0], [0.043 * armR, 0.022, 0.043 * armR]);
      const hand = new THREE.Group();
      hand.position.y = -foLen;
      el.add(hand);
      // a mitten with a thumb (palm facing the body)
      const hs = K ? 1.0 : 1;
      add(hand, sphere(hi ? 12 : lo ? 6 : 7, hi ? 8 : 5), skin, [0, -0.012, 0.004], [0.026 * hs, 0.052 * hs, 0.043 * hs]);
      add(hand, taper(0.0145 * hs, 0.012 * hs, 0.028 * hs, 5), skin, [-s * 0.008, 0.012, 0.032 * hs], 1, [1.0, 0, -s * 0.35]);
      return { sh, el, hand, side: s };
    });

    // ---------------------------------------------------------- legs
    const thLen = 0.42 * Lf, shLen = 0.42 * Lf;
    const legR = (K ? 0.98 : 1) * (0.94 + W * 0.06);
    const bareLegs = skirt && o.socks == null;
    this.legs = [-1, 1].map((s) => {
      const hip = new THREE.Group();
      hip.position.set(s * 0.095 * Wj, -0.06, 0);
      hips.add(hip);
      const thighC = o.bottom === 'shorts' || bareLegs ? skin : skirt ? o.socks : pants;
      add(hip, taper(0.087 * legR, 0.062 * legR, thLen - 0.03, hi ? 12 : lo ? 7 : 8, hi ? 6 : 0), thighC);
      if (o.bottom === 'shorts') add(hip, geo('shorts' + legR.toFixed(3), () => lathe([[0.062 * legR, -0.25], [0.088 * legR, -0.245], [0.095 * legR, -0.02], [0.08 * legR, 0.04], [0.062 * legR, 0.04], [0.062 * legR, -0.25]], 10)), pants);
      const knee = new THREE.Group();
      knee.position.y = -thLen;
      hip.add(knee);
      const shinC = o.bottom === 'shorts' || bareLegs ? skin : skirt ? o.socks : pants;
      add(knee, taper(0.062 * legR, 0.044 * legR, shLen - 0.07, hi ? 12 : lo ? 7 : 8, hi ? 6 : 0), shinC);
      if (this.mummy) { /* wrapped */ } else if (o.bottom === 'pants' && !skirt) add(knee, band(8), shadeHex(pants, 0.9), [0, -shLen + 0.08, 0], [0.054 * legR, 0.04, 0.054 * legR]);
      else add(knee, band(8), o.socks ?? 0xf2efe8, [0, -shLen + 0.08, 0], [0.047 * legR, 0.05, 0.047 * legR]);
      const ankle = new THREE.Group();
      ankle.position.y = -shLen;
      knee.add(ankle);
      // a shoe: a rounded upper on a slightly bigger sole (the sole sits on the floor)
      const fs = K ? 0.86 : 1;
      add(ankle, sphere(hi ? 14 : lo ? 7 : 8, hi ? 10 : 5), o.shoes, [0, 0.026, 0.04 * fs], [0.056 * fs, 0.052, 0.118 * fs]);
      add(ankle, cyl(hi ? 16 : 10), sole, [0, -0.008, 0.042 * fs], [0.062 * fs, 0.026, 0.128 * fs]);
      if (!this.mummy && !o.badge && sole !== o.shoes) add(ankle, sphere(6, 4), sole, [0, 0.012, 0.115 * fs], [0.045 * fs, 0.03, 0.05 * fs]); // toe cap
      return { hip, knee, ankle, side: s };
    });

    this.height = (this.hipH + 0.08 * Tf + 0.64 * Tf + cy + RY + 0.02) * o.scale;
    this.anim = { mode: 'idle', phase: 0, speed: 0, time: 0, talk: 0, sit: 0, blend: {} };
    if (this.mummy) this._mummify(root);
    // every plain-colored part shares one material (the color goes into the mesh), so each joint is one
    // draw call; only the talking mouth stays separate (and glowing eyes, which aren't plain). The hands
    // never bend on their own, so they're merged into the forearms.
    bakeColors(root, (x) => x === this.mouth, { single: true });
    batchJoints([hips, torso, head, ...this.arms.flatMap((a) => [a.sh, a.el]), ...this.legs.flatMap((l) => [l.hip, l.knee, l.ankle])], [this.mouth]);
    this._parts = null;
    this.update(0);
  }

  // ---------------------------------------------------------- hairstyles
  _hair(head, add, skullGeo, onSkull, o, hi) {
    const style = o.hairStyle;
    const hc = o.hair;
    const Hd = this.Hd;
    const { R, RY, cy } = this.skull;
    if (this.mummy || style === 'bald') return;
    // hair is a cap hugging the skull down to a hairline given by its height at the front, the sides and
    // the back; `base` is its thickness (relative to the head), `top` adds volume on the crown
    const lo = this.kid;
    const shell = (key, front, side, back, base, top, extra = null, w = lo ? 14 : 16, h = lo ? 6 : 7, from = null) => this._capGeo(`hair${key}${Hd}`,
      (a) => (a < 0.5 ? lerp(front, side, smoothstep(0, 0.5, a)) : lerp(side, back, smoothstep(0.5, 1, a))),
      (x, y, z, a, d, f) => {
        // (thinner towards the edge, but never down to nothing: hair has a bit of a lip)
        let t = base * (0.55 + 0.45 * smoothstep(0, 0.16, d)) + top * Math.max(0, y) ** 2;
        if (extra) t += extra(x, y, z, a, d);
        return t;
      }, w, h, from);
    const hatOn = o.hat || o.cap;
    // under a hat only a thin layer shows (long hair still hangs down below it)
    if (hatOn && style !== 'long' && style !== 'ponytail') {
      add(head, shell('buzz', 0.4, 0.15, -0.5, 0.05, 0.0), hc);
    } else if (style === 'short') {
      add(head, shell('short', 0.42, 0.16, -0.48, 0.055, 0.1, (x, y, z) => 0.05 * Math.max(0, z) * Math.max(0, y) * (x > 0 ? 1 : 0.4)), hc);
    } else if (style === 'fringe') {
      add(head, shell('fringe', 0.2, 0.05, -0.55, 0.07, 0.08, (x, y, z) => 0.03 * Math.max(0, z) * smoothstep(0.1, 0.4, y)), hc);
    } else if (style === 'curly') {
      add(head, shell('curly', 0.4, 0.05, -0.55, 0.14, 0.16, (x, y, z, a, d) => {
        const th = Math.acos(Math.max(-1, Math.min(1, y))), ph = Math.atan2(x, z);
        return smoothstep(0, 0.2, d) * 0.065 * Math.max(-0.4, Math.sin(ph * 6) * Math.sin(th * 8) + 0.5 * Math.sin(ph * 9 + 1) * Math.sin(th * 11 + 2));
      }, lo ? 20 : 24, lo ? 7 : 9), hc);
    } else if (style === 'long' || style === 'ponytail' || style === 'bun') {
      const sleek = style !== 'long' || hatOn;
      add(head, shell(sleek ? 'sleek' : 'longtop', sleek ? 0.46 : 0.4, sleek ? 0.14 : -0.25, -0.75, sleek ? 0.035 : 0.06, sleek ? 0.03 : 0.07,
        sleek ? null : (x, y, z) => -0.03 * Math.max(0, z) * smoothstep(0.85, 1, y) * (1 - Math.min(1, Math.abs(x) * 8))), hc);
      if (style === 'long') {
        // the long part falls down the back to the shoulders, a little wider at the ends
        const g = geo('longdrape' + Hd, () => {
          const s = new THREE.SphereGeometry(1, 10, 6);
          const p = s.attributes.position;
          for (let i = 0; i < p.count; i++) {
            const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
            const flare = 1 + 0.22 * Math.max(0, -y);
            p.setXYZ(i, x * flare, y, z * (1 + 0.1 * Math.max(0, -y)));
          }
          return smoothNormals(s);
        });
        add(head, g, hc, [0, cy - RY * 0.95, -0.05 * Hd], [R * 1.0, 0.2 * Hd, R * 0.62]);
        // and a lock framing each side of the face
        for (const s of [-1, 1]) add(head, taper(0.03 * Hd, 0.022 * Hd, 0.17 * Hd, 7), hc, [s * R * 0.9, cy + 0.02 * Hd, 0.01 * Hd], 1, [0.1, 0, s * -0.12]);
      } else if (style === 'ponytail') {
        const t = onSkull(0, 0.15, -1, 0.04);
        add(head, sphere(6, 4), o.accent, [t.x, t.y, t.z], 0.024 * Hd);
        const tail = geo('ponytail', () => lathe(spline([[0, -0.2], [0.028, -0.15], [0.042, -0.07], [0.032, -0.01], [0.0, 0.02]], 8), 9));
        add(head, tail, hc, [t.x, t.y - 0.01, t.z - 0.03 * Hd], Hd, [0.5, 0, 0]);
      } else {
        const b = onSkull(0, 0.72, -0.7, 0.06);
        add(head, sphere(9, 6), hc, [b.x, b.y + 0.02 * Hd, b.z - 0.02 * Hd], [0.062 * Hd, 0.056 * Hd, 0.06 * Hd]);
        add(head, band(10), o.accent, [b.x, b.y - 0.01 * Hd, b.z + 0.006], [0.04 * Hd, 0.016, 0.04 * Hd], [-0.75, 0, 0]);
      }
    } else if (style === 'balding') {
      add(head, shell('balding', 0.3, 0.05, -0.5, 0.05, 0, null, 16, 4, () => 0.3), hc);
    }
  }

  // ---------------------------------------------------------- hats (and the guard's cap)
  _hats(head, add, onSkull, o, Hd, R) {
    const { cy } = this.skull;
    if (o.cap) {
      // a security guard's peaked cap: black band, navy crown, shiny visor and a gold badge
      const navy = 0x1b2440;
      const cap = new THREE.Group();
      cap.position.set(0, cy + 0.075 * Hd, -0.006);
      cap.rotation.x = -0.1;
      head.add(cap);
      add(cap, cyl(14, 1), 0x0e1326, [0, 0.0, 0], [R * 0.98, 0.045, R * 1.03]);
      add(cap, cyl(14, 1.2), navy, [0, 0.055, -0.004], [R * 1.0, 0.07, R * 1.05]);
      add(cap, cyl(14, 1), navy, [0, 0.092, -0.004], [R * 1.21, 0.01, R * 1.27]);
      add(cap, brimG(), 0x0b0e18, [0, -0.016, R * 0.9], [R * 0.82, 0.012, R * 0.55], [0.32, 0, 0]);
      add(cap, box(), 0xc9a24a, [0, 0.008, R * 1.03], [R * 1.1, 0.008, 0.006], [0, 0, 0]);
      add(cap, geo('shield', () => new THREE.CylinderGeometry(1, 1, 1, 5)), 0xffd34d, [0, 0.052, R * 1.12], [0.024, 0.008, 0.028], [Math.PI / 2 - 0.2, 0, Math.PI]);
      this.cap = { group: cap };
      return;
    }
    const hc = o.hatColor ?? o.accent;
    if (o.hat === 'baseball') {
      const cap = new THREE.Group();
      cap.position.set(0, cy + 0.03 * Hd, 0);
      cap.rotation.x = -0.12;
      head.add(cap);
      add(cap, geo('capCrown', () => new THREE.SphereGeometry(1, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2)), hc, [0, 0.0, 0], [R * 1.08, R * 0.98, R * 1.12]);
      add(cap, brimG(), shadeHex(hc, 0.85), [0, 0.005, R * 1.0], [R * 0.8, 0.012, R * 0.75], [0.12, 0, 0]);
      add(cap, sphere(6, 4), shadeHex(hc, 0.85), [0, R * 0.98, 0], 0.012 * Hd);
    } else if (o.hat === 'beanie') {
      const b = new THREE.Group();
      b.position.set(0, cy + 0.02 * Hd, -0.004);
      b.rotation.x = -0.15;
      head.add(b);
      add(b, geo('beanie', () => new THREE.SphereGeometry(1, 12, 5, 0, Math.PI * 2, 0, Math.PI / 2)), hc, [0, 0.01, 0], [R * 1.09, R * 1.0, R * 1.1]);
      add(b, band(12), shadeHex(hc, 0.85), [0, 0.02, 0], [R * 1.13, 0.05, R * 1.14]);
      add(b, sphere(6, 5), o.accent === hc ? 0xf2efe8 : o.accent, [0, R * 1.02, 0], 0.03 * Hd);
    } else if (o.hat === 'sunhat') {
      const h = new THREE.Group();
      h.position.set(0, cy + 0.05 * Hd, 0);
      h.rotation.x = -0.08;
      head.add(h);
      add(h, cyl(12, 0.85), hc, [0, 0.05, 0], [R * 1.08, 0.1, R * 1.1]);
      add(h, cyl(16), hc, [0, 0.0, 0], [R * 2.1, 0.01, R * 2.1]);
      add(h, band(12), o.accent === hc ? 0x2a2a2a : o.accent, [0, 0.025, 0], [R * 1.1, 0.03, R * 1.12]);
    }
  }

  // ---------------------------------------------------------- the mummy's bandages
  // Every part gets wrapped: its geometry moves into its joint's space, gets UVs that run the bandage
  // texture around it at the same strip width everywhere (each strip climbs one strip per turn, so they
  // spiral seamlessly), a few lumps, and some grime in the vertex colors.
  _mummify(root) {
    root.updateMatrixWorld(true);
    const wrapMat = (Person._wrapMat ||= (() => {
      const { map, bump } = bandageMaps();
      return new THREE.MeshStandardMaterial({ map, bumpMap: bump, bumpScale: 2.5, vertexColors: true, roughness: 0.95 });
    })());
    const joints = new Set([this.hips, this.torso, this.head, ...this.arms.flatMap((a) => [a.sh, a.el]), ...this.legs.flatMap((l) => [l.hip, l.knee, l.ankle])]);
    const c = new THREE.Color();
    const inv = new THREE.Matrix4(), rel = new THREE.Matrix4();
    const STRIP = 0.24; // meters per texture tile (8 strips)
    let seed = 1;
    const eyeY = this._eyeY;
    for (const m of this._parts) {
      if (m === this.mouth || m.material === this.opts.eyeMat) continue;
      let j = m.parent;
      while (j && !joints.has(j)) j = j.parent;
      if (!j) continue;
      inv.copy(j.matrixWorld).invert();
      rel.multiplyMatrices(inv, m.matrixWorld);
      const g = m.geometry.clone().applyMatrix4(rel);
      const base = new THREE.Color(m.material.color);
      const keep = m.userData.keepColor;
      const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
      const col = new Float32Array(p.count * 3);
      const turns = j === this.torso || j === this.hips ? 3 : 1;
      const off = (seed++) * 0.137;
      const face = j === this.head && m.userData.skull;
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        if (keep) { col[i * 3] = base.r; col[i * 3 + 1] = base.g; col[i * 3 + 2] = base.b; continue; }
        const ang = Math.atan2(x, z);
        uv.setXY(i, uv.getX(i) * turns + off, y / STRIP + off * 3);
        // lumpy wraps
        let d = 0.0025 * (Math.sin(y * 70 + ang * 2 + off * 9) * 0.6 + Math.sin(y * 23 - ang * 3) * 0.4);
        let k = 0.9 + 0.1 * Math.sin(y * 9 + ang * 2 + off * 20) + 0.05 * Math.sin(y * 41 - ang * 4);
        if (face && z > 0 && Math.abs(y - eyeY) < 0.032 && Math.abs(x) < 0.13) {
          // the dark gap the eyes glow out of
          d = -0.006;
          k = 0.1;
        }
        p.setXYZ(i, x + n.getX(i) * d, y + n.getY(i) * d, z + n.getZ(i) * d);
        c.setRGB(0.72, 0.68, 0.6).multiplyScalar(k); // (old linen, not too bright under a flashlight)
        col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      }
      uv.needsUpdate = true;
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      smoothNormals(g);
      m.geometry = g;
      m.material = wrapMat;
      m.position.set(0, 0, 0);
      m.rotation.set(0, 0, 0);
      m.scale.set(1, 1, 1);
      j.add(m);
    }
  }

  attachToHand(obj, side = 1) {
    const arm = this.arms.find((a) => a.side === side);
    arm.hand.add(obj);
    return obj;
  }

  setMode(mode, speed = 0) {
    if (mode !== this.anim.mode) this._modeT = 0;
    this.anim.mode = mode;
    this.anim.speed = speed;
  }

  update(dt) {
    const a = this.anim;
    a.time += dt;
    this._modeT = (this._modeT || 0) + dt;
    const t = a.time + this.tOff;
    const mode = a.mode;
    const H = this.hipH, Lg = this.legLen, S = this.opts.scale;
    // walking: each foot sweeps back at a steady pace while it's planted (exactly as fast as the body
    // moves, so it doesn't slide), then swings forward again with the knee lifting it
    const Zw = Lg * Math.sin(0.36), Zz = Lg * Math.sin(0.2); // half a stride: walk, mummy shuffle
    let freq = 0;
    if (mode === 'walk') freq = (a.speed * 0.5) / (2 * Zw * S);
    if (mode === 'zombie') freq = (a.speed * 0.5) / (2 * Zz * S);
    if (mode === 'run') freq = a.speed / (3.2 * this.Lf * S);
    a.phase += freq * Math.PI * 2 * dt;
    const ph = a.phase;
    // arms: [forward/back, elbow, inward (+) / outward (-), twist]; legs: [hip, knee, ankle tilt]
    const target = {
      hipsY: H, hipsRX: 0, hipsRY: 0, hipsRZ: 0, torsoRX: 0, torsoRY: 0, torsoRZ: 0, headRX: 0, headRY: 0, headRZ: 0,
      legs: [[0, 0], [0, 0]], arms: [[0, 0.15, 0, 0], [0, 0.15, 0, 0]], footFlat: 1, mouth: [1, 1],
    };
    const breathe = Math.sin(t * 1.7);
    let fast = mode === 'run'; // (cycles follow their targets closely)
    if (mode === 'idle') {
      // breathing, a little weight shift, looking around
      const shift = Math.sin(t * 0.45);
      target.hipsY = H - 0.006 - Math.abs(shift) * 0.006;
      target.hipsRZ = shift * 0.025;
      target.torsoRZ = -shift * 0.02;
      target.torsoRX = -0.02 + breathe * 0.015;
      target.headRY = Math.sin(t * 0.37) * 0.22 + Math.sin(t * 1.13) * 0.04;
      target.headRX = -breathe * 0.02 + Math.sin(t * 0.29) * 0.05;
      target.legs = [[-0.03 + shift * 0.02, 0.06 + Math.max(0, shift) * 0.08], [-0.03 - shift * 0.02, 0.06 + Math.max(0, -shift) * 0.08]];
      target.arms = [[0.04 + breathe * 0.02, -0.18, 0.02, 0.1], [0.04 + breathe * 0.02, -0.18, 0.02, 0.1]];
    } else if (mode === 'walk') {
      const c = Math.cos(ph); // +1: left foot forward
      const g = [0, 1].map((i) => gait(ph / (Math.PI * 2) + i * 0.5, Zw, Lg, 0.95));
      target.legs = g.map((q) => [q.hip, q.knee]);
      target.footFlat = 1;
      target.arms = [0, 1].map((i) => {
        const sw = 0.36 * c * (i ? -1 : 1);
        return [sw, -0.22 - 0.3 * Math.max(0, -sw / 0.36), 0.0, 0.1];
      });
      // the hips ride on whichever leg is planted (so it stays on the floor), and twist with the stride
      target.hipsY = H - (Lg - Math.max(g[0].h, g[1].h));
      target.hipsRY = 0.06 * c;
      target.torsoRY = -0.16 * c;
      target.torsoRX = 0.03;
      target.headRY = 0.06 * c;
      target.headRX = -0.03;
      fast = true;
    } else if (mode === 'run') {
      const s = Math.sin(ph);
      target.legs = [0, 1].map((i) => {
        const p = ph + i * Math.PI;
        return [-0.9 * Math.sin(p) - 0.15, 0.35 + 1.35 * Math.max(0, Math.cos(p + 0.6)) ** 1.2];
      });
      target.footFlat = 0.55;
      target.arms = [0, 1].map((i) => {
        const p = ph + i * Math.PI;
        return [0.85 * Math.sin(p), -1.35 - 0.25 * Math.max(0, -Math.sin(p)), 0.05, 0.15];
      });
      target.torsoRX = 0.25;
      target.torsoRY = -0.2 * s;
      target.hipsRY = 0.12 * s;
      target.headRX = -0.15;
      target.headRY = 0.1 * s;
      target.hipsY = H - 0.02 - Math.abs(Math.cos(ph)) * 0.08;
    } else if (mode === 'jump') {
      target.legs = [[-0.9, 1.4], [-0.3, 0.9]];
      target.footFlat = 0.5;
      target.arms = [[-2.6, -0.3, 0.3, 0], [-2.6, -0.3, 0.3, 0]];
      target.torsoRX = 0.1;
    } else if (mode === 'slide') {
      target.hipsY = 0.35 * this.Lf;
      target.hipsRX = -1.15;
      target.legs = [[-0.4, 0.2], [-0.2, 0.6]];
      target.footFlat = 0.3;
      target.arms = [[-1.6, -0.3, 0.3, 0], [-1.6, -0.3, 0.3, 0]];
      target.torsoRX = 0.1;
      target.headRX = 0.7;
    } else if (mode === 'sit' || mode === 'eat' || mode === 'type') {
      target.hipsY = H * 0.6;
      target.legs = [[-1.57, 1.57], [-1.57, 1.57]];
      target.torsoRX = 0.08 + breathe * 0.01;
      target.arms = [[-0.7, -0.8, 0.1, 0], [-0.7, -0.8, 0.1, 0]];
      target.headRY = Math.sin(t * 0.3) * 0.08;
      if (mode === 'eat') {
        const k = (Math.sin(t * 2.2) + 1) / 2;
        target.arms[1] = [-0.4 - 1.5 * k, -1.2 - 0.9 * k, 0.25 * k + 0.1 * k, 0.3 * k];
        target.headRX = 0.1 * k;
        target.headRY = 0;
        target.mouth = [1, 1 + 1.5 * Math.max(0, Math.sin(t * 9)) * k];
      }
      if (mode === 'type') {
        target.arms[0] = [-0.9 + Math.sin(t * 18) * 0.05, -0.7, 0.15, 0];
        target.arms[1] = [-0.9 + Math.sin(t * 15 + 1) * 0.05, -0.7, 0.15, 0];
        target.headRX = 0.12;
        target.headRY = 0;
      }
    } else if (mode === 'sleep') {
      target.hipsY = H * 0.6;
      target.legs = [[-1.4, 1.5], [-1.5, 1.4]];
      target.torsoRX = 0.5 + breathe * 0.02;
      target.headRX = 0.6;
      target.arms = [[-0.2, -0.3, 0.2, 0], [-0.2, -0.3, 0.2, 0]];
    } else if (mode === 'shock') {
      target.arms = [[-2.8, -0.3, 0.4, 0], [-2.8, -0.3, 0.4, 0]];
      target.headRX = -0.15;
      target.torsoRX = -0.08;
      target.hipsY = H + Math.abs(Math.sin(t * 20)) * 0.02;
      target.legs = [[-0.12, 0.05], [0.1, 0.05]];
      target.mouth = [0.7, 3.2];
    } else if (mode === 'point') {
      target.arms[1] = [-1.55, 0, 0, 0];
      target.arms[0] = [0.05, -0.2, 0.02, 0.1];
      target.headRY = 0.1;
      target.torsoRY = 0.06;
    } else if (mode === 'shrug') {
      target.arms = [[-0.2, -1.6, 0.6, -0.5], [-0.2, -1.6, 0.6, -0.5]];
      target.headRX = -0.1;
      target.headRZ = 0.12;
      target.mouth = [0.85, 0.7];
    } else if (mode === 'zombie') {
      // the classic mummy shuffle: stiff little steps, arms straight out
      const s = Math.sin(ph);
      const g = [0, 1].map((i) => gait(ph / (Math.PI * 2) + i * 0.5, Zz, Lg, 0.25));
      target.legs = g.map((q) => [q.hip, q.knee]);
      fast = true;
      target.arms = [[-1.5 + 0.05 * s, -0.05, 0.08, 0], [-1.5 - 0.05 * s, -0.05, 0.08, 0]];
      target.torsoRX = 0.06;
      target.torsoRZ = 0.05 * s;
      target.headRY = Math.sin(t * 1.3) * 0.12;
      target.headRZ = -0.06 * s;
      target.hipsY = H - (Lg - Math.max(g[0].h, g[1].h));
    } else if (mode === 'liesit') {
      // lying in a sarcophagus (sit = 0) → sitting up (sit = 1); the caller tilts the body
      const k = a.sit;
      target.legs = [[-1.55 * k, 0.05 * k], [-1.55 * k, 0.05 * k]];
      target.footFlat = k;
      target.arms = [[-1.5 * k, -1.9 * (1 - k), 0.35 * (1 - k), 0], [-1.5 * k, -1.9 * (1 - k), 0.35 * (1 - k), 0]];
      target.headRX = 0.1 * (1 - k);
    } else if (mode === 'munch') {
      const k = (Math.sin(t * 9) + 1) / 2;
      target.arms[1] = [-0.6 - 1.1 * k, -1.6 - 0.4 * k, 0.25, 0.3];
      target.arms[0] = [-0.2, -0.4, 0.1, 0];
      target.headRX = 0.12 * k;
      target.mouth = [1, 1 + 2.2 * k];
    } else if (mode === 'wave') {
      target.arms[1] = [-2.7, -0.3, 0.5 - Math.sin(t * 10) * 0.45, 0];
      target.arms[0] = [0.05, -0.15, 0.1, 0];
      target.headRY = 0.15;
      target.headRZ = 0.08;
      target.hipsY = H + Math.abs(Math.sin(t * 6)) * 0.04;
      target.mouth = [1.1, 1.6];
    } else if (mode === 'sad') {
      target.headRX = 0.45;
      target.torsoRX = 0.15;
      target.arms = [[0.1, -0.1, 0.05, 0], [0.1, -0.1, 0.05, 0]];
      target.hipsY = H - 0.01;
      target.mouth = [0.8, 0.5];
    }
    // (eased into a new pose; once a walk or run is under way the legs follow the cycle exactly)
    const k = !dt || (fast && this._modeT > 0.35) ? 1 : 1 - Math.exp(-(fast ? 20 : 14) * dt);
    const L = (obj, prop, v) => { obj[prop] += (v - obj[prop]) * k; };
    L(this.hips.position, 'y', target.hipsY);
    L(this.hips.rotation, 'x', target.hipsRX);
    L(this.hips.rotation, 'y', target.hipsRY);
    L(this.hips.rotation, 'z', target.hipsRZ);
    L(this.torso.rotation, 'x', target.torsoRX);
    L(this.torso.rotation, 'y', target.torsoRY);
    L(this.torso.rotation, 'z', target.torsoRZ);
    L(this.head.rotation, 'x', target.headRX);
    L(this.head.rotation, 'y', target.headRY);
    L(this.head.rotation, 'z', target.headRZ);
    this.legs.forEach((leg, i) => {
      const [hx, kx] = target.legs[i];
      L(leg.hip.rotation, 'x', hx);
      L(leg.knee.rotation, 'x', kx);
      // keep the sole level with the floor (relative to the hips)
      L(leg.ankle.rotation, 'x', -(hx + kx + target.hipsRX) * target.footFlat);
      L(leg.hip.rotation, 'z', -target.hipsRZ);
    });
    this.arms.forEach((arm, i) => {
      const [ax, ex, az, tw] = target.arms[i];
      // (arms raised overhead go out a little wider, so the hands clear the head — kids' big heads most)
      const up = smoothstep(1.6, 2.7, -ax) * (this.kid ? 0.5 : 0.15);
      L(arm.sh.rotation, 'x', ax);
      L(arm.el.rotation, 'x', ex);
      L(arm.sh.rotation, 'z', -arm.side * (az - up) + arm.side * 0.1);
      L(arm.sh.rotation, 'y', -arm.side * (tw || 0));
    });
    // the mouth: talking, or a face that fits the pose
    const mb = this.mouthBase;
    let my = target.mouth[1], mx = target.mouth[0];
    if (a.talk > 0) {
      a.talk -= dt;
      my = 1 + Math.abs(Math.sin(t * 22)) * 2.6;
    }
    this.mouth.scale.x = damp(this.mouth.scale.x, mb.x * mx, 12, dt || 1);
    this.mouth.scale.y = a.talk > 0 ? mb.y * my : damp(this.mouth.scale.y, mb.y * my, 10, dt || 1);
  }
}

export const makeGuard = (extra = {}) =>
  new Person({ shirt: 0x8fb3e0, pants: 0x1b2440, cap: true, badge: true, hair: 0x3a2412, shoes: 0x151515, sole: 0x0a0a0c, ...extra });

export function makeVisitor(r = Math.random) {
  const pickR = (arr) => arr[Math.floor(r() * arr.length)];
  const kid = r() < 0.35;
  const scale = kid ? 0.68 + r() * 0.12 : 0.93 + r() * 0.1;
  const skin = pickR(SKINS);
  const old = !kid && r() < 0.18;
  let hair = old ? pickR(GRAYS) : pickR(HAIRS);
  if (r() < 0.04) hair = pickR([0xe07aa8, 0x4a7ad9, 0x7a4fd0]); // a bit of dye
  const styles = kid ? ['short', 'fringe', 'curly', 'ponytail', 'long', 'bun', 'short'] : old ? ['short', 'balding', 'balding', 'curly', 'bun', 'bald'] : ['short', 'short', 'curly', 'long', 'ponytail', 'bun', 'bald', 'fringe'];
  const hairStyle = pickR(styles);
  const longish = hairStyle === 'long' || hairStyle === 'ponytail' || hairStyle === 'bun';
  const tops = kid ? ['tshirt', 'tshirt', 'hoodie', 'sweater', 'dress', 'shirt'] : ['tshirt', 'shirt', 'jacket', 'hoodie', 'sweater', 'dress', 'tshirt', 'shirt'];
  let top = pickR(tops);
  if (top === 'dress' && !longish && r() < 0.7) top = 'tshirt';
  const bottom = top === 'dress' ? 'pants' : longish && r() < 0.3 ? 'skirt' : r() < (kid ? 0.45 : 0.25) ? 'shorts' : 'pants';
  const shirt = pickR(SHIRTS);
  const pants = bottom === 'skirt' ? pickR([...SHIRTS.slice(0, 6), 0x2a3550, 0x23252b]) : pickR(PANTS);
  const accent = pickR(ACCENTS);
  const shoes = pickR(SHOES);
  const skirtish = top === 'dress' || bottom === 'skirt';
  const opts = {
    shirt, pants, skin, hair, hairStyle, top, bottom, accent, shoes, kid,
    sleeves: top === 'tshirt' || top === 'dress' || (top === 'shirt' && r() < 0.5) ? 'short' : 'long',
    jacket: top === 'jacket' ? pickR([0x3a3f47, 0x6b4e3a, 0x2c3e66, 0x4a5a3a, 0xb59d74, 0x7a2e2e]) : null,
    stripes: (top === 'tshirt' || top === 'sweater') && r() < 0.3 ? pickR(STRIPES.filter((c) => colorDist(c, shirt) > 140)) : null,
    socks: (top === 'dress' || bottom === 'skirt') && r() < 0.35 ? pickR([0x23252b, 0xf2efe8, 0x8a5a8a]) : null,
    backpack: r() < (kid ? 0.5 : 0.18) ? pickR([0xe8665a, 0x2fa39a, 0xe8b53a, 0x5aa6e0, 0x9b84d8, 0x3a3f47]) : null,
    glasses: r() < (kid ? 0.08 : old ? 0.6 : 0.25) ? pickR([0x1d1a1a, 0x5a3a22, 0x2a3550, 0xb03030]) : null,
    beard: !kid && !longish && !skirtish && r() < 0.18,
    mustache: !kid && !longish && !skirtish && r() < 0.08,
    build: kid ? 1 : 0.92 + r() * (r() < 0.25 ? 0.3 : 0.12),
    scale,
  };
  const hr = r();
  if (hr < (kid ? 0.14 : 0.12)) opts.hat = pickR(kid ? ['baseball', 'beanie', 'beanie'] : ['baseball', 'beanie', 'sunhat']);
  if (opts.hat === 'sunhat' && hairStyle === 'bun') opts.hat = 'baseball';
  const p = new Person(opts);
  p.kid = kid;
  return p;
}

// THE MUMMY. Wrapped head to toe, glowing eyes, very into donuts.
export function makeMummy() {
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xfff6b0, emissive: 0xffe066, emissiveIntensity: 3 });
  const p = new Person({ shirt: 0xe3d8bc, pants: 0xd8ccae, skin: 0xe6dcc2, hair: 0xd8ccae, shoes: 0xd2c6a8, sole: 0xd2c6a8, hairStyle: 'bald', eyeMat, mummy: true, top: 'mummy' });
  p.mouth.visible = false;
  // a couple of loose bandage ends, flapping about
  const wrap = Person._wrapMat;
  const strip = (w, h) => {
    const g = new THREE.BoxGeometry(w, h, 0.008, 1, 4, 1);
    const pos = g.attributes.position, uv = g.attributes.uv, col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      // a gentle curl, and a dirtier tip; one bandage strip of the texture runs along it
      const y = pos.getY(i) / h + 0.5;
      uv.setXY(i, y * h * 4, 0.02 + (pos.getX(i) / w + 0.5) * 0.11);
      pos.setZ(i, pos.getZ(i) - (1 - y) * (1 - y) * 0.05);
      const k = (0.8 + 0.2 * y) * 0.72;
      col[i * 3] = k; col[i * 3 + 1] = 0.97 * k; col[i * 3 + 2] = 0.9 * k;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, wrap);
    m.castShadow = true;
    return m;
  };
  const tail = strip(0.045, 0.3);
  tail.position.set(0.08, -0.04, -0.13);
  tail.rotation.set(0.25, 0.2, -0.3);
  p.head.add(tail);
  const tail2 = strip(0.035, 0.2);
  tail2.position.set(0.05, -0.12, 0.02);
  tail2.rotation.set(0.1, 0, 0.15);
  p.arms[0].el.add(tail2);
  return p;
}
