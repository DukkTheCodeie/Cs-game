import { $, $$, el, sleep } from '../core/util.js';
import { Station } from './dialogue.js';
import { CONFIG } from '../config.js';
import { CHAPTERS } from '../game/chapters.js';
import { openClipStudio } from './clipstudio.js';

export class Menu {
  constructor(game) {
    this.game = game;
    this.root = $('#menu');
    this.speaker = null;
    this.open = false;
  }

  _buildSpeaker() {
    if (this.speaker) return;
    const sp = (this.speaker = el('div', '', `
      <div class="tv">
        <div class="tv-screen"><canvas width="256" height="256"></canvas><img alt=""><video playsinline></video></div>
        <div class="tv-label">${CONFIG.devName} · LIVE</div>
        <div class="tv-knobs"><i></i><i></i></div>
      </div>`));
    sp.id = 'speaker';
    document.body.append(sp);
    const scr = $('.tv-screen', sp);
    const st = new Station(scr, { canvas: $('canvas', scr), img: $('img', scr), video: $('video', scr), root: sp });
    st.who = 'dev';
    st.mood = 'happy';
    this.game.dialogue.tv = st;
    const p = this.game.clips.portrait('dev');
    st.setMode(p ? 'img' : 'canvas');
    if (p) st.img.src = p.url;
    let pokes = 0;
    sp.addEventListener('click', () => {
      if (this.busy || this.game.dialogue.current) return;
      this.game.audio.play('static', { dur: 0.15 });
      this.game.say(pokes++ % 2 ? 'dev07' : 'dev06');
    });
  }

  _removeSpeaker() {
    this.speaker?.remove();
    this.speaker = null;
    this.game.dialogue.tv = null;
  }

  show() {
    const g = this.game, save = g.save;
    this.open = true;
    this._buildSpeaker();
    const reached = save.reached || [];
    const cont = save.chapter && save.chapter !== 'intro' ? CHAPTERS.find((c) => c.id === save.chapter) : null;
    const [t1, t2] = CONFIG.title;
    this.root.innerHTML = `
      <div class="menu-left">
        <div class="logo">${t1.replace(/O/, '<span class="donut-o"></span>')}<span class="l2">${t2.replace(/^O/, '<span class="donut-o"></span>')}</span></div>
        <div class="tagline">One night. One password. Way too many donuts.</div>
        ${save.flags.kicked ? '<div><span class="menu-badge">YOU BEAT THE GAME (KIND OF)</span></div>' : ''}
        ${cont ? `<button class="btn menu-btn pink" data-act="continue">▶ CONTINUE <small>${cont.name}</small></button>` : ''}
        <button class="btn menu-btn ${cont ? '' : 'pink'}" data-act="new">${cont ? 'NEW GAME' : '▶ PLAY'} <small>Prologue</small></button>
        <button class="btn menu-btn" data-act="chapters">CHAPTERS <small>${reached.length}/${CHAPTERS.length}</small></button>
        <button class="btn menu-btn mint" data-act="clips">🎬 CLIP STUDIO <small>put yourself in the game</small></button>
        <button class="btn menu-btn" data-act="settings">SETTINGS</button>
        <button class="btn menu-btn ghost" data-act="credits">CREDITS</button>
        <div class="menu-foot">${g.input.isTouch ? 'Touch controls on · landscape recommended' : 'WASD move · Mouse look · E use · F flashlight · Shift sprint'}</div>
      </div>`;
    this.root.classList.remove('off');
    for (const b of $$('[data-act]', this.root)) {
      b.addEventListener('mouseenter', () => g.audio.play('hover'));
      b.addEventListener('click', () => this._act(b.dataset.act));
    }
    g.audio.playMusic(save.flags.ending === 'pending' ? 'meta' : 'menu');
    if (save.flags.ending === 'pending') {
      this._metaEnding();
    } else if (!save.flags.welcomed) {
      save.flags.welcomed = true;
      g.persist();
      setTimeout(() => this.open && !this.busy && g.say('dev01'), 1200);
    } else if (save.flags.kicked && !save.flags.backAgain) {
      save.flags.backAgain = true;
      g.persist();
      setTimeout(() => this.open && g.say('dev05'), 1200);
    }
  }

  hide() {
    this.open = false;
    this.root.classList.add('off');
    this._removeSpeaker();
    this.game.dialogue.stop();
  }

  _act(act) {
    const g = this.game;
    if (this.busy) return;
    g.audio.play('select');
    if (act === 'new') g.startChapter('intro');
    else if (act === 'continue') g.startChapter(g.save.chapter);
    else if (act === 'chapters') this.chapters();
    else if (act === 'settings') this.settings();
    else if (act === 'clips') openClipStudio(g);
    else if (act === 'credits') this.credits();
  }

