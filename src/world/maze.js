import * as THREE from 'three';
import { Level, boxUV } from './level.js';
import { tex, signTexture, makeCanvas, canvasTexture } from './textures.js';
import * as P from './props.js';
import { mulberry32 } from '../core/util.js';
import { personOutline } from './runner.js';
import { batchStatic } from './batch.js';

// The Archives: three maze sections, each locked by a puzzle gate.
// Cell (c, r): center x = c*CELL, z = -r*CELL. Progress goes north (-z).

export const CELL = 3.2;
const W = 7, BAND = 5, BANDS = 3, H = 3.0, T = 0.3;

export class Maze extends Level {
  constructor(game) {
    super(game);
    const s = this.scene;
    this.surface = 'concrete';
    s.background = new THREE.Color(0x010102);
    s.fog = new THREE.FogExp2(0x020203, 0.07);
    const rng = (this.rng = mulberry32(4242));

    s.add(new THREE.AmbientLight(0x8090b0, 0.22));
    s.add(new THREE.HemisphereLight(0x405070, 0x100c08, 0.3));

    this.mats = {
      wall: new THREE.MeshStandardMaterial({ map: tex('shelves'), roughness: 0.85 }),
      floor: new THREE.MeshStandardMaterial({ map: tex('concrete'), roughness: 0.9 }),
      ceil: new THREE.MeshStandardMaterial({ map: tex('concrete'), color: 0x555555, roughness: 1 }),
      pipe: new THREE.MeshStandardMaterial({ color: 0x5a6068, roughness: 0.5, metalness: 0.6 }),
      bulb: new THREE.MeshBasicMaterial({ color: 0xffcf80 }),
    };

    // ---- carve ----
    const R = BAND * BANDS;
    this.R = R;
    const north = []; // north[r][c] wall between r and r+1
    const east = [];  // east[r][c] wall between c and c+1
    for (let r = 0; r < R; r++) { north.push(new Array(W).fill(true)); east.push(new Array(W).fill(true)); }
    this.entries = [{ c: 3, r: 0 }];
    this.exits = [];
    for (let b = 0; b < BANDS; b++) {
      const r0 = b * BAND, r1 = r0 + BAND - 1;
      const entry = this.entries[b];
      const seen = new Set([`${entry.c},${entry.r}`]);
      const stack = [entry];
      while (stack.length) {
        const cur = stack[stack.length - 1];
        const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]]
          .map(([dc, dr]) => ({ c: cur.c + dc, r: cur.r + dr, dc, dr }))
          .filter((n) => n.c >= 0 && n.c < W && n.r >= r0 && n.r <= r1 && !seen.has(`${n.c},${n.r}`));
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
      for (let k = 0; k < 4; k++) {
        const r = r0 + Math.floor(rng() * (BAND - 1)), c = Math.floor(rng() * (W - 1));
        if (rng() < 0.5) east[r][c] = false; else north[r][c] = false;
      }
      // BFS distances from entry
      const dist = this._bfs(entry, north, east, r0, r1);
      let best = null;
      for (let c = 0; c < W; c++) {
        const d = dist[`${c},${r1}`];
        if (best == null || d > best.d) best = { c, r: r1, d };
      }
      this.exits.push(best);
      this.entries.push({ c: best.c, r: r1 + 1 });
      // dead ends (for donuts / props)
      this[`dead${b}`] = Object.entries(dist)
        .map(([k, d]) => { const [c, r] = k.split(',').map(Number); return { c, r, d }; })
        .filter((cell) => this._openings(cell.c, cell.r, north, east, r0, r1) === 1 && !(cell.c === best.c && cell.r === best.r) && !(cell.c === entry.c && cell.r === entry.r))
        .sort((a, b2) => b2.d - a.d);
    }
    this.north = north;
    this.east = east;

