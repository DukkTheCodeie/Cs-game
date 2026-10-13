import * as THREE from 'three';
import { Level, boxUV, planeUV } from './level.js';
import { tex, signTexture, makeCanvas, canvasTexture } from './textures.js';
import * as P from './props.js';
import { mulberry32 } from '../core/util.js';
import { personOutline } from './runner.js';
import { batchStatic } from './batch.js';
import { ShelfBuilder, shelfMaterials } from './shelves.js';

// The Archives: an endless maze of shelves, built one section ("band") at a time as you head north.
// Every band ends in a locked gate. The first three gates are hand-made (fuse box, three lost keys,
// torn poster); after that the puzzles are generated and keep getting harder. It never ends —
// sooner or later you run out of donuts.
//
// Cell (c, R): center x = c*CELL, z = -R*CELL. Band b covers rows b*BAND .. b*BAND+BAND-1.
// Gate k leads from band k into band k+1. It stands on band k+1's south edge and is built with it.
// Only the bands around you exist: the next one is built before you can reach it, and the ones far
// behind you are removed (their gate slams shut) so the game stays fast no matter how far you get.

export const CELL = 3.2;
export const HANDMADE = 3;
const W = 5, BAND = 4, H = 3.0, T = 0.3, TT = 0.64; // sections of 5 × 4 rooms
const ENTRY_C = 2; // the hole you come in through is in the middle column
const LIGHT_POOL = 6; // real lights shared by every lamp in the archives (see the constructor)
export const KEY_COLORS = [['red', 0xff4545], ['blue', 0x4aa8ff], ['yellow', 0xffd23f], ['green', 0x55e07a]];
const GEN_KINDS = ['lightsout', 'caesar', 'roman', 'slider', 'simon', 'keys'];
const CIPHER_LINES = ['KEEP GOING', 'NEXT GATE PLEASE', 'ALMOST THERE', 'THE TREX IS WATCHING', 'DONUTS ARE LIFE', 'DO NOT FALL ASLEEP',
  'FRAGMENT SIX IS AHEAD', 'NICE TRY GUARD', 'THE ARCHIVES NEVER END', 'WHO PUT THIS HERE', 'SHELVES ALL THE WAY DOWN', 'STAY AWAKE'];
const PROMPTS = { lightsout: 'Fix the fuse box', keys: 'Unlock the gate', slider: 'Restore the poster', caesar: 'Use the cipher terminal', roman: 'Try the number lock', simon: 'Play the memory lock' };
const LIGHT = { lightsout: 0x66ff99, keys: 0xffd23f, slider: 0xff77cc, caesar: 0x6dff9e, roman: 0xe9c46a, simon: 0x9a7dff };
// Every section of the archives has a theme: a name (on a sign over the gate into it, and MUSE-OS
// announces it), what's stored in its dead ends, and the color of its bulbs. The first three are always
// the same; after that they come round in a different order each time.
export const THEMES = [
  { id: 'receiving', name: 'RECEIVING', bulb: 0xffcf80, props: ['crate', 'statue'] },
  { id: 'lost', name: 'LOST & FOUND', bulb: 0xffe0a0, props: ['umbrellas', 'hats'] },
  { id: 'posters', name: 'POSTERS & PRINTS', bulb: 0xfff0d0, props: ['rolls', 'frames'] },
  { id: 'bones', name: 'SPARE DINOSAUR BONES', bulb: 0xfff2c8, props: ['bones', 'skull'] },
  { id: 'egypt', name: 'EGYPTIAN OVERFLOW', bulb: 0xffb060, props: ['sarcophagus', 'jars'] },
  { id: 'rome', name: 'ROMAN STATUES (BROKEN)', bulb: 0xffd8a0, props: ['column', 'statue'] },
  { id: 'holiday', name: 'HOLIDAY DECORATIONS', bulb: 0xff6a6a, props: ['tree', 'gifts'] },
  { id: 'flooded', name: 'THE FLOODED BIT', bulb: 0x9fd8ff, water: true, props: ['buckets', 'crate'] },
  { id: 'outage', name: 'POWER OUTAGE', bulb: 0xff2020, dark: true, props: ['crate', 'statue'] },
  { id: 'donuts', name: 'DONUT STORAGE (EMPTY)', bulb: 0xff8fc8, props: ['donutboxes', 'crate'] },
];
export function themeOf(b) {
  if (b < HANDMADE) return THEMES[b];
  const pool = THEMES.slice(HANDMADE), i = b - HANDMADE;
  return shuffle(pool, mulberry32(555 + Math.floor(i / pool.length) * 17))[i % pool.length];
}
export const STATION_NAMES = { lightsout: 'fuse box', keys: 'lost keys', slider: 'torn poster', caesar: 'cipher terminal', roman: 'number lock', simon: 'memory lock' };