  chapters() {
    const g = this.game;
    const m = modal(`<h2>CHAPTERS</h2><div class="sub">Replay any part of the night you've reached.</div><div class="chapters"></div>`);
    const list = $('.chapters', m.panel);
    CHAPTERS.forEach((c, i) => {
      const ok = g.save.reached.includes(c.id) || i === 0;
      const b = el('button', `btn chapter-btn ${ok ? '' : 'locked'}`, `<span>${c.name}</span><small>${ok ? c.blurb : '🔒 locked'}</small>`);
      b.onclick = () => { m.close(); g.audio.play('select'); g.startChapter(c.id); };
      list.append(b);
    });
  }

  settings(onClose) {
    const g = this.game, s = g.save.settings;
    const m = modal(`<h2>SETTINGS</h2><div class="sub">Saved automatically.</div><div class="settings"></div>`, onClose);
    const box = $('.settings', m.panel);
    const range = (key, label, min, max, step, fmt = (v) => Math.round(v * 100) + '%') => {
      const row = el('div', 'setting', `<span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${s[key]}"><span class="val">${fmt(s[key])}</span>`);
      const inp = $('input', row);
      inp.oninput = () => { s[key] = Number(inp.value); $('.val', row).textContent = fmt(s[key]); g.applySettings(); };
      box.append(row);
    };
    const select = (key, label, opts) => {
      const row = el('div', 'setting', `<span>${label}</span><select>${opts.map(([v, t]) => `<option value="${v}" ${String(s[key]) === String(v) ? 'selected' : ''}>${t}</option>`).join('')}</select><span></span>`);
      const sel = $('select', row);
      sel.onchange = () => { const v = sel.value; s[key] = v === 'true' ? true : v === 'false' ? false : v; g.applySettings(); g.audio.play('click'); };
      box.append(row);
    };
    range('master', 'Master volume', 0, 1, 0.05);
    range('music', 'Music', 0, 1, 0.05);
    range('sfx', 'Sound effects', 0, 1, 0.05);
    select('voice', 'Character voices', [['tts', 'Robot voices (text-to-speech)'], ['babble', 'Cute beeps'], ['off', 'Off (subtitles only)']]);
    select('subtitles', 'Subtitles', [['medium', 'On'], ['large', 'Large'], ['off', 'Off']]);
    range('sensitivity', 'Mouse sensitivity', 0.2, 3, 0.1, (v) => v.toFixed(1) + '×');
    select('invertY', 'Invert mouse Y', [[false, 'No'], [true, 'Yes']]);
    range('fov', 'Field of view', 60, 100, 1, (v) => v + '°');
    select('quality', 'Graphics', [['high', 'High (shadows)'], ['low', 'Fast (no shadows)']]);
    select('marker', 'Objective compass', [[true, 'On'], [false, 'Off']]);
    const reset = el('button', 'btn small ghost', 'Reset save data');
    reset.style.marginTop = '18px';
    reset.onclick = () => {
      if (!confirm('Erase your progress, collected donuts and the ending? (Clips you recorded are kept.)')) return;
      g.resetSave();
      m.close();
      this.show();
    };
    box.append(reset);
  }

  credits() {
    modal(`<h2>CREDITS</h2>
      <div class="sub">LOCKED OUT — a night guard story</div>
      <p style="font-weight:800;line-height:1.7">
        Story, ideas, starring, directing & yelling: <b style="color:var(--pink)">${CONFIG.devName}</b> (who was up all night)<br>
        The Security Guard: <b style="color:var(--gold)">you</b><br>
        The T-Rex: <b>a bunch of cylinders</b><br>
        Aaron: <b>Aaron</b><br>
        Donuts eaten during development: <b>too many</b><br><br>
        Built with three.js. Every sound and song is synthesized in your browser.<br>
        Record yourself in the 🎬 CLIP STUDIO to replace the cartoon actors!
      </p>`);
  }

