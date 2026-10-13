import * as THREE from 'three';
import { Museum, SPOTS, EGYPT } from '../world/museum.js';
import { Runner, LANES, RUN_LENGTH } from '../world/runner.js';
import { logEvent } from '../core/analytics.js';
import { Maze, KEY_COLORS, HANDMADE, STATION_NAMES } from '../world/maze.js';
import { makeDonut, makeFlashlightModel, box, MATS } from '../world/props.js';
import { drawMeTube, drawLocked, drawHintScreen, drawLogin, drawDenied } from '../world/screens.js';
import { Ease } from '../core/scheduler.js';
import { showGameOver } from '../ui/computer.js';
import { lerp } from '../core/util.js';
import { GLYPHS, EGYPT_NUMERAL } from '../world/glyphs.js';
import { TOTAL_DONUTS } from './constants.js';

export const CHAPTERS = [
  { id: 'intro', name: 'Prologue — Session Expired', blurb: 'The security office, 11:52 PM' },
  { id: 'dino', name: 'Chapter 1 — The King', blurb: 'Dinosaur Hall' },
  { id: 'egypt', name: 'Chapter 2 — Curse of the Pharaoh', blurb: 'The Egyptian Wing' },
  { id: 'roman', name: 'Chapter 3 — All Roads', blurb: 'The Roman Empire' },
  { id: 'chase', name: 'Chapter 4 — RUN', blurb: 'It is right behind you' },
  { id: 'maze', name: 'Chapter 5 — Behind the Walls', blurb: 'The Archives (they never end)' },
  { id: 'morning', name: 'Chapter 6 — Morning Shift', blurb: '7 hours later…' },
];

export const TIPS = {
  intro: 'Headphones on. It\'s a quiet night... for now.',
  dino: 'Read the plaques — museums <b>love</b> fun facts.',
  egypt: 'Ancient Egyptians wrote 10 as ∩ and 1 as |. So ∩∩||| is 23.',
  roman: 'Roman numerals: M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1.',
  chase: '← → switch lanes · ↑ jump · ↓ slide. Hitting things lets the T-Rex catch up.',
  maze: 'The archives go on... and on. Grab every donut you can, and look for strange boxes on the shelves.',
  morning: 'Good morning! Your shift ended two hours ago.',
};
const GENERAL_TIPS = [
  `There are <b>${TOTAL_DONUTS} hidden donuts</b>. They glow pink.`,
  'Sprinting burns your donut meter about twice as fast.',
  'Stuck on a puzzle? A hint costs a little donut.',
  'The mummy has a <b>serious</b> sweet tooth.',
  'Some walls hide <b>secret rooms</b>. Look for things that seem a little... off.',
  'Aaron has been Employee of the Month 11 months in a row.',
];
export function tipFor(id) {
  return Math.random() < 0.6 ? TIPS[id] : GENERAL_TIPS[Math.floor(Math.random() * GENERAL_TIPS.length)];
}

export const START = {
  intro: { meter: 100, fragments: [] },
  dino: { meter: 100, fragments: [] },
  egypt: { meter: 90, fragments: ['REX'] },
  roman: { meter: 85, fragments: ['REX', 'MUMMY'] },
  chase: { meter: 80, fragments: ['REX', 'MUMMY', '1974'] },
  maze: { meter: 75, fragments: ['REX', 'MUMMY', '1974'] },
  morning: { meter: 0, fragments: ['REX', 'MUMMY', '1974', 'ZAP', 'DONUT'] },
};

const CONTROLS = (g) => g.input.isTouch
  ? ['Left side: move', 'Right side: look', 'USE: interact', '🔦: flashlight', 'RUN: sprint (eats donuts!)']
  : ['<kbd>W A S D</kbd> move', '<kbd>Mouse</kbd> look', '<kbd>E</kbd> use', '<kbd>F</kbd> flashlight', '<kbd>Shift</kbd> sprint (burns donuts!)'];

export function runChapter(g, id, mode) {
  const fn = { intro, dino, egypt, roman, chase, maze, morning }[id];
  return fn(g, null, mode);
}

// ------------------------------------------------------------------ helpers
const _frustum = new THREE.Frustum();
const _m = new THREE.Matrix4();
function inView(g, pos, radius = 2) {
  g.camera.updateMatrixWorld();
  _m.multiplyMatrices(g.camera.projectionMatrix, g.camera.matrixWorldInverse);
  _frustum.setFromProjectionMatrix(_m);
  return _frustum.intersectsSphere(new THREE.Sphere(pos, radius));
}
function lookingAt(g, pos, minDot = 0.9) {
  const d = pos.clone().sub(g.camera.position).normalize();
  return d.dot(g.player.forward()) > minDot;
}
function dist2D(g, p) {
  return Math.hypot(g.player.pos.x - p.x, g.player.pos.z - p.z);
}

function setupMonitor(g, lvl, state) {
  // one drawing loop per level; later calls just switch what's on screen
  if (lvl.screenState) { Object.assign(lvl.screenState, state); return lvl.screenState; }
  lvl.screenState = state;
  const mon = lvl.refs.monitor;
  let t = 0, acc = 0;
  lvl.addUpdater((dt) => {
    t += dt; acc += dt;
    if (acc < 1 / 15) return;
    acc = 0;
    const x = mon.ctx;
    if (state.mode === 'metube') drawMeTube(x, t, state.countdown);
    else if (state.mode === 'expired') drawLocked(x, t);
    else if (state.mode === 'login') drawLogin(x, t, state.pw || '', state.msg || '');
    else if (state.mode === 'hint') drawHintScreen(x, t);
    else if (state.mode === 'denied') drawDenied(x, t);
    else drawLocked(x, t, 'LOCKED', 'Solve the puzzles to log in.');
    mon.texture.needsUpdate = true;
  });
  return state;
}

function nightSetup(g, lvl) {
  g.audio.setAmbient('night');
  g.hud.show(true);
  g.hud.showMeter(true);
  g.hud.setFragments(g.save.fragments);
  g.meter.enabled = true;
  g.meter.drain = 0.5;
  g.meter.onEmpty = () => g.failed('YOU FELL ASLEEP', 'Your donut meter hit zero and you dozed off on the job.<br>Tip: some walls hide secret rooms with donuts in them. Sprinting burns donuts faster.');
  g.player.giveFlashlight(true);
  g.camera.fov = g.save.settings.fov;
  g.camera.updateProjectionMatrix();
  lvl.refs.guard.group.visible = false;
  for (const d of lvl.refs.boxDonuts) d.visible = false;
  lvl.refs.deskFlashlight.visible = false;
  setupMonitor(g, lvl, { mode: 'locked' });
}

