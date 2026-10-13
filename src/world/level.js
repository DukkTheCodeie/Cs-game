import * as THREE from 'three';
import { makeCollectible } from './props.js';

// UV-scaled box so textures tile by world size (1 texture repeat = `scale` meters).
export function boxUV(w, h, d, scale = 2) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, (uv.getX(i) * dims[f][0]) / scale, (uv.getY(i) * dims[f][1]) / scale);
    }
  }
  return g;
}

// Texture coordinates from world position (1 repeat = `scale` meters) for a box placed at `at`, so
// stone courses and painted bands line up across every piece of a wall, above doors and around corners.
export function worldBoxUV(geo, at, scale = 2) {
  const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) + at.x, y = p.getY(i) + at.y, z = p.getZ(i) + at.z;
    if (Math.abs(n.getY(i)) > 0.5) uv.setXY(i, x / scale, z / scale);
    else if (Math.abs(n.getX(i)) > 0.5) uv.setXY(i, z / scale, y / scale);
    else uv.setXY(i, x / scale, y / scale);
  }
  uv.needsUpdate = true;
  return geo;
}

export function planeUV(w, h, scale = 2) {
  const g = new THREE.PlaneGeometry(w, h);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * w) / scale, (uv.getY(i) * h) / scale);
  return g;
}

export class Level {
  constructor(game) {
    this.game = game;
    this.scene = new THREE.Scene();
    this.colliders = [];
    this.interactables = [];
    this.triggers = [];
    this.updaters = [];
    this.collectibles = [];
    this.surface = 'marble';
    this.surfaceAt = null;
    this.wallT = 0.4;
  }

  add(obj, x = 0, y = 0, z = 0, ry = 0) {
    obj.position.set(x, y, z);
    obj.rotation.y = ry;
    this.scene.add(obj);
    return obj;
  }

  addCollider(minX, maxX, minZ, maxZ, tag = null) {
    const b = { minX: Math.min(minX, maxX), maxX: Math.max(minX, maxX), minZ: Math.min(minZ, maxZ), maxZ: Math.max(minZ, maxZ), tag, enabled: true };
    this.colliders.push(b);
    return b;
  }

  // Lots of small lamps are expensive: the GPU works through every light for every pixel, even ones far
  // away or switched off. This gives a fixed number of real lights to whichever small lamps (range up
  // to maxRange) are nearest the camera, and hides the lamps themselves. Lamps added later (in cutscenes)
  // are picked up too, so the number of lights never changes and shaders never recompile mid-scene.
  shareLights(count = 8, maxRange = 16) {
    const pool = Array.from({ length: count }, () => {
      const l = new THREE.PointLight(0xffffff, 0, 1, 2);
      l.userData.pool = true;
      this.scene.add(l);
      return l;
    });
    const lamps = [];
    const take = (o) => {
      if (!o.isPointLight || o.userData.pool || o.userData.shared || !(o.distance > 0 && o.distance <= maxRange)) return;
      // lights riding on the camera (the flashlight's fill) move on to the next level with it: leave them alone
      for (let p = o.parent; p; p = p.parent) if (p.isCamera) return;
      o.userData.shared = true;
      o.userData.wp = new THREE.Vector3();
      o.visible = false;
      lamps.push(o);
    };
    const scan = () => this.scene.traverse(take);
    scan();
    // a lamp added mid-cutscene joins the pool before it's ever drawn, so the light count never changes
    this.scene.addEventListener('childadded', (e) => e.child.traverse(take));
    let scanT = 0;
    const near = [];
    this.addUpdater((dt) => {
      if ((scanT -= dt) <= 0) { scanT = 0.25; scan(); }
      const cam = this.game.camera.position;
      near.length = 0;
      for (const l of lamps) {
        if (!(l.intensity > 0) || !l.parent) continue;
        // only lamps still in this scene, with every group above them shown
        let p = l.parent;
        while (p.visible && p.parent) p = p.parent;
        if (p !== this.scene || !p.visible) continue;
        const wp = l.getWorldPosition(l.userData.wp);
        near.push([l, wp.distanceTo(cam) - l.distance, wp]);
      }
      near.sort((a, b) => a[1] - b[1]);
      pool.forEach((pl, i) => {
        const e = near[i];
        if (!e) { pl.intensity = 0; return; }
        pl.position.copy(e[2]);
        pl.color.copy(e[0].color);
        pl.intensity = e[0].intensity;
        pl.distance = e[0].distance;
        pl.decay = e[0].decay;
      });
    });
  }