    // ---- build geometry ----
    const minX = -CELL / 2, maxX = (W - 1) * CELL + CELL / 2;
    const minZ = -(R - 1) * CELL - CELL / 2 - 2 * CELL, maxZ = CELL / 2;
    this.floor(minX - 1, maxX + 1, minZ - 1, maxZ + 4, this.mats.floor, 0, 3);
    this.ceiling(minX - 1, maxX + 1, minZ - 1, maxZ + 4, H, this.mats.ceil, 3);

    const segs = [];
    const segX = (r, c) => segs.push({ x: c * CELL, z: -r * CELL - CELL / 2, rot: 0 }); // wall on north edge of (r,c)
    const segZ = (r, c) => segs.push({ x: c * CELL + CELL / 2, z: -r * CELL, rot: Math.PI / 2 }); // east edge
    this.gates = [];
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < W; c++) {
        const isBandTop = r % BAND === BAND - 1;
        if (north[r][c]) {
          const ex = this.exits[Math.floor(r / BAND)];
          if (isBandTop && ex.c === c && ex.r === r) this._gateWall(r, c, Math.floor(r / BAND));
          else segX(r, c);
        }
        if (c < W - 1 && east[r][c]) segZ(r, c);
      }
      segZ(r, -1); // west boundary
      segZ(r, W - 1); // east boundary
    }
    // south boundary (row -1 north edge), except entrance at c=3 (hole wall)
    for (let c = 0; c < W; c++) if (c !== this.entries[0].c) segX(-1, c);

    const wallGeo = boxUV(CELL + T, H, T, 1.6);
    const inst = new THREE.InstancedMesh(wallGeo, this.mats.wall, segs.length);
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1);
    segs.forEach((sg, i) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), sg.rot);
      mtx.compose(new THREE.Vector3(sg.x, H / 2, sg.z), q, one);
      inst.setMatrixAt(i, mtx);
      const hl = (CELL + T) / 2, ht = T / 2;
      if (sg.rot === 0) this.addCollider(sg.x - hl, sg.x + hl, sg.z - ht, sg.z + ht);
      else this.addCollider(sg.x - ht, sg.x + ht, sg.z - hl, sg.z + hl);
    });
    inst.receiveShadow = true;
    inst.castShadow = true;
    s.add(inst);
    this.wallSegs = segs;

    this._entranceWall();
    this._finalRoom();
    this._stations();
    this._decorate();
    const dynamic = new Set([this.lastDonut, ...this.gates.map((gt) => gt.mesh), ...this.collectibles.map((c) => c.obj)]);
    batchStatic(this.scene, (o) => dynamic.has(o));
  }

  _bfs(start, north, east, r0, r1) {
    const dist = { [`${start.c},${start.r}`]: 0 };
    const q = [start];
    while (q.length) {
      const cur = q.shift();
      const d = dist[`${cur.c},${cur.r}`];
      const moves = [];
      if (cur.c < W - 1 && !east[cur.r][cur.c]) moves.push([cur.c + 1, cur.r]);
      if (cur.c > 0 && !east[cur.r][cur.c - 1]) moves.push([cur.c - 1, cur.r]);
      if (cur.r < r1 && !north[cur.r][cur.c]) moves.push([cur.c, cur.r + 1]);
      if (cur.r > r0 && !north[cur.r - 1][cur.c]) moves.push([cur.c, cur.r - 1]);
      for (const [c, r] of moves) {
        const k = `${c},${r}`;
        if (dist[k] == null) { dist[k] = d + 1; q.push({ c, r }); }
      }
    }
    return dist;
  }

  _openings(c, r, north, east, r0, r1) {
    let n = 0;
    if (c < W - 1 && !east[r][c]) n++;
    if (c > 0 && !east[r][c - 1]) n++;
    if (r < r1 && !north[r][c]) n++;
    if (r > r0 && !north[r - 1][c]) n++;
    return n;
  }

  cellPos(c, r) {
    return new THREE.Vector3(c * CELL, 0, -r * CELL);
  }

  _gateWall(r, c, band) {
    const s = this.scene;
    const x = c * CELL, z = -r * CELL - CELL / 2;
    const gw = 1.5;
    const side = (CELL + T - gw) / 2;
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(boxUV(side, H, T, 1.6), this.mats.wall);
      m.position.set(x + sx * (gw / 2 + side / 2), H / 2, z);
      s.add(m);
      this.addCollider(x + sx * (gw / 2 + side / 2) - side / 2, x + sx * (gw / 2 + side / 2) + side / 2, z - T / 2, z + T / 2);
    }
    const lintel = P.box(gw, H - 2.3, T, P.MATS.metal(), x, 2.3, z);
    s.add(lintel);
    // the gate: vertical bars
    const gate = new THREE.Group();
    const barG = new THREE.CylinderGeometry(0.035, 0.035, 2.3, 6);
    for (let i = 0; i < 8; i++) {
      const b = new THREE.Mesh(barG, P.MATS.metal());
      b.position.set(-gw / 2 + 0.1 + i * ((gw - 0.2) / 7), 1.15, 0);
      b.castShadow = true;
      gate.add(b);
    }
    for (const y of [0.3, 1.2, 2.1]) gate.add(P.box(gw, 0.06, 0.06, P.MATS.metal(), 0, y, 0));
    gate.position.set(x, 0, z);
    s.add(gate);
    const col = this.addCollider(x - gw / 2, x + gw / 2, z - 0.2, z + 0.2);
    // warning stripes on the floor
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(gw, 0.5), new THREE.MeshBasicMaterial({ map: signTexture('', { w: 128, h: 32, bg: '#ffcc00' }), color: 0xffcc00 }));
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(x, 0.01, z + 0.5);
    s.add(stripe);
    this.gates[band] = { mesh: gate, collider: col, open: false, x, z };
  }

  openGate(band, instant = false) {
    const gt = this.gates[band];
    if (!gt || gt.open) return Promise.resolve();
    gt.open = true;
    gt.collider.enabled = false;
    if (instant) { gt.mesh.position.y = 2.25; return Promise.resolve(); }
    this.game.audio.play('gate');
    return this.game.tween(1.6, (k) => { gt.mesh.position.y = 2.25 * k; });
  }

  _entranceWall() {
    const s = this.scene;
    const c = this.entries[0].c;
    const x = c * CELL, z = CELL / 2;
    const shape = new THREE.Shape();
    const hw = (CELL + T) / 2;
    shape.moveTo(-hw, 0); shape.lineTo(hw, 0); shape.lineTo(hw, H); shape.lineTo(-hw, H); shape.lineTo(-hw, 0);
    const hole = new THREE.Path();
    personOutline(1.18).forEach(([px, py], i) => (i === 0 ? hole.moveTo(px, py + 0.001) : hole.lineTo(px, py + 0.001)));
    shape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: T, bevelEnabled: false });
    const wall = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x8a7f72, roughness: 0.9 }));
    wall.position.set(x, 0, z - T / 2);
    s.add(wall);
    this.addCollider(x - hw, x + hw, z - T / 2, z + T / 2);
    // red light from the other side (the T-Rex is out there...)
    const red = new THREE.PointLight(0xff3010, 4, 6, 2);
    red.position.set(x, 1.4, z + 1.2);
    s.add(red);
    this.entranceLight = red;
    const outside = new THREE.Mesh(new THREE.PlaneGeometry(4, 3), new THREE.MeshBasicMaterial({ color: 0x1a0503 }));
    outside.position.set(x, 1.5, z + 2.5);
    outside.rotation.y = Math.PI;
    s.add(outside);
    // the eye that peeks through the hole
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 10), new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 6 }));
    eye.position.set(x, 1.9, z + 0.5);
    eye.visible = false;
    s.add(eye);
    this.holeEye = eye;
  }

  _finalRoom() {
    const s = this.scene;
    const ex = this.exits[BANDS - 1];
    const c0 = Math.max(0, Math.min(W - 3, ex.c - 1));
    const zTop = -(this.R - 1) * CELL - CELL / 2; // north edge of last band
    const x0 = c0 * CELL - CELL / 2, x1 = (c0 + 3) * CELL - CELL / 2;
    const z0 = zTop, z1 = zTop - 2 * CELL;
    const wall = (ax, az, bx, bz) => {
      const len = Math.hypot(bx - ax, bz - az);
      const m = new THREE.Mesh(boxUV(len + T, H, T, 1.6), this.mats.wall);
      m.position.set((ax + bx) / 2, H / 2, (az + bz) / 2);
      if (ax === bx) m.rotation.y = Math.PI / 2;
      s.add(m);
      this.addCollider(Math.min(ax, bx) - T / 2, Math.max(ax, bx) + T / 2, Math.min(az, bz) - T / 2, Math.max(az, bz) + T / 2);
    };
    wall(x0, z1, x1, z1);
    wall(x0, z0, x0, z1);
    wall(x1, z0, x1, z1);
    // the south side of this room is the maze's top boundary (already walls + gate)
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    this.finalRoom = { x0, x1, z0, z1, cx, cz };
    const warm = new THREE.PointLight(0xffb070, 8, 12, 2);
    warm.position.set(cx, 2.6, cz);
    s.add(warm);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), this.mats.bulb);
    bulb.position.set(cx, 2.7, cz);
    s.add(bulb);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshStandardMaterial({ map: signTexture('BREAK ROOM', { w: 512, h: 128, bg: '#2a1a12', fg: '#ffcf80', font: 'bold 64px Arial Black, Arial' }), emissive: 0xffcf80, emissiveIntensity: 0.15 }));
    sign.position.set(cx, 2.3, z1 + T / 2 + 0.02);
    s.add(sign);
    // pedestal with The Last Donut
    this.add(P.makePedestal(0.7, 1.05), cx, 0, cz - 0.6);
    this.addBoxCollider(cx, cz - 0.6, 0.8, 0.8);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.6, 20, 1, true), P.MATS.glass());
    glass.position.set(cx, 1.35, cz - 0.6);
    s.add(glass);
    const donut = P.makeDonut({ frosting: 0, glow: true, scale: 1.4 });
    donut.position.set(cx, 1.2, cz - 0.6);
    donut.rotation.x = 0.4;
    s.add(donut);
    this.lastDonut = donut;
    const spot = new THREE.SpotLight(0xffd6f0, 10, 6, 0.4, 0.5, 1.5);
    spot.position.set(cx, 2.9, cz - 0.6);
    spot.target = donut;
    s.add(spot);
    const label = P.makeWallPlaque('EXHIBIT 404', 'THE LAST DONUT\n(c. 1974)', 1.2, 0.6, { bg: '#1c1a17', titleFont: 'bold 46px Georgia, serif', bodyFont: '40px Georgia, serif' });
    label.position.set(cx, 0.6, cz - 0.6 + 0.42);
    s.add(label);
    this.beanbag = this.add(P.makeBeanbag(), x0 + 1.1, 0, z1 + 1.2);
    this.add(P.makeVendingMachine(), x1 - 0.7, 0, z1 + 0.6);
    this.addBoxCollider(x1 - 0.7, z1 + 0.6, 1, 0.8);
    this.lastDonutIt = this.addInteractable({ id: 'lastdonut', pos: new THREE.Vector3(cx, 1.2, cz - 0.6), prompt: 'Take THE LAST DONUT', enabled: true, radius: 2.2 });
    this.addUpdater((dt) => { donut.rotation.y += dt; });
  }

  _stations() {
    const s = this.scene;
    this.stations = [];
    const kinds = ['lightsout', 'morse', 'slider'];
    for (let b = 0; b < BANDS; b++) {
      const ex = this.exits[b];
      const gx = ex.c * CELL, gz = -ex.r * CELL - CELL / 2;
      // mount on the wall to the left of the gate, facing south
      const x = gx - 1.15, z = gz + T / 2 + 0.02;
      const g = new THREE.Group();
      const kind = kinds[b];
      let lamp = null;
      if (kind === 'lightsout') {
        g.add(P.box(0.7, 0.9, 0.18, P.mat('fusebox', { color: 0x6a7480, metalness: 0.5, roughness: 0.5 }), 0, 1.0, 0.09));
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.25), new THREE.MeshBasicMaterial({ map: signTexture('⚡ FUSES', { w: 256, h: 128, bg: '#ffcc00', fg: '#111', font: 'bold 50px Arial Black, Arial' }) }));
        sign.position.set(0, 1.7, 0.19);
        g.add(sign);
        for (let i = 0; i < 9; i++) {
          const led = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: i % 3 === 1 ? 0x44ff66 : 0xff3333 }));
          led.position.set(-0.18 + (i % 3) * 0.18, 1.2 - Math.floor(i / 3) * 0.18, 0.19);
          g.add(led);
        }
      } else if (kind === 'morse') {
        g.add(P.box(0.9, 0.06, 0.5, P.MATS.darkWood(), 0, 0.95, 0.25));
        g.add(P.box(0.06, 0.95, 0.06, P.MATS.darkWood(), -0.38, 0, 0.45));
        g.add(P.box(0.06, 0.95, 0.06, P.MATS.darkWood(), 0.38, 0, 0.45));
        const tg = P.makeTelegraph();
        tg.group.children[0].visible = false; // hide its desk
        tg.group.position.set(0.1, 0.2, 0.25);
        tg.group.scale.setScalar(1);
        g.add(tg.group);
        lamp = tg;
        const chart = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.9), new THREE.MeshStandardMaterial({ map: signTexture('MORSE\nCODE\n.- -...', { w: 256, h: 330, bg: '#efe6cf', fg: '#222', font: 'bold 44px Courier New, monospace' }) }));
        chart.position.set(0, 1.8, 0.02);
        g.add(chart);
      } else {
        const frame = P.box(1.0, 1.2, 0.08, P.MATS.brass(), 0, 0.9, 0.04);
        g.add(frame);
        const [pc, px] = makeCanvas(256, 300);
        px.fillStyle = '#222'; px.fillRect(0, 0, 256, 300);
        for (let i = 0; i < 9; i++) { px.fillStyle = `hsl(${i * 40},50%,50%)`; px.fillRect((i % 3) * 85 + 2, Math.floor(i / 3) * 100 + 2, 81, 96); }
        px.fillStyle = '#fff'; px.font = 'bold 30px Arial'; px.textAlign = 'center'; px.fillText('???', 128, 160);
        const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.1), new THREE.MeshStandardMaterial({ map: canvasTexture(pc) }));
        poster.position.set(0, 1.5, 0.09);
        g.add(poster);
      }
      g.position.set(x, 0, z);
      s.add(g);
      this.addBoxCollider(x, z + 0.25, 0.8, 0.5);
      const light = new THREE.PointLight(kind === 'morse' ? 0xffaa33 : kind === 'lightsout' ? 0x66ff99 : 0xff77cc, 3, 5, 2);
      light.position.set(x, 2.4, z + 0.8);
      s.add(light);
      const it = this.addInteractable({ id: 'station' + b, pos: new THREE.Vector3(x, 1.2, z + 0.1), prompt: ['Fix the fuse box', 'Use the telegraph', 'Restore the poster'][b], enabled: true, radius: 2.3 });
      this.stations.push({ kind, it, lamp, light, band: b, pos: new THREE.Vector3(x, 0, z + 1.2) });
    }
  }

  _decorate() {
    const s = this.scene, rng = this.rng;
    // pipes along the ceiling
    for (let i = 0; i < 4; i++) {
      const z = -i * CELL * 4 - CELL;
      const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, W * CELL + 2, 8), this.mats.pipe);
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set((W - 1) * CELL / 2, H - 0.2, z);
      s.add(pipe);
    }
    // hanging bulbs (just glow, no light)
    for (let i = 0; i < 18; i++) {
      const c = Math.floor(rng() * W), r = Math.floor(rng() * this.R);
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), this.mats.bulb);
      b.position.set(c * CELL, H - 0.45, -r * CELL);
      s.add(b);
      const wire = P.box(0.01, 0.4, 0.01, P.MATS.black(), c * CELL, H - 0.42, -r * CELL);
      s.add(wire);
    }
    // donuts and props in dead ends
    this.donutCells = [];
    for (let b = 0; b < BANDS; b++) {
      const dead = this[`dead${b}`];
      dead.slice(0, 2).forEach((cell, i) => {
        const p = this.cellPos(cell.c, cell.r);
        this.addCollectible(`maze_${b}_${i}`, p.x, 0.9, p.z, (b * 2 + i) % 5);
        this.donutCells.push(cell);
      });
      dead.slice(2, 6).forEach((cell, i) => {
        const p = this.cellPos(cell.c, cell.r);
        const pick = (b * 3 + i) % 4;
        let obj;
        if (pick === 0) obj = P.makeSheetStatue(b * 10 + i);
        else if (pick === 1) obj = P.makeCrate(0.9);
        else if (pick === 2 && b === 1) obj = P.makeSarcophagus();
        else obj = P.makeSheetStatue(b * 7 + i + 3);
        obj.position.add(new THREE.Vector3(p.x, 0, p.z));
        s.add(obj);
        this.addBoxCollider(p.x, p.z, 0.9, 0.9);
      });
    }
    // crates scattered along walls (non-blocking, small)
    for (let i = 0; i < 16; i++) {
      const c = Math.floor(rng() * W), r = Math.floor(rng() * this.R);
      const p = this.cellPos(c, r);
      const cr = P.makeCrate(0.5);
      cr.position.x = p.x + (rng() < 0.5 ? -1 : 1) * 1.15;
      cr.position.z = p.z + (rng() - 0.5) * 1.6;
      cr.rotation.y = rng();
      s.add(cr);
    }
    // eye-peek holes on the outer walls
    this.peeks = [];
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    for (let b = 0; b < BANDS; b++) {
      const r = b * BAND + 1 + Math.floor(rng() * 3);
      const west = rng() < 0.5;
      const x = west ? -CELL / 2 + T / 2 + 0.01 : (W - 1) * CELL + CELL / 2 - T / 2 - 0.01;
      const z = -r * CELL + (rng() - 0.5);
      const hole = new THREE.Mesh(new THREE.CircleGeometry(0.28, 14), holeMat);
      hole.position.set(x, 1.7, z);
      hole.rotation.y = west ? Math.PI / 2 : -Math.PI / 2;
      hole.scale.set(1.4, 0.8, 1);
      s.add(hole);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 6 }));
      eye.position.set(x + (west ? 0.02 : -0.02), 1.7, z);
      eye.visible = false;
      s.add(eye);
      this.peeks.push({ x: west ? x + 1.5 : x - 1.5, z, eye, done: false });
    }
  }

  // ---------------------------------------------------------------- explorer's map
  _mapCell(px, pz) {
    return { c: Math.round(px / CELL), r: Math.round(-pz / CELL) };
  }

  revealAround(px, pz) {
    if (!this.seen) this.seen = new Set();
    const { c, r } = this._mapCell(px, pz);
    this.seen.add(`${c},${r}`);
    // peek into open neighbors so you can see where passages go
    if (r >= 0 && r < this.R && c >= 0 && c < W) {
      if (c < W - 1 && !this.east[r][c]) this.seen.add(`${c + 1},${r}`);
      if (c > 0 && !this.east[r][c - 1]) this.seen.add(`${c - 1},${r}`);
      if (r < this.R - 1 && !this.north[r][c]) this.seen.add(`${c},${r + 1}`);
      if (r > 0 && !this.north[r - 1][c]) this.seen.add(`${c},${r - 1}`);
    }
  }

  drawMap(ctx, player) {
    const S = 12, pad = 8;
    const rows = this.R + 2;
    const cw = ctx.canvas.width, ch = ctx.canvas.height;
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillStyle = 'rgba(239,228,200,0.92)';
    ctx.fillRect(0, 0, cw, ch);
    const X = (c) => pad + c * S, Y = (r) => pad + (rows - 1 - r) * S;
    const fr = this.finalRoom;
    const fc0 = Math.round((fr.x0 + CELL / 2) / CELL);
    const seen = this.seen || new Set();
    // explored floor
    for (const k of seen) {
      const [c, r] = k.split(',').map(Number);
      if (c < 0 || c >= W || r < 0 || r >= rows) continue;
      ctx.fillStyle = r >= this.R ? '#ffd9ec' : '#fffaf0';
      ctx.fillRect(X(c), Y(r), S, S);
    }
    ctx.strokeStyle = '#3b2a1a';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    const line = (x1, y1, x2, y2) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };
    for (const k of seen) {
      const [c, r] = k.split(',').map(Number);
      if (c < 0 || c >= W || r < 0) continue;
      const x = X(c), y = Y(r);
      if (r >= this.R) {
        // break room outline
        if (c === fc0) line(x, y, x, y + S);
        if (c === fc0 + 2) line(x + S, y, x + S, y + S);
        if (r === this.R + 1) line(x, y, x + S, y);
        continue;
      }
      if (this.north[r][c]) {
        const isGate = this.exits.some((e) => e.c === c && e.r === r);
        if (isGate) {
          const open = this.gates[Math.floor(r / BAND)]?.open;
          ctx.strokeStyle = open ? '#2fbf71' : '#ff8a00';
          ctx.lineWidth = 3;
          line(x, y, x + S, y);
          ctx.strokeStyle = '#3b2a1a';
          ctx.lineWidth = 2;
        } else line(x, y, x + S, y);
      }
      if (c === W - 1 || this.east[r][c]) line(x + S, y, x + S, y + S);
      if (c === 0) line(x, y, x, y + S);
      if (r === 0 && c !== this.entries[0].c) line(x, y + S, x + S, y + S);
    }
    // stations & donuts you've seen
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.stations.forEach((st, b) => {
      const ex = this.exits[b];
      if (!seen.has(`${ex.c},${ex.r}`)) return;
      ctx.fillText(['⚡', '📟', '🖼️'][b], X(ex.c) + S / 2, Y(ex.r) + S / 2);
    });
    for (const col of this.collectibles) {
      if (col.taken) continue;
      const { c, r } = this._mapCell(col.obj.position.x, col.obj.position.z);
      if (!seen.has(`${c},${r}`)) continue;
      ctx.fillStyle = '#ff4f9a';
      ctx.beginPath(); ctx.arc(X(c) + S / 2, Y(r) + S / 2, 3, 0, 7); ctx.fill();
    }
    if (seen.has(`${fc0 + 1},${this.R}`)) ctx.fillText('🍩', X(fc0 + 1) + S / 2, Y(this.R + 1) + S / 2);
    // you
    const px = pad + (player.pos.x / CELL + 0.5) * S, py = pad + (rows - 1 + player.pos.z / CELL + 0.5) * S;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-player.yaw);
    ctx.fillStyle = '#e8262b';
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(4, 4); ctx.lineTo(0, 2); ctx.lineTo(-4, 4); ctx.closePath(); ctx.fill();
    ctx.restore();
  }

  spawnFor(stage) {
    // stage 0: entrance; 1..3: after puzzle N solved
    if (stage === 0) {
      const p = this.cellPos(this.entries[0].c, 0);
      return { x: p.x, z: p.z + 0.6, yaw: 0 };
    }
    const st = this.stations[stage - 1];
    return { x: st.pos.x + 0.4, z: st.pos.z + 0.4, yaw: 0 };
  }
}