// ================================================================== PROLOGUE
async function intro(g) {
  const lvl = new Museum(g, { time: 'night' });
  await g.loadLevel(lvl);
  g.hud.setFade(1, 0);
  g.audio.setAmbient('office');
  g.audio.stopMusic(0.5);
  const screen = { mode: 'metube', countdown: 45 };
  setupMonitor(g, lvl, screen);
  const guard = lvl.refs.guard;
  const donutInHand = makeDonut({ frosting: 0, scale: 0.6 });
  donutInHand.position.set(0, -0.06, 0.05);
  guard.attachToHand(donutInHand, 1);
  guard.setMode('eat');
  let munchT = 0;
  lvl.addUpdater((dt) => {
    if (guard.anim.mode !== 'eat' || !guard.group.visible) return;
    munchT += dt;
    if (munchT > 2.86) { munchT = 0; g.audio.play('munch', { vol: 0.5 }); }
  });
  g.player.enabled = false;
  g.player.hasFlashlight = false;
  g.player.setFlash(false);
  g.player.flModel.visible = false;
  g.camera.fov = 55;
  g.camera.updateProjectionMatrix();

  await g.cutscene(async () => {
    g.camSet([-13.6, 2.5, 3.6], [-18.2, 1.0, -0.2]);
    g.hud.caption('CITY MUSEUM OF NATURAL HISTORY\n11:52 PM');
    g.audio.play('tick');
    await g.wait(2.8);
    g.hud.caption('Night shift #47.');
    await g.wait(2.2);
    g.hud.caption('');
    g.fadeIn(2);
    g.audio.playMusic('office');
    g.camTo([-15.2, 2.0, 2.2], [-18.4, 1.1, -0.1], 7, Ease.sine);
    await g.wait(1.5);
    await g.say('guard01');
    g.audio.play('radio');
    await g.wait(0.4);
    await g.say('aaron01');
    g.audio.play('radio');
    await g.say('guard02');
    // over-the-shoulder: the session timer
    g.audio.stopMusic(1.5);
    await g.camTo([-17.75, 1.42, -0.62], [-18.95, 1.16, 0.02], 1.6);
    screen.countdown = 10;
    for (let i = 10; i > 0; i--) {
      screen.countdown = i;
      g.audio.play(i <= 5 ? 'beep' : 'tick', { dur: 0.06 });
      await g.wait(0.55);
    }
    screen.countdown = 0;
    screen.mode = 'expired';
    g.audio.play('error');
    guard.setMode('sit');
    await g.say('museos01');
    await g.camTo([-16.6, 1.75, 1.5], [-18.5, 1.15, -0.1], 1.2);
    await g.say('guard03');
    guard.setMode('type');
    screen.mode = 'login';
    await g.wait(0.5);
    // the login screen, up close
    g.computer.open();
    await g.wait(0.6);
    await g.computer.type('donut123');
    await g.computer.press('login');
    g.computer.setMsg('INCORRECT PASSWORD');
    await g.say('guard04');
    g.computer.clear();
    g.computer.setMsg('');
    await g.computer.type('donut123', { speed: 0.2 });
    await g.computer.press('login');
    g.computer.setMsg('INCORRECT PASSWORD (attempt 2 of ∞)');
    g.shake(0.08, 0.3);
    await g.say('guard05');
    await g.wait(0.4);
    await g.computer.press('hint');
    g.computer.showHint();
    g.audio.play('sting', { vol: 0.6 });
    await g.say('museos02');
    await g.say('museos03');
    g.computer.close();
    screen.mode = 'hint';
    // he stands up
    guard.setMode('idle');
    guard.group.position.set(-17.45, 0, 0.1);
    guard.group.rotation.y = Math.PI / 2;
    g.camSet([-15.7, 1.65, 0.6], [-17.45, 1.5, 0.1]);
    await g.wait(0.4);
    guard.setMode('point');
    await g.say('guard06');
    // gear up
    guard.setMode('idle');
    lvl.refs.deskFlashlight.visible = false;
    const fl = makeFlashlightModel();
    fl.rotation.x = Math.PI / 2;
    guard.attachToHand(fl, 1);
    donutInHand.visible = false;
    g.audio.play('flashlight');
    for (const d of lvl.refs.boxDonuts) d.visible = false;
    g.audio.play('pickup');
    await g.say('guard07');
    // into first person
    await g.camTo([-17.45, 1.65, 0.1], [-12, 1.55, 0.1], 1.4);
    guard.group.visible = false;
  });

  g.player.setPose(-17.45, 0.1, -Math.PI / 2, -0.03);
  return dino(g, lvl, 'fromIntro');
}

// ================================================================== CHAPTER 1: THE KING
async function dino(g, lvl, mode) {
  const fromIntro = mode === 'fromIntro';
  if (!lvl) {
    lvl = new Museum(g, { time: 'night' });
    await g.loadLevel(lvl);
    g.player.setPose(SPOTS.officeStart.x, SPOTS.officeStart.z, -Math.PI / 2);
  }
  g.checkpoint('dino');
  nightSetup(g, lvl);
  g.setClock(0, true);
  g.hud.setFade(0, 0.8);
  g.audio.playMusic('dino');
  g.setMode('explore');
  g.objective('Go to the Dinosaur Hall', SPOTS.dinoDoor);
  if (fromIntro || mode === 'fresh') {
    g.hud.toast('🍩 This is your <b>DONUT METER</b>. It drains over time. If it hits zero, you fall asleep!', 'gold');
    g.hud.controlsHint(CONTROLS(g));
    g.wait(9).then(() => g.hud.controlsHint(null));
  }
  const trex = lvl.refs.trex;
  const trexHead = new THREE.Vector3(SPOTS.trex.x + 1.4, 5.3, SPOTS.trex.z + 4.8);

  // entering the hall
  lvl.addTrigger({
    minX: -15, maxX: 15, minZ: -46, maxZ: -10.6,
    onEnter: () => {
      g.hud.titleCard('CHAPTER 1', 'THE KING');
      g.objective('Find the puzzle in the Dinosaur Hall', SPOTS.dinoPanel);
      lvl.refs.panel1It.enabled = true;
    },
  });
  let sawRex = false;
  lvl.addUpdater(() => {
    if (!sawRex && g.mode === 'explore' && g.player.pos.z < -11 && lookingAt(g, trexHead, 0.93) && dist2D(g, SPOTS.trex) < 24) {
      sawRex = true;
      g.audio.play('sting', { vol: 0.5 });
      g.say('guard08');
    }
  });

  // the cipher panel
  const solved = await new Promise((resolve) => {
    lvl.refs.panel1It.onUse = async () => {
      const ok = await g.openPuzzle('caesar', 'REX');
      if (ok) { lvl.refs.panel1It.enabled = false; resolve(true); }
    };
  });
  void solved;
  lvl.refs.console1.draw(['SOLVED', 'KEY: REX'], '#6dff9e', 'NEXT: EGYPT WING');
  await g.say('museos04');
  g.say('guard09');
  g.objective('Go to the Egyptian Wing', SPOTS.egyptDoor);

  // ...and then the T-Rex is gone.
  await g.until(() => dist2D(g, SPOTS.dinoPanel) > 6 || g.player.pos.z > -16);
  await g.until(() => !inView(g, new THREE.Vector3(SPOTS.trex.x, 3, SPOTS.trex.z), 5.5));
  trex.group.visible = false;
  lvl.refs.footprints.visible = true;
  lvl.cctvState.trexGone = true;
  g.audio.play('clatter');
  g.audio.play('stomp', { delay: 0.6, vol: 0.6 });
  g.shake(0.15, 0.6);
  g.player.flicker(1.2);
  g.audio.stopMusic(0.3);
  await g.wait(0.8);
  g.say('guard10');
  g.objective('...Turn around.', SPOTS.trex);
  const t0 = g.sched.time;
  await g.until(() => lookingAt(g, new THREE.Vector3(SPOTS.trex.x, 2.5, SPOTS.trex.z), 0.86) || g.sched.time - t0 > 9);
  g.audio.play('sting');
  g.audio.play('heartbeat', { delay: 0.4 });
  g.audio.playMusic('hunt');
  g.objective('');
  await g.say('guard11');
  await g.say('guard12');
  g.checkpoint('egypt');
  g.say('guard13');
  return egypt(g, lvl);
}

