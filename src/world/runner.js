import * as THREE from 'three';
import { Level, boxUV, planeUV } from './level.js';
import { tex, paintingTexture, signTexture } from './textures.js';
import { surface } from './surfaces.js';
import * as P from './props.js';
import { TRex, buildSkull, trexMats } from './trex.js';
import { makeGuard } from './people.js';
import { mulberry32, damp, clamp, lerp } from '../core/util.js';
import { batchStatic } from './batch.js';

// "Subway Surfers, but it's a museum and a skeleton T-Rex wants you."

export const LANES = [-2.2, 0, 2.2];
const CHUNK = 24;
const NCHUNK = 8;
export const RUN_LENGTH = 880;

// A person-shaped outline (used for the hole in the wall). Units: meters.
export function personOutline(scale = 1.15) {
  const pts = [
    [-0.45, 0], [-0.2, 0], [-0.07, 0.78], [0.07, 0.78], [0.2, 0], [0.45, 0],
    [0.26, 0.95], [0.3, 1.38], [0.66, 0.98], [0.79, 1.1], [0.38, 1.66], [0.12, 1.72],
  ];
  for (let i = 1; i < 12; i++) {
    const a = -0.55 + (i / 12) * (Math.PI + 1.1);
    pts.push([Math.cos(a) * 0.23, 1.92 + Math.sin(a) * 0.23]);
  }
  pts.push([-0.12, 1.72], [-0.38, 1.66], [-0.79, 1.1], [-0.66, 0.98], [-0.3, 1.38], [-0.26, 0.95]);
  return pts.map(([x, y]) => [x * scale, y * scale]);
}

export class Runner extends Level {
  constructor(game) {
    super(game);
    const s = this.scene;
    // a well-lit gallery so you can see every obstacle coming (the haze ahead is lighter than black)
    s.background = new THREE.Color(0x231d30);
    s.fog = new THREE.Fog(0x231d30, 40, 150);
    this.ownsCamera = true;
    this.surface = 'carpet';
    this.rng = mulberry32(1974);

    s.add(new THREE.HemisphereLight(0xc8d0ff, 0x5a4434, 1.8));
    s.add(new THREE.AmbientLight(0xffffff, 0.4));
    this.headLight = new THREE.PointLight(0xffe2b8, 70, 50, 1.5);
    s.add(this.headLight);
    // lights the next stretch of hallway so obstacles are easy to read
    this.aheadLight = new THREE.PointLight(0xfff0d8, 90, 60, 1.5);
    s.add(this.aheadLight);
    this.alarm = new THREE.PointLight(0xff2020, 0, 30, 1.5);
    s.add(this.alarm);

    this.mats = {
      floor: (() => { const t = surface('marbleFloor'); return new THREE.MeshStandardMaterial({ map: t.map, bumpMap: t.bump, bumpScale: 1, roughness: 0.25, metalness: 0.05 }); })(),
      carpet: new THREE.MeshStandardMaterial({ map: tex('carpet'), roughness: 0.9 }),
      wall: (() => { const t = surface('ashlar'); return new THREE.MeshStandardMaterial({ map: t.map, bumpMap: t.bump, bumpScale: 1.2, color: 0xc4b6d2, roughness: 0.8 }); })(),
      ceil: new THREE.MeshStandardMaterial({ color: 0x2c2634, roughness: 1 }),
      lamp: new THREE.MeshBasicMaterial({ color: 0xfff0c8 }),
      frame: new THREE.MeshStandardMaterial({ color: 0xc9a24a, metalness: 0.8, roughness: 0.35 }),
    };
    this.paintMats = [];
    for (let i = 0; i < 8; i++) this.paintMats.push(new THREE.MeshStandardMaterial({ map: paintingTexture(500 + i, i % 3 === 0 ? 'portrait' : 'landscape'), roughness: 0.7 }));

    this.chunks = [];
    for (let i = 0; i < NCHUNK; i++) {
      const c = this._chunk(i);
      c.position.z = -i * CHUNK;
      s.add(c);
      this.chunks.push(c);
    }

    // the guard
    this.guard = makeGuard();
    s.add(this.guard.group);
    this.guard.group.rotation.y = Math.PI;
    this.guard.setMode('run', 8);
    const fl = P.makeFlashlightModel();
    fl.rotation.x = Math.PI / 2;
    fl.scale.setScalar(1.3);
    this.guard.attachToHand(fl, 1);

    // blob shadow of the T-Rex looming
    const [sc, sx] = [document.createElement('canvas'), null];
    sc.width = sc.height = 128;
    const sctx = sc.getContext('2d');
    const grad = sctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(0,0,0,0.85)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 128, 128);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
    this.blob.rotation.x = -Math.PI / 2;
    this.blob.position.y = 0.03;
    s.add(this.blob);
    void sx;

