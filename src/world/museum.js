import * as THREE from 'three';
import { Level, boxUV } from './level.js';
import { tex, signTexture, makeCanvas, canvasTexture, plaqueTexture } from './textures.js';
import * as P from './props.js';
import { TRex } from './trex.js';
import { makeGuard, makeVisitor, makeMummy, Person } from './people.js';
import { drawGlyph, drawStrokes, GLYPH_KEYS } from './glyphs.js';
import { drawCCTV } from './screens.js';
import { mulberry32 } from '../core/util.js';
import { batchStatic } from './batch.js';

// The City Museum of Natural History. Layout (meters, y up, north = -z):
//   Security office  x[-20,-12] z[-5,5]
//   Lobby            x[-12, 12] z[-10,10]
//   Dinosaur Hall    x[-15, 15] z[-46,-10]
//   Roman Hall       x[ 12, 40] z[-9, 9]
//   Egyptian Wing    x[ 15, 39] z[-37,-9]  (doors to the Dinosaur Hall and the Roman Hall)

export const SPOTS = {
  officeChair: new THREE.Vector3(-17.9, 0, 0),
  officeStart: new THREE.Vector3(-17.2, 0, 0.3),
  lobbyNorth: new THREE.Vector3(0, 0, -7.5),
  dinoDoor: new THREE.Vector3(0, 0, -12),
  dinoPanel: new THREE.Vector3(2.4, 0, -20.6),
  trex: new THREE.Vector3(0, 0.5, -31),
  romanDoor: new THREE.Vector3(13.5, 0, 0),
  romanPanel: new THREE.Vector3(37.4, 0, 0),
  computer: new THREE.Vector3(-18.75, 1.05, 0),
  egyptDoor: new THREE.Vector3(15.2, 0, -24),
  egyptPanel: new THREE.Vector3(24.4, 0, -20.6),
  sarcophagus: new THREE.Vector3(27.5, 0, -25),
  romanNorthDoor: new THREE.Vector3(24.75, 0, -9.2),
};

export const EGYPT = { x0: 15.42, x1: 39, z0: -37, z1: -9.42, h: 8.5 };
// pillar | , || , ||| , |||| and their symbols (the Pharaoh's Lock code)
export const EGYPT_PILLARS = [
  { n: 1, glyph: 'bird', x: 19.2, z: -29.4 },
  { n: 2, glyph: 'eye', x: 31.6, z: -33.4 },
  { n: 3, glyph: 'snake', x: 36.4, z: -19.6 },
  { n: 4, glyph: 'ankh', x: 18.4, z: -15.2 },
];