// ================================================================== CHAPTER 2: CURSE OF THE PHARAOH
async function egypt(g, lvl) {
  if (!lvl) {
    lvl = new Museum(g, { time: 'night' });
    await g.loadLevel(lvl);
    nightSetup(g, lvl);
    lvl.refs.trex.group.visible = false;
    lvl.refs.footprints.visible = true;
    lvl.cctvState.trexGone = true;
    lvl.refs.console1.draw(['SOLVED', 'KEY: REX'], '#6dff9e', 'NEXT: EGYPT WING');
    g.player.setPose(SPOTS.egyptDoor.x - 3, SPOTS.egyptDoor.z, -Math.PI / 2);
    g.setClock(40, true);
    g.hud.setFade(0, 0.8);
    g.audio.playMusic('tomb');
    g.setMode('explore');
  }
  g.checkpoint('egypt');
  g.objective('Follow the footprints to the Egyptian Wing', SPOTS.egyptDoor);
  const notes = g.save.solved.pillars || (g.save.solved.pillars = {});
  const pillars = lvl.refs.pillars;
  const readCount = () => pillars.filter((p) => notes[p.n]).length;
  let panelSolved = false;
  const pillarObjective = () => {
    if (panelSolved) return;
    const c = readCount();
    if (c < 4) g.objective(`Find and read the 4 pillars (${c}/4)`);
    else g.objective("Open the Pharaoh's Lock", SPOTS.egyptPanel);
  };

  // the T-Rex came through here
  lvl.addTrigger({ x: 33.4, z: -16.2, r: 4.2, onEnter: () => { if (g.mode === 'explore') g.say('guard42'); } });
  await new Promise((resolve) => lvl.addTrigger({
    minX: EGYPT.x0, maxX: EGYPT.x1, minZ: EGYPT.z0, maxZ: EGYPT.z1,
    onEnter: () => {
      g.hud.titleCard('CHAPTER 2', 'CURSE OF THE PHARAOH');
      g.audio.playMusic('egypt');
      for (const p of pillars) p.it.enabled = true;
      lvl.refs.panelEIt.enabled = true;
      pillarObjective();
      g.wait(1.4).then(async () => {
        await g.say('guard35');
        g.audio.play('radio');
        await g.say('museos13');
      });
      resolve();
    },
  }));

  for (const p of pillars) {
    p.it.onUse = () => {
      const first = !notes[p.n];
      notes[p.n] = p.glyph;
      g.persist();
      g.audio.play(first ? 'chime' : 'click');
      g.hud.toast(`📜 A pillar with <b style="letter-spacing:2px">${EGYPT_NUMERAL(p.value)}</b> and the <b>${GLYPHS[p.glyph].toUpperCase()}</b> <span style="opacity:.75">(${readCount()}/4 in your notes)</span>`, 'gold');
      if (first && readCount() === 1) g.say('guard47');
      if (first && readCount() === 4) g.say('guard36');
      pillarObjective();
    };
  }

  await new Promise((resolve) => {
    lvl.refs.panelEIt.onUse = async () => {
      const ok = await g.openPuzzle('pharaoh', 'MUMMY');
      if (ok) { lvl.refs.panelEIt.enabled = false; resolve(); }
    };
  });
  panelSolved = true;
  for (const p of pillars) p.it.enabled = false;
  lvl.refs.consoleE.draw(['SOLVED', 'KEY: MUMMY'], '#e9c46a', 'NEXT: ROMAN HALL');
  g.objective(null);
  g.audio.play('radio');
  await g.say('museos14');
  await mummyScene(g, lvl);
  g.setMode('explore');

  // something big is stomping around near the Roman Hall...
  lvl.addTrigger({
    x: SPOTS.romanNorthDoor.x, z: -12.8, r: 3.4,
    onEnter: () => {
      g.audio.play('stomp', { vol: 0.8 });
      g.audio.play('stomp', { vol: 0.6, delay: 0.7 });
      g.audio.play('growl', { delay: 1.1 });
      g.shake(0.2, 1.2);
      g.player.flicker(0.8);
      g.wait(1.4).then(() => g.say('guard14'));
    },
  });
  return roman(g, lvl, 'carry');
}

