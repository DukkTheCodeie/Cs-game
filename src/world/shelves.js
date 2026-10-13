import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeCanvas, canvasTexture } from './textures.js';

// Real 3D archive shelving for the maze walls: steel shelves stocked on both sides with
// cardboard boxes, archive boxes and plastic bins. Every wall gets its own random stock, and
// everything is merged into one mesh per material so it stays fast.

export const SHELF_LEVELS = [0.1, 0.8, 1.5, 2.2];

function cardboardTexture() {
  const [c, x] = makeCanvas(256, 256);
  x.fillStyle = '#e2b47c';
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 256; i += 6) { x.fillStyle = `rgba(120,70,20,${0.04 + Math.random() * 0.04})`; x.fillRect(i, 0, 2, 256); }
  for (let i = 0; i < 400; i++) { x.fillStyle = `rgba(80,40,10,${Math.random() * 0.08})`; x.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); }
  // packing tape
  x.fillStyle = 'rgba(240,210,150,0.75)';
  x.fillRect(0, 0, 256, 34);
  x.fillStyle = 'rgba(255,255,255,0.15)';
  x.fillRect(0, 6, 256, 4);
  // label
  x.fillStyle = '#f4f1e8';
  x.fillRect(64, 120, 128, 72);
  x.strokeStyle = 'rgba(0,0,0,0.25)';
  x.lineWidth = 2;
  x.strokeRect(64, 120, 128, 72);
  x.fillStyle = '#2b2b2b';
  x.font = 'bold 26px Courier New, monospace';
  x.textAlign = 'center';
  x.fillText('MUSEUM', 128, 152);
  x.fillRect(80, 166, 96, 4);
  x.fillRect(80, 176, 64, 4);
  // "this side up" arrows
  x.fillStyle = 'rgba(60,30,10,0.55)';
  for (const ax of [28, 228]) { x.beginPath(); x.moveTo(ax, 210); x.lineTo(ax - 12, 230); x.lineTo(ax + 12, 230); x.fill(); x.fillRect(ax - 4, 230, 8, 16); }
  return canvasTexture(c);
}

function archiveTexture() {
  const [c, x] = makeCanvas(256, 256);
  x.fillStyle = '#eeeae0';
  x.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 300; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; x.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); }
  // lid edge
  x.fillStyle = 'rgba(0,0,0,0.12)';
  x.fillRect(0, 44, 256, 6);
  // label frame
  x.strokeStyle = '#2a2a2a';
  x.lineWidth = 5;
  x.strokeRect(70, 80, 116, 70);
  x.fillStyle = '#2a2a2a';
  x.font = 'bold 22px Courier New, monospace';
  x.textAlign = 'center';
  x.fillText('FILES', 128, 112);
  x.fillRect(86, 124, 84, 3);
  x.fillRect(86, 134, 60, 3);
  // hand hole
  x.fillStyle = '#3a342c';
  x.beginPath();
  x.ellipse(128, 196, 34, 12, 0, 0, Math.PI * 2);
  x.fill();
  return canvasTexture(c);
}

export function shelfMaterials() {
  return {
    frame: new THREE.MeshStandardMaterial({ color: 0x6b7280, roughness: 0.45, metalness: 0.6 }),
    back: new THREE.MeshStandardMaterial({ color: 0x2c2723, roughness: 0.95 }),
    cardboard: new THREE.MeshStandardMaterial({ map: cardboardTexture(), vertexColors: true, roughness: 0.9 }),
    archive: new THREE.MeshStandardMaterial({ map: archiveTexture(), vertexColors: true, roughness: 0.85 }),
    bin: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35, metalness: 0.05 }),
    pillar: new THREE.MeshStandardMaterial({ color: 0x55534f, roughness: 0.9 }),
  };
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);

function boxGeo(w, h, d, x, y, z, ry = 0, color = null) {
  const g = new THREE.BoxGeometry(w, h, d);
  _e.set(0, ry, 0);
  _q.setFromEuler(_e);
  _p.set(x, y, z);
  _m.compose(_p, _q, _s);
  g.applyMatrix4(_m);
  if (color) {
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = color.r; arr[i * 3 + 1] = color.g; arr[i * 3 + 2] = color.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  }
  return g;
}