export class Museum extends Level {
  constructor(game, { time = 'night' } = {}) {
    super(game);
    this.time = time;
    this.night = time === 'night';
    this.refs = {};
    this.surfaceAt = (x, z) => (x < -12 ? 'wood' : x > 15.2 && z < -9.3 ? 'stone' : x > 12 ? 'marble' : z < -10 ? 'stone' : 'marble');
    const s = this.scene;
    s.background = new THREE.Color(this.night ? 0x020308 : 0xbfd2e6);
    s.fog = this.night ? new THREE.FogExp2(0x03050b, 0.028) : new THREE.Fog(0xcfdbe8, 40, 140);

    this.mats = {
      officeWall: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0xb9b19a, roughness: 0.9 }),
      lobbyWall: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x8f98a6, roughness: 0.85 }),
      dinoWall: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0x7a6e5e, roughness: 0.9 }),
      romanWall: new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0xb47c5c, roughness: 0.85 }),
      wood: new THREE.MeshStandardMaterial({ map: tex('wood'), roughness: 0.7 }),
      marble: new THREE.MeshStandardMaterial({ map: tex('marble'), roughness: 0.25, metalness: 0.05 }),
      stone: new THREE.MeshStandardMaterial({ map: tex('stone'), roughness: 0.8 }),
      mosaic: new THREE.MeshStandardMaterial({ map: tex('mosaic'), roughness: 0.6 }),
      ceiling: new THREE.MeshStandardMaterial({ map: tex('ceiling'), roughness: 0.9, color: 0x9a968e }),
      darkCeil: new THREE.MeshStandardMaterial({ color: this.night ? 0x1d1b1a : 0xb9b3a6, roughness: 1 }),
      trim: new THREE.MeshStandardMaterial({ color: 0x2a2420, roughness: 0.6 }),
    };

    this._lights();
    this._office();
    this._lobby();
    this._dino();
    this._roman();
    this._egypt();
    this._collectibles();
    if (!this.night) this._visitors();
    // merge everything that never moves (walls, props, signs...) → far fewer draw calls
    const r = this.refs;
    const dynamic = new Set([r.trex.group, r.guard.group, r.donutBox, r.deskFlashlight, r.footprints, r.sarcLid, r.mummy.holder, ...r.flames.map((f) => f.flame),
      ...this.collectibles.map((c) => c.obj), ...(this.visitors || []).map((v) => v.p.group)]);
    batchStatic(this.scene, (o) => dynamic.has(o));
  }

  // ------------------------------------------------------------------ lights
  _lights() {
    const s = this.scene, n = this.night;
    this.ambient = new THREE.AmbientLight(n ? 0x7080b0 : 0xffffff, n ? 0.32 : 0.9);
    s.add(this.ambient);
    this.hemi = new THREE.HemisphereLight(n ? 0x5a6a9a : 0xe8f0ff, n ? 0x161210 : 0x8a7a66, n ? 0.45 : 1.4);
    s.add(this.hemi);
    const moon = new THREE.DirectionalLight(n ? 0x8fa8ff : 0xfff1d8, n ? 0.55 : 2.4);
    moon.position.set(12, 30, 40);
    moon.target.position.set(0, 0, -20);
    s.add(moon, moon.target);
    this.sun = moon;
    // soft accent lights so the rooms read in the dark
    const accent = (c, i, d, x, y, z) => {
      const l = new THREE.PointLight(c, i, d, 2);
      l.position.set(x, y, z);
      s.add(l);
      return l;
    };
    if (n) {
      accent(0x6a86ff, 6, 22, 0, 9, -40);     // mural
      accent(0xffb070, 5, 14, 37, 5, 0);      // tablet
      accent(0x6a86ff, 3, 16, 0, 6, 6);       // lobby moon wash
      accent(0x8a6aff, 4, 18, 27, 7, -30);    // egypt: moonlight over the mural
      this.officeLamp = accent(0xffc77a, 3.5, 7, -18.4, 1.4, 0.9);
      this.fluoro = accent(0xdfe8ff, 2.5, 8, -16, 3.1, 0);
    } else {
      accent(0xffffff, 30, 40, 0, 11, -28);
      accent(0xfff2dd, 20, 30, 26, 8, 0);
      accent(0xffffff, 12, 25, 0, 7, 0);
      accent(0xfff2dd, 22, 32, 27, 7.5, -23);
      this.officeLamp = accent(0xffc77a, 2, 6, -18.4, 1.4, 0.9);
      this.fluoro = accent(0xffffff, 6, 10, -16, 3.1, 0);
    }
  }

  // ------------------------------------------------------------------ office
  _office() {
    const m = this.mats;
    this.floor(-20, -12, -5, 5, m.wood, 0, 3);
    this.ceiling(-20, -12, -5, 5, 3.4, m.ceiling, 1.2);
    this.wallX(-5, -20, -12, 3.4, m.officeWall);
    this.wallX(5, -20, -12, 3.4, m.officeWall);
    this.wallZ(-20, -5, 5, 3.4, m.officeWall);
    // fluorescent fixture
    const fl = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.4), new THREE.MeshBasicMaterial({ color: 0xeaf2ff }));
    fl.position.set(-16, 3.36, 0);
    this.scene.add(fl);
    this.refs.fluoroMesh = fl;

    const desk = P.makeDesk(1.9, 0.85);
    this.add(desk, -18.75, 0, 0, Math.PI / 2);
    this.addBoxCollider(-18.75, 0, 1.9, 0.85, Math.PI / 2);
    const mon = P.makeMonitor(0.95, 0.6);
    this.add(mon.group, -18.95, 0.77, 0, Math.PI / 2);
    this.refs.monitor = mon;
    const chair = P.makeChair();
    this.add(chair, -17.9, 0, 0, -Math.PI / 2);
    this.refs.chair = chair;
    // keyboard
    this.add(P.box(0.18, 0.02, 0.5, P.MATS.black()), -18.55, 0.77, 0);
    // desk lamp
    const lamp = new THREE.Group();
    lamp.add(P.box(0.15, 0.03, 0.15, P.MATS.black()));
    const arm = P.box(0.03, 0.45, 0.03, P.MATS.black(), 0, 0.03, 0);
    lamp.add(arm);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.16, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0x2b5d3a, side: THREE.DoubleSide }));
    shade.position.set(0.05, 0.5, 0);
    shade.rotation.z = -0.5;
    lamp.add(shade);
    this.add(lamp, -18.9, 0.77, 0.75);

    // donut box
    const dbox = new THREE.Group();
    const pink = new THREE.MeshStandardMaterial({ color: 0xf7a8c8, roughness: 0.8 });
    dbox.add(P.box(0.55, 0.07, 0.38, pink));
    const lid = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.01, 0.38), new THREE.MeshStandardMaterial({ map: signTexture('DOZEN\nDELUXE', { w: 256, h: 180, bg: '#f7a8c8', fg: '#b3125a', font: 'bold 52px Arial Black, Arial' }) }));
    lid.position.set(0, 0.25, -0.2);
    lid.rotation.x = -1.2;
    dbox.add(lid);
    this.refs.boxDonuts = [];
    for (let i = 0; i < 6; i++) {
      const d = P.makeDonut({ frosting: i, scale: 0.55 });
      d.position.set(-0.17 + (i % 3) * 0.17, 0.08, -0.08 + Math.floor(i / 3) * 0.17);
      dbox.add(d);
      this.refs.boxDonuts.push(d);
    }
    this.add(dbox, -18.6, 0.77, -0.65, Math.PI / 2);
    this.refs.donutBox = dbox;
    // flashlight on desk
    const fl2 = P.makeFlashlightModel();
    fl2.position.set(-18.45, 0.81, 0.45);
    fl2.rotation.y = 0.6;
    this.scene.add(fl2);
    this.refs.deskFlashlight = fl2;
    // mug
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.1, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
    mug.position.set(-18.5, 0.82, -0.2);
    this.scene.add(mug);

    // CCTV wall
    const [cc, cx] = makeCanvas(384, 192, { willReadFrequently: true });
    const ctex = canvasTexture(cc);
    const cctv = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.3), new THREE.MeshBasicMaterial({ map: ctex, toneMapped: false }));
    cctv.position.set(-16.5, 1.95, -4.78);
    this.scene.add(cctv);
    this.add(P.box(2.75, 1.45, 0.1, P.MATS.black()), -16.5, 1.25, -4.84);
    let ct = 0, acc = 0;
    this.cctvState = { trexGone: false, day: !this.night };
    this.addUpdater((dt) => {
      ct += dt; acc += dt;
      if (acc > 0.12) { acc = 0; drawCCTV(cx, ct, this.cctvState); ctex.needsUpdate = true; }
    });
    // lockers
    for (let i = 0; i < 4; i++) {
      const l = P.box(0.6, 2, 0.5, new THREE.MeshStandardMaterial({ color: 0x4f6273, roughness: 0.5, metalness: 0.4 }));
      this.add(l, -19.4 + i * 0.62, 0, 4.7);
    }
    this.addCollider(-19.8, -16.9, 4.4, 5);
    // posters
    const poster = (text, x, y, z, ry, bg, fg) => {
      const pm = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.05), new THREE.MeshStandardMaterial({ map: signTexture(text, { w: 256, h: 340, bg, fg, font: 'bold 34px Arial Black, Arial', border: fg }) }));
      pm.position.set(x, y, z);
      pm.rotation.y = ry;
      this.scene.add(pm);
    };
    poster('EMPLOYEE\nOF THE\nMONTH:\nAARON', -13.5, 1.8, -4.78, 0, '#ffe08a', '#7a4b00');
    poster('STAY\nAWAKE\n(seriously)', -19.78, 2.0, -3, Math.PI / 2, '#16324f', '#ffcc4d');
    poster('NO\nDINOSAURS\nIN THE\nOFFICE', -14.8, 1.8, 4.78, Math.PI, '#fff', '#c81e1e');
    // wall clock
    const clock = new THREE.Mesh(new THREE.CircleGeometry(0.25, 24), new THREE.MeshBasicMaterial({ map: signTexture('11:58', { w: 128, h: 128, bg: '#fff', fg: '#111', font: 'bold 34px Arial' }) }));
    clock.position.set(-19.78, 2.5, 1.5);
    clock.rotation.y = Math.PI / 2;
    this.scene.add(clock);

    // the guard sitting at the desk (used in cutscenes)
    const guard = makeGuard();
    guard.group.position.set(-17.95, 0, 0);
    guard.group.rotation.y = -Math.PI / 2;
    guard.setMode('sit');
    guard.update(0);
    this.scene.add(guard.group);
    this.refs.guard = guard;
    this.addUpdater((dt) => { if (guard.group.visible) guard.update(dt); });

    // computer interactable (used in the morning)
    this.refs.computerIt = this.addInteractable({
      id: 'computer', pos: new THREE.Vector3(-18.7, 1.1, 0), prompt: 'Log in', enabled: false,
    });

    // SECURITY sign over door (lobby side)
    const sec = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.5), new THREE.MeshStandardMaterial({ map: signTexture('SECURITY', { w: 512, h: 116, bg: '#1d2433', fg: '#ffcc4d', font: 'bold 64px Arial Black, Arial', border: '#ffcc4d' }), emissive: 0xffffff, emissiveIntensity: 0.08 }));
    sec.position.set(-11.78, 2.85, 0);
    sec.rotation.y = Math.PI / 2;
    this.scene.add(sec);
  }

  // ------------------------------------------------------------------ lobby
  _lobby() {
    const m = this.mats, s = this.scene;
    this.floor(-12, 12, -10, 10, m.marble, 0, 4);
    this.ceiling(-12, 12, -10, 10, 8, m.darkCeil);
    this.wallX(-10, -12, 12, 8, m.lobbyWall, [{ c: 0, w: 6, h: 6.2 }], 3);
    this.wallZ(12, -10, -9, 8, m.lobbyWall, [], 3);
    this.wallZ(12, 9, 10, 8, m.lobbyWall, [], 3);
    this.wallZ(-12, -10, 10, 8, m.lobbyWall, [{ c: 0, w: 2.2, h: 2.4 }], 3);
    // south wall: entrance + windows (we build it manually so windows glow)
    this.wallX(10, -12, 12, 8, m.lobbyWall, [{ c: -7.5, w: 4, h: 6.5 }, { c: 0, w: 6, h: 4.2 }, { c: 7.5, w: 4, h: 6.5 }], 3);
    // window glass glow + mullions
    const winMat = new THREE.MeshBasicMaterial({ color: this.night ? 0x1c2e5a : 0xf2f6ff, toneMapped: !this.night });
    for (const wx of [-7.5, 7.5]) {
      const wg = new THREE.Mesh(new THREE.PlaneGeometry(4, 6.5), winMat);
      wg.position.set(wx, 3.25, 10.1);
      wg.rotation.y = Math.PI;
      s.add(wg);
      s.add(P.box(0.12, 6.5, 0.15, m.trim, wx, 0, 10));
      for (const wy of [2.2, 4.4]) s.add(P.box(4, 0.1, 0.15, m.trim, wx, wy, 10));
      // window sill sits under the opening
      s.add(P.box(4, 0.1, 0.4, m.trim, wx, 0, 10));
    }
    // fake floor sill colliders for windows
    this.addCollider(-9.5, -5.5, 9.8, 10.2);
    this.addCollider(5.5, 9.5, 9.8, 10.2);
    // entrance glass doors (locked)
    const glass = P.MATS.glass();
    for (const dx of [-1.5, 1.5]) {
      const door = P.box(2.9, 4.1, 0.08, glass, dx, 0, 10);
      door.castShadow = false;
      s.add(door);
      s.add(P.box(0.08, 4.1, 0.1, P.MATS.metal(), dx - 1.45, 0, 10));
      s.add(P.box(0.06, 0.5, 0.12, P.MATS.brass(), dx + (dx < 0 ? 1.3 : -1.3), 1.1, 9.92));
    }
    const outside = new THREE.Mesh(new THREE.PlaneGeometry(6, 4.2), winMat);
    outside.position.set(0, 2.1, 10.3);
    outside.rotation.y = Math.PI;
    s.add(outside);
    this.addCollider(-3, 3, 9.8, 10.2);
    // archive door (closed, decorative)
    const adoor = P.box(1.5, 2.55, 0.1, new THREE.MeshStandardMaterial({ color: 0x3b3b42, metalness: 0.5, roughness: 0.4 }));
    adoor.rotation.y = Math.PI / 2;
    adoor.position.set(-11.78, 1.275, 6.5);
    s.add(adoor);
    const asign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.35), new THREE.MeshStandardMaterial({ map: signTexture('ARCHIVES\nSTAFF ONLY', { w: 256, h: 64, bg: '#a01818', fg: '#fff', font: 'bold 22px Arial' }) }));
    asign.position.set(-11.75, 2.85, 6.5);
    asign.rotation.y = Math.PI / 2;
    s.add(asign);

    // big signs over openings
    const bigSign = (text, x, y, z, ry, w = 5.6) => {
      const sg = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.2), new THREE.MeshStandardMaterial({ map: signTexture(text, { w: 1024, h: 220, bg: '#14100c', fg: '#e9cf8a', font: 'bold 120px Georgia, serif', border: '#c9a24a' }), emissive: 0xffe0a0, emissiveIntensity: this.night ? 0.12 : 0.02 }));
      sg.position.set(x, y, z);
      sg.rotation.y = ry;
      s.add(sg);
    };
    bigSign('DINOSAUR HALL', 0, 7.1, -9.77, 0);
    bigSign('ROMAN EMPIRE', 11.77, 7.1, 0, -Math.PI / 2);

    // info desk
    const desk = new THREE.Group();
    desk.add(P.box(4.6, 1.1, 1.0, m.trim));
    desk.add(P.box(4.8, 0.08, 1.2, P.MATS.marble(), 0, 1.1, 0));
    const front = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.5), new THREE.MeshStandardMaterial({ map: signTexture('INFORMATION', { w: 512, h: 80, bg: '#2a2420', fg: '#c9a24a', font: 'bold 48px Georgia, serif' }) }));
    front.position.set(0, 0.62, -0.51);
    front.rotation.y = Math.PI;
    desk.add(front);
    P.shadowAll(desk);
    this.add(desk, 0, 0, 4.2);
    this.addBoxCollider(0, 4.2, 4.8, 1.2);
    // columns
    for (const cx of [-8, 8]) for (const cz of [-6, 6]) {
      this.add(P.makeColumn(8, 0.5), cx, 0, cz);
      this.addBoxCollider(cx, cz, 1.2, 1.2);
    }
    // benches & plants
    for (const bx of [-6, 6]) {
      this.add(P.makeBench(2.2), bx, 0, 0, Math.PI / 2);
      this.addBoxCollider(bx, 0, 2.2, 0.55, Math.PI / 2);
    }
    for (const [px, pz] of [[-11, -9], [11, -9], [-11, 9], [11, 9], [-4.2, -9], [4.2, -9]]) {
      this.add(P.makeFern(px * 7 + pz), px, 0, pz);
      this.addBoxCollider(px, pz, 0.6, 0.6);
    }
    // sign post
    const sp1 = P.makeSignPost('DINOSAURS', '↑');
    this.add(sp1, -2.3, 0, -4.5);
    this.addBoxCollider(-2.3, -4.5, 0.3, 0.3);
    const sp2 = P.makeSignPost('ROMAN EMPIRE', '→');
    this.add(sp2, 5, 0, -2.6);
    this.addBoxCollider(5, -2.6, 0.3, 0.3);
    // hanging banner
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(3, 5), new THREE.MeshStandardMaterial({ map: signTexture('HISTORY\nCOMES\nALIVE!', { w: 300, h: 500, bg: '#7a1022', fg: '#ffd98a', font: 'bold 64px Georgia, serif' }), side: THREE.DoubleSide }));
    banner.position.set(-6, 5, -2);
    banner.rotation.y = 0.3;
    s.add(banner);
    // museum map board
    const map = P.makeWallPlaque('MUSEUM MAP', '↑ North: Dinosaur Hall (→ Egyptian Wing)\n→ East: Roman Empire\n← West: Security Office\n↓ South: Exit (locked at night)', 2.4, 1.6, { bg: '#16202e', fg: '#dfe8ff', accent: '#6dc2ff' });
    map.position.set(11.78, 2.2, 6.5);
    map.rotation.y = -Math.PI / 2;
    s.add(map);
    // exit signs
    for (const [x, y, z, ry] of [[0, 4.55, 9.77, Math.PI], [-11.75, 2.65, 0, Math.PI / 2]]) {
      const e = P.makeExitSign();
      e.position.set(x, y, z);
      e.rotation.y = ry;
      if (ry === Math.PI / 2) e.position.y = 3.3;
      s.add(e);
    }
  }

  // ------------------------------------------------------------------ dino hall
  _dino() {
    const m = this.mats, s = this.scene;
    this.floor(-15, 15, -46, -10, m.stone, 0, 4);
    this.ceiling(-15, 15, -46, -10, 13, m.darkCeil);
    this.wallX(-46, -15, 15, 13, m.dinoWall, [], 3);
    this.wallZ(-15, -46, -10, 13, m.dinoWall, [], 3);
    this.wallZ(15, -46, -10, 13, m.dinoWall, [{ c: SPOTS.egyptDoor.z, w: 3.2, h: 4.4 }], 3);
    this.wallX(-10, -15, -12, 13, m.dinoWall, [], 3);
    this.wallX(-10, 12, 15, 13, m.dinoWall, [], 3);
    // lobby wall above y=8 is covered by dino hall's taller wall
    this.wallX(-10.01, -12, 12, 13, m.dinoWall, [{ c: 0, w: 24.5, h: 8 }], 3);
    // light shafts falling from the skylights (moonlight at night, sunbeams by day)
    const [bc, bx] = makeCanvas(64, 256);
    // soft on all sides: bright core fading down and out to the edges
    const bimg = bx.createImageData(64, 256);
    for (let y = 0; y < 256; y++) for (let x = 0; x < 64; x++) {
      const h = Math.pow(Math.sin((x / 63) * Math.PI), 2.2);
      const v = Math.pow(1 - y / 255, 1.6);
      const i = (y * 64 + x) * 4;
      bimg.data[i] = bimg.data[i + 1] = bimg.data[i + 2] = 255;
      bimg.data[i + 3] = 255 * h * v;
    }
    bx.putImageData(bimg, 0, 0);
    const beamTex = canvasTexture(bc, { srgb: false });
    beamTex.wrapS = beamTex.wrapT = THREE.ClampToEdgeWrapping;
    const beamMat = new THREE.MeshBasicMaterial({ map: beamTex, color: this.night ? 0x7090ff : 0xfff0c8, transparent: true, opacity: this.night ? 0.05 : 0.12, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    for (const z of [-18, -30, -40]) {
      for (const k of [0, 1]) {
        const beam = new THREE.Mesh(new THREE.PlaneGeometry(7, 14), beamMat);
        beam.position.set(1.5, 6.1, z - 2.2);
        beam.rotation.set(0, k * Math.PI / 2, 0.22);
        if (k) beam.position.set(1.5, 6.1, z - 2.2);
        s.add(beam);
      }
    }
    // skylights
    for (const z of [-18, -30, -40]) {
      const sk = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), new THREE.MeshBasicMaterial({ color: this.night ? 0x1e3266 : 0xffffff, toneMapped: !this.night }));
      sk.position.set(0, 12.95, z);
      sk.rotation.x = Math.PI / 2;
      s.add(sk);
    }
    // platform
    const plat = new THREE.Mesh(boxUV(9, 0.5, 15, 3), new THREE.MeshStandardMaterial({ map: tex('stone'), color: 0x8a7a6a, roughness: 0.85 }));
    plat.position.set(0, 0.25, -30);
    plat.receiveShadow = true;
    s.add(plat);
    s.add(P.box(9.2, 0.1, 15.2, m.trim, 0, 0.36, -30));
    this.addCollider(-4.6, 4.6, -37.6, -22.4, 'platform');
    // rope barrier around platform
    const posts = [];
    for (let x = -5.2; x <= 5.21; x += 2.6) posts.push([x, -21.8]);
    for (const [x, z] of posts) this.add(P.makeStanchion(), x, 0, z);
    for (let i = 0; i < posts.length - 1; i++) {
      const r = P.makeRope(2.6);
      r.position.set(posts[i][0], 0, posts[i][1]);
      s.add(r);
    }
    // rocks & ferns on the platform
    const rr = mulberry32(5);
    for (let i = 0; i < 10; i++) {
      const rock = P.makeRock(i + 3, 0.6 + rr() * 0.8);
      rock.position.set((rr() - 0.5) * 8, 0.5 + rock.position.y, -30 + (rr() - 0.5) * 14);
      if (Math.abs(rock.position.x) < 1.6) rock.position.x += 2.8 * Math.sign(rock.position.x || 1);
      s.add(rock);
    }
    for (let i = 0; i < 6; i++) {
      const f = P.makeFern(i + 40);
      f.children.forEach((c) => { if (c.geometry?.type === 'CylinderGeometry') c.visible = false; });
      f.position.set(i % 2 ? 3.6 : -3.6, 0.2, -24 - i * 2.3);
      f.scale.setScalar(1.6);
      s.add(f);
    }
    // THE T-REX
    const trex = new TRex();
    trex.group.position.copy(SPOTS.trex);
    trex.group.rotation.y = 0.3;
    trex.setMode('pose');
    s.add(trex.group);
    this.refs.trex = trex;
    this.addUpdater((dt) => trex.update(dt));
    // hidden: the "walking" T-Rex used for scares (shares model)

    // plaques
    const plaque = P.makePlaqueStand('TYRANNOSAURUS REX', '"The Tyrant Lizard King." 12 m long, 8 tonnes, teeth like bananas.\nFun fact: despite its size, T. rex had only TWO fingers on each tiny hand.', { bodyFont: '24px Georgia, serif' });
    this.add(plaque, -2.4, 0, -20.6);
    this.addBoxCollider(-2.4, -20.6, 0.5, 0.4);
    // puzzle console #1
    const c1 = P.makeConsole({ title: 'DINO-LOCK 3000', color: '#6dff9e' });
    this.add(c1.group, SPOTS.dinoPanel.x, 0, SPOTS.dinoPanel.z);
    this.addBoxCollider(SPOTS.dinoPanel.x, SPOTS.dinoPanel.z, 0.8, 0.6);
    this.addUpdater((dt) => c1.update(dt));
    this.refs.console1 = c1;
    this.refs.panel1It = this.addInteractable({ id: 'panel1', pos: new THREE.Vector3(SPOTS.dinoPanel.x, 1.2, SPOTS.dinoPanel.z), prompt: 'Inspect cipher panel', enabled: false });

    // triceratops
    this.add(P.makePedestal(2.2, 0.9, new THREE.MeshStandardMaterial({ color: 0x5b5249, roughness: 0.9 })), -10, 0, -19);
    const tri = P.makeTriceratopsSkull();
    tri.scale.setScalar(1.4);
    this.add(tri, -10, 0.9, -19, 0.5);
    this.addBoxCollider(-10, -19, 2.5, 2.5);
    this.add(P.makePlaqueStand('TRICERATOPS', 'Three horns, one frill, zero chill. Ate plants. Probably fine.'), -10, 0, -16.6);
    // raptor (mini skeleton)
    this.add(P.makePedestal(2.6, 0.7, new THREE.MeshStandardMaterial({ color: 0x5b5249, roughness: 0.9 })), 10, 0, -20);
    const raptor = new TRex({ eyeLight: false });
    raptor.group.scale.setScalar(0.3);
    raptor.anim.headYaw = raptor.anim.targetYaw = -0.5;
    raptor.applyPose(0);
    this.add(raptor.group, 10, 0.7, -20, -0.8);
    this.addBoxCollider(10, -20, 2.9, 2.9);
    this.add(P.makePlaqueStand('VELOCIRAPTOR', 'Turkey-sized. Feathery. Smaller than the movies told you. Still bites.'), 10, 0, -17.6);
    // meteorite
    this.add(P.makePedestal(1.1, 1.0), 10, 0, -40);
    const met = P.makeRock(77, 0.8);
    met.material = new THREE.MeshStandardMaterial({ color: 0x3a3632, roughness: 0.6, metalness: 0.4, flatShading: true });
    this.add(met, 10, 1.0, -40);
    this.addBoxCollider(10, -40, 1.3, 1.3);
    this.add(P.makePlaqueStand('REAL METEORITE', 'Fell from space 66 million years ago. Please do not lick the meteorite.'), 10, 0, -38.2);
    // ammonite case
    this.add(P.makeDisplayCase(1.6, 0.8, 0.9, P.makeAmmonite()), -10, 0, -40);
    this.addBoxCollider(-10, -40, 1.7, 1.0);
    this.add(P.makePlaqueStand('AMMONITES', 'Ancient squid in spiral shells. Basically sea cinnamon rolls.'), -10, 0, -38.3);
    // mural
    const [mc, mx] = makeCanvas(1024, 400);
    const sky = mx.createLinearGradient(0, 0, 0, 400);
    sky.addColorStop(0, '#3a1f4d'); sky.addColorStop(0.6, '#d9663a'); sky.addColorStop(1, '#f2b25a');
    mx.fillStyle = sky; mx.fillRect(0, 0, 1024, 400);
    mx.fillStyle = '#2a1410';
    mx.beginPath(); mx.moveTo(560, 300); mx.lineTo(700, 120); mx.lineTo(740, 120); mx.lineTo(900, 300); mx.fill();
    mx.fillStyle = '#ff7a2a'; mx.beginPath(); mx.arc(720, 110, 30, 0, 7); mx.fill();
    mx.fillStyle = '#1a0f0a'; mx.fillRect(0, 300, 1024, 100);
    for (let i = 0; i < 6; i++) { mx.beginPath(); mx.moveTo(i * 180, 300); mx.lineTo(i * 180 + 40, 200 - (i % 2) * 40); mx.lineTo(i * 180 + 80, 300); mx.fill(); }
    mx.fillStyle = '#f3e6c4'; mx.font = 'bold 72px Georgia, serif'; mx.textAlign = 'center';
    mx.fillText('THE AGE OF DINOSAURS', 512, 80);
    mx.font = 'italic 30px Georgia, serif';
    mx.fillText('252 – 66 million years ago (and, apparently, tonight)', 512, 125);
    const mural = new THREE.Mesh(new THREE.PlaneGeometry(22, 8.6), new THREE.MeshStandardMaterial({ map: canvasTexture(mc), roughness: 0.8 }));
    mural.position.set(0, 6, -45.78);
    s.add(mural);
    // exit sign
    const e = P.makeExitSign();
    e.position.set(0, 6.6, -10.25);
    e.rotation.y = 0;
    s.add(e);

    // footprints leading out (revealed after the T-Rex vanishes)
    const [fc, fx] = makeCanvas(128, 128);
    fx.fillStyle = 'rgba(30,20,12,0.85)';
    fx.beginPath(); fx.ellipse(64, 84, 22, 28, 0, 0, 7); fx.fill();
    for (const [a, l] of [[-0.45, 52], [0, 60], [0.45, 52]]) {
      fx.save(); fx.translate(64, 70); fx.rotate(a);
      fx.beginPath(); fx.ellipse(0, -l * 0.6, 9, l * 0.45, 0, 0, 7); fx.fill();
      fx.restore();
    }
    const fpMat = new THREE.MeshBasicMaterial({ map: canvasTexture(fc), transparent: true, depthWrite: false, opacity: 0.85 });
    const prints = new THREE.Group();
    const path = [];
    // off the platform, east to the Egyptian Wing...
    for (let i = 0; i < 9; i++) path.push([5.4 + i * 1.25, -27.4 + i * 0.4 + (i % 2 ? 0.45 : -0.45)]);
    // ...a lap around the mummy's hall (knocking over a statue)...
    for (let i = 0; i < 10; i++) path.push([17.2 + i * 1.7, -23.4 + i * 0.85 + (i % 2 ? 0.45 : -0.45)]);
    // ...and out through the door to the Roman Hall
    for (let i = 0; i < 6; i++) path.push([32.4 - i * 1.4, -14.6 + i * 0.75 + (i % 2 ? 0.45 : -0.45)]);
    const fpGeo = new THREE.PlaneGeometry(1.1, 1.1);
    path.forEach(([x, z], i) => {
      const fp = new THREE.Mesh(fpGeo, fpMat);
      fp.rotation.x = -Math.PI / 2;
      fp.position.set(x, 0.02, z);
      const [ax, az] = path[i + 1] ? [x, z] : path[i - 1];
      const [bx, bz] = path[i + 1] || [x, z];
      fp.rotation.z = Math.atan2(-(bx - ax), -(bz - az));
      prints.add(fp);
    });
    prints.visible = false;
    s.add(prints);
    this.refs.footprints = prints;
  }

  // ------------------------------------------------------------------ roman hall
  _roman() {
    const m = this.mats, s = this.scene;
    this.floor(12, 40, -9, 9, m.mosaic, 0, 4);
    this.ceiling(12, 40, -9, 9, 9, m.darkCeil);
    this.wallX(-9, 12, 40, 9, m.romanWall, [{ c: SPOTS.romanNorthDoor.x, w: 3.2, h: 4.4 }], 3);
    this.wallX(9, 12, 40, 9, m.romanWall, [], 3);
    this.wallZ(40, -9, 9, 9, m.romanWall, [], 3);
    this.wallZ(12, -9, 9, 9, m.romanWall, [{ c: 0, w: 6, h: 6.2 }], 3);
    // border stripes on floor
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0x8c3b2a, roughness: 0.7 });
    for (const z of [-3.2, 3.2]) s.add(P.box(24, 0.012, 0.3, stripeMat, 26, 0, z));
    // columns
    for (const cx of [16.5, 22, 27.5, 33]) for (const cz of [-5.6, 5.6]) {
      this.add(P.makeColumn(9, 0.48, P.MATS.stoneWhite()), cx, 0, cz);
      this.addBoxCollider(cx, cz, 1.25, 1.25);
    }
    // busts
    const names = [['JULIUS CAESAR', 19.25, -8], ['NERO', 30.25, -8], ['MARCUS AURELIUS', 19.25, 8], ['CALIGULA', 24.75, 8], ['HADRIAN', 30.25, 8]];
    for (const [n, x, z] of names) {
      this.add(P.makeBust(n), x, 0, z, z > 0 ? Math.PI : 0);
      this.addBoxCollider(x, z, 0.85, 0.85);
    }
    // chariot
    this.add(P.makeChariot(), 25, 0, 0, Math.PI / 2 + 0.2);
    this.addCollider(23.2, 27.4, -1.1, 1.1);
    for (const [x, z] of [[22, -2.6], [28, -2.6], [22, 2.6], [28, 2.6]]) this.add(P.makeStanchion(), x, 0, z);
    for (const [x, z] of [[22, -2.6], [22, 2.6]]) {
      const r = P.makeRope(6);
      r.position.set(x, 0, z);
      s.add(r);
    }
    this.add(P.makePlaqueStand('ROMAN CHARIOT', 'Top speed: 40 km/h. Seatbelts: none. Cupholders: also none.'), 20.8, 0, 0, -Math.PI / 2);
    // amphoras
    for (const [x, z] of [[36.5, -7.8], [37.4, -7.6], [36.5, 7.8], [37.4, 7.6], [14, -8], [14, 8]]) {
      this.add(P.makeAmphora(), x, 0, z, x * 3);
      this.addBoxCollider(x, z, 0.5, 0.5);
    }
    // inscription tablet
    const [tc, tx] = makeCanvas(1024, 512);
    tx.fillStyle = '#cfc6b4'; tx.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 3000; i++) { tx.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`; tx.fillRect(Math.random() * 1024, Math.random() * 512, 3, 3); }
    tx.strokeStyle = '#8f8676'; tx.lineWidth = 14; tx.strokeRect(20, 20, 984, 472);
    tx.fillStyle = '#3d3528'; tx.textAlign = 'center';
    tx.font = 'bold 86px Georgia, serif';
    tx.fillText('MVSEVM', 512, 150);
    tx.fillText('CONDITVM ANNO', 512, 260);
    tx.font = 'bold 120px Georgia, serif';
    tx.fillText('MCMLXXIV', 512, 410);
    const tablet = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 2.7), new THREE.MeshStandardMaterial({ map: canvasTexture(tc), roughness: 0.9 }));
    tablet.position.set(39.77, 3.6, 0);
    tablet.rotation.y = -Math.PI / 2;
    s.add(tablet);
    s.add(P.box(0.3, 0.3, 5.8, P.MATS.stoneWhite(), 39.7, 2.1, 0));
    // SPQR banners
    for (const z of [-4.2, 4.2]) {
      const b = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 4.5), new THREE.MeshStandardMaterial({ map: signTexture('S\nP\nQ\nR', { w: 200, h: 500, bg: '#8a1022', fg: '#e9c46a', font: 'bold 90px Georgia, serif', border: '#e9c46a' }), side: THREE.DoubleSide }));
      b.position.set(39.7, 4.6, z);
      b.rotation.y = -Math.PI / 2;
      s.add(b);
    }
    // numerals guide (near entrance, north wall)
    const guide = P.makeWallPlaque('ROMAN NUMERALS 101', 'I = 1    V = 5    X = 10    L = 50\nC = 100    D = 500    M = 1000\nAdd them up, biggest first: XVI = 10+5+1 = 16.\nSmall BEFORE big means subtract: IV = 4, IX = 9, XC = 90, CM = 900.', 3.2, 2, { bodyFont: '23px Georgia, serif', bg: '#2a1c14', accent: '#e9c46a' });
    guide.position.set(15.6, 2.2, -8.78);
    s.add(guide);
    const glad = P.makeWallPlaque('GLADIATOR SHIELD', 'Property of Maximus. Do not borrow.\nWon XXIII fights. Lost I (to a goose).', 2.6, 1.2, { bg: '#2a1c14', accent: '#e9c46a' });
    glad.position.set(15.6, 2.2, 8.78);
    glad.rotation.y = Math.PI;
    s.add(glad);
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.08, 24), new THREE.MeshStandardMaterial({ color: 0x8a1022, roughness: 0.6 }));
    shield.rotation.x = Math.PI / 2;
    shield.position.set(19, 2.6, 8.75);
    s.add(shield);
    // puzzle console #2
    const c2 = P.makeConsole({ title: 'AQVILA LOCK', color: '#ffcc4d' });
    this.add(c2.group, SPOTS.romanPanel.x, 0, SPOTS.romanPanel.z, -Math.PI / 2);
    this.addBoxCollider(SPOTS.romanPanel.x, SPOTS.romanPanel.z, 0.8, 0.6, Math.PI / 2);
    this.addUpdater((dt) => c2.update(dt));
    this.refs.console2 = c2;
    this.refs.panel2It = this.addInteractable({ id: 'panel2', pos: new THREE.Vector3(SPOTS.romanPanel.x, 1.2, SPOTS.romanPanel.z), prompt: 'Inspect numeral lock', enabled: false });
    const e = P.makeExitSign();
    e.position.set(12.25, 6.6, 0);
    e.rotation.y = Math.PI / 2;
    s.add(e);
  }

  // ------------------------------------------------------------------ egyptian wing
  _egypt() {
    const s = this.scene, n = this.night;
    const E = EGYPT;
    const sandWall = new THREE.MeshStandardMaterial({ map: tex('plaster'), color: 0xc9a46c, roughness: 0.9 });
    const sandFloor = new THREE.MeshStandardMaterial({ map: tex('stone'), color: 0xd8b98a, roughness: 0.85 });
    const sandstone = P.mat('sandstone', { color: 0xc8a978, roughness: 0.85 });
    const darkStone = P.mat('egyptDark', { color: 0x8a7350, roughness: 0.9 });
    const basalt = P.mat('basalt', { color: 0x1b1a1f, roughness: 0.35, metalness: 0.2 });
    const gold = P.MATS.brass();
    const lapis = P.mat('lapis', { color: 0x1f3d8a, roughness: 0.5 });
    this.floor(E.x0, E.x1, E.z0, E.z1, sandFloor, 0, 3);
    this.ceiling(E.x0, E.x1, E.z0, E.z1, E.h, this.mats.darkCeil);
    this.wallZ(E.x0, E.z0, E.z1, E.h, sandWall, [{ c: SPOTS.egyptDoor.z, w: 3.2, h: 4.4 }], 3);
    this.wallZ(E.x1, E.z0, E.z1, E.h, sandWall, [], 3);
    this.wallX(E.z0, E.x0, E.x1, E.h, sandWall, [], 3);
    this.wallX(E.z1, E.x0, E.x1, E.h, sandWall, [{ c: SPOTS.romanNorthDoor.x, w: 3.2, h: 4.4 }], 3);

    // doorways through the double walls (dinosaur hall ↔ egypt ↔ rome)
    const doorFrame = (axis, cx, cz) => {
      const depth = 0.95, jw = 0.26;
      for (const sd of [-1, 1]) {
        const o = sd * (1.6 - jw / 2);
        const j = axis === 'z' ? P.box(depth, 4.4, jw, sandstone, cx, 0, cz + o) : P.box(jw, 4.4, depth, sandstone, cx + o, 0, cz);
        s.add(j);
        if (axis === 'z') this.addCollider(cx - depth / 2, cx + depth / 2, cz + o - jw / 2, cz + o + jw / 2);
        else this.addCollider(cx + o - jw / 2, cx + o + jw / 2, cz - depth / 2, cz + depth / 2);
      }
      s.add(axis === 'z' ? P.box(depth + 0.1, 0.6, 3.5, sandstone, cx, 4.3, cz) : P.box(3.5, 0.6, depth + 0.1, sandstone, cx, 4.3, cz));
      s.add(axis === 'z' ? P.box(depth + 0.14, 0.1, 3.6, gold, cx, 4.4, cz) : P.box(3.6, 0.1, depth + 0.14, gold, cx, 4.4, cz));
    };
    doorFrame('z', (E.x0 + 15) / 2, SPOTS.egyptDoor.z);
    doorFrame('x', SPOTS.romanNorthDoor.x, (E.z1 - 9) / 2);

    // painted frieze of hieroglyphs running around the walls
    const [fc, fx] = makeCanvas(1024, 128);
    fx.fillStyle = '#d9b57a'; fx.fillRect(0, 0, 1024, 128);
    fx.fillStyle = '#8a2a18'; fx.fillRect(0, 0, 1024, 10); fx.fillRect(0, 118, 1024, 10);
    fx.fillStyle = '#1f3d8a'; fx.fillRect(0, 12, 1024, 5); fx.fillRect(0, 111, 1024, 5);
    GLYPH_KEYS.forEach((k, i) => drawGlyph(fx, k, 64 + i * 128, 64, 80, ['#1f3d8a', '#8a2a18', '#1a1a1a'][i % 3]));
    const frieze = (len, x, z, ry) => {
      const t = canvasTexture(fc);
      t.wrapS = THREE.RepeatWrapping;
      t.repeat.set(len / 7, 1);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.9), new THREE.MeshStandardMaterial({ map: t, roughness: 0.8 }));
      m.position.set(x, 5.6, z);
      m.rotation.y = ry;
      s.add(m);
    };
    const W2 = this.wallT / 2 + 0.01;
    frieze(E.x1 - E.x0, (E.x0 + E.x1) / 2, E.z0 + W2, 0);
    frieze(E.x1 - E.x0, (E.x0 + E.x1) / 2, E.z1 - W2, Math.PI);
    frieze(E.z1 - E.z0, E.x1 - W2, (E.z0 + E.z1) / 2, -Math.PI / 2);
    frieze(E.z1 - E.z0, E.x0 + W2, (E.z0 + E.z1) / 2, Math.PI / 2);

    // north wall mural: the eye that watches the hall
    const [mc, mx] = makeCanvas(1024, 512);
    const sky = mx.createLinearGradient(0, 0, 0, 512);
    sky.addColorStop(0, '#2a1a3a'); sky.addColorStop(0.55, '#c86a2a'); sky.addColorStop(1, '#e8c07a');
    mx.fillStyle = sky; mx.fillRect(0, 0, 1024, 512);
    mx.fillStyle = '#7a4a1e';
    for (const [px, w, h] of [[180, 300, 210], [470, 380, 280], [800, 260, 170]]) { mx.beginPath(); mx.moveTo(px - w / 2, 512); mx.lineTo(px, 512 - h); mx.lineTo(px + w / 2, 512); mx.fill(); }
    mx.fillStyle = '#ffd36a'; mx.beginPath(); mx.arc(512, 120, 54, 0, 7); mx.fill();
    drawGlyph(mx, 'eye', 512, 260, 190, '#14244f');
    mx.fillStyle = '#f3e6c4'; mx.font = 'bold 54px Georgia, serif'; mx.textAlign = 'center';
    mx.fillText('THE LAND OF THE PHARAOHS', 512, 60);
    const mural = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), new THREE.MeshStandardMaterial({ map: canvasTexture(mc), roughness: 0.8 }));
    mural.position.set((E.x0 + E.x1) / 2, 3.2, E.z0 + W2);
    s.add(mural);

    // the four pillars (the Pharaoh's Lock code)
    this.refs.pillars = [];
    EGYPT_PILLARS.forEach(({ n: num, glyph, x, z }) => {
      const pg = new THREE.Group();
      pg.add(P.box(1.4, 0.3, 1.4, darkStone, 0, 0, 0));
      pg.add(P.box(1.1, E.h - 0.6, 1.1, sandstone, 0, 0.3, 0));
      pg.add(P.box(1.4, 0.3, 1.4, darkStone, 0, E.h - 0.3, 0));
      const [pc, px] = makeCanvas(256, 768);
      px.fillStyle = '#e3c992'; px.fillRect(0, 0, 256, 768);
      for (let i = 0; i < 600; i++) { px.fillStyle = `rgba(90,60,20,${Math.random() * 0.1})`; px.fillRect(Math.random() * 256, Math.random() * 768, 3, 3); }
      px.strokeStyle = '#8a2a18'; px.lineWidth = 10; px.strokeRect(12, 12, 232, 744);
      px.fillStyle = '#1f3d8a'; px.fillRect(12, 250, 232, 10); px.fillRect(12, 600, 232, 10);
      drawStrokes(px, num, 128, 140, 150, '#b0301a');
      drawGlyph(px, glyph, 128, 430, 220, '#14244f');
      for (let i = 0; i < 4; i++) drawGlyph(px, GLYPH_KEYS[(num * 3 + i) % GLYPH_KEYS.length], 50 + (i % 2) * 156, 650 + Math.floor(i / 2) * 70, 50, 'rgba(60,40,20,0.55)');
      const ptex = canvasTexture(pc);
      const pmat = new THREE.MeshStandardMaterial({ map: ptex, roughness: 0.75 });
      for (let f = 0; f < 4; f++) {
        const pl = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 3.0), pmat);
        const a = (f * Math.PI) / 2;
        pl.position.set(Math.sin(a) * 0.56, 2.05, Math.cos(a) * 0.56);
        pl.rotation.y = a;
        pg.add(pl);
      }
      this.add(pg, x, 0, z);
      this.addBoxCollider(x, z, 1.4, 1.4);
      const it = this.addInteractable({ id: 'pillar' + num, pos: new THREE.Vector3(x, 1.7, z), prompt: 'Read the pillar', enabled: false, radius: 2.9 });
      this.refs.pillars.push({ n: num, glyph, it, x, z });
    });

    // puzzle console: the Pharaoh's Lock
    const ce = P.makeConsole({ title: "PHARAOH'S LOCK", color: '#e9c46a' });
    this.add(ce.group, SPOTS.egyptPanel.x, 0, SPOTS.egyptPanel.z);
    this.addBoxCollider(SPOTS.egyptPanel.x, SPOTS.egyptPanel.z, 0.8, 0.6);
    this.addUpdater((dt) => ce.update(dt));
    this.refs.consoleE = ce;
    this.refs.panelEIt = this.addInteractable({ id: 'panelE', pos: new THREE.Vector3(SPOTS.egyptPanel.x, 1.2, SPOTS.egyptPanel.z), prompt: "Open the Pharaoh's Lock", enabled: false });

    // the dais and THE SARCOPHAGUS (it opens)
    const SC = SPOTS.sarcophagus;
    const dais = new THREE.Mesh(boxUV(4.6, 0.45, 6, 2), new THREE.MeshStandardMaterial({ map: tex('stone'), color: 0x9a7f58, roughness: 0.85 }));
    dais.position.set(SC.x, 0.225, SC.z);
    dais.receiveShadow = true;
    s.add(dais);
    s.add(P.box(4.7, 0.06, 6.1, gold, SC.x, 0.45, SC.z));
    s.add(P.box(2.6, 0.22, 0.7, darkStone, SC.x, 0, SC.z + 3.3));
    this.addCollider(SC.x - 2.3, SC.x + 2.3, SC.z - 3, SC.z + 3);
    const [sc, sx] = makeCanvas(512, 256);
    for (let i = 0; i < 16; i++) { sx.fillStyle = i % 2 ? '#1f3d8a' : '#d4a43a'; sx.fillRect(i * 32, 0, 32, 256); }
    sx.fillStyle = '#d4a43a'; sx.fillRect(0, 96, 512, 64);
    GLYPH_KEYS.forEach((k, i) => drawGlyph(sx, k, 32 + i * 64, 128, 50, '#14244f'));
    const sarcMat = new THREE.MeshStandardMaterial({ map: canvasTexture(sc), roughness: 0.45, metalness: 0.4 });
    const inside = P.mat('sarcInside', { color: 0x1a120a, roughness: 1 });
    const sarc = new THREE.Group();
    const bw = 1.3, bh = 0.9, bl = 2.6, th = 0.1;
    sarc.add(P.box(bw, th, bl, inside, 0, 0, 0));
    sarc.add(P.box(th, bh, bl, sarcMat, -bw / 2 + th / 2, 0, 0));
    sarc.add(P.box(th, bh, bl, sarcMat, bw / 2 - th / 2, 0, 0));
    sarc.add(P.box(bw, bh, th, sarcMat, 0, 0, -bl / 2 + th / 2));
    sarc.add(P.box(bw, bh, th, sarcMat, 0, 0, bl / 2 - th / 2));
    sarc.add(P.box(bw - 2 * th, 0.02, bl - 2 * th, inside, 0, th, 0));
    this.add(sarc, SC.x, 0.45, SC.z);
    // the lid, with a golden pharaoh face at the head (north) end
    const lid = new THREE.Group();
    const [lc, lx] = makeCanvas(256, 512);
    lx.fillStyle = '#d4a43a'; lx.fillRect(0, 0, 256, 512);
    for (let i = 0; i < 9; i++) { lx.fillStyle = i % 2 ? '#1f3d8a' : '#e9c46a'; lx.fillRect(40, 150 + i * 22, 176, 22); }
    drawGlyph(lx, 'ankh', 128, 400, 120, '#14244f');
    drawGlyph(lx, 'scarab', 128, 90, 110, '#14244f');
    const lidTop = new THREE.Mesh(new THREE.BoxGeometry(bw + 0.06, 0.16, bl + 0.06), [sarcMat, sarcMat, new THREE.MeshStandardMaterial({ map: canvasTexture(lc), roughness: 0.4, metalness: 0.5 }), sarcMat, sarcMat, sarcMat]);
    lidTop.castShadow = true;
    lid.add(lidTop);
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), gold);
    face.scale.set(1, 0.55, 1.15);
    face.position.set(0, 0.08, -bl / 2 + 0.42);
    lid.add(face);
    for (const sd of [-1, 1]) lid.add(P.box(0.14, 0.06, 0.6, lapis, sd * 0.3, 0.06, -bl / 2 + 0.55));
    lid.position.set(SC.x, 0.45 + bh + 0.08, SC.z);
    s.add(lid);
    this.refs.sarcLid = lid;
    this.refs.sarcLidBase = lid.position.clone();
    // the mummy lies inside (head north). holder → pivot (at the hips) → person
    const mummy = makeMummy();
    const holder = new THREE.Group();
    const pivot = new THREE.Group();
    holder.add(pivot);
    pivot.add(mummy.group);
    mummy.group.position.y = -0.92;
    pivot.rotation.x = -Math.PI / 2;
    mummy.anim.sit = 0;
    mummy.setMode('liesit');
    mummy.update(0);
    holder.position.set(SC.x, 0.45 + th + 0.16, SC.z + 0.05);
    s.add(holder);
    this.refs.mummy = { person: mummy, holder, pivot, home: holder.position.clone() };
    this.addUpdater((dt) => mummy.update(dt));

    // Anubis statues guarding the coffin (one knocked over by a certain dinosaur)
    const anubis = () => {
      const a = new THREE.Group();
      a.add(P.box(1.0, 0.7, 1.4, darkStone, 0, 0, 0));
      a.add(P.box(0.62, 1.2, 0.5, basalt, 0, 0.7, -0.1));
      a.add(P.box(0.66, 0.5, 0.9, basalt, 0, 0.7, 0.15)); // lap
      for (const sd of [-1, 1]) a.add(P.box(0.18, 0.6, 0.2, basalt, sd * 0.2, 0.7, 0.55)); // shins
      const collar = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 6, 16), gold);
      collar.rotation.x = Math.PI / 2;
      collar.position.set(0, 1.86, -0.1);
      a.add(collar);
      const head = new THREE.Group();
      head.add(P.box(0.38, 0.36, 0.42, basalt, 0, 0, 0));
      head.add(P.box(0.18, 0.14, 0.42, basalt, 0, 0.04, 0.34)); // snout
      for (const sd of [-1, 1]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.42, 4), basalt);
        ear.position.set(sd * 0.12, 0.5, -0.06);
        head.add(ear);
        const eye = P.box(0.06, 0.03, 0.02, gold, sd * 0.1, 0.22, 0.21);
        head.add(eye);
      }
      head.position.set(0, 1.9, -0.05);
      a.add(head);
      a.scale.setScalar(1.5);
      return P.shadowAll(a);
    };
    for (const sd of [-1, 1]) {
      this.add(anubis(), SC.x + sd * 3.4, 0, SC.z - 2.6);
      this.addBoxCollider(SC.x + sd * 3.4, SC.z - 2.6, 1.6, 2.2);
    }
    const fallen = anubis();
    if (n) {
      this.add(fallen, 35.4, 0.75, -15.4, 0);
      fallen.rotation.set(0.15, -0.6, Math.PI / 2);
      fallen.updateMatrixWorld(true);
      const bb = new THREE.Box3().setFromObject(fallen);
      this.addCollider(bb.min.x + 0.2, bb.max.x - 0.2, bb.min.z + 0.2, bb.max.z - 0.2);
    } else {
      this.add(fallen, 35.6, 0, -15.4, -Math.PI / 2);
      this.addBoxCollider(35.6, -15.4, 2.2, 1.6);
    }

    // obelisk
    const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.5, 6, 4, 1), sandstone);
    ob.rotation.y = Math.PI / 4;
    ob.position.set(36.6, 3.3, -34.2);
    ob.castShadow = true;
    s.add(ob);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.33, 0.6, 4), gold);
    tip.rotation.y = Math.PI / 4;
    tip.position.set(36.6, 6.6, -34.2);
    s.add(tip);
    s.add(P.box(1.4, 0.3, 1.4, darkStone, 36.6, 0, -34.2));
    this.addBoxCollider(36.6, -34.2, 1.4, 1.4);
    // pyramid model in a case
    const pyr = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.6, 4), P.mat('pyr', { color: 0xe0c48a, roughness: 0.8 }));
    cone.rotation.y = Math.PI / 4;
    cone.position.y = 0.3;
    pyr.add(cone);
    this.add(P.makeDisplayCase(1.4, 0.9, 1.4, pyr), 19.6, 0, -34.4);
    this.addBoxCollider(19.6, -34.4, 1.5, 1.5);
    // canopic jars on a low table
    s.add(P.box(0.7, 0.7, 2.4, darkStone, 16.2, 0, -31.6));
    this.addCollider(15.8, 16.6, -32.85, -30.35);
    ['jackal', 'falcon', 'baboon', 'human'].forEach((kind, i) => {
      const j = new THREE.Group();
      j.add(new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.08, 0.32, 12), P.mat('alabaster', { color: 0xe9e0cc, roughness: 0.5 })));
      const hd = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), [gold, basalt, P.mat('alabaster', { color: 0xe9e0cc, roughness: 0.5 }), darkStone][i]);
      hd.position.y = 0.22;
      j.add(hd);
      j.position.set(16.2, 0.86, -32.35 + i * 0.5);
      s.add(j);
    });

    // plaques
    const plaque = (title, body, x, z, ry) => this.add(P.makePlaqueStand(title, body, { bg: '#2a1c0c', accent: '#d4a43a' }), x, 0, z, ry);
    plaque('EGYPTIAN NUMBERS', 'Ancient Egyptians counted with lines:\n| = 1    || = 2    ||| = 3    |||| = 4\n(10 was a little upside-down U. Fancy.)', 17.6, -20.8, -2.5);
    plaque('THE MUMMY', 'Wrapped in about 20 layers of linen, 3,000 years ago.\nFavorite food: unknown. (Probably not donuts.)', 30.8, -20.6, 0);
    plaque('THE ANKH', 'The Egyptian symbol of life. It looks like a key.\nIt is not a key. We checked.', 21.6, -14.6, Math.PI);
    plaque('SCARAB BEETLE', 'Scarabs roll balls of poop across the sand.\nThe Egyptians thought this was beautiful. They were right.', 33.6, -31.6, -Math.PI / 2);

    // braziers with flickering fire
    this.refs.flames = [];
    for (const [bx, bz] of [[18.2, -26.6], [23.0, -18.6], [21.0, -11.6], [33.0, -28.2]]) {
      const br = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.1, 5), gold);
        leg.position.set(Math.cos(a) * 0.22, 0.52, Math.sin(a) * 0.22);
        leg.rotation.set(Math.sin(a) * 0.2, 0, -Math.cos(a) * 0.2);
        br.add(leg);
      }
      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.2, 0.24, 14), gold);
      bowl.position.y = 1.1;
      br.add(bowl);
      this.add(P.shadowAll(br, true, false), bx, 0, bz);
      this.addBoxCollider(bx, bz, 0.7, 0.7);
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 8), new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
      flame.position.set(bx, 1.5, bz);
      s.add(flame);
      const fl = new THREE.PointLight(0xff9a40, n ? 7 : 2, 10, 2);
      fl.position.set(bx, 1.9, bz);
      s.add(fl);
      this.refs.flames.push({ flame, light: fl, base: fl.intensity, ph: bx * 3.1 });
    }
    let ft = 0;
    this.addUpdater((dt) => {
      ft += dt;
      for (const f of this.refs.flames) {
        const k = 0.8 + Math.sin(ft * 13 + f.ph) * 0.1 + Math.sin(ft * 7.3 + f.ph * 2) * 0.1;
        f.light.intensity = f.base * k;
        f.flame.scale.set(1, 0.85 + k * 0.3, 1);
        f.flame.rotation.y += dt * 2;
      }
    });

    // signs
    const sign = (text, x, y, z, ry) => {
      const sg = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.1), new THREE.MeshStandardMaterial({ map: signTexture(text, { w: 1024, h: 220, bg: '#2a1c0c', fg: '#e9c46a', font: 'bold 104px Georgia, serif', border: '#d4a43a' }), emissive: 0xffe0a0, emissiveIntensity: n ? 0.12 : 0.02 }));
      sg.position.set(x, y, z);
      sg.rotation.y = ry;
      s.add(sg);
    };
    sign('EGYPTIAN WING', 14.78, 5.6, SPOTS.egyptDoor.z, -Math.PI / 2);
    sign('ROMAN EMPIRE', SPOTS.romanNorthDoor.x, 5.4, E.z1 - W2 - 0.01, Math.PI);
    sign('EGYPTIAN WING', SPOTS.romanNorthDoor.x, 5.6, -8.78, 0);
  }

  // ------------------------------------------------------------------ collectibles
  _collectibles() {
    if (!this.night) return;
    this.addCollectible('lobby_desk', 1.6, 1.45, 4.2, 0);
    this.addCollectible('office_locker', -14.5, 0.6, 3.6, 3);
    this.addCollectible('dino_tri', -12.6, 0.8, -21.5, 1);
    this.addCollectible('dino_meteor', 12.3, 0.6, -42.8, 4);
    this.addCollectible('dino_mural', -13, 0.6, -44.5, 2);
    this.addCollectible('roman_caligula', 24.75, 2.0, 8, 0);
    this.addCollectible('roman_chariot', 25, 1.55, 0, 3);
    this.addCollectible('roman_amphora', 38.3, 0.6, -6.6, 1);
    this.addCollectible('egypt_jars', 16.4, 0.95, -29.6, 2);
    this.addCollectible('egypt_obelisk', 38.0, 0.6, -36.0, 4);
  }

  // ------------------------------------------------------------------ day visitors
  _visitors() {
    const r = mulberry32(99);
    this.visitors = [];
    const areas = [
      { minX: -9, maxX: 9, minZ: -8, maxZ: 2 },
      { minX: -12, maxX: 12, minZ: -44, maxZ: -12, avoid: { minX: -5.5, maxX: 5.5, minZ: -38, maxZ: -21 } },
      { minX: 14, maxX: 38, minZ: -7, maxZ: 7, avoid: { minX: 22, maxX: 28.5, minZ: -2, maxZ: 2 } },
    ];
    const pickPoint = (a) => {
      for (let k = 0; k < 20; k++) {
        const x = a.minX + r() * (a.maxX - a.minX), z = a.minZ + r() * (a.maxZ - a.minZ);
        if (a.avoid && x > a.avoid.minX && x < a.avoid.maxX && z > a.avoid.minZ && z < a.avoid.maxZ) continue;
        return new THREE.Vector3(x, 0, z);
      }
      return new THREE.Vector3((a.minX + a.maxX) / 2, 0, a.maxZ);
    };
    for (let i = 0; i < 14; i++) {
      const area = areas[i % areas.length];
      const v = makeVisitor(r);
      const p = pickPoint(area);
      v.group.position.copy(p);
      this.scene.add(v.group);
      this.visitors.push({ p: v, area, target: pickPoint(area), wait: r() * 4 });
    }
    this.addUpdater((dt) => {
      for (const vis of this.visitors) {
        const g = vis.p.group;
        if (vis.wait > 0) {
          vis.wait -= dt;
          vis.p.setMode('idle');
        } else {
          const d = vis.target.clone().sub(g.position);
          const dist = d.length();
          if (dist < 0.3) { vis.wait = 2 + r() * 5; vis.target = pickPoint(vis.area); }
          else {
            d.normalize();
            g.position.addScaledVector(d, Math.min(dist, 1.1 * dt));
            const yaw = Math.atan2(d.x, d.z);
            let dy = yaw - g.rotation.y;
            while (dy > Math.PI) dy -= Math.PI * 2;
            while (dy < -Math.PI) dy += Math.PI * 2;
            g.rotation.y += dy * Math.min(1, dt * 6);
            vis.p.setMode('walk', 1.1);
          }
        }
        // gently push the player away / be pushed
        const pl = this.game.player;
        if (pl) {
          const dx = pl.pos.x - g.position.x, dz = pl.pos.z - g.position.z, dd = Math.hypot(dx, dz);
          if (dd < 0.6 && dd > 0.001) { pl.pos.x += (dx / dd) * (0.6 - dd); pl.pos.z += (dz / dd) * (0.6 - dd); }
        }
        vis.p.update(dt);
      }
    });
  }

  makeAaron() {
    const a = new Person({ shirt: 0x8fb3e0, pants: 0x1b2440, cap: true, badge: true, nameTag: true, hair: 0x111111, skin: 0xc68e64 });
    return a;
  }
}