  // ---------------------------------------------------------------- meta ending
  async _metaEnding() {
    const g = this.game;
    this.busy = true;
    $$('[data-act]', this.root).forEach((b) => (b.disabled = true));
    const fc = $('#facecam');
    fc.classList.add('menu-pos');
    await sleep(1500);
    await g.say('guard32');
    // the little bonus button
    const bonus = el('button', 'btn pink', '🧩 +1 BONUS PUZZLE?');
    bonus.id = 'bonus-btn';
    document.body.append(bonus);
    const psst = el('div', 'psst', '↑ psst… there\'s more!');
    document.body.append(psst);
    g.audio.play('sparkle');
    await new Promise((r) => (bonus.onclick = r));
    bonus.remove();
    psst.remove();
    g.audio.play('select');
    const m = modal(`<h2>BONUS PUZZLE #6</h2><div class="sub">Loading the final puzzle…</div>
      <div style="height:22px;border-radius:12px;background:#111;border:2px solid var(--gold);overflow:hidden"><div class="ld" style="height:100%;width:0;background:linear-gradient(90deg,var(--pink),var(--gold));transition:width .3s"></div></div>
      <div class="ldtxt help" style="margin-top:10px">0%</div><div class="res"></div>`, null, { noClose: true });
    const ld = $('.ld', m.panel), txt = $('.ldtxt', m.panel);
    for (let p = 0; p <= 99; p += 3 + Math.floor(Math.random() * 9)) {
      ld.style.width = p + '%';
      txt.textContent = p + '% — ' + ['loading puzzle…', 'generating fun…', 'adding donuts…', 'almost there…', 'reticulating splines…'][Math.floor(p / 22)];
      g.audio.play('tick');
      await sleep(180);
    }
    ld.style.width = '99%';
    txt.textContent = '99% — ...';
    await sleep(1600);
    g.audio.play('error');
    $('.res', m.panel).innerHTML = `<div class="hintbox" style="border-color:var(--red);color:#ffb0b0;font-size:18px;text-align:center">
      <div style="font:30px var(--title);color:var(--red)">ERROR 404: PUZZLE NOT FOUND</div><br>
      There is no puzzle #6.<br>That's it. That was the whole game.<br>Thanks for playing! 🍩</div>
      <div style="text-align:center;margin-top:16px"><button class="btn ok">…what?</button></div>`;
    await new Promise((r) => ($('.ok', m.panel).onclick = r));
    m.close();
    await g.say('guard33');
    await sleep(300);
    await g.say('dev02');
    await sleep(200);
    await g.say('guard34');
    // record scratch
    g.audio.stopMusic(0.05);
    g.audio.play('scratch');
    await sleep(700);
    this.speaker.classList.add('angry');
    g.dialogue.tv.mood = 'angry';
    await g.say('dev03');
    g.audio.playMusic('angry', 0.1);
    g.shake(0.2, 2);
    // buttons fall off the menu
    $$('.menu-left > *', this.root).forEach((b, i) => {
      b.style.setProperty('--rot', (Math.random() * 80 - 40) + 'deg');
      setTimeout(() => { b.classList.add('fall'); g.audio.play('thud', { vol: 0.4 }); }, i * 120);
    });
    this.speaker.classList.add('huge');
    await g.say('dev04');
    // THE KICK
    const boot = el('div', 'boot-kick', '🥾');
    document.body.append(boot);
    void boot.offsetWidth;
    boot.classList.add('go');
    await sleep(380);
    g.audio.play('kick');
    g.hud.flash('rgba(255,255,255,0.9)', 0.4);
    for (const n of [this.root, this.speaker, $('#game'), fc, $('#dialogue')]) n?.classList.add('kicked-away');
    await sleep(900);
    boot.remove();
    g.audio.stopMusic(0.05);
    g.audio.play('crt');
    document.body.classList.add('crt-off');
    await sleep(800);
    g.save.flags.ending = 'done';
    g.save.flags.kicked = true;
    g.persist();
    this.kickedScreen();
  }

  kickedScreen() {
    const k = $('#kicked');
    document.body.classList.remove('crt-off');
    const lines = [
      ['C:\\MUSEUM\\LOCKED_OUT.EXE', ''],
      ['> Process terminated by: ' + CONFIG.devName + ' (angry)', ''],
      ['> Reason: player said "i could do better"', ''],
      ['> Exit code: HELL_NAW', 'err'],
      ['', ''],
      ['The developer has kicked you out of the game.', 'err'],
    ];
    k.innerHTML = lines.map(([t, c], i) => `<div class="line ${c}" style="animation-delay:${0.6 + i * 0.7}s">${t || '&nbsp;'}</div>`).join('') + '<button class="btn ghost">[ reopen game ]</button>';
    k.classList.remove('off');
    $('button', k).onclick = () => location.reload();
  }
}

// Small modal helper
export function modal(html, onClose, { noClose = false } = {}) {
  const m = el('div', 'modal');
  const panel = el('div', 'panel', (noClose ? '' : '<button class="close">✕</button>') + html);
  m.append(panel);
  $('#modal-root').append(m);
  const close = () => { m.remove(); removeEventListener('keydown', onKey, true); onClose?.(); };
  // Only the top-most panel reacts to Esc (so Esc in Settings doesn't also close Pause).
  const onKey = (e) => {
    if (e.code !== 'Escape' || noClose || $('#modal-root').lastElementChild !== m) return;
    e.stopImmediatePropagation();
    close();
  };
  addEventListener('keydown', onKey, true);
  if (!noClose) {
    $('.close', panel).onclick = close;
    m.addEventListener('mousedown', (e) => { if (e.target === m) close(); });
  }
  return { el: m, panel, close };
}