export class ShelfBuilder {
  constructor(rng, height) {
    this.rng = rng;
    this.H = height;
    this.parts = { frame: [], back: [], cardboard: [], archive: [], bin: [], pillar: [] };
  }

  // A shelving unit centered at (cx, cz), `len` long, running along X (rot 0) or Z (rot π/2).
  // `gaps` lists empty spots: [{ side: 1|-1, level, from, to }] in local x.
  unit(cx, cz, rot, len, thick, gaps = []) {
    const r = this.rng, H = this.H;
    const local = [];
    const add = (type, g) => local.push([type, g]);
    const half = thick / 2, depth = half - 0.04;
    add('back', boxGeo(len, H, 0.05, 0, H / 2, 0));
    for (const s of [-1, 1]) {
      for (const lv of SHELF_LEVELS) add('frame', boxGeo(len, 0.035, depth, 0, lv, s * (0.025 + depth / 2)));
      for (const ux of [-len / 2 + 0.03, 0, len / 2 - 0.03]) add('frame', boxGeo(0.04, H - 0.04, 0.04, ux, H / 2, s * (half - 0.03)));
      SHELF_LEVELS.forEach((lv, li) => {
        const room = (SHELF_LEVELS[li + 1] ?? H) - lv - 0.08;
        let x = -len / 2 + 0.06;
        while (x < len / 2 - 0.25) {
          if (r() < 0.14) { x += 0.25 + r() * 0.35; continue; } // an empty spot
          const kind = r();
          const type = kind < 0.55 ? 'cardboard' : kind < 0.85 ? 'archive' : 'bin';
          let w = type === 'archive' ? 0.3 + r() * 0.12 : 0.3 + r() * 0.32;
          let h = type === 'bin' ? 0.18 + r() * 0.12 : 0.22 + r() * Math.min(0.4, room - 0.22);
          if (type === 'archive') h = Math.min(room, 0.26 + r() * 0.06);
          const d = Math.min(depth - 0.02, 0.2 + r() * 0.08);
          w = Math.min(w, len / 2 - 0.06 - x);
          if (w < 0.2) break;
          const bx = x + w / 2;
          if (!gaps.some((gp) => gp.side === s && gp.level === li && bx + w / 2 > gp.from && bx - w / 2 < gp.to)) {
            const shade = 0.72 + r() * 0.3;
            const col = type === 'bin'
              ? new THREE.Color().setHSL([0.58, 0.6, 0.08, 0.0][Math.floor(r() * 4)], r() < 0.25 ? 0 : 0.45, 0.42 * shade)
              : new THREE.Color(shade, shade * (0.94 + r() * 0.06), shade * (0.88 + r() * 0.1));
            const by = lv + 0.0175 + h / 2;
            const bz = s * (0.05 + d / 2 + r() * 0.03);
            add(type, boxGeo(w, h, d, bx, by, bz, (r() - 0.5) * 0.12, col));
            // sometimes a small box stacked on top
            if (type !== 'bin' && room - h > 0.24 && r() < 0.25) {
              const w2 = w * (0.55 + r() * 0.3), h2 = Math.min(room - h - 0.02, 0.14 + r() * 0.14);
              add('cardboard', boxGeo(w2, h2, d * 0.85, bx + (r() - 0.5) * 0.1, by + h / 2 + h2 / 2, bz, (r() - 0.5) * 0.3, new THREE.Color(shade * 0.95, shade * 0.88, shade * 0.78)));
            }
          }
          x += w + 0.02 + r() * 0.08;
        }
      });
    }
    // place the whole unit in the world
    _e.set(0, rot, 0);
    _q.setFromEuler(_e);
    _p.set(cx, 0, cz);
    _m.compose(_p, _q, _s);
    for (const [type, g] of local) { g.applyMatrix4(_m); this.parts[type].push(g); }
  }

  pillar(x, z, size) {
    this.parts.pillar.push(boxGeo(size, this.H, size, x, this.H / 2, z));
  }

  // One mesh per material.
  build(mats) {
    const out = [];
    for (const [type, geos] of Object.entries(this.parts)) {
      if (!geos.length) continue;
      const merged = mergeGeometries(geos, false);
      for (const g of geos) g.dispose();
      const mesh = new THREE.Mesh(merged, mats[type]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      out.push(mesh);
    }
    return out;
  }
}