function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export class Maze extends Level {
  constructor(game, { stage = 0, keysTaken = [] } = {}) {
    super(game);
    const s = this.scene;
    this.surface = 'concrete';
    s.background = new THREE.Color(0x010102);
    s.fog = new THREE.FogExp2(0x020203, 0.07);
    s.add(new THREE.AmbientLight(0x8090b0, 0.22));
    s.add(new THREE.HemisphereLight(0x405070, 0x100c08, 0.3));

    this.shelfMats = shelfMaterials();
    this.mats = {
      floor: new THREE.MeshStandardMaterial({ map: tex('concrete'), roughness: 0.9 }),
      ceil: new THREE.MeshStandardMaterial({ map: tex('concrete'), color: 0x555555, roughness: 1 }),
      plaster: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x8a7f72, roughness: 0.9 }),
      alcove: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x5a4a66, roughness: 0.9 }),
      pipe: new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.5, metalness: 0.6 }),
      water: new THREE.MeshStandardMaterial({ color: 0x3a6a8a, roughness: 0.05, metalness: 0.4, transparent: true, opacity: 0.55, depthWrite: false }),
    };
    // Every lamp in the archives (gate stations, keys, secret alcoves...) is "virtual": a fixed pool of
    // real lights follows whichever lamps are nearest you. The number of lights never changes as
    // sections come and go, so three.js never has to recompile its shaders (a stutter at every gate).
    this.lamps = [];
    this.lightPool = Array.from({ length: LIGHT_POOL }, () => { const l = new THREE.PointLight(0xffffff, 0, 1, 2); s.add(l); return l; });
    this.layouts = [];
    this.bands = new Map();
    this.gates = [];
    this.keys = [];
    this.peeks = [];
    this.secrets = [];
    this.stations = [];
    this.gateOpen = new Set();
    this.keysTaken = new Set(keysTaken);
    this.genTaken = new Set();
    this.secretsOpened = new Set();
    this.seen = new Set();
    this.sealedBelow = -1; // gates up to this index are shut for good (the bands behind them are gone)
    this.onCollected = (c) => { if (!c.counted) this.genTaken.add(c.id); };

    // spinning keys
    this.addUpdater((dt) => {
      for (const k of this.keys) {
        if (k.taken) continue;
        k.t += dt;
        k.obj.rotation.y += dt * 1.8;
        k.obj.position.y = 1.1 + Math.sin(k.t * 2) * 0.08;
      }
    });

    // starting later: the gates before `stage` are already open
    for (let k = 0; k < stage; k++) this.gateOpen.add(k);
    this.curBand = stage;
    this.maxBand = stage;
    if (stage >= 2) this.sealedBelow = stage - 2;
    for (let b = Math.max(0, stage - 1); b <= stage + 1; b++) this.ensure(b);
  }

  // ---------------------------------------------------------------- layout (logic only, cached)
  layout(b) {
    if (this.layouts[b]) return this.layouts[b];
    const entryC = b === 0 ? ENTRY_C : this.layout(b - 1).exit.c;
    const rng = mulberry32(4242 + b * 7919);
    const north = [], east = [];
    for (let r = 0; r < BAND; r++) { north.push(new Array(W).fill(true)); east.push(new Array(W).fill(true)); }
    const seen = new Set([`${entryC},0`]);
    const stack = [{ c: entryC, r: 0 }];
    while (stack.length) {
      const cur = stack[stack.length - 1];
      const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        .map(([dc, dr]) => ({ c: cur.c + dc, r: cur.r + dr, dc, dr }))
        .filter((n) => n.c >= 0 && n.c < W && n.r >= 0 && n.r < BAND && !seen.has(`${n.c},${n.r}`));
      if (!nb.length) { stack.pop(); continue; }
      const n = nb[Math.floor(rng() * nb.length)];
      if (n.dc === 1) east[cur.r][cur.c] = false;
      if (n.dc === -1) east[cur.r][n.c] = false;
      if (n.dr === 1) north[cur.r][cur.c] = false;
      if (n.dr === -1) north[n.r][n.c] = false;
      seen.add(`${n.c},${n.r}`);
      stack.push({ c: n.c, r: n.r });
    }
    // a few loops so it's less frustrating
    for (let k = 0; k < 3; k++) {
      const r = Math.floor(rng() * (BAND - 1)), c = Math.floor(rng() * (W - 1));
      if (rng() < 0.5) east[r][c] = false; else north[r][c] = false;
    }
    const open = (c, r) => {
      const m = [];
      if (c < W - 1 && !east[r][c]) m.push([c + 1, r]);
      if (c > 0 && !east[r][c - 1]) m.push([c - 1, r]);
      if (r < BAND - 1 && !north[r][c]) m.push([c, r + 1]);
      if (r > 0 && !north[r - 1][c]) m.push([c, r - 1]);
      return m;
    };
    const dist = { [`${entryC},0`]: 0 };
    const q = [[entryC, 0]];
    while (q.length) {
      const [c, r] = q.shift();
      for (const [nc, nr] of open(c, r)) if (dist[`${nc},${nr}`] == null) { dist[`${nc},${nr}`] = dist[`${c},${r}`] + 1; q.push([nc, nr]); }
    }
    let exit = null;
    for (let c = 0; c < W; c++) { const d = dist[`${c},${BAND - 1}`]; if (!exit || d > exit.d) exit = { c, r: BAND - 1, d }; }
    const cells = Object.entries(dist).map(([k, d]) => { const [c, r] = k.split(',').map(Number); return { c, r, d }; });
    const isEnd = (cl) => (cl.c === exit.c && cl.r === exit.r) || (cl.c === entryC && cl.r === 0);
    const dead = cells.filter((cl) => open(cl.c, cl.r).length === 1 && !isEnd(cl)).sort((p, q2) => q2.d - p.d);
    const far = cells.filter((cl) => !isEnd(cl) && cl.r > 0).sort((p, q2) => q2.d - p.d);
    return (this.layouts[b] = { b, entry: { c: entryC, r: 0 }, exit, north, east, dist, dead, far });
  }

  // which puzzle guards gate k, and its settings (always the same for the same gate)
  gateKind(k) {
    if (k < HANDMADE) return ['lightsout', 'keys', 'slider'][k];
    const i = k - HANDMADE, cycle = Math.floor(i / GEN_KINDS.length);
    const orderOf = (cy) => {
      let o = shuffle(GEN_KINDS, mulberry32(777 + cy * 131));
      if (cy > 0 && o[0] === orderOf(cy - 1)[GEN_KINDS.length - 1]) o = [...o.slice(1), o[0]];
      return o;
    };
    return orderOf(cycle)[i % GEN_KINDS.length];
  }

  puzzleParams(k) {
    const kind = this.gateKind(k);
    const d = Math.max(0, k - HANDMADE); // difficulty
    const rng = mulberry32(31337 + k * 101);
    if (k < HANDMADE) return kind === 'keys' ? { count: 3 } : kind === 'slider' ? { moves: 22 } : {};
    if (kind === 'lightsout') {
      const n = d >= 6 ? 4 : 3;
      const count = Math.min(n * n - 2, 3 + Math.floor(d / 2) + (n === 4 ? 1 : 0));
      return { n, presses: shuffle([...Array(n * n).keys()], rng).slice(0, count) };
    }
    if (kind === 'slider') return { moves: 24 + 5 * d };
    if (kind === 'roman') return { year: 1000 + Math.floor(rng() * 2999), title: 'VAULT LOCK' };
    if (kind === 'caesar') return { text: CIPHER_LINES[Math.floor(rng() * CIPHER_LINES.length)], shift: 1 + Math.floor(rng() * 9) };
    if (kind === 'simon') return { length: Math.min(10, 4 + Math.floor(d / 2)) };
    if (kind === 'keys') return { count: d < 6 ? 2 : 3 };
    return {};
  }

  // ---------------------------------------------------------------- walls (for the map + logic)
  northWall(c, R) {
    if (R < 0) return c !== ENTRY_C;
    const b = Math.floor(R / BAND), r = R % BAND, L = this.layout(b);
    if (r < BAND - 1) return L.north[r][c];
    return c === this.layout(b + 1).entry.c ? 'gate' : true;
  }

  eastWall(c, R) {
    if (c >= W - 1 || c < 0 || R < 0) return true;
    return this.layout(Math.floor(R / BAND)).east[R % BAND][c];
  }

  cellPos(c, R) {
    return new THREE.Vector3(c * CELL, 0, -R * CELL);
  }

  bandOf(z) {
    return Math.max(0, Math.floor(Math.round(-z / CELL) / BAND));
  }

  // ---------------------------------------------------------------- band management
  ensure(b) {
    if (b < 0 || this.bands.has(b) || b <= this.sealedBelow) return;
    this._buildBand(b);
  }

  update(dt) {
    super.update(dt);
    const p = this.game.player;
    if (!p) return;
    this._assignLights(p.pos);
    const b = this.bandOf(p.pos.z);
    if (b === this.curBand) return;
    this.curBand = b;
    if (b > this.maxBand) {
      this.maxBand = b;
      this.ensure(b + 1);
      // the sections far behind you crumble into the dark (and their gate slams shut)
      for (const old of [...this.bands.keys()]) if (old < b - 1) this._removeBand(old);
      if (b - 2 > this.sealedBelow) { this.sealedBelow = b - 2; this._applySeal(this.gates[b - 2]); }
    }
    this.onBandChange?.(b);
  }

  _lamp(color, intensity, distance, x, y, z, own) {
    const l = new THREE.PointLight(color, intensity, distance, 2); // never added to the scene
    l.position.set(x, y, z);
    this.lamps.push(own(l));
    return l;
  }

  _assignLights(p) {
    const near = [];
    for (const l of this.lamps) if (l.intensity > 0) near.push([l, (l.position.x - p.x) ** 2 + (l.position.z - p.z) ** 2]);
    near.sort((a, b) => a[1] - b[1]);
    this.lightPool.forEach((pl, i) => {
      const v = near[i]?.[0];
      if (!v) { pl.intensity = 0; return; }
      pl.position.copy(v.position);
      pl.color.copy(v.color);
      pl.intensity = v.intensity;
      pl.distance = v.distance;
    });
  }

  _applySeal(gt) {
    if (!gt) return;
    gt.mesh.position.y = 0;
    gt.collider.enabled = true;
    gt.sealed = true;
  }

  _removeBand(b) {
    const band = this.bands.get(b);
    if (!band) return;
    this.bands.delete(b);
    this.scene.remove(band.group);
    band.group.traverse((o) => {
      o.geometry?.dispose();
      const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of mats) if (m.userData.bandOwned) { m.map?.dispose(); m.dispose(); }
    });
    const drop = (arr) => arr.filter((x) => !band.owned.has(x));
    this.colliders = drop(this.colliders);
    this.interactables = drop(this.interactables);
    this.collectibles = drop(this.collectibles);
    this.keys = drop(this.keys);
    this.peeks = drop(this.peeks);
    this.secrets = drop(this.secrets);
    this.stations = drop(this.stations);
    this.lamps = drop(this.lamps);
  }

  _buildBand(b) {
    const L = this.layout(b);
    const R0 = b * BAND;
    const rng = mulberry32(9001 + b * 313);
    const group = new THREE.Group();
    const band = { b, group, owned: new Set(), dynamic: new Set() };
    this.bands.set(b, band);
    this.scene.add(group);
    const own = (x) => { band.owned.add(x); return x; };
    const col = (minX, maxX, minZ, maxZ) => own(this.addCollider(minX, maxX, minZ, maxZ));
    const owned = (m) => { m.userData.bandOwned = true; return m; };

    // floor + ceiling (wider than the maze, so the secret alcoves are covered too)
    const x0 = -CELL / 2 - 3, x1 = (W - 1) * CELL + CELL / 2 + 3;
    const zTop = -(R0 + BAND - 1) * CELL - CELL / 2, zBot = -R0 * CELL + CELL / 2 + (b === 0 ? 4 : 0);
    const fl = new THREE.Mesh(planeUV(x1 - x0, zBot - zTop, 3), this.mats.floor);
    fl.rotation.x = -Math.PI / 2;
    fl.position.set((x0 + x1) / 2, 0, (zTop + zBot) / 2);
    fl.receiveShadow = true;
    group.add(fl);
    const ce = new THREE.Mesh(planeUV(x1 - x0, zBot - zTop, 3), this.mats.ceil);
    ce.rotation.x = Math.PI / 2;
    ce.position.set((x0 + x1) / 2, H, (zTop + zBot) / 2);
    group.add(ce);

    // where the eye peeks in, and where the secret shelf is (both on the outer walls)
    const peekRow = R0 + 1 + Math.floor(rng() * (BAND - 2)), peekWest = rng() < 0.5;
    const secRow = R0 + 1 + Math.floor(rng() * (BAND - 2));
    let secWest = rng() < 0.5;
    if (secRow === peekRow && secWest === peekWest) secWest = !secWest;
    const segKey = (x, z) => `${x.toFixed(2)},${z.toFixed(2)}`;
    const westX = -CELL / 2, eastX = (W - 1) * CELL + CELL / 2;
    const peekSeg = segKey(peekWest ? westX : eastX, -peekRow * CELL);
    const secSeg = segKey(secWest ? westX : eastX, -secRow * CELL);

    // ---- shelves
    const segs = [];
    const segX = (R, c) => segs.push({ x: c * CELL, z: -R * CELL - CELL / 2, rot: 0 });
    const segZ = (R, c) => segs.push({ x: c * CELL + CELL / 2, z: -R * CELL, rot: Math.PI / 2 });
    for (let r = 0; r < BAND; r++) {
      const R = R0 + r;
      for (let c = 0; c < W; c++) {
        if (r < BAND - 1 && L.north[r][c]) segX(R, c);
        if (c < W - 1 && L.east[r][c]) segZ(R, c);
      }
      segZ(R, -1);
      segZ(R, W - 1);
    }
    for (let c = 0; c < W; c++) if (c !== L.entry.c) segX(R0 - 1, c);
    const shelves = new ShelfBuilder(rng, H);
    const corners = new Set();
    const corner = (x, z) => corners.add(`${Math.round(x * 100)},${Math.round(z * 100)}`);
    const hl = (CELL + TT) / 2, ht = TT / 2;
    let secretSeg = null;
    for (const sg of segs) {
      const along = sg.rot === 0;
      if (along) { corner(sg.x - CELL / 2, sg.z); corner(sg.x + CELL / 2, sg.z); } else { corner(sg.x, sg.z - CELL / 2); corner(sg.x, sg.z + CELL / 2); }
      const key = segKey(sg.x, sg.z);
      if (key === secSeg) { secretSeg = sg; continue; }
      const gaps = key === peekSeg ? [{ side: peekWest ? 1 : -1, level: 2, from: -0.55, to: 0.55 }] : [];
      shelves.unit(sg.x, sg.z, sg.rot, CELL - TT, TT, gaps);
      if (along) col(sg.x - hl, sg.x + hl, sg.z - ht, sg.z + ht);
      else col(sg.x - ht, sg.x + ht, sg.z - hl, sg.z + hl);
    }
    const ex = L.entry.c * CELL, ez = -R0 * CELL + CELL / 2;
    corner(ex - CELL / 2, ez);
    corner(ex + CELL / 2, ez);
    for (const k of corners) { const [x, z] = k.split(',').map((v) => Number(v) / 100); shelves.pillar(x, z, TT); }
    for (const mesh of shelves.build(this.shelfMats)) group.add(mesh);

    // ---- the hole you came in through (band 0) or the gate into this band
    if (b === 0) this._entrance(band, ex, ez, col);
    else this._gate(band, b - 1, ex, ez, col, owned);

    // ---- eye-peek hole
    {
      const wx = peekWest ? westX : eastX;
      const z = -peekRow * CELL;
      const face = wx + (peekWest ? 0.03 : -0.03);
      const hole = new THREE.Mesh(new THREE.CircleGeometry(0.28, 14), P.MATS.black());
      hole.position.set(face, 1.75, z);
      hole.rotation.y = peekWest ? Math.PI / 2 : -Math.PI / 2;
      hole.scale.set(1.4, 0.8, 1);
      group.add(hole);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 6 }));
      eye.position.set(face + (peekWest ? 0.02 : -0.02), 1.75, z);
      eye.visible = false;
      group.add(eye);
      band.dynamic.add(eye);
      this.peeks.push(own({ x: peekWest ? wx + 1.7 : wx - 1.7, z, eye, done: false }));
    }

    // ---- what's hidden here: keys (if the next gate needs them), a donut, a secret shelf
    const used = new Set([`${L.entry.c},0`]);
    const take = (list) => { const cl = list.find((x) => !used.has(`${x.c},${x.r}`)); if (cl) used.add(`${cl.c},${cl.r}`); return cl; };
    if (this.gateKind(b) === 'keys') {
      const n = this.puzzleParams(b).count;
      for (let i = 0; i < n; i++) {
        const cl = take(L.dead) || take(L.far);
        if (cl) this._key(band, b, i, cl, own);
      }
    }
    const handmade = b < HANDMADE;
    const deadCell = take(L.dead) || take(L.far); // (the keys may have used up the dead ends)
    if (deadCell) {
      const p = this.cellPos(deadCell.c, R0 + deadCell.r);
      this._donut(band, handmade ? `maze_${b}_0` : `gen_${b}_0`, p.x, 0.9, p.z, (b * 2) % 5, handmade ? 20 : Math.max(4, 16 - 4 * (b - HANDMADE)), own);
    }
    if (secretSeg) this._secretShelf(band, b, secretSeg, secWest, col, own, owned, handmade);

    // ---- what this section stores, in the other dead ends
    const theme = themeOf(b);
    band.theme = theme;
    L.dead.filter((cl) => !used.has(`${cl.c},${cl.r}`)).slice(0, 2).forEach((cl, i) => {
      used.add(`${cl.c},${cl.r}`);
      const p = this.cellPos(cl.c, R0 + cl.r);
      const obj = archiveProp(theme.props[i % theme.props.length], mulberry32(b * 31 + i), b * 10 + i);
      obj.position.add(new THREE.Vector3(p.x, 0, p.z));
      obj.rotation.y = Math.floor(rng() * 4) * (Math.PI / 2);
      group.add(obj);
      own(this.addBoxCollider(p.x, p.z, 0.9, 0.9)).top = new THREE.Box3().setFromObject(obj).max.y;
      (band.props = band.props || []).push({ kind: theme.props[i % theme.props.length], x: p.x, z: p.z });
    });
    // ...and smaller things from it, tucked against the shelves along the corridors (never on the outer
    // walls, where the secret shelf and the peek hole are, and never by the gates)
    const decor = [];
    for (let tries = 0; tries < 40 && decor.length < 4; tries++) {
      const c = Math.floor(rng() * W), r = Math.floor(rng() * BAND), R = R0 + r;
      if (used.has(`${c},${r}`) || decor.some((d) => d.c === c && d.r === r)) continue;
      if ((c === L.entry.c && r === 0) || (c === L.exit.c && r === BAND - 1)) continue;
      const sides = [];
      if (r < BAND - 1 && this.northWall(c, R) === true) sides.push([0, -1]);
      if (r > 0 && this.northWall(c, R - 1) === true) sides.push([0, 1]);
      if (c < W - 1 && this.eastWall(c, R)) sides.push([1, 0]);
      if (c > 0 && this.eastWall(c - 1, R)) sides.push([-1, 0]);
      if (!sides.length) continue;
      decor.push({ c, r, side: sides[Math.floor(rng() * sides.length)] });
    }
    for (const d of decor) {
      const p = this.cellPos(d.c, R0 + d.r);
      const x = p.x + d.side[0] * 0.95, z = p.z + d.side[1] * 0.95;
      const kind = theme.props[Math.floor(rng() * theme.props.length)];
      const obj = archiveProp(kind, mulberry32(b * 97 + d.c * 7 + d.r), b * 100 + d.c * 10 + d.r);
      obj.scale.setScalar(0.55);
      obj.rotation.y = rng() * Math.PI * 2;
      obj.position.set(x, 0, z);
      group.add(obj);
      own(this.addBoxCollider(x, z, 0.5, 0.5)).top = new THREE.Box3().setFromObject(obj).max.y;
      (band.props = band.props || []).push({ kind, x, z, small: true });
    }
    if (theme.water) {
      // puddles everywhere (just a shiny layer on the floor)
      const water = new THREE.Mesh(planeUV((W + 1) * CELL, BAND * CELL, 4), this.mats.water);
      water.rotation.x = -Math.PI / 2;
      water.position.set((W - 1) * CELL / 2, 0.02, -(R0 + (BAND - 1) / 2) * CELL);
      group.add(water);
    }

    // ---- pipes and hanging bulbs
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, W * CELL + 2, 8), this.mats.pipe);
    pipe.rotation.z = Math.PI / 2;
    pipe.position.set((W - 1) * CELL / 2, H - 0.2, -(R0 + 2) * CELL);
    group.add(pipe);
    const bulbMat = owned(new THREE.MeshBasicMaterial({ color: theme.bulb }));
    for (let i = 0; i < (theme.dark ? 3 : 6); i++) {
      const c = Math.floor(rng() * W), R = R0 + Math.floor(rng() * BAND);
      const bl = new THREE.Mesh(new THREE.SphereGeometry(theme.dark ? 0.09 : 0.06, 8, 6), bulbMat);
      bl.position.set(c * CELL, H - 0.45, -R * CELL);
      group.add(bl);
      group.add(P.box(0.01, 0.4, 0.01, P.MATS.black(), c * CELL, H - 0.42, -R * CELL));
    }

    batchStatic(group, (o) => band.dynamic.has(o));
  }

  // ---------------------------------------------------------------- pieces
  _entrance(band, x, z, col) {
    const g = band.group;
    const shape = new THREE.Shape();
    const hw = (CELL - TT) / 2 + 0.02;
    shape.moveTo(-hw, 0); shape.lineTo(hw, 0); shape.lineTo(hw, H); shape.lineTo(-hw, H); shape.lineTo(-hw, 0);
    const hole = new THREE.Path();
    personOutline(1.18).forEach(([px, py], i) => (i === 0 ? hole.moveTo(px, py + 0.001) : hole.lineTo(px, py + 0.001)));
    shape.holes.push(hole);
    const wall = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: T, bevelEnabled: false }), this.mats.plaster);
    wall.position.set(x, 0, z - T / 2);
    g.add(wall);
    col(x - hw, x + hw, z - T / 2, z + T / 2);
    // red light from the other side (the T-Rex is out there...)
    this.entranceLight = this._lamp(0xff3010, 4, 6, x, 1.4, z + 1.2, (o) => { band.owned.add(o); return o; });
    const outside = new THREE.Mesh(new THREE.PlaneGeometry(4, 3), new THREE.MeshBasicMaterial({ color: 0x1a0503 }));
    outside.position.set(x, 1.5, z + 2.5);
    outside.rotation.y = Math.PI;
    g.add(outside);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 6 }));
    eye.position.set(x, 1.9, z + 0.5);
    eye.visible = false;
    g.add(eye);
    band.dynamic.add(eye);
    this.holeEye = eye;
  }

  _gate(band, k, x, z, col, owned) {
    const g = band.group;
    const gw = 1.5;
    const side = (CELL - TT - gw) / 2;
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(boxUV(side, H, TT, 1.6), this.shelfMats.pillar);
      m.position.set(x + sx * (gw / 2 + side / 2), H / 2, z);
      g.add(m);
      col(x + sx * (gw / 2 + side / 2) - side / 2 - TT / 2, x + sx * (gw / 2 + side / 2) + side / 2 + TT / 2, z - TT / 2, z + TT / 2);
    }
    const haz = owned(new THREE.MeshBasicMaterial({ map: signTexture('', { w: 64, h: 256, bg: '#ffcc00' }), color: 0xd9a300 }));
    for (const sx of [-1, 1]) {
      const st = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 2.3), haz);
      st.position.set(x + sx * (gw / 2 + 0.04), 1.15, z + TT / 2 + 0.005);
      g.add(st);
    }
    g.add(P.box(gw, H - 2.3, TT, P.MATS.metal(), x, 2.3, z));
    const theme = themeOf(k + 1);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(gw, 0.56), owned(new THREE.MeshBasicMaterial({
      map: signTexture(`SECTION ${k + 2}\n${theme.name}`, { w: 512, h: 192, bg: '#1b2430', fg: '#ffe7a8', font: 'bold 50px Arial Black, Arial', border: '#ffcc00' }),
    })));
    sign.position.set(x, 2.65, z + TT / 2 + 0.012);
    g.add(sign);
    const bars = new THREE.Group();
    const barG = new THREE.CylinderGeometry(0.035, 0.035, 2.3, 6);
    for (let i = 0; i < 8; i++) {
      const bm = new THREE.Mesh(barG, P.MATS.metal());
      bm.position.set(-gw / 2 + 0.1 + i * ((gw - 0.2) / 7), 1.15, 0);
      bm.castShadow = true;
      bars.add(bm);
    }
    for (const y of [0.3, 1.2, 2.1]) bars.add(P.box(gw, 0.06, 0.06, P.MATS.metal(), 0, y, 0));
    bars.position.set(x, 0, z);
    g.add(bars);
    band.dynamic.add(bars);
    const collider = col(x - gw / 2, x + gw / 2, z - 0.2, z + 0.2);
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(gw, 0.5), haz);
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(x, 0.01, z + 0.5);
    g.add(stripe);
    const gate = { k, mesh: bars, collider, open: false, x, z };
    this.gates[k] = gate;
    if (this.gateOpen.has(k)) { gate.open = true; collider.enabled = false; bars.position.y = 2.25; }
    if (k <= this.sealedBelow) this._applySeal(gate);
    this._station(band, k, x, z, owned);
  }

  _station(band, k, gx, gz, owned) {
    const g0 = band.group;
    const kind = this.gateKind(k);
    const params = this.puzzleParams(k);
    const x = gx - 1.15, z = gz + TT / 2 + 0.02;
    const g = new THREE.Group();
    const sign = (text, w, h, y, bg, fg, font = 'bold 50px Arial Black, Arial') => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), owned(new THREE.MeshBasicMaterial({ map: signTexture(text, { w: 256, h: Math.round((256 * h) / w), bg, fg, font }) })));
      m.position.set(0, y, 0.19);
      g.add(m);
    };
    const slots = [];
    if (kind === 'lightsout') {
      g.add(P.box(0.7, 0.9, 0.18, P.mat('fusebox', { color: 0x6a7480, metalness: 0.5, roughness: 0.5 }), 0, 1.0, 0.09));
      sign('⚡ FUSES', 0.5, 0.25, 1.7, '#ffcc00', '#111');
      for (let i = 0; i < 9; i++) {
        const led = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: i % 3 === 1 ? 0x44ff66 : 0xff3333 }));
        led.position.set(-0.18 + (i % 3) * 0.18, 1.2 - Math.floor(i / 3) * 0.18, 0.19);
        g.add(led);
      }
    } else if (kind === 'keys') {
      g.add(P.box(0.66, 0.9, 0.1, P.mat('lockplate', { color: 0x4b5260, metalness: 0.7, roughness: 0.35 }), 0, 0.85, 0.05));
      sign(`${params.count} KEYS`, 0.56, 0.22, 1.92, '#1a1d24', '#ffd23f', 'bold 54px Arial Black, Arial');
      const step = params.count <= 3 ? 0.26 : 0.2;
      KEY_COLORS.slice(0, params.count).forEach(([, color], i) => {
        const y = 1.55 - i * step;
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.02, 8, 18), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, metalness: 0.5, roughness: 0.4 }));
        ring.position.set(0, y, 0.11);
        g.add(ring);
        g.add(P.box(0.025, 0.07, 0.01, P.MATS.black(), 0, y - 0.035, 0.105));
        const kk = new THREE.Group();
        const km = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.2, metalness: 0.6, roughness: 0.3 });
        const bow = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.016, 6, 14), km);
        bow.position.z = 0.16;
        kk.add(bow);
        kk.add(P.box(0.02, 0.02, 0.1, km, 0, 0, 0.11));
        kk.position.set(0, y, 0);
        kk.visible = this.gateOpen.has(k);
        g.add(kk);
        band.dynamic.add(kk);
        slots.push(kk);
      });
    } else if (kind === 'slider') {
      g.add(P.box(1.0, 1.2, 0.08, P.MATS.brass(), 0, 0.9, 0.04));
      const [pc, px] = makeCanvas(256, 300);
      px.fillStyle = '#222'; px.fillRect(0, 0, 256, 300);
      for (let i = 0; i < 9; i++) { px.fillStyle = `hsl(${(i * 40 + k * 23) % 360},50%,50%)`; px.fillRect((i % 3) * 85 + 2, Math.floor(i / 3) * 100 + 2, 81, 96); }
      px.fillStyle = '#fff'; px.font = 'bold 30px Arial'; px.textAlign = 'center'; px.fillText('???', 128, 160);
      const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), owned(new THREE.MeshStandardMaterial({ map: canvasTexture(pc) })));
      poster.position.set(0, 1.5, 0.09);
      g.add(poster);
    } else {
      // a wall terminal for the generated locks
      g.add(P.box(0.72, 0.95, 0.2, P.mat('terminal', { color: 0x2b2f38, metalness: 0.4, roughness: 0.5 }), 0, 0.85, 0.1));
      const label = { caesar: 'CIPHER', roman: 'VAULT', simon: 'MEMORY' }[kind];
      const [bg, fg] = { caesar: ['#03140a', '#6dff9e'], roman: ['#1c1710', '#e9c46a'], simon: ['#120c24', '#c4b0ff'] }[kind];
      sign(label, 0.56, 0.3, 1.45, bg, fg, 'bold 64px Courier New, monospace');
      if (kind === 'simon') {
        [0xff4d4d, 0x4da6ff, 0x55e07a, 0xffd23f].forEach((c, i) => {
          g.add(P.box(0.16, 0.16, 0.04, new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.5 }), -0.1 + (i % 2) * 0.2, 0.95 - Math.floor(i / 2) * 0.2, 0.2));
        });
      } else if (kind === 'roman') {
        for (let i = 0; i < 4; i++) {
          const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.05, 14), P.MATS.brass());
          dial.rotation.x = Math.PI / 2;
          dial.position.set(-0.21 + i * 0.14, 1.05, 0.22);
          g.add(dial);
        }
      } else {
        const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 8, 20), P.mat('bone', { color: 0xe8dcc0, roughness: 0.6 }));
        wheel.position.set(0, 1.0, 0.22);
        g.add(wheel);
      }
    }
    g.position.set(x, 0, z);
    g0.add(g);
    band.owned.add(this.addBoxCollider(x, z + 0.25, 0.8, 0.5));
    const light = this._lamp(LIGHT[kind], 3, 5, x, 2.4, z + 0.8, (o) => { band.owned.add(o); return o; });
    if (this.gateOpen.has(k)) light.color.set(0x66ff99);
    const it = this.addInteractable({ id: 'station' + k, pos: new THREE.Vector3(x, 1.2, z + 0.1), prompt: PROMPTS[kind], enabled: true, radius: 2.3 });
    band.owned.add(it);
    const st = { k, kind, it, light, slots, pos: new THREE.Vector3(x, 0, z + 1.2) };
    band.owned.add(st);
    this.stations.push(st);
    it.onUse = () => this.onStationUse?.(k, st);
  }

  _key(band, k, i, cell, own) {
    const [name, color] = KEY_COLORS[i];
    const id = `k${k}_${name}`;
    const p = this.cellPos(cell.c, k * BAND + cell.r);
    const g = new THREE.Group();
    const m = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.6, metalness: 0.6, roughness: 0.3 });
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.028, 8, 20), m);
    bow.position.y = 0.16;
    g.add(bow);
    g.add(P.box(0.035, 0.3, 0.035, m, 0, -0.16, 0));
    g.add(P.box(0.08, 0.035, 0.035, m, 0.04, -0.14, 0));
    g.add(P.box(0.06, 0.035, 0.035, m, 0.03, -0.06, 0));
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.32, 24), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
    g.add(halo);
    g.position.set(p.x, 1.1, p.z);
    band.group.add(g);
    band.dynamic.add(g);
    const light = this._lamp(color, 2.2, 3.5, p.x, 1.4, p.z, own);
    const key = own({ id, k, name, color, obj: g, light, cell: { c: cell.c, r: k * BAND + cell.r }, taken: false, t: Math.random() * 6 });
    this.keys.push(key);
    if (this.keysTaken.has(id)) this.takeKey(key);
  }

  takeKey(key) {
    key.taken = true;
    key.obj.visible = false;
    key.light.intensity = 0;
    this.keysTaken.add(key.id);
  }

  keysFor(k) {
    return this.keys.filter((key) => key.k === k);
  }

  _donut(band, id, x, y, z, frosting, amount, own) {
    if (id.startsWith('gen_') && this.genTaken.has(id)) return null;
    const c = this.addCollectible(id, x, y, z, frosting);
    if (!c) return null;
    this.scene.remove(c.obj);
    band.group.add(c.obj);
    c.amount = amount;
    c.counted = !id.startsWith('gen_');
    band.dynamic.add(c.obj);
    own(c);
    return c;
  }

  // A shelf on the outer wall with a strange pink box on it. Pull the box and the whole shelf sinks
  // into the floor, revealing a hidden alcove (with a donut, of course).
  _secretShelf(band, b, sg, west, col, own, owned, handmade) {
    const g = band.group;
    const id = `sec_${b}`;
    const inward = west ? 1 : -1; // which way is "into the maze" (world x)
    const unit = new THREE.Group();
    const sb = new ShelfBuilder(mulberry32(555 + b), H);
    sb.unit(0, 0, sg.rot, CELL - TT, TT, [{ side: inward, level: 1, from: -0.35, to: 0.35 }]);
    for (const m of sb.build(this.shelfMats)) unit.add(m);
    const [bc, bx] = makeCanvas(128, 128);
    bx.fillStyle = '#d6337a'; bx.fillRect(0, 0, 128, 128);
    bx.fillStyle = '#ffe3f0'; bx.font = 'bold 54px Arial Black, Arial'; bx.textAlign = 'center'; bx.textBaseline = 'middle';
    bx.fillText('???', 64, 68);
    const boxMat = owned(new THREE.MeshStandardMaterial({ map: canvasTexture(bc), emissive: 0xff2a8a, emissiveIntensity: 0.25, roughness: 0.7 }));
    const strange = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.36, 0.42), boxMat);
    strange.position.set(inward * 0.17, 0.8 + 0.0175 + 0.18, 0); // (just behind the uprights, not flush with them)
    unit.add(strange);
    unit.position.set(sg.x, 0, sg.z);
    g.add(unit);
    band.dynamic.add(unit);
    const hl = (CELL + TT) / 2, ht = TT / 2;
    const collider = col(sg.x - ht, sg.x + ht, sg.z - hl, sg.z + hl);
    // the alcove behind it
    const depth = 2.3, half = (CELL - TT) / 2;
    const ox = sg.x - inward * (TT / 2 + depth / 2);
    const back = sg.x - inward * (TT / 2 + depth);
    g.add(P.box(0.2, H, CELL - TT + 0.4, this.mats.alcove, back - inward * 0.1, 0, sg.z));
    for (const sd of [-1, 1]) g.add(P.box(depth, H, 0.2, this.mats.alcove, ox, 0, sg.z + sd * (half + 0.1)));
    col(Math.min(back, back - inward * 0.2), Math.max(back, back - inward * 0.2), sg.z - half - 0.2, sg.z + half + 0.2);
    for (const sd of [-1, 1]) col(ox - depth / 2, ox + depth / 2, sg.z + sd * (half + 0.1) - 0.1, sg.z + sd * (half + 0.1) + 0.1);
    const lamp = this._lamp(0xff77cc, 0, 4.5, ox, 2.2, sg.z, own);
    g.add(P.box(0.5, 0.5, 0.5, P.mat('crateWood', { color: 0x8a5a33, roughness: 0.8 }), ox, 0, sg.z));
    this._donut(band, handmade ? `maze_${b}_1` : `gen_${b}_1`, ox, 0.95, sg.z, 3, handmade ? 25 : Math.max(6, 20 - 4 * (b - HANDMADE)), own);
    const it = own(this.addInteractable({ id, pos: new THREE.Vector3(sg.x + inward * 0.4, 1.0, sg.z), prompt: 'Pull the strange box', enabled: true, radius: 2.0 }));
    const sec = own({ id, it, unit, collider, lamp, opened: false });
    this.secrets.push(sec);
    it.onUse = () => this.openSecret(sec);
    if (this.secretsOpened.has(id)) this.openSecret(sec, true);
  }

  openSecret(sec, instant = false) {
    if (sec.opened) return Promise.resolve();
    sec.opened = true;
    sec.it.enabled = false;
    sec.collider.enabled = false;
    this.secretsOpened.add(sec.id);
    if (instant) { sec.unit.position.y = -H - 0.1; sec.lamp.intensity = 3; return Promise.resolve(); }
    const g = this.game;
    g.audio.play('gate');
    g.shake(0.15, 1.2);
    this.onSecret?.(sec);
    return g.tween(1.5, (k) => { sec.unit.position.y = -(H + 0.1) * k; sec.lamp.intensity = 3 * k; });
  }

  openGate(k, instant = false) {
    const gt = this.gates[k];
    this.gateOpen.add(k);
    if (!gt || gt.open) return Promise.resolve();
    gt.open = true;
    gt.collider.enabled = false;
    if (instant) { gt.mesh.position.y = 2.25; return Promise.resolve(); }
    this.game.audio.play('gate');
    return this.game.tween(1.6, (kk) => { gt.mesh.position.y = 2.25 * kk; });
  }

  // ---------------------------------------------------------------- explorer's map (scrolls with you)
  _mapCell(px, pz) {
    return { c: Math.round(px / CELL), r: Math.round(-pz / CELL) };
  }

  revealAround(px, pz) {
    const { c, r } = this._mapCell(px, pz);
    if (c < 0 || c >= W || r < 0) return;
    this.seen.add(`${c},${r}`);
    // peek into open neighbors so you can see where passages go
    if (!this.eastWall(c, r)) this.seen.add(`${c + 1},${r}`);
    if (c > 0 && !this.eastWall(c - 1, r)) this.seen.add(`${c - 1},${r}`);
    if (this.northWall(c, r) === false) this.seen.add(`${c},${r + 1}`);
    if (r > 0 && this.northWall(c, r - 1) === false) this.seen.add(`${c},${r - 1}`);
  }

  drawMap(ctx, player) {
    const pad = 8;
    const cw = ctx.canvas.width, ch = ctx.canvas.height;
    const S = Math.floor((cw - pad * 2) / W);
    const rowsVis = Math.floor((ch - pad * 2) / S);
    const pr = Math.round(-player.pos.z / CELL);
    const top = Math.max(rowsVis - 2, pr + Math.floor(rowsVis * 0.55));
    const bottom = top - rowsVis + 1;
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'rgba(239,228,200,0.92)';
    ctx.fillRect(0, 0, cw, ch);
    const X = (c) => pad + c * S, Y = (R) => pad + (top - R) * S;
    const inView = (R) => R >= bottom && R <= top;
    const seen = this.seen;
    for (const k of seen) {
      const [c, R] = k.split(',').map(Number);
      if (!inView(R)) continue;
      ctx.fillStyle = '#fffaf0';
      ctx.fillRect(X(c), Y(R), S, S);
    }
    ctx.strokeStyle = '#3b2a1a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    const line = (x1, y1, x2, y2) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };
    for (const k of seen) {
      const [c, R] = k.split(',').map(Number);
      if (!inView(R)) continue;
      const x = X(c), y = Y(R);
      const nw = this.northWall(c, R);
      if (nw === 'gate') {
        const gk = Math.floor(R / BAND);
        ctx.strokeStyle = this.gates[gk]?.sealed ? '#8a8a8a' : this.gateOpen.has(gk) ? '#2fbf71' : '#ff8a00';
        ctx.lineWidth = 3;
        line(x, y, x + S, y);
        ctx.strokeStyle = '#3b2a1a';
        ctx.lineWidth = 2;
      } else if (nw) line(x, y, x + S, y);
      if (this.eastWall(c, R)) line(x + S, y, x + S, y + S);
      if (c === 0) line(x, y, x, y + S);
      if (R === 0 && c !== ENTRY_C) line(x, y + S, x + S, y + S);
    }
    // stations, keys and donuts you've seen
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icons = { lightsout: '⚡', keys: '🔒', slider: '🖼️', caesar: '🔤', roman: '🔢', simon: '🎵' };
    for (const st of this.stations) {
      const gt = this.gates[st.k];
      const c = Math.round(gt.x / CELL), R = Math.round(-gt.z / CELL - 0.5);
      if (!seen.has(`${c},${R}`) || !inView(R)) continue;
      ctx.fillText(icons[st.kind], X(c) + S / 2, Y(R) + S / 2);
    }
    for (const key of this.keys) {
      const { c, r } = key.cell;
      if (key.taken || !seen.has(`${c},${r}`) || !inView(r)) continue;
      ctx.fillStyle = '#' + key.color.toString(16).padStart(6, '0');
      ctx.strokeStyle = '#3b2a1a';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(X(c) + S / 2, Y(r) + S / 2, 4, 0, 7); ctx.fill(); ctx.stroke();
    }
    for (const col of this.collectibles) {
      if (col.taken) continue;
      const { c, r } = this._mapCell(col.obj.position.x, col.obj.position.z);
      if (!seen.has(`${c},${r}`) || !inView(r)) continue;
      ctx.fillStyle = '#ff4f9a';
      ctx.beginPath(); ctx.arc(X(c) + S / 2, Y(r) + S / 2, 3, 0, 7); ctx.fill();
    }
    // you
    const px = pad + (player.pos.x / CELL + 0.5) * S, py = pad + (top + player.pos.z / CELL + 0.5) * S;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-player.yaw);
    ctx.fillStyle = '#e8262b';
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(4, 4); ctx.lineTo(0, 2); ctx.lineTo(-4, 4); ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  // where to start when `stage` gates are already open
  spawnFor(stage) {
    if (stage === 0) {
      const p = this.cellPos(this.layout(0).entry.c, 0);
      return { x: p.x, z: p.z + 0.6, yaw: 0 };
    }
    const gt = this.gates[stage - 1];
    return { x: gt.x, z: gt.z - 1.4, yaw: 0 };
  }
}