    // the T-Rex (full body, used in intro/outro)
    this.trex = new TRex();
    this.trex.setAlive(true);
    // The T-Rex lives on layer 1: the main camera sees it in the intro/outro,
    // and during the run only the rear-view mirror camera does.
    this.trex.group.traverse((o) => o.layers.set(1));
    this.trex.eyeLight?.layers.enableAll(); // keep the light state identical for both cameras
    this.mirrorCam = new THREE.PerspectiveCamera(64, 2.4, 0.1, 90);
    this.mirrorCam.layers.enable(1);
    this.mirrorEl = document.getElementById('mirror');
    game.camera.layers.enable(1);
    this.trex.group.rotation.y = Math.PI;
    s.add(this.trex.group);

    // lunge head (attached to camera when you stumble)
    const sk = buildSkull(trexMats());
    for (const e of sk.eyes) e.visible = true;
    this.lunge = new THREE.Group();
    const lungeInner = new THREE.Group();
    lungeInner.rotation.y = Math.PI / 2 + 0.35;
    lungeInner.add(sk.head);
    this.lunge.add(lungeInner);
    this.lungeJaw = sk.jaw;
    this.lungeHead = sk.head;
    this.lunge.visible = false;
    this.lungeT = -1;
    this.trexBehind = 6;
    this.hideTrex = false;

    // the wall with the guard-shaped hole
    this._buildWall();

    // sparkle bursts when you grab donuts
    const [sc2] = [document.createElement('canvas')];
    sc2.width = sc2.height = 32;
    const sx2 = sc2.getContext('2d');
    const sg2 = sx2.createRadialGradient(16, 16, 0, 16, 16, 16);
    sg2.addColorStop(0, 'rgba(255,255,255,1)');
    sg2.addColorStop(0.3, 'rgba(255,150,210,0.9)');
    sg2.addColorStop(1, 'rgba(255,100,180,0)');
    sx2.fillStyle = sg2;
    sx2.fillRect(0, 0, 32, 32);
    this.sparkTex = new THREE.CanvasTexture(sc2);
    this.sparks = [];
    for (let i = 0; i < 48; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.sparkTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
      sp.visible = false;
      sp.scale.setScalar(0.35);
      this.scene.add(sp);
      this.sparks.push({ s: sp, v: new THREE.Vector3(), life: 0 });
    }
    this.sparkIdx = 0;
    this.stepT = 0;
    this.wasAir = false;
    this.roll = 0;

    this.obstacles = [];
    this.donuts = [];
    this.plan = this._plan();
    this.planIdx = 0;
    this.debris = [];