  // How tall each collider is, from the meshes standing on the floor inside it (so the flashlight knows
  // you can see over a low platform or a bench). Call before the static meshes are merged.
  // `skip(obj)` leaves out things that move (and everything under them), like the T-Rex on its platform.
  measureColliders(skip = () => false) {
    const boxes = [];
    const bb = new THREE.Box3();
    this.scene.updateMatrixWorld(true);
    const walk = (o) => {
      if (o !== this.scene && skip(o)) return;
      measure(o);
      for (const c of o.children) walk(c);
    };
    const measure = (o) => {
      if (!o.isMesh || !o.geometry?.attributes?.position) return;
      const m = Array.isArray(o.material) ? o.material[0] : o.material;
      if (m?.transparent && !m.depthWrite) return; // light beams, glows, decals: not solid
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      bb.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
      if (bb.max.y - bb.min.y < 0.02) return;
      boxes.push([bb.min.x, bb.max.x, bb.min.z, bb.max.z, bb.min.y, bb.max.y]);
    };
    walk(this.scene);
    for (const c of this.colliders) {
      // start from the floor and keep stacking: a column's base, then its shaft, then its capital...
      const mine = boxes.filter(([x0, x1, z0, z1]) => x1 > c.minX + 0.02 && x0 < c.maxX - 0.02 && z1 > c.minZ + 0.02 && z0 < c.maxZ - 0.02);
      let top = 0, grew = true;
      while (grew) {
        grew = false;
        for (const [, , , , y0, y1] of mine) if (y0 <= top + 0.12 && y1 > top) { top = y1; grew = true; }
      }
      c.top = top || Infinity;
    }
  }

  // Collider centered at x,z of size w (x) by d (z), optionally rotated by 90° multiples.
  addBoxCollider(x, z, w, d, rotY = 0) {
    const swap = Math.abs(Math.sin(rotY)) > 0.7;
    const hw = (swap ? d : w) / 2, hd = (swap ? w : d) / 2;
    return this.addCollider(x - hw, x + hw, z - hd, z + hd);
  }

  addInteractable(opts) {
    const it = { radius: 2.4, enabled: true, height: 1.2, ...opts };
    this.interactables.push(it);
    return it;
  }

  addTrigger(opts) {
    const t = { once: true, fired: false, enabled: true, ...opts };
    this.triggers.push(t);
    return t;
  }

  addUpdater(fn) {
    this.updaters.push(fn);
    return fn;
  }

  addCollectible(id, x, y, z, frosting = 0) {
    if (this.game.save.donuts.includes(id)) return null;
    const obj = makeCollectible(frosting);
    obj.position.set(x, y, z);
    this.scene.add(obj);
    const c = { id, obj, base: y, t: Math.random() * 6, taken: false };
    this.collectibles.push(c);
    return c;
  }

  // Walls: along X at fixed z, or along Z at fixed x. Openings: [{c, w, h, frame}]
  // `material` (and `scale`) can be [side toward -z/-x, side toward +z/+x] for a wall between two rooms.
  // When the level sets `trimFor` (wall material → trim material), walls get baseboards on both faces
  // (opts.noTrim = -1 or 1 skips one side, e.g. the outside), and openings with `frame: true` get a
  // door frame.
  wallX(z, x1, x2, h, material, openings = [], scale = 2, opts = {}) {
    this._wall('x', z, x1, x2, h, material, openings, scale, opts);
  }
  wallZ(x, z1, z2, h, material, openings = [], scale = 2, opts = {}) {
    this._wall('z', x, z1, z2, h, material, openings, scale, opts);
  }
  _wall(axis, fixed, a1, a2, h, material, openings, scale, opts = {}) {
    const T = this.wallT;
    const sides = Array.isArray(material) ? material : [material, material];
    const segs = [];
    let cur = Math.min(a1, a2);
    const end = Math.max(a1, a2);
    for (const op of [...openings].sort((p, q) => p.c - q.c)) {
      const a = op.c - op.w / 2, b = op.c + op.w / 2;
      if (a > cur) segs.push([cur, a, 0, h]);
      if (op.h < h) segs.push([a, b, op.h, h]);
      cur = b;
    }
    if (cur < end) segs.push([cur, end, 0, h]);
    // one box, or two half-thickness boxes when the two sides differ
    const scales = Array.isArray(scale) ? scale : [scale, scale];
    const parts = sides[0] === sides[1] ? [[sides[0], 0, T, scales[1]]] : [[sides[0], -T / 4, T / 2, scales[0]], [sides[1], T / 4, T / 2, scales[1]]];
    for (const [s, e, y0, y1] of segs) {
      const len = e - s, mid = (s + e) / 2, hh = y1 - y0;
      for (const [mat, off, t, sc] of parts) {
        const geo = axis === 'x' ? new THREE.BoxGeometry(len, hh, t) : new THREE.BoxGeometry(t, hh, len);
        const m = new THREE.Mesh(geo, mat);
        if (axis === 'x') m.position.set(mid, y0 + hh / 2, fixed + off);
        else m.position.set(fixed + off, y0 + hh / 2, mid);
        worldBoxUV(geo, m.position, sc);
        m.receiveShadow = true;
        m.castShadow = y0 > 0;
        this.scene.add(m);
      }
      if (y0 === 0) {
        if (axis === 'x') this.addCollider(s, e, fixed - T / 2, fixed + T / 2);
        else this.addCollider(fixed - T / 2, fixed + T / 2, s, e);
        this._trimStrip(axis, fixed, s, e, sides, opts, 0, 0.16, 0.03);
      }
    }
    for (const op of openings) if (op.frame) this._doorFrame(axis, fixed, op, sides, opts);
  }