// The mummy wakes up... and it's hungry.
async function mummyScene(g, lvl) {
  const M = lvl.refs.mummy, lid = lvl.refs.sarcLid, base = lvl.refs.sarcLidBase;
  const P0 = new THREE.Vector3(SPOTS.sarcophagus.x, 0, -17.2);
  const land = new THREE.Vector3(SPOTS.sarcophagus.x, 0.92, -20.7);
  const meet = new THREE.Vector3(SPOTS.sarcophagus.x, 0.92, -19.3);
  const eye = new THREE.Vector3(P0.x, 1.65, P0.z);
  const head = new THREE.Vector3();
  const lookAtMummy = (y = 1.35) => {
    head.copy(M.holder.position);
    head.y += y - 0.92 + 0.6;
    g.camLook.lerp(head, 0.2);
    g.camera.lookAt(g.camLook);
  };
  const home = () => {
    M.holder.position.copy(M.home);
    M.holder.rotation.set(0, 0, 0);
    M.pivot.rotation.x = -Math.PI / 2;
    M.person.anim.sit = 0;
    M.person.setMode('liesit');
    lid.position.copy(base);
    lid.rotation.set(0, 0, 0);
  };
  let donut = null;
  g.player.setPose(P0.x, P0.z, 0, 0);
  await g.cutscene(async () => {
    g.camSet([eye.x, eye.y, eye.z], [SPOTS.sarcophagus.x, 1.0, SPOTS.sarcophagus.z]);
    g.audio.stopMusic(1.2);
    g.audio.play('creak');
    g.shake(0.08, 1.2);
    await g.wait(0.7);
    // a closer look at the coffin
    g.camSet([SPOTS.sarcophagus.x + 2.3, 2.1, SPOTS.sarcophagus.z + 3.6], [SPOTS.sarcophagus.x, 1.1, SPOTS.sarcophagus.z - 0.2]);
    g.say('guard37');
    // the lid grinds open...
    g.audio.play('gate');
    await g.tween(1.7, (k) => { lid.position.x = base.x + 0.95 * k; lid.rotation.z = -0.1 * k; });
    await g.tween(0.35, (k) => { lid.position.y = base.y - 0.75 * k; lid.rotation.z = -0.1 - 0.45 * k; }, Ease.in);
    g.audio.play('thud');
    g.shake(0.3, 0.5);
    await g.wait(0.6);
    // ...and it SITS UP
    g.audio.play('growl', { vol: 0.35 });
    g.audio.playMusic('tomb');
    await g.tween(1.5, (k) => {
      M.pivot.rotation.x = (-Math.PI / 2) * (1 - k);
      M.person.anim.sit = k;
    });
    g.player.flicker(0.6);
    await g.say('guard38');
    g.camSet([eye.x, eye.y, eye.z], [SPOTS.sarcophagus.x, 1.5, SPOTS.sarcophagus.z]);
    // hop out of the coffin
    const h0 = M.holder.position.clone();
    M.person.setMode('jump');
    await g.tween(0.8, (k) => {
      M.holder.position.lerpVectors(h0, land, k);
      M.holder.position.y += Math.sin(k * Math.PI) * 0.9;
      M.pivot.rotation.x = 0;
      lookAtMummy();
    }, Ease.linear);
    g.audio.play('thud', { vol: 0.6 });
    g.shake(0.15, 0.3);
    // shuffle, shuffle, shuffle
    M.person.setMode('zombie', 0.7);
    await g.tween(2.4, (k) => { M.holder.position.lerpVectors(land, meet, k); lookAtMummy(); }, Ease.linear);
    M.person.setMode('point');
    await g.say('mummy01');
    M.person.setMode('idle');
    await g.say('guard39');
    M.person.setMode('sad');
    await g.say('mummy02');
    M.person.setMode('idle');
    await g.say('guard40');
    // hand over a donut
    donut = makeDonut({ frosting: 2, scale: 0.7 });
    lvl.scene.add(donut);
    const from = new THREE.Vector3(eye.x + 0.2, 1.3, eye.z - 0.5);
    const hand = new THREE.Vector3();
    g.audio.play('whoosh', { vol: 0.4 });
    g.meter.add(-15);
    g.hud.toast('🍩 You gave the mummy a donut. <b>−15%</b>', 'pink');
    M.person.setMode('point');
    await g.tween(0.7, (k) => {
      M.person.arms[1].hand.getWorldPosition(hand);
      donut.position.lerpVectors(from, hand, k);
      donut.position.y += Math.sin(k * Math.PI) * 0.4;
      donut.rotation.x += 0.2;
    });
    M.person.setMode('munch');
    for (let i = 0; i < 3; i++) {
      g.audio.play('munch');
      await g.tween(0.55, (k) => { M.person.arms[1].hand.getWorldPosition(donut.position); donut.scale.setScalar(0.7 * (1 - (i + k) / 3.2)); });
    }
    donut.visible = false;
    M.person.setMode('wave');
    await g.say('mummy03');
    await g.say('guard41');
    // back to bed
    M.holder.rotation.y = Math.PI;
    M.person.setMode('zombie', 0.7);
    await g.tween(2.2, (k) => { M.holder.position.lerpVectors(meet, land, k); lookAtMummy(); }, Ease.linear);
    M.holder.rotation.y = 0;
    M.person.setMode('liesit');
    M.person.anim.sit = 1;
    const l0 = M.holder.position.clone();
    await g.tween(0.8, (k) => {
      M.holder.position.lerpVectors(l0, M.home, k);
      M.holder.position.y += Math.sin(k * Math.PI) * 0.9;
      lookAtMummy();
    }, Ease.linear);
    g.audio.play('thud', { vol: 0.5 });
    await g.tween(1.0, (k) => { M.pivot.rotation.x = (-Math.PI / 2) * k; M.person.anim.sit = 1 - k; });
    g.audio.play('gate');
    const lp = lid.position.clone(), lr = lid.rotation.z;
    await g.tween(1.3, (k) => { lid.position.lerpVectors(lp, base, k); lid.rotation.z = lr * (1 - k); });
    g.audio.play('thud');
    g.shake(0.2, 0.4);
    await g.wait(0.4);
  });
  if (donut) lvl.scene.remove(donut);
  home();
  // face the door to the Roman Hall
  g.player.setPose(P0.x, P0.z, Math.atan2(-(SPOTS.romanNorthDoor.x - P0.x), -(SPOTS.romanNorthDoor.z - P0.z)), 0);
}


