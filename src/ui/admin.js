// The admin panel (dev mode only): jump to any chapter, set off the game's big moments whenever you
// like, play the title cards, and a few cheats for testing. Open it with the ` key (or from the
// pause menu / the menu's dev mode panel) once dev mode is on.
import { $, el } from '../core/util.js';
import { modal } from './menu.js';
import { CHAPTERS } from '../game/chapters.js';
import { FRAGMENTS, DONUT_IDS } from '../game/constants.js';
import { SPOTS } from '../world/museum.js';

const PLACES = [
  ['Security office', -16.6, 0.3, -Math.PI / 2],
  ['Lobby', 0, 4, 0],
  ['Dinosaur Hall', 0, -18, 0],
  ['Egyptian Wing', 27, -14, Math.PI],
  ['Roman Hall', 18, 0, -Math.PI / 2],
  ['Plaza (morning)', 0, 14, Math.PI, (g) => g.level.city && !g.level.night],
];

export function devOn(g) {
  return !!g.save.flags.devMode;
}

// Unlock every chapter, every hidden donut and the ending.
export function unlockAll(g) {
  const save = g.save;
  save.reached = CHAPTERS.map((c) => c.id);
  save.donuts = DONUT_IDS.slice();
  Object.assign(save.flags, { devDonuts: true, ending: 'done', kicked: true, backAgain: true, backAgain2: true, welcomed: true });
  g.persist();
}