    this.st = {
      phase: 'idle', z: 0, x: 0, lane: 1, prevLane: 1, y: 0, vy: 0, slide: 0, speed: 0,
      danger: 0.25, invuln: 0, slow: 0, stompT: 0, t: 0, donutCount: 0, arrowShown: false, alarmT: 0,
    };
    this.camPos = new THREE.Vector3();
    this.camLook = new THREE.Vector3();
  }

  _chunk(i) {
    const g = new THREE.Group();
    const m = this.mats;
    const floor = new THREE.Mesh(planeUV(10, CHUNK, 4), m.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -CHUNK / 2;
    floor.receiveShadow = true;
    g.add(floor);
    const carpet = new THREE.Mesh(new THREE.PlaneGeometry(7.2, CHUNK), m.carpet);
    carpet.material.map.repeat.set(1, CHUNK / 7.2);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.set(0, 0.012, -CHUNK / 2);
    g.add(carpet);
    for (const sx of [-1, 1]) {
      const wall = new THREE.Mesh(boxUV(0.4, 7, CHUNK, 3), m.wall);
      wall.position.set(sx * 5.2, 3.5, -CHUNK / 2);
      g.add(wall);
      for (let k = 0; k < 3; k++) {
        const pz = -4 - k * 8;
        const pil = P.box(0.5, 7, 0.7, P.MATS.stoneWhite(), sx * 4.9, 0, pz);
        g.add(pil);
        if (k < 2) {
          const pm = this.paintMats[(i * 2 + k + (sx > 0 ? 3 : 0)) % this.paintMats.length];
          const isPortrait = pm.map.image.height > 200;
          const w = isPortrait ? 1.6 : 2.6, h = isPortrait ? 2.0 : 1.6;
          const painting = new THREE.Mesh(new THREE.PlaneGeometry(w, h), pm);
          painting.position.set(sx * 4.98, 3, pz - 4);
          painting.rotation.y = -sx * Math.PI / 2;
          g.add(painting);
          const fr = P.box(0.08, h + 0.2, w + 0.2, m.frame, sx * 5.0, 3 - (h + 0.2) / 2, pz - 4);
          g.add(fr);
          const sconce = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), m.lamp);
          sconce.position.set(sx * 4.85, 4.6, pz - 4);
          g.add(sconce);
        }
      }
    }
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(10.4, CHUNK), m.ceil);
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set(0, 7, -CHUNK / 2);
    g.add(ceil);
    for (let k = 0; k < 2; k++) {
      const lamp = P.box(2.4, 0.08, 0.5, m.lamp, 0, 6.9, -6 - k * 12);
      g.add(lamp);
    }
    batchStatic(g);
    return g;
  }

  _buildWall() {
    const shape = new THREE.Shape();
    shape.moveTo(-5.4, 0); shape.lineTo(5.4, 0); shape.lineTo(5.4, 7); shape.lineTo(-5.4, 7); shape.lineTo(-5.4, 0);
    const hole = new THREE.Path();
    const pts = personOutline(1.18);
    // lift the hole slightly so its feet sit on the floor
    pts.forEach(([x, y], i) => (i === 0 ? hole.moveTo(LANES[2] + x, y + 0.001) : hole.lineTo(LANES[2] + x, y + 0.001)));
    hole.closePath();
    shape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.6, bevelEnabled: false });
    const wall = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x8a7f72, roughness: 0.9 }));
    wall.material.map.repeat.set(0.25, 0.25);
    wall.position.z = -RUN_LENGTH - 0.6;
    wall.castShadow = wall.receiveShadow = true;
    this.scene.add(wall);
    this.wall = wall;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(4, 0.9), new THREE.MeshStandardMaterial({ map: signTexture('ARCHIVES — STAFF ONLY', { w: 1024, h: 200, bg: '#a01818', fg: '#fff', font: 'bold 84px Arial Black, Arial' }) }));
    sign.position.set(-1, 4.8, -RUN_LENGTH + 0.02);
    this.scene.add(sign);
    // darkness beyond the hole
    const dark = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    dark.position.set(0, 3.5, -RUN_LENGTH - 5);
    this.scene.add(dark);
    // big "GO RIGHT" arrow painted on the right wall
    const arrow = new THREE.Mesh(new THREE.PlaneGeometry(6, 2), new THREE.MeshBasicMaterial({ map: signTexture('GO RIGHT ➜', { w: 1024, h: 340, bg: '#ffcc4d', fg: '#111', font: 'bold 170px Arial Black, Arial' }), toneMapped: false, side: THREE.DoubleSide }));
    arrow.position.set(0, 5.5, -RUN_LENGTH + 30);
    this.scene.add(arrow);
    this.arrow3d = arrow;
  }

  // Pre-plan the obstacle course (same every attempt — learnable!)
  _plan() {
    const r = this.rng;
    const rows = [];
    let z = -70;
    while (z > -(RUN_LENGTH - 90)) {
      const prog = -z / RUN_LENGTH;
      const kind = r();
      const row = { z, items: [] };
      const free = Math.floor(r() * 3);
      if (kind < 0.3) {
        // two tall blockers, one free lane
        for (let l = 0; l < 3; l++) if (l !== free) row.items.push({ type: r() < 0.5 ? 'case' : r() < 0.5 ? 'statue' : 'cart', lane: l });
        row.donutLane = free;
      } else if (kind < 0.48) {
        for (let l = 0; l < 3; l++) row.items.push({ type: 'rope', lane: l });
        row.donutArc = Math.floor(r() * 3);
      } else if (kind < 0.64) {
        for (let l = 0; l < 3; l++) row.items.push({ type: 'banner', lane: l });
        row.donutLane = free;
      } else if (kind < 0.8) {
        row.items.push({ type: 'case', lane: free });
        const o = (free + 1 + Math.floor(r() * 2)) % 3;
        row.items.push({ type: r() < 0.5 ? 'bench' : 'column', lane: o });
        row.donutArc = o;
      } else {
        const types = ['rope', 'banner', 'case'];
        const shift = Math.floor(r() * 3);
        for (let l = 0; l < 3; l++) row.items.push({ type: types[(l + shift) % 3], lane: l });
        row.donutLane = (2 - shift + 3) % 3;
      }
      rows.push(row);
      z -= lerp(30, 19, prog) + r() * 6;
    }
    return rows;
  }

  _spawnRow(row) {
    for (const it of row.items) {
      const obj = this._makeObstacle(it.type);
      obj.mesh.position.set(LANES[it.lane], 0, row.z);
      this.scene.add(obj.mesh);
      this.obstacles.push({ ...obj, lane: it.lane, z: row.z, type: it.type, hit: false });
    }
    if (row.donutLane != null) {
      for (let k = 0; k < 5; k++) this._spawnDonut(LANES[row.donutLane], 0.9, row.z + 14 - k * 2.4);
    }
    if (row.donutArc != null) {
      for (let k = 0; k < 5; k++) {
        const t = k / 4;
        this._spawnDonut(LANES[row.donutArc], 0.9 + Math.sin(t * Math.PI) * 1.3, row.z + 4 - t * 8);
      }
    }
  }

  _burst(pos) {
    for (let i = 0; i < 8; i++) {
      const sp = this.sparks[this.sparkIdx++ % this.sparks.length];
      sp.s.position.copy(pos);
      sp.s.visible = true;
      sp.v.set((Math.random() - 0.5) * 5, 2 + Math.random() * 4, (Math.random() - 0.5) * 3 - this.st.speed * 0.6);
      sp.life = 0.5 + Math.random() * 0.3;
    }
  }

  _spawnDonut(x, y, z) {
    const d = P.makeDonut({ frosting: Math.floor(Math.random() * 5), glow: true, scale: 1.6 });
    d.rotation.x = Math.PI / 2;
    d.position.set(x, y, z);
    this.scene.add(d);
    this.donuts.push({ obj: d, taken: false });
  }

  _makeObstacle(type) {
    const g = new THREE.Group();
    let y0 = 0, y1 = 2, d = 1.0, w = 1.7;
    if (type === 'case') {
      const egg = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), new THREE.MeshStandardMaterial({ color: 0xd9cfa8, roughness: 0.6 }));
      egg.scale.y = 1.3;
      egg.position.y = 0.36;
      const inner = new THREE.Group();
      inner.add(egg);
      const c = P.makeDisplayCase(1.6, 1.1, 1.0, inner);
      g.add(c);
      y1 = 2.1; d = 1.0;
    } else if (type === 'statue') {
      g.add(P.makeBust(null));
      y1 = 1.9; d = 0.9; w = 1.0;
    } else if (type === 'cart') {
      g.add(P.box(1.4, 1.1, 0.9, P.mat('cart', { color: 0xf2c12e, roughness: 0.5 }), 0, 0.15, 0));
      const mop = P.box(0.06, 1.6, 0.06, P.MATS.wood(), 0.4, 0.2, 0.2);
      mop.rotation.z = 0.2;
      g.add(mop);
      g.add(new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.03, 6, 12), P.MATS.black()).translateY(0.12).translateX(-0.5));
      const signM = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.5), new THREE.MeshStandardMaterial({ map: signTexture('WET FLOOR', { w: 256, h: 140, bg: '#ffd400', fg: '#111', font: 'bold 44px Arial Black, Arial' }) }));
      signM.position.set(0, 0.8, 0.46);
      g.add(signM);
      y1 = 1.4; d = 0.9; w = 1.5;
    } else if (type === 'rope') {
      const a = P.makeStanchion(), b = P.makeStanchion();
      a.position.x = -0.95; b.position.x = 0.95;
      g.add(a, b);
      const rope = P.makeRope(1.9);
      rope.position.x = -0.95;
      g.add(rope);
      y1 = 1.0; d = 0.3; w = 2.0;
    } else if (type === 'bench') {
      const b = P.makeBench(1.9);
      g.add(b);
      y1 = 0.55; d = 0.5; w = 1.9;
    } else if (type === 'column') {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 2.0, 16), P.MATS.stoneWhite());
      c.rotation.z = Math.PI / 2;
      c.position.y = 0.38;
      c.castShadow = true;
      g.add(c);
      y1 = 0.76; d = 0.76; w = 2.0;
    } else if (type === 'banner') {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.7), new THREE.MeshStandardMaterial({ map: signTexture('EXHIBIT\nCLOSED', { w: 300, h: 240, bg: '#14243d', fg: '#ffcc4d', font: 'bold 62px Arial Black, Arial', border: '#ffcc4d' }), side: THREE.DoubleSide }));
      sign.position.y = 2.25;
      g.add(sign);
      for (const sx of [-0.9, 0.9]) g.add(P.box(0.03, 3.6, 0.03, P.MATS.metal(), sx, 3.1, 0));
      y0 = 1.3; y1 = 3.6; d = 0.3; w = 2.1;
    }
    P.shadowAll(g, true, false);
    batchStatic(g);
    return { mesh: g, y0, y1, d, w };
  }

  // ---------------------------------------------------------------- control
  start() {
    const st = this.st;
    st.phase = 'intro';
    st.t = 0;
    this.game.camera.add(this.lunge);
    this.lunge.position.set(0, 2.4, -2.8);
    this.scene.add(this.game.camera);
    return new Promise((resolve) => (this.resolve = resolve));
  }

  beginRun() {
    this.game.camera.layers.disable(1);
    this.mirrorEl?.classList.remove('off');
    this.st.phase = 'run';
    this.st.speed = 13;
  }

  update(dt) {
    super.update(dt);
    const g = this.game, st = this.st, inp = g.input;
    st.t += dt;
    const cam = g.camera;

    // spawn planned rows ahead
    while (this.planIdx < this.plan.length && this.plan[this.planIdx].z > st.z - 130) {
      this._spawnRow(this.plan[this.planIdx]);
      this.planIdx++;
    }
    // recycle chunks
    for (const c of this.chunks) {
      if (c.position.z - CHUNK > st.z + 30) c.position.z -= NCHUNK * CHUNK;
      c.visible = c.position.z > -RUN_LENGTH - CHUNK;
    }

    if (st.phase === 'intro') {
      st.speed = 9;
      st.z -= st.speed * dt;
      this.trex.group.visible = !this.hideTrex;
      this.trex.group.position.set(0.5, 0, st.z + this.trexBehind);
      this.trex.setMode('run', 9);
    } else if (st.phase === 'run') {
      const prog = -st.z / RUN_LENGTH;
      const target = lerp(13.5, 20, clamp(prog, 0, 1)) * (st.slow > 0 ? 0.6 : 1);
      st.speed = damp(st.speed, target, 2, dt);
      st.slow -= dt;
      st.z -= st.speed * dt;
      // input
      const left = inp.wasPressed('KeyA', 'ArrowLeft', 'SwipeLeft');
      const right = inp.wasPressed('KeyD', 'ArrowRight', 'SwipeRight');
      const up = inp.wasPressed('KeyW', 'ArrowUp', 'Space', 'SwipeUp');
      const down = inp.wasPressed('KeyS', 'ArrowDown', 'SwipeDown');
      if (left && st.lane > 0) { st.prevLane = st.lane; st.lane--; g.audio.play('whoosh', { vol: 0.4 }); }
      if (right && st.lane < 2) { st.prevLane = st.lane; st.lane++; g.audio.play('whoosh', { vol: 0.4 }); }
      if (up && st.y <= 0.001) { st.vy = 10.5; st.slide = 0; g.audio.play('whoosh', { vol: 0.5 }); }
      if (down) {
        if (st.y > 0.05) st.vy = -18;
        st.slide = 0.75;
      }
      st.danger = clamp(st.danger - dt * 0.045, 0, 1);
      st.invuln -= dt;
      // T-Rex stomps
      st.stompT -= dt;
      if (st.stompT <= 0) {
        st.stompT = lerp(0.62, 0.36, st.danger);
        g.audio.play('stomp', { vol: 0.25 + st.danger * 0.6 });
        g.shake(0.05 + st.danger * 0.18, 0.25);
      }
      if (Math.random() < dt * 0.08) g.audio.play('growl', { vol: 0.5 + st.danger });
      this._collisions();
      // the end
      if (!st.arrowShown && st.z < -(RUN_LENGTH - 95)) {
        st.arrowShown = true;
        g.hud.showArrow(true);
        g.audio.play('alarm', { n: 2 });
      }
      if (st.z < -RUN_LENGTH + 1.2) {
        if (st.lane === 2 && Math.abs(st.x - LANES[2]) < 0.6) this._escape();
        else this._caught(true);
      }
      g.hud.setChase(clamp(-st.z / RUN_LENGTH, 0, 1), st.danger, st.donutCount);
    } else if (st.phase === 'escape') {
      const nz = damp(st.z, -RUN_LENGTH - 3.4, 2.6, dt);
      st.speed = (st.z - nz) / Math.max(dt, 1e-4);
      st.z = nz;
    }

    // physics
    st.vy -= 32 * dt;
    st.y = Math.max(0, st.y + st.vy * dt);
    if (st.y === 0) st.vy = Math.max(0, st.vy);
    const inAir = st.y > 0.02;
    if (this.wasAir && !inAir && st.phase === 'run') { g.audio.play('thud', { vol: 0.35 }); g.shake(0.06, 0.15); }
    this.wasAir = inAir;
    if (st.phase === 'run' && !inAir) {
      this.stepT += dt * st.speed;
      if (this.stepT > 3.4) { this.stepT = 0; g.audio.play('step', { surface: 'carpet', vol: 0.8 }); }
    }
    for (const sp of this.sparks) {
      if (sp.life <= 0) continue;
      sp.life -= dt;
      sp.v.y -= 9 * dt;
      sp.s.position.addScaledVector(sp.v, dt);
      sp.s.material.opacity = Math.min(1, sp.life * 2.5);
      if (sp.life <= 0) sp.s.visible = false;
    }
    if (st.phase === 'run') {
      const fast = (st.speed - 13) / 7;
      g.hud.setSpeedLines(0.15 + fast * 0.55);
      cam.fov = damp(cam.fov, 70 + fast * 9, 3, dt);
      cam.updateProjectionMatrix();
    } else g.hud.setSpeedLines(0);
    this.roll = damp(this.roll, (LANES[st.lane] - st.x) * -0.035, 8, dt);
    st.slide -= dt;
    st.x = damp(st.x, LANES[st.lane], 14, dt);

    // guard pose
    const guard = this.guard;
    guard.group.position.set(st.x, st.y, st.z);
    if (st.phase === 'escape' && st.speed < 1) guard.setMode('idle');
    else if (st.y > 0.05) guard.setMode('jump');
    else if (st.slide > 0) guard.setMode('slide');
    else guard.setMode('run', st.speed);
    guard.group.visible = st.invuln <= 0 || Math.floor(st.t * 12) % 2 === 0;
    guard.update(dt);

    // T-Rex blob shadow looming over you
    const bs = 1.5 + st.danger * 5;
    this.blob.scale.set(bs, bs * 1.6, 1);
    this.blob.position.set(st.x * 0.5, 0.03, st.z + 3 - st.danger * 2.5);
    this.blob.material.opacity = st.phase === 'run' ? 0.25 + st.danger * 0.55 : 0;

    // donuts
    for (const d of this.donuts) {
      if (d.taken) continue;
      d.obj.rotation.z += dt * 3;
      if (Math.abs(d.obj.position.z - st.z) < 0.9 && Math.abs(d.obj.position.x - st.x) < 0.9 && Math.abs(d.obj.position.y - (st.y + 0.9)) < 1.1) {
        d.taken = true;
        this.scene.remove(d.obj);
        st.donutCount++;
        g.meter.add(4);
        this._burst(d.obj.position);
        g.audio.play('coin', { pitch: (st.donutCount % 5) * 2 });
      }
      if (d.obj.position.z > st.z + 12) { d.taken = true; this.scene.remove(d.obj); }
    }
    // cleanup obstacles behind
    this.obstacles = this.obstacles.filter((o) => {
      if (o.z > st.z + 15) { this.scene.remove(o.mesh); return false; }
      return true;
    });
    // flying debris from smashed stuff
    for (const db of this.debris) {
      db.v.y -= 20 * dt;
      db.m.position.addScaledVector(db.v, dt);
      db.m.rotation.x += dt * 6;
      if (db.m.position.y < 0) { db.m.position.y = 0; db.v.multiplyScalar(0.4); }
    }

    // lights
    this.headLight.position.set(st.x * 0.4, 5.5, st.z - 7);
    this.aheadLight.position.set(0, 6, st.z - 30);
    st.alarmT += dt;
    this.alarm.position.set(0, 6, st.z + 6);
    this.alarm.intensity = st.phase === 'run' ? (Math.sin(st.alarmT * 8) > 0 ? 25 : 4) : 0;

    // camera
    if (this.camMode === 'front') {
      this.camPos.set(2.3, 1.7, st.z - 6.8);
      this.camLook.set(0, 3.1, st.z + 4);
    } else if (this.camMode === 'chase') {
      this.camPos.set(st.x * 0.55, 3.3 + st.y * 0.3, st.z + 6.4);
      this.camLook.set(st.x * 0.8, 1.2 + st.y * 0.5, st.z - 7);
    }
    if (this.camMode !== 'free') {
      if (this.camBlend != null) {
        cam.position.lerpVectors(this.camFrom, this.camPos, this.camBlend);
        this._look.lerpVectors(this.lookFrom, this.camLook, this.camBlend);
        cam.lookAt(this._look);
      } else {
        cam.position.copy(this.camPos);
        cam.lookAt(this.camLook);
        if (this.camMode === 'chase') cam.rotateZ(this.roll);
      }
    }

    // T-Rex in run phase stays out of shot
    if (st.phase === 'run') {
      // in the run, the T-Rex is drawn only in the rear-view mirror, closing in as danger rises
      const tr = this.trex.group;
      tr.visible = true;
      tr.position.set(st.x * 0.5, 0, st.z + lerp(17, 5.2, st.danger));
      tr.rotation.y = Math.PI;
      this.trex.setMode('run', st.speed); // it moves exactly as fast as you do, so its feet stay planted
    }
    this.trex.update(dt);

    // lunge animation
    if (this.lungeT >= 0) {
      this.lungeT += dt;
      const t = this.lungeT;
      const d = this.lungeDur;
      const k = t < 0.25 ? t / 0.25 : t < d - 0.3 ? 1 : Math.max(0, (d - t) / 0.3);
      this.lunge.visible = true;
      this.lunge.position.set(lerp(-3.4, this.lungeFull ? -0.9 : -1.1, k), lerp(2.2, this.lungeFull ? 0.2 : 0.5, k), -2.5);
      this.lunge.rotation.z = lerp(0.25, -0.3, k);
      this.lungeJaw.rotation.x = t < 0.3 ? 0.9 : t < 0.42 ? lerp(0.9, 0, (t - 0.3) / 0.12) : 0.1;
      if (t > d) { this.lungeT = -1; this.lunge.visible = false; }
    }
  }

  _collisions() {
    const st = this.st, g = this.game;
    if (st.invuln > 0) return;
    const ph = st.slide > 0 && st.y < 0.1 ? 0.8 : 1.7;
    for (const o of this.obstacles) {
      if (o.hit) continue;
      if (Math.abs(o.z - st.z) > o.d / 2 + 0.35) continue;
      if (Math.abs(o.mesh.position.x - st.x) > o.w / 2 + 0.25) continue;
      const py0 = st.y, py1 = st.y + ph;
      if (py1 <= o.y0 || py0 >= o.y1) continue;
      o.hit = true;
      const midSwitch = Math.abs(st.x - LANES[st.lane]) > 0.5 && st.prevLane !== st.lane;
      if (midSwitch && o.lane === st.lane) {
        st.lane = st.prevLane;
        this._stumble(0.18, false, o);
      } else {
        this._stumble(0.34, true, o);
      }
      return;
    }
  }

  _stumble(amount, smash, o) {
    const st = this.st, g = this.game;
    st.danger += amount;
    st.invuln = 1.2;
    g.audio.play('bonk');
    g.shake(0.35, 0.4);
    g.hud.flash('rgba(255,40,40,0.35)');
    if (smash) {
      st.slow = 1.0;
      g.audio.play('crash', { vol: 0.5 });
      o.mesh.visible = false;
      for (let i = 0; i < 10; i++) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), P.MATS.darkWood());
        m.position.set(o.mesh.position.x, 0.8, o.z);
        this.scene.add(m);
        this.debris.push({ m, v: new THREE.Vector3((Math.random() - 0.5) * 8, 4 + Math.random() * 6, -Math.random() * 10) });
      }
    }
    if (st.danger >= 1) { this._caught(false); return; }
    this.lungeT = 0;
    this.lungeDur = 0.75;
    this.lungeFull = false;
    g.audio.play('roar', { short: true, vol: 0.8 });
  }

  _caught(wall) {
    const st = this.st, g = this.game;
    if (st.phase !== 'run') return;
    this.mirrorEl?.classList.add('off');
    st.phase = 'caught';
    st.speed = 0;
    g.hud.showArrow(false);
    if (wall) { g.audio.play('bonk'); g.audio.play('crash', { vol: 0.6 }); }
    g.audio.play('roar');
    this.lungeT = 0;
    this.lungeDur = 1.4;
    this.lungeFull = true;
    g.shake(0.6, 1);
    setTimeout(() => this.resolve?.('caught'), 1300);
  }

  _escape() {
    const st = this.st;
    this.mirrorEl?.classList.add('off');
    this.game.camera.layers.enable(1);
    st.phase = 'escape';
    this.game.hud.showArrow(false);
    this.resolve?.('escaped');
  }

  setCam(mode) {
    this.camMode = mode;
    this.camBlend = null;
  }

  blendCam(mode) {
    this.camFrom = this.game.camera.position.clone();
    const dir = new THREE.Vector3();
    this.game.camera.getWorldDirection(dir);
    this.lookFrom = this.game.camera.position.clone().addScaledVector(dir, 10);
    this._look = new THREE.Vector3();
    this.camMode = mode;
    this.camBlend = 0;
  }

  // Second pass after the main render: the rear-view mirror.
  renderExtra(renderer) {
    const el = this.mirrorEl;
    if (!el || el.classList.contains('off') || this.st.phase !== 'run' || this.game.paused) return;
    const r = el.getBoundingClientRect();
    if (r.width < 10) return;
    const st = this.st, cam = this.mirrorCam;
    cam.aspect = r.width / r.height;
    cam.updateProjectionMatrix();
    // front-facing chase shot: you running toward the viewer, the T-Rex looming behind you
    cam.position.set(st.x * 0.8, 1.9 + st.y * 0.5, st.z - 3.4);
    cam.lookAt(st.x * 0.6, 3.5, st.z + 9);
    const y = innerHeight - r.bottom;
    renderer.setScissorTest(true);
    renderer.setScissor(r.left, y, r.width, r.height);
    renderer.setViewport(r.left, y, r.width, r.height);
    renderer.clearDepth();
    renderer.render(this.scene, cam);
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, innerWidth, innerHeight);
  }

  dispose() {
    this.game.camera.layers.set(0);
    this.mirrorEl?.classList.add('off');
    this.game.camera.remove(this.lunge);
    super.dispose();
  }
}