// ================================================================== CHAPTER 3: ALL ROADS
async function roman(g, lvl, mode) {
  if (!lvl) {
    lvl = new Museum(g, { time: 'night' });
    await g.loadLevel(lvl);
    nightSetup(g, lvl);
    lvl.refs.trex.group.visible = false;
    lvl.refs.footprints.visible = true;
    lvl.cctvState.trexGone = true;
    lvl.refs.console1.draw(['SOLVED', 'KEY: REX'], '#6dff9e', 'NEXT: EGYPT WING');
    lvl.refs.consoleE.draw(['SOLVED', 'KEY: MUMMY'], '#e9c46a', 'NEXT: ROMAN HALL');
    g.player.setPose(SPOTS.romanNorthDoor.x, -12.5, Math.PI);
    g.setClock(62, true);
    g.hud.setFade(0, 0.8);
    g.audio.playMusic('roman');
    g.setMode('explore');
  }
  g.checkpoint('roman');
  g.objective('Get to the Roman Hall. Quickly.', SPOTS.romanNorthDoor);
  const trex = lvl.refs.trex;

  await new Promise((resolve) => lvl.addTrigger({
    minX: 12.6, maxX: 40, minZ: -9, maxZ: 9,
    onEnter: () => {
      g.hud.titleCard('CHAPTER 3', 'ALL ROADS');
      g.audio.playMusic('roman');
      g.objective('Crack the Roman lock (it\'s at the far end)', SPOTS.romanPanel);
      lvl.refs.panel2It.enabled = true;
      g.wait(2).then(() => g.say('guard15'));
      resolve();
    },
  }));

  await new Promise((resolve) => {
    lvl.refs.panel2It.onUse = async () => {
      const ok = await g.openPuzzle('roman', '1974');
      if (ok) { lvl.refs.panel2It.enabled = false; resolve(); }
    };
  });
  lvl.refs.console2.draw(['SOLVED', 'KEY: 1974'], '#ffcc4d', 'BEYOND THE WALLS...');
  g.audio.stopMusic(2);
  g.player.speedMul = 0; // frozen in fear — you can only look around
  await g.say('museos05');
  g.say('guard16');
  await g.wait(1.6);
  g.dialogue.stop();
  // heavy breathing behind you
  g.audio.play('growl', { vol: 0.8 });
  g.objective('...Something is breathing behind you. Turn around.', SPOTS.romanDoor);
  const doorView = new THREE.Vector3(16, 4, 0);
  await g.until(() => !inView(g, doorView, 3.5));
  trex.group.position.set(16.8, 0, 0.3);
  trex.group.rotation.y = Math.PI / 2 - 0.12;
  trex.group.visible = true;
  trex.setAlive(true);
  trex.setMode('idle');
  trex.anim.jaw = 0.2;
  const glow = new THREE.PointLight(0xff3018, 0, 16, 1.6);
  glow.position.set(21, 3.5, 2.5);
  lvl.scene.add(glow);
  const head = new THREE.Vector3(21.5, 5, 0.2);
  lvl.addUpdater(() => trex.lookAt(g.camera.position));
  const t0 = g.sched.time;
  await g.until(() => lookingAt(g, head, 0.8) || g.sched.time - t0 > 10);
  if (!lookingAt(g, head, 0.8)) {
    // too slow — turn the player's head for them
    const y0 = g.player.yaw;
    const y1 = Math.atan2(-(head.x - g.player.pos.x), -(head.z - g.player.pos.z));
    let dy = y1 - y0;
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    g.player.enabled = false;
    await g.tween(0.6, (k) => { g.player.yaw = y0 + dy * k; g.player.applyCamera(0); });
  }
  g.setMode('cutscene');
  g.hud.setLetterbox(true);
  g.player.flicker(1.5);
  g.tween(0.8, (k) => { glow.intensity = 40 * k; });
  g.audio.play('sting');
  await g.wait(0.6);
  trex.roar(2.4);
  g.audio.play('roar');
  g.shake(0.5, 2.2);
  g.hud.objective(null);
  await g.wait(0.9);
  g.say('guard17');
  await g.wait(1.4);
  g.hud.bigText('RUN!');
  trex.setMode('walk', 3);
  lvl.addUpdater((dt) => { if (trex.anim.mode === 'walk') trex.group.position.x += 3 * dt; });
  g.audio.play('stomp');
  await g.wait(1.1);
  g.hud.setLetterbox(false);
  g.startChapter('chase', { mode: 'carry' });
}

// ================================================================== CHAPTER 4: RUN
async function chase(g, _lvl, mode) {
  const lvl = new Runner(g);
  await g.loadLevel(lvl);
  g.checkpoint('chase');
  g.setClock(122, false); // the chase panel sits where the clock goes
  g.hud.show(true);
  g.hud.showMeter(true);
  g.hud.setFragments(g.save.fragments, { show: false }); // the chase HUD needs the space; nothing changes here
  g.meter.enabled = true;
  g.meter.drain = 0.25;
  g.meter.onEmpty = null;
  g.player.flModel.visible = false;
  g.player.setFlash(false);
  g.camera.fov = 70;
  g.camera.updateProjectionMatrix();
  g.audio.setAmbient('runner');
  g.audio.setReverb(0.35);
  g.audio.playMusic('chase', 0.2);
  g.setMode('runner');
  const result = lvl.start();
  lvl.setCam('front');
  lvl.trexBehind = 6;
  g.hud.setFade(0, 0.25);
  lvl.trex.roar(1.6);
  g.audio.play('roar');
  g.audio.play('alarm', { n: 3 });
  g.shake(0.3, 1.5);
  g.hud.titleCard('CHAPTER 4', 'RUN');
  g.say('guard18');
  await g.wait(2.8);
  lvl.blendCam('chase');
  await g.tween(1.1, (k) => { lvl.camBlend = k; lvl.trexBehind = lerp(6, 26, Math.min(1, k * 2)); });
  lvl.camBlend = null;
  lvl.hideTrex = true;
  lvl.beginRun();
  g.hud.showChase(true);
  g.hud.controlsHint(g.input.isTouch
    ? ['Swipe ← → change lanes', 'Swipe ↑ jump', 'Swipe ↓ slide']
    : ['<kbd>A</kbd><kbd>D</kbd> / <kbd>←</kbd><kbd>→</kbd> change lanes', '<kbd>W</kbd> / <kbd>Space</kbd> jump', '<kbd>S</kbd> / <kbd>↓</kbd> slide']);
  g.wait(6).then(() => g.hud.controlsHint(null));
  g.until(() => lvl.st.z < -RUN_LENGTH * 0.45).then(() => lvl.st.phase === 'run' && g.say('guard19'));
  g.until(() => lvl.st.arrowShown).then(() => lvl.st.phase === 'run' && g.say('guard20'));

  const res = await g._guard(result);
  g.hud.showChase(false);
  g.hud.controlsHint(null);
  if (res === 'caught') {
    g.audio.stopMusic(0.2);
    g.hud.flash('rgba(120,0,0,0.9)', 1.5);
    g.hud.setFade(1, 0.6);
    await g.wait(0.7);
    return g.failed('CHOMP.', 'The T-Rex got you. (Hit stuff and it catches up. Collect donuts, dodge, and at the end — GO RIGHT.)');
  }

  // ---- escaped through the guard-shaped hole!
  g.setMode('cutscene');
  g.hud.setLetterbox(true);
  g.meter.enabled = false;
  g.audio.stopMusic(0.6);
  lvl.camMode = 'free';
  const W = -RUN_LENGTH;
  // shot A: from the corridor, the T-Rex charges the wall
  g.camSet([-3.4, 2.6, W + 13], [1.2, 2.4, W]);
  const trex = lvl.trex;
  trex.group.visible = true;
  trex.group.position.set(0.8, 0, W + 24);
  trex.group.rotation.y = Math.PI;
  trex.setMode('run', 14);
  await g.tween(1.15, (k) => { trex.group.position.z = lerp(W + 24, W + 5.4, k); }, Ease.linear);
  trex.setMode('idle');
  g.audio.play('crash');
  g.audio.play('clatter');
  g.shake(0.9, 1.4);
  g.hud.flash('rgba(255,255,255,0.7)', 0.4);
  const tilt = trex.body.rotation.x;
  await g.tween(0.35, (k) => { trex.body.rotation.x = tilt - 0.35 * Math.sin(k * Math.PI); trex.group.position.z = W + 5.4 + Math.sin(k * Math.PI) * 1.2; });
  trex.group.position.z = W + 6.5;
  await g.wait(0.5);
  // shot B: archive side — you, safe, in the dark
  lvl.guard.group.rotation.y = 0;
  lvl.guard.setMode('idle');
  g.camSet([LANES[2] - 1.6, 1.7, W - 7.2], [LANES[2], 1.5, W - 1]);
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 8), new THREE.MeshStandardMaterial({ color: 0xff3010, emissive: 0xff2a00, emissiveIntensity: 7 }));
  eye.position.set(LANES[2] + 0.05, 1.95, W + 1.4);
  lvl.scene.add(eye);
  const red = new THREE.PointLight(0xff2000, 6, 5, 2);
  red.position.set(LANES[2], 1.8, W + 1);
  lvl.scene.add(red);
  g.audio.play('growl');
  await g.wait(0.6);
  lvl.guard.setMode('point');
  await g.say('guard21');
  g.audio.play('roar', { short: true });
  g.shake(0.3, 0.8);
  lvl.guard.setMode('shock');
  await g.wait(0.8);
  eye.visible = false;
  red.intensity = 0;
  g.audio.play('stomp', { vol: 0.6 });
  g.audio.play('stomp', { vol: 0.4, delay: 0.6 });
  await g.wait(1.2);
  g.hud.setLetterbox(false);
  g.startChapter('maze', { mode: 'carry' });
}