  // A strip of trim along a wall face (baseboard), on each side that has a trim material.
  _trimStrip(axis, fixed, s, e, sides, opts, y, hgt, depth) {
    if (!this.trimFor) return;
    const T = this.wallT;
    sides.forEach((mat, k) => {
      const dir = k ? 1 : -1, tm = this.trimFor.get(mat);
      if (!tm || opts.noTrim === dir) return;
      const off = fixed + dir * (T / 2 + depth / 2);
      const geo = axis === 'x' ? new THREE.BoxGeometry(e - s, hgt, depth) : new THREE.BoxGeometry(depth, hgt, e - s);
      const m = new THREE.Mesh(geo, tm);
      if (axis === 'x') m.position.set((s + e) / 2, y + hgt / 2, off);
      else m.position.set(off, y + hgt / 2, (s + e) / 2);
      m.receiveShadow = true;
      this.scene.add(m);
    });
  }

  // Jambs and a lintel around a doorway, on both faces of the wall.
  _doorFrame(axis, fixed, op, sides, opts) {
    if (!this.trimFor) return;
    const T = this.wallT, fw = op.frameW || 0.2, fd = 0.06;
    sides.forEach((mat, k) => {
      const dir = k ? 1 : -1, tm = this.trimFor.get(mat);
      if (!tm || opts.noTrim === dir) return;
      const off = fixed + dir * (T / 2 + fd / 2);
      const piece = (u, y, w, hgt) => {
        const geo = axis === 'x' ? new THREE.BoxGeometry(w, hgt, fd) : new THREE.BoxGeometry(fd, hgt, w);
        const m = new THREE.Mesh(geo, tm);
        if (axis === 'x') m.position.set(u, y, off);
        else m.position.set(off, y, u);
        m.castShadow = true;
        m.receiveShadow = true;
        this.scene.add(m);
      };
      const a = op.c - op.w / 2, b = op.c + op.w / 2;
      piece(a - fw / 2, (op.h + fw) / 2, fw, op.h + fw);
      piece(b + fw / 2, (op.h + fw) / 2, fw, op.h + fw);
      piece(op.c, op.h + fw / 2, op.w + fw * 2, fw);
    });
  }

  floor(x1, x2, z1, z2, material, y = 0, scale = 2) {
    const w = x2 - x1, d = z2 - z1;
    const m = new THREE.Mesh(planeUV(w, d, scale), material);
    m.rotation.x = -Math.PI / 2;
    m.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    m.receiveShadow = true;
    this.scene.add(m);
    return m;
  }

  ceiling(x1, x2, z1, z2, y, material, scale = 2) {
    const w = x2 - x1, d = z2 - z1;
    const m = new THREE.Mesh(planeUV(w, d, scale), material);
    m.rotation.x = Math.PI / 2;
    m.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    this.scene.add(m);
    return m;
  }

  update(dt) {
    for (const fn of this.updaters) fn(dt);
    const g = this.game;
    const p = g.player;
    for (const c of this.collectibles) {
      if (c.taken) continue;
      c.t += dt;
      c.obj.position.y = c.base + Math.sin(c.t * 2) * 0.08;
      c.obj.userData.spin.rotation.y += dt * 1.6;
      c.obj.userData.halo.material.opacity = 0.6 + Math.sin(c.t * 4) * 0.3;
      if (p && p.enabled) {
        const dx = p.pos.x - c.obj.position.x, dz = p.pos.z - c.obj.position.z;
        if (dx * dx + dz * dz < 1.1 * 1.1 && Math.abs(c.obj.position.y - 1) < 1.6) {
          c.taken = true;
          c.obj.parent?.remove(c.obj);
          g.collectDonut(c.id, c.amount);
          this.onCollected?.(c);
        }
      }
    }
    if (p && p.enabled) {
      for (const t of this.triggers) {
        if (!t.enabled || (t.once && t.fired)) continue;
        let inside;
        if (t.r != null) inside = Math.hypot(p.pos.x - t.x, p.pos.z - t.z) < t.r;
        else inside = p.pos.x > t.minX && p.pos.x < t.maxX && p.pos.z > t.minZ && p.pos.z < t.maxZ;
        if (inside && !t.inside) {
          t.fired = true;
          t.onEnter?.();
        }
        t.inside = inside;
      }
    }
  }

  dispose() {
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (m.map && !m.map.userData?.keep) m.map.dispose();
          if (m.bumpMap && !m.bumpMap.userData?.keep) m.bumpMap.dispose();
          m.dispose();
        }
      }
    });
  }
}