export function openAdmin(g) {
  if ($('.admin-panel')) return;
  // freeze the game underneath (without the pause screen)
  const wasPaused = g.paused;
  if (g.level && g.mode !== 'menu') {
    g.paused = true;
    g.dialogue.setPaused(true);
    g.input.exitLock();
  }
  const m = modal('<h2>ADMIN PANEL</h2><div class="sub">Dev mode · press <kbd>`</kbd> any time to open this</div><div class="admin"></div>', () => {
    if (!wasPaused && g.paused && !g.pauseModal) g.resume();
  });
  m.panel.classList.add('admin-panel');
  const box = $('.admin', m.panel);
  const lvl = g.level;
  const museum = !!lvl?.refs?.trex && g.mode !== 'menu';
  const inGame = !!lvl && g.mode !== 'menu';
  // run an action with the game un-frozen (most of them play out over time)
  const run = (fn, keepOpen = false) => () => {
    g.audio.play('select');
    if (!keepOpen) m.close();
    fn();
  };
  const section = (title) => box.append(el('div', 'clip-group', title));
  const row = () => { const r = el('div', 'admin-row'); box.append(r); return r; };
  const btn = (r, label, fn, { off = false, why = '', keepOpen = false } = {}) => {
    const b = el('button', `btn small ${off ? 'locked' : ''}`, label);
    if (off) b.title = why;
    else b.onclick = run(fn, keepOpen);
    r.append(b);
    return b;
  };

  // ---- chapters
  section('JUMP TO A CHAPTER');
  let r = row();
  for (const c of CHAPTERS) btn(r, c.name.split(' — ')[0].replace('Chapter ', 'Ch. '), () => { g.paused = false; g.startChapter(c.id); }).title = c.name;
  r = row();
  btn(r, '🔓 Unlock everything', () => { unlockAll(g); g.hud.toast('Every chapter, donut and the ending: unlocked.', 'gold'); }, { keepOpen: true });

  // ---- title cards
  section('TITLE CARDS');
  r = row();
  for (const c of CHAPTERS) {
    const [a, b] = c.name.split(' — ');
    btn(r, a, () => g.hud.titleCard(a.toUpperCase(), b.toUpperCase()));
  }
  btn(r, 'RUN!', () => g.hud.bigText('RUN!'));

  // ---- events
  section('EVENTS' + (museum ? '' : ' (in the museum)'));
  const trex = lvl?.refs?.trex;
  const off = { off: !museum, why: 'Only in the museum chapters' };
  r = row();
  btn(r, '🦖 T-Rex vanishes', () => {
    trex.group.visible = false;
    lvl.refs.footprints.visible = true;
    lvl.cctvState.trexGone = true;
    g.audio.play('clatter');
    g.audio.play('stomp', { delay: 0.6, vol: 0.6 });
    g.shake(0.15, 0.6);
    g.player.flicker(1.2);
    g.audio.play('sting', { delay: 0.9 });
  }, off);
  btn(r, '🦴 T-Rex comes back', () => {
    trex.group.visible = true;
    lvl.refs.footprints.visible = false;
    lvl.cctvState.trexGone = false;
    trex.setAlive(false);
    g.audio.play('stomp', { vol: 0.5 });
  }, off);
  btn(r, '👀 T-Rex wakes up and roars', () => {
    trex.group.visible = true;
    trex.setAlive(true);
    trex.setMode('idle');
    trex.roar(2.4);
    g.audio.play('roar');
    g.shake(0.5, 2.2);
    g.player.flicker(1.5);
  }, off);
  btn(r, '😴 T-Rex goes back to sleep', () => { trex.setAlive(false); trex.setMode('idle'); }, off);
  r = row();
  btn(r, '💡 Lights flicker', () => { g.player.flicker(2); g.audio.play('sting', { vol: 0.6 }); }, { off: !inGame, why: 'Only in a chapter' });
  btn(r, '😱 Something growls', () => { g.audio.play('growl', { vol: 0.9 }); g.shake(0.25, 1); }, { off: !inGame, why: 'Only in a chapter' });
  btn(r, '🎉 Start the parade', () => { lvl.city.startParade(); }, { off: !(museum && lvl.city && !lvl.night && !lvl.city.paradeActive), why: 'Only in the morning, when no parade is going' });
  btn(r, '🚗 A car drives past', () => { lvl.city.spawnT = 0; }, { off: !(museum && lvl.city), why: 'Only in the museum' });

  // ---- go to
  section('GO TO' + (museum ? '' : ' (in the museum)'));
  r = row();
  for (const [name, x, z, yaw, ok] of PLACES) {
    const can = museum && g.mode === 'explore' && (!ok || ok(g));
    btn(r, name, () => g.player.setPose(x, z, yaw, 0), { off: !can, why: 'Only while walking around the museum' });
  }
  btn(r, 'T-Rex', () => g.player.setPose(SPOTS.trex.x + 4, SPOTS.trex.z + 9, 0.4, 0.25), { off: !(museum && g.mode === 'explore'), why: 'Only while walking around the museum' });

  // ---- cheats
  section('CHEATS');
  r = row();
  const toggle = (label, key, apply) => {
    const b = btn(r, `${label}: ${g[key] ? 'ON' : 'OFF'}`, () => {
      g[key] = !g[key];
      apply?.(g[key]);
      b.textContent = `${label}: ${g[key] ? 'ON' : 'OFF'}`;
    }, { keepOpen: true });
  };
  toggle('🍩 Endless donuts', 'devDonuts', (on) => on && g.meter.set(100));
  toggle('👻 Walk through walls', 'devNoclip');
  toggle('⏩ Triple speed', 'devFast', (on) => { g.timeScale = on ? 3 : 1; });
  r = row();
  btn(r, '🍩 Fill the donut meter', () => g.meter.add(100), { off: !inGame, why: 'Only in a chapter' });
  btn(r, '🔑 All password pieces', () => {
    g.save.fragments = FRAGMENTS.filter((f) => f !== '???');
    g.hud.setFragments(g.save.fragments);
    g.persist();
  }, { off: !inGame, why: 'Only in a chapter' });
  btn(r, '⏭ Skip this cutscene', () => g.skipCutscene(), { off: g.mode !== 'cutscene', why: 'Only during a cutscene' });
  return m;
}