// ================================================================== CHAPTER 5: BEHIND THE WALLS
// The archives are the last part of the night, and they never end. After the three hand-made gates
// the puzzles are generated, the donut meter drains faster in every new section and the rewards
// get smaller — so sooner or later you run out of donuts and fall asleep.
const drainFor = (band) => 0.48 * (1 + 0.4 * Math.max(0, band - (HANDMADE - 1)));
const rewardFor = (k) => (k < HANDMADE ? 35 : Math.max(5, 26 - 6 * (k - HANDMADE)));
const ENDLESS_LINES = [['guard43', 'museos15'], ['museos29'], ['guard45', 'museos17'], ['museos30'], ['guard55'], ['museos16'], ['guard56', 'museos31'], ['museos18']];
// what MUSE-OS (and the guard) say when you walk into each kind of archive section
const SECTION_LINES = {
  lost: ['museos20'], posters: ['museos21'], bones: ['museos22', 'guard48'], egypt: ['museos23', 'guard49'],
  rome: ['museos24', 'guard50'], holiday: ['museos25', 'guard51'], flooded: ['museos26', 'guard52'],
  outage: ['museos27', 'guard53'], donuts: ['museos28', 'guard54'],
};

async function maze(g) {
  const solved = g.save.solved || (g.save.solved = {});
  let stage = 0;
  while (stage < HANDMADE && solved['maze' + stage]) stage++;
  const keysTaken = KEY_COLORS.filter(([name]) => solved['key_' + name]).map(([name]) => `k1_${name}`);
  const lvl = new Maze(g, { stage, keysTaken });
  await g.loadLevel(lvl);
  g.checkpoint('maze');
  let opened = stage;
  const endless = () => opened >= HANDMADE;
  const sp = lvl.spawnFor(stage);
  g.player.setPose(sp.x, sp.z, sp.yaw);
  g.setClock(135 + stage * 15, true);
  g.hud.show(true);
  g.hud.showMeter(true);
  g.hud.setFragments(g.save.fragments);
  g.meter.enabled = true;
  g.meter.drain = drainFor(lvl.curBand);
  let sleeping = false;
  g.meter.onEmpty = () => {
    if (!endless()) return g.failed('YOU FELL ASLEEP', 'Right there in the archives. The T-Rex is very disappointed in you.<br>Tip: dead ends hide donuts — and some shelves hide secret rooms.');
    if (!sleeping) { sleeping = true; sleepEnding(g); }
  };
  // lines wait their turn, so they never cut off someone else
  const queue = [];
  let queueT = 0;
  const announced = new Set([stage]);
  lvl.onBandChange = (b) => {
    g.meter.drain = drainFor(b);
    if (announced.has(b)) return;
    announced.add(b);
    const lines = SECTION_LINES[lvl.bands.get(b)?.theme?.id];
    if (lines) { queue.push(...lines); queueT = 1.5; }
  };
  lvl.addUpdater((dt) => {
    queueT -= dt;
    if (!queue.length || queueT > 0 || g.mode !== 'explore' || g.dialogue.current) return;
    const id = queue.shift();
    if (id.startsWith('museos')) g.audio.play('radio');
    g.say(id);
    queueT = 0.6;
  });
  g.player.giveFlashlight(true);
  g.camera.fov = g.save.settings.fov;
  g.camera.updateProjectionMatrix();
  g.audio.setAmbient('maze');
  g.audio.setReverb(0.25);
  g.audio.playMusic('maze');
  g.hud.setFade(0, 0.8);
  g.setMode('explore');

  const objectiveFor = (k) => {
    const kind = lvl.gateKind(k);
    if (kind === 'keys') {
      const n = lvl.puzzleParams(k).count, got = lvl.keysFor(k).filter((x) => x.taken).length;
      if (got >= n) return 'All the keys! Unlock the gate';
      return `${k >= HANDMADE ? `Gate ${k + 1}: find` : 'Find'} the ${n} lost keys (${got}/${n}) to open the next gate`;
    }
    if (k === 0) return 'Find the fuse box to open the first gate';
    if (k < HANDMADE) return `Find the ${STATION_NAMES[kind]} to open the next gate`;
    return `Gate ${k + 1}: find the ${STATION_NAMES[kind]}`;
  };
  g.objective(objectiveFor(stage));

  if (stage === 0) {
    g.hud.titleCard('CHAPTER 5', 'BEHIND THE WALLS');
    // the eye in the hole behind you
    lvl.holeEye.visible = true;
    g.audio.play('growl', { vol: 0.8 });
    g.wait(2.5).then(() => { lvl.holeEye.visible = false; });
    g.wait(1.2).then(async () => {
      g.audio.play('radio');
      await g.say('museos06');
      await g.say('guard22');
    });
  }

  // the explorer's map, filling in (and scrolling) as you go
  const mm = document.getElementById('minimap');
  const mmCtx = mm.querySelector('canvas').getContext('2d');
  mm.classList.remove('off');
  g.hud.toast('🗺️ Your map fills in as you explore. Press <b>M</b> to hide it.', 'gold');
  let mmAcc = 1;
  lvl.addUpdater((dt) => {
    if (g.input.wasPressed('KeyM')) mm.classList.toggle('off');
    lvl.revealAround(g.player.pos.x, g.player.pos.z);
    mmAcc += dt;
    if (mmAcc > 0.1 && !mm.classList.contains('off')) { mmAcc = 0; lvl.drawMap(mmCtx, g.player); }
  });

  // T-Rex eye peeks through holes in the outer walls; stomps in the distance; a sleepy guard
  let peekSaid = false, lowSaid = false, lowCount = 0, genKeySaid = false;
  let stompT = 18;
  lvl.addUpdater((dt) => {
    if (g.mode !== 'explore') return;
    for (const pk of lvl.peeks) {
      if (pk.done) continue;
      if (Math.hypot(g.player.pos.x - pk.x, g.player.pos.z - pk.z) < 3.2) {
        pk.done = true;
        pk.eye.visible = true;
        g.audio.play('growl', { vol: 0.9 });
        g.shake(0.15, 0.6);
        if (!peekSaid) { peekSaid = true; g.say('guard23'); }
        setTimeout(() => (pk.eye.visible = false), 2200);
      }
    }
    stompT -= dt;
    if (stompT < 0) {
      stompT = 22 + Math.random() * 20;
      g.audio.play('stomp', { vol: 0.5 });
      g.audio.play('stomp', { vol: 0.35, delay: 0.7 });
      g.shake(0.12, 1);
    }
    if (Math.random() < dt * 0.15) g.audio.play('drip');
    if (endless() && g.meter.value < 18 && !lowSaid) { lowSaid = true; queue.push(['guard44', 'guard58', 'museos32'][lowCount++ % 3]); }
    if (g.meter.value > 40) lowSaid = false;
  });

  // keys
  lvl.addUpdater(() => {
    if (g.mode !== 'explore') return;
    for (const k of lvl.keys) {
      if (k.taken || Math.hypot(g.player.pos.x - k.obj.position.x, g.player.pos.z - k.obj.position.z) > 1.1) continue;
      lvl.takeKey(k);
      if (k.k === 1) { solved['key_' + k.name] = true; g.persist(); }
      g.audio.play('pickup');
      g.audio.play('chime', { delay: 0.12 });
      const n = lvl.puzzleParams(k.k).count, got = lvl.keysFor(k.k).filter((x) => x.taken).length;
      const hex = '#' + k.color.toString(16).padStart(6, '0');
      g.hud.toast(`🔑 Found the <b style="color:${hex}">${k.name.toUpperCase()}</b> key! <b>(${got}/${n})</b>`, 'gold');
      if (k.k >= HANDMADE && !genKeySaid) { genKeySaid = true; queue.push('guard57'); }
      if (k.k === opened) g.objective(objectiveFor(opened));
    }
  });

  // secret shelves
  lvl.onSecret = () => g.foundSecret();

  // the gates
  lvl.onStationUse = async (k, st) => {
    if (lvl.gateOpen.has(k)) { g.hud.toast('Already open! ✔', 'mint'); return; }
    if (st.kind === 'keys') {
      const n = lvl.puzzleParams(k).count, got = lvl.keysFor(k).filter((x) => x.taken).length;
      if (got < n) {
        g.audio.play('error');
        g.hud.toast(`🔒 This gate needs ${n} keys — you have <b>${got}/${n}</b>. They're hidden somewhere in this part of the archives.`, 'gold');
        return;
      }
      st.it.enabled = false;
      st.slots.forEach((sl, i) => setTimeout(() => { sl.visible = true; g.audio.play('click'); }, 150 + i * 280));
      await g.wait(1.1);
      g.audio.play('unlock');
      if (k >= HANDMADE) { g.meter.add(rewardFor(k)); g.hud.toast(`🔓 Unlocked! <b>+${rewardFor(k)}%</b> 🍩`, 'mint'); }
    } else {
      const frag = k === 0 ? 'ZAP' : k === 2 ? 'DONUT' : null;
      const banner = frag ? null : '<div class="help" style="margin-top:10px">Password fragment six: <b style="color:var(--red)">NOT FOUND</b></div><div style="font-weight:800;margin:6px 0 10px">It must be behind the next gate...</div>';
      const ok = await g.openPuzzle(st.kind, frag, { params: lvl.puzzleParams(k), reward: rewardFor(k), banner });
      if (!ok) return;
    }
    if (k < HANDMADE) { solved['maze' + k] = true; g.persist(); }
    st.light.color.set(0x66ff99);
    opened = Math.max(opened, k + 1);
    await lvl.openGate(k);
    g.objective(objectiveFor(opened));
    if (k === 0) {
      g.audio.play('radio');
      await g.say('museos07');
      await g.say('museos08');
    } else if (k === 1) {
      await g.say('guard24');
    } else if (k === 2) {
      g.audio.play('radio');
      await g.say('museos09');
    } else {
      for (const id of ENDLESS_LINES[(k - HANDMADE) % ENDLESS_LINES.length]) {
        if (id.startsWith('museos')) g.audio.play('radio');
        await g.say(id);
      }
      if (k === HANDMADE + 1) await g.say('dev22'); // the dev pops in to brag about the endless archives
    }
  };
}