// What's stored in a dead end, by theme. Each fits in a 0.9 × 0.9 m spot.
function archiveProp(kind, r, seed) {
  const g = new THREE.Group();
  const m = (key, color, o = {}) => P.mat('arch_' + key, { color, roughness: 0.8, ...o });
  const cyl = (rt, rb, h, mat, x, y, z) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, 12), mat); c.position.set(x, y + h / 2, z); c.castShadow = true; g.add(c); return c; };
  const box = (w, h, d, mat, x, y, z, ry = 0) => { const b = P.box(w, h, d, mat, x, y, z); b.rotation.y = ry; b.castShadow = true; g.add(b); return b; };
  const COLORS = [0xd94141, 0x3a7bd5, 0xf2c14e, 0x4caf50, 0x9c5bd6, 0xff8a3d];
  const pick = () => COLORS[Math.floor(r() * COLORS.length)];
  switch (kind) {
    case 'crate': return P.makeCrate(0.9);
    case 'statue': return P.makeSheetStatue(seed);
    case 'sarcophagus': return P.makeSarcophagus();
    case 'umbrellas': { // a bin full of forgotten umbrellas
      cyl(0.26, 0.22, 0.6, m('umbin', 0x3b3f46, { metalness: 0.4 }), 0, 0, 0);
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2, u = new THREE.Group();
        const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 6), P.MATS.black());
        stick.position.y = 0.5;
        const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.6, 8), m('umb' + (i % 3), [0xd94141, 0x3a7bd5, 0x222222][i % 3]));
        canopy.position.y = 0.55;
        u.add(stick, canopy);
        u.position.set(Math.cos(a) * 0.09, 0.15, Math.sin(a) * 0.09);
        u.rotation.set(Math.sin(a) * 0.15, 0, Math.cos(a) * 0.15);
        g.add(u);
      }
      box(0.3, 0.12, 0.2, m('boot', 0x5a3a22), 0.3, 0, 0.25, 0.4);
      return g;
    }
    case 'hats': { // lost hats on a little table
      box(0.8, 0.05, 0.6, P.MATS.darkWood(), 0, 0.7, 0);
      for (const [x, z] of [[-0.3, -0.22], [0.3, -0.22], [-0.3, 0.22], [0.3, 0.22]]) box(0.05, 0.7, 0.05, P.MATS.darkWood(), x, 0, z);
      for (let i = 0; i < 3; i++) {
        const c = pick(), x = -0.24 + i * 0.24;
        cyl(0.13, 0.13, 0.015, m('hat' + c, c), x, 0.75, 0);
        cyl(0.08, 0.09, 0.12, m('hat' + c, c), x, 0.765, 0);
      }
      return g;
    }
    case 'rolls': { // poster rolls in a box
      box(0.7, 0.45, 0.5, m('cardboard', 0xb08a5a), 0, 0, 0);
      for (let i = 0; i < 7; i++) cyl(0.04, 0.04, 0.7 + r() * 0.3, m('roll' + (i % 3), [0xf2efe6, 0xe8d9b0, 0xcfe0f2][i % 3]), -0.25 + (i % 4) * 0.16, 0.2, -0.12 + Math.floor(i / 4) * 0.22);
      return g;
    }
    case 'frames': { // picture frames leaning on each other
      for (let i = 0; i < 3; i++) {
        const f = box(0.8 - i * 0.12, 0.6 - i * 0.08, 0.05, m('frame', 0x8a6a2a, { metalness: 0.3 }), 0, 0, -0.25 + i * 0.12);
        f.rotation.x = -0.18;
        const canvas = box(0.68 - i * 0.12, 0.48 - i * 0.08, 0.01, m('painting' + i, pick()), 0, 0.06, -0.22 + i * 0.12);
        canvas.rotation.x = -0.18;
      }
      return g;
    }
    case 'bones': { // a pallet of spare dinosaur bones
      box(0.85, 0.12, 0.85, m('pallet', 0x9a7a4a), 0, 0, 0);
      const bone = m('bone', 0xe6dcc4);
      for (let i = 0; i < 6; i++) {
        const b = new THREE.Group();
        const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.55, 8), bone);
        shaft.rotation.z = Math.PI / 2;
        b.add(shaft);
        for (const sx of [-0.28, 0.28]) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), bone); k.position.x = sx; b.add(k); }
        b.position.set((r() - 0.5) * 0.3, 0.18 + Math.floor(i / 3) * 0.1, -0.25 + (i % 3) * 0.25);
        b.rotation.y = (r() - 0.5) * 0.8;
        g.add(b);
      }
      return g;
    }
    case 'skull': { // a big dinosaur skull in an open crate
      box(0.85, 0.35, 0.85, m('crateopen', 0x9a7a4a), 0, 0, 0);
      const bone = m('bone', 0xe6dcc4);
      box(0.7, 0.3, 0.4, bone, 0, 0.35, 0);
      box(0.5, 0.12, 0.38, bone, 0.05, 0.3, 0.12);
      for (let i = 0; i < 6; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.08, 6), bone); t.position.set(-0.25 + i * 0.1, 0.33, 0.21); t.rotation.x = Math.PI; g.add(t); }
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), P.MATS.black());
      eye.position.set(-0.15, 0.52, 0.19);
      g.add(eye);
      return g;
    }
    case 'jars': { // canopic jars
      for (let i = 0; i < 4; i++) {
        const x = -0.22 + (i % 2) * 0.44, z = -0.22 + Math.floor(i / 2) * 0.44;
        cyl(0.11, 0.08, 0.35, m('jar', 0xd9c49a), x, 0, z);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), m('jarhead' + i, [0xd4a43a, 0x1f3d8a, 0xd9c49a, 0x8a2a18][i]));
        head.position.set(x, 0.42, z);
        g.add(head);
      }
      return g;
    }
    case 'column': { // a broken column, in pieces
      const stone = P.MATS.stoneWhite();
      cyl(0.32, 0.32, 0.9, stone, -0.1, 0, -0.1);
      const top = cyl(0.3, 0.3, 0.5, stone, 0, 0, 0);
      top.rotation.z = Math.PI / 2;
      top.position.set(0.1, 0.3, 0.3);
      box(0.3, 0.2, 0.25, stone, 0.28, 0, -0.3, 0.6);
      return g;
    }
    case 'tree': { // a dusty holiday tree, still lit
      cyl(0.12, 0.14, 0.25, m('treepot', 0x8a2a18), 0, 0, 0);
      for (let i = 0; i < 3; i++) {
        const c = new THREE.Mesh(new THREE.ConeGeometry(0.42 - i * 0.1, 0.55, 10), m('tree', 0x2e6b3a));
        c.position.y = 0.55 + i * 0.35;
        g.add(c);
      }
      for (let i = 0; i < 12; i++) {
        const a = r() * Math.PI * 2, y = 0.4 + r() * 1.0, rad = 0.38 - (y - 0.4) * 0.28;
        const l = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), P.mat('xmaslight' + (i % 4), { color: COLORS[i % 4], emissive: COLORS[i % 4], emissiveIntensity: 2 }));
        l.position.set(Math.cos(a) * rad, y, Math.sin(a) * rad);
        g.add(l);
      }
      return g;
    }
    case 'gifts': {
      for (let i = 0; i < 4; i++) {
        const w = 0.25 + r() * 0.2, h = 0.2 + r() * 0.25, c = pick();
        const x = -0.2 + (i % 2) * 0.4, z = -0.2 + Math.floor(i / 2) * 0.4;
        box(w, h, w, m('gift' + c, c), x, 0, z, r());
        box(w + 0.01, h + 0.01, 0.04, m('ribbon', 0xf5f0e0), x, 0, z, r());
      }
      return g;
    }
    case 'buckets': { // buckets catching drips
      for (let i = 0; i < 3; i++) cyl(0.15, 0.12, 0.3, m('bucket', 0x2d6cc4, { metalness: 0.2 }), -0.25 + i * 0.25, 0, (i % 2) * 0.25 - 0.1);
      box(0.6, 0.03, 0.4, m('mop', 0x8a6a3a), 0.1, 0, 0.3, 0.5);
      return g;
    }
    case 'donutboxes': { // empty donut boxes. so many empty donut boxes.
      const pink = m('donutbox', 0xf7a8c8);
      for (let i = 0; i < 7; i++) box(0.5, 0.08, 0.36, pink, (r() - 0.5) * 0.15, i * 0.085, (r() - 0.5) * 0.15, (r() - 0.5) * 0.4);
      box(0.5, 0.08, 0.36, pink, 0.2, 0, 0.3, 1.2);
      return g;
    }
    default: return P.makeCrate(0.9);
  }
}