// Out of donuts. Sweet dreams.
async function sleepEnding(g) {
  g.meter.enabled = false;
  g.meter.onEmpty = null;
  g.audio.stopMusic(3);
  await g.cutscene(async () => {
    g.player.enabled = false;
    g.audio.play('yawn');
    g.hud.setDrowsy(0.9);
    await g.say('guard27');
    const pitch0 = g.player.pitch;
    await g.tween(2.4, (k) => {
      g.player.eyeOffset = -0.95 * k;
      g.player.pitch = lerp(pitch0, 0.3, k);
      g.player.applyCamera(0);
    });
    for (const c of [0.7, 0.2, 0.85, 0.4, 1]) { g.hud.setLids(c, 0.5); await g.wait(0.6); }
    g.audio.play('radio');
    await g.say('museos19');
    await g.say('dev23');
    g.audio.play('yawn');
    g.hud.setFade(1, 1.5);
    await g.wait(1.6);
  });
  g.hud.setDrowsy(0);
  g.startChapter('morning', { mode: 'carry' });
}

// ================================================================== CHAPTER 6: MORNING SHIFT
async function morning(g) {
  const lvl = new Museum(g, { time: 'day' });
  await g.loadLevel(lvl);
  g.checkpoint('morning');
  g.save.fragments = START.morning.fragments.slice();
  g.hud.setFade(1, 0);
  g.hud.show(true);
  g.hud.setLids(1, 0);
  g.hud.setFragments(g.save.fragments);
  g.meter.enabled = false;
  g.audio.setAmbient('day');
  g.audio.setReverb(0.45);
  g.player.giveFlashlight(false);
  g.player.flModel.visible = false;
  g.camera.fov = g.save.settings.fov;
  g.camera.updateProjectionMatrix();
  lvl.refs.guard.group.visible = false;
  for (const d of lvl.refs.boxDonuts) d.visible = false;
  lvl.refs.deskFlashlight.visible = false;
  const screen = { mode: 'locked' };
  setupMonitor(g, lvl, screen);
  const trex = lvl.refs.trex;
  // your hat... on the T-Rex
  const hat = new THREE.Group();
  const capMat = new THREE.MeshStandardMaterial({ color: 0x1b2440, roughness: 0.7 });
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.23, 0.15, 16), capMat);
  hat.add(crown);
  const brim = box(0.3, 0.02, 0.2, capMat, 0, -0.07, 0.2);
  hat.add(brim);
  const badge = box(0.07, 0.06, 0.01, MATS.brass(), 0, 0.0, 0.21);
  hat.add(badge);
  hat.position.set(0, 0.5, 0.35);
  hat.rotation.z = 0.2;
  trex.headPivot.children[0].add(hat);
  // a donut stuck on a tooth
  const crumb = makeDonut({ frosting: 0, scale: 0.6 });
  crumb.position.set(0.25, -0.35, 1.2);
  crumb.rotation.z = Math.PI / 2;
  trex.headPivot.children[0].add(crumb);
  // Aaron
  const aaron = lvl.makeAaron();
  aaron.group.position.set(5.5, 0, -14);
  aaron.group.rotation.y = Math.PI * 0.8;
  lvl.scene.add(aaron.group);
  lvl.addUpdater((dt) => aaron.update(dt));

  // you wake up on the floor of the Dinosaur Hall
  g.player.setPose(0.6, -19.6, 0.05, 0.55);
  g.player.eyeOffset = -1.3;
  g.player.applyCamera(0);
  g.setClock(0, false);
  g.audio.playMusic('morning');

  await g.cutscene(async () => {
    g.hud.caption('7 HOURS LATER');
    g.hud.setFade(0.6, 0);
    await g.wait(2.2);
    g.hud.caption('');
    g.hud.setFade(0, 1.5);
    for (const c of [0.6, 1, 0.3, 0.8, 0]) { g.hud.setLids(c, 0.45); await g.wait(0.55); }
    await g.say('guard28');
    const p0 = g.player.pitch;
    await g.tween(1.4, (k) => { g.player.eyeOffset = lerp(-1.3, 0, k); g.player.pitch = lerp(p0, 0.25, k); g.player.applyCamera(0); });
    // look at the T-Rex
    const y0 = g.player.yaw, y1 = Math.atan2(-(SPOTS.trex.x + 1.5 - g.player.pos.x), -(SPOTS.trex.z + 4 - g.player.pos.z));
    await g.tween(1.2, (k) => { g.player.yaw = lerp(y0, y1, k); g.player.pitch = lerp(0.25, 0.32, k); g.player.applyCamera(0); });
    await g.say('guard29');
    // Aaron walks over
    const a0 = aaron.group.position.clone(), a1 = new THREE.Vector3(3.4, 0, -18.7);
    aaron.setMode('walk', 1.3);
    aaron.group.rotation.y = Math.atan2(a1.x - a0.x, a1.z - a0.z);
    const yy0 = g.player.yaw, yy1 = Math.atan2(-(a1.x - g.player.pos.x), -(a1.z - g.player.pos.z));
    await g.tween(2.4, (k) => {
      aaron.group.position.lerpVectors(a0, a1, k);
      g.player.yaw = lerp(yy0, yy1, k);
      g.player.pitch = lerp(0.32, 0.05, k);
      g.player.applyCamera(0);
    }, Ease.linear);
    aaron.setMode('idle');
    aaron.group.rotation.y = Math.atan2(g.player.pos.x - a1.x, g.player.pos.z - a1.z);
    aaron.anim.talk = 3;
    await g.say('aaron02');
    await g.say('guard30');
    aaron.anim.talk = 3;
    aaron.setMode('shrug');
    await g.say('aaron03');
    aaron.setMode('idle');
  });

  g.setMode('explore');
  g.objective('Log in to your computer (Security Office)', SPOTS.computer);
  lvl.refs.computerIt.enabled = true;
  await new Promise((resolve) => { lvl.refs.computerIt.onUse = resolve; });
  lvl.refs.computerIt.enabled = false;
  await g.cutscene(async () => {
    g.computer.open();
    await g.wait(0.5);
    await g.computer.type('REXMUMMY1974ZAPDONUT', { speed: 0.08 });
    await g.wait(0.4);
    await g.computer.press('login');
    g.computer.showDenied(g.save.fragments);
    screen.mode = 'denied';
    g.hud.setFragments(g.save.fragments, { missing: true });
    g.audio.stopMusic(0.2);
    await g.say('museos11');
    await g.say('guard31');
    await g.say('museos12');
    g.computer.close();
  });
  g.setMode('cutscene');
  g.audio.play('wahwah');
  g.save.flags.ending = 'pending';
  logEvent('finished');
  g.persist();
  await g._guard(showGameOver(g, { title: 'GAME OVER', sub: 'You did not solve the puzzles.<br><span style="color:var(--dim)">(5 of 6 password fragments. So close. So, so close.)</span>', buttons: [{ label: 'BACK TO MENU', value: 'menu', cls: 'pink' }] }));
  g.toMenu();
}
