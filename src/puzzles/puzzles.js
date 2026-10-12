import { $, el, escapeHtml } from '../core/util.js';

// Every puzzle opens in a modal panel. openPuzzle() resolves true when solved, false if closed.

const HINT_COST = 10;

export function openPuzzle(game, kind, { fragment = '', onSolvedLine = null } = {}) {
  const def = PUZZLES[kind];
  return new Promise((resolve) => {
    const root = $('#modal-root');
    const modal = el('div', 'modal');
    const panel = el('div', 'panel puzzle');
    panel.innerHTML = `
      <button class="close" title="Close (Esc)">✕</button>
      <h2>${def.title}</h2>
      <div class="sub">${def.sub}</div>
      <div class="pz-body"></div>
      <div class="pz-hint"></div>
      <div class="panel-foot">
        <button class="btn small pz-hintbtn">💡 Hint <small style="opacity:.7">(−${HINT_COST}% 🍩)</small></button>
        <span class="help">${game.input.isTouch ? 'Tap to interact' : def.keys || 'Esc to close'}</span>
      </div>`;
    modal.append(panel);
    root.append(modal);
    const body = $('.pz-body', panel);
    body.classList.add('pz-' + kind);
    const hintBox = $('.pz-hint', panel);
    let hintLevel = 0;
    let finished = false;

    const cleanup = () => {
      removeEventListener('keydown', onKey, true);
      api.dispose?.();
      modal.remove();
    };
    const close = () => {
      if (finished) return;
      finished = true;
      game.audio.play('back');
      cleanup();
      resolve(false);
    };
    const solve = () => {
      if (finished) return;
      finished = true;
      api.dispose?.();
      game.audio.play('chime');
      game.audio.play('unlock', { delay: 0.1 });
      $('.pz-hintbtn', panel).remove();
      hintBox.innerHTML = '';
      body.innerHTML = `
        <div class="solved-banner">
          <div class="big">PUZZLE SOLVED!</div>
          <div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${escapeHtml(fragment)}</div>
          <div style="font-weight:900;font-size:20px;color:var(--pink)">+1 DONUT 🍩</div>
          <div style="margin-top:18px"><button class="btn big mint pz-continue">CONTINUE</button></div>
        </div>`;
      $('.pz-continue', body).onclick = () => { game.audio.play('select'); cleanup(); resolve(true); };
      $('.pz-continue', body).focus();
    };
    const onKey = (e) => {
      if (e.code === 'Escape') { e.stopPropagation(); close(); return; }
      if (finished) {
        if (e.code === 'Enter' || e.code === 'Space') { e.preventDefault(); $('.pz-continue', body)?.click(); }
        return;
      }
      api.onKey?.(e);
    };
    addEventListener('keydown', onKey, true);
    $('.close', panel).onclick = close;
    modal.addEventListener('mousedown', (e) => { if (e.target === modal) close(); });
    $('.pz-hintbtn', panel).onclick = () => {
      const hints = api.hints();
      if (hintLevel >= hints.length) { game.audio.play('error'); return; }
      game.meter.add(-HINT_COST);
      game.audio.play('select');
      hintBox.innerHTML = hints.slice(0, ++hintLevel).map((h) => `<div class="hintbox">💡 ${h}</div>`).join('');
      api.onHint?.(hintLevel);
    };
    const api = def.build({ game, body, solve, panel });
  });
}

// ---------------------------------------------------------------------------
const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shiftChar = (c, n) => (A.includes(c) ? A[(A.indexOf(c) + n + 26 * 10) % 26] : c);

const PUZZLES = {
  // ---------------------------------------------------------------- 1. Caesar wheel
  caesar: {
    title: 'DINO-LOCK 3000',
    sub: 'An encrypted message is glowing on the screen. Turn the bone wheel to decode it.',
    keys: '← → turn the wheel · Esc close',
    build({ game, body, solve }) {
      const SHIFT = 4;
      const plain = 'NEXT PUZZLE: ROMAN HALL. KEY IS REX';
      const cipher = [...plain].map((c) => shiftChar(c, SHIFT)).join('');
      let shift = 0, solvedT = null;
      body.innerHTML = `
        <div class="terminal">
          <div style="text-align:center;margin-bottom:8px">&gt; INCOMING TRANSMISSION — ENCRYPTED</div>
          <div class="cipher-text"></div>
          <div style="text-align:center;color:#ffcc4d">"SHIFT EACH LETTER BACK BY THE NUMBER OF FINGERS ON <u>BOTH</u> OF THE KING'S HANDS."</div>
        </div>
        <div class="wheel-wrap">
          <button class="btn rotbtn rl">◀</button>
          <div class="wheel"><div class="pointer"></div><div class="ring outer"></div><div class="ring inner"></div><div class="hub">SHIFT<b>0</b></div></div>
          <button class="btn rotbtn rr">▶</button>
        </div>
        <div class="help" style="text-align:center">Outer ring = encrypted letter · inner ring = real letter</div>`;
      const outer = $('.ring.outer', body), inner = $('.ring.inner', body), hub = $('.hub b', body), text = $('.cipher-text', body);
      const R = (body.querySelector('.wheel').offsetWidth || 250) / 2;
      for (let i = 0; i < 26; i++) {
        const a = (i / 26) * 360;
        const o = el('div', 'lt', A[i]);
        o.style.transform = `rotate(${a}deg) translateY(-${R * 0.83}px)`;
        o.style.marginTop = '-12px';
        outer.append(o);
        const n = el('div', 'lt', A[i]);
        n.style.transform = `rotate(${a}deg) translateY(-${R * 0.54}px)`;
        n.style.marginTop = '-12px';
        inner.append(n);
      }
      const render = () => {
        inner.style.transform = `rotate(${shift * (360 / 26)}deg)`;
        hub.textContent = shift;
        text.innerHTML = [...cipher].map((c) => (c === ' ' ? '<div class="sp"></div>' : `<div class="ch">${c}<small>${A.includes(c) ? shiftChar(c, -shift) : c}</small></div>`)).join('');
        text.classList.toggle('solved', shift === SHIFT);
        if (shift === SHIFT && solvedT == null) {
          game.audio.play('sparkle');
          solvedT = setTimeout(solve, 1100);
        } else if (shift !== SHIFT && solvedT != null) {
          clearTimeout(solvedT);
          solvedT = null;
        }
      };
      const turn = (d) => { shift = (shift + d + 26) % 26; game.audio.play('tick'); game.audio.play('click', { vol: 0.6 }); render(); };
      $('.rl', body).onclick = () => turn(-1);
      $('.rr', body).onclick = () => turn(1);
      body.querySelector('.wheel').addEventListener('wheel', (e) => { e.preventDefault(); turn(e.deltaY > 0 ? 1 : -1); }, { passive: false });
      render();
      return {
        onKey(e) { if (e.code === 'ArrowLeft' || e.code === 'KeyA') turn(-1); if (e.code === 'ArrowRight' || e.code === 'KeyD') turn(1); },
        hints: () => ['The plaque next to the T-Rex has a fun fact about its hands.', 'T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?', 'Turn the wheel until the hub says 4.'],
        dispose() { clearTimeout(solvedT); },
      };
    },
  },

  // ---------------------------------------------------------------- 2. Roman numerals
  roman: {
    title: 'AQVILA LOCK',
    sub: '"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." — in normal numbers.',
    keys: 'Click ▲▼ or type digits · Esc close',
    build({ game, body, solve, panel }) {
      const code = [1, 9, 7, 4];
      const val = [0, 0, 0, 0];
      let typed = 0, done = false;
      body.innerHTML = `<div class="aquila">🦅 S · P · Q · R 🦅</div><div class="dials"></div><div class="help" style="text-align:center">Psst — the founding year is carved somewhere in this hall.</div>`;
      const dials = $('.dials', body);
      const nums = [];
      for (let i = 0; i < 4; i++) {
        const d = el('div', 'dial', `<button class="up">▲</button><div class="num">0</div><button class="dn">▼</button>`);
        dials.append(d);
        const n = $('.num', d);
        nums.push(n);
        $('.up', d).onclick = () => set(i, val[i] + 1);
        $('.dn', d).onclick = () => set(i, val[i] - 1);
        n.addEventListener('wheel', (e) => { e.preventDefault(); set(i, val[i] + (e.deltaY > 0 ? -1 : 1)); }, { passive: false });
      }
      const check = () => {
        if (!done && val.every((v, i) => v === code[i])) {
          done = true;
          game.audio.play('sparkle');
          setTimeout(solve, 700);
        }
      };
      const set = (i, v) => {
        val[i] = (v + 10) % 10;
        nums[i].textContent = val[i];
        nums[i].classList.remove('pop');
        void nums[i].offsetWidth;
        nums[i].classList.add('pop');
        game.audio.play('tick');
        check();
      };
      return {
        onKey(e) {
          if (/^Digit\d$/.test(e.code) || /^Numpad\d$/.test(e.code)) {
            set(typed % 4, Number(e.code.slice(-1)));
            typed++;
            if (typed % 4 === 0 && !val.every((v, i) => v === code[i])) {
              game.audio.play('error');
              panel.classList.remove('shake'); void panel.offsetWidth; panel.classList.add('shake');
            }
          }
        },
        hints: () => ['Look at the big stone tablet on the far (east) wall. The last line is the year.', 'Use the ROMAN NUMERALS 101 sign by the entrance. M = 1000, CM = 900...', 'MCMLXXIV = M (1000) + CM (900) + LXX (70) + IV (4) = 1974.'],
      };
    },
  },

  // ---------------------------------------------------------------- 3. Lights out (fuse box)
  lightsout: {
    title: 'FUSE BOX',
    sub: 'Switch ALL nine fuses ON to power the gate. Each switch also flips its neighbors (up, down, left, right).',
    keys: 'Click the switches · Esc close',
    build({ game, body, solve }) {
      const N = 9;
      let st = new Array(N).fill(true);
      const press = (s, i) => {
        const r = Math.floor(i / 3), c = i % 3;
        const out = s.slice();
        for (const [dr, dc] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const rr = r + dr, cc = c + dc;
          if (rr >= 0 && rr < 3 && cc >= 0 && cc < 3) out[rr * 3 + cc] = !out[rr * 3 + cc];
        }
        return out;
      };
      for (const i of [0, 4, 8, 5]) st = press(st, i);
      body.innerHTML = `<div class="lights"></div><div class="help" style="text-align:center">Make every switch say <b>ON</b> (green, with a lit bulb).</div>`;
      const grid = $('.lights', body);
      const cells = [];
      let done = false;
      for (let i = 0; i < N; i++) {
        const b = el('button', 'light');
        b.onclick = () => {
          if (done) return;
          st = press(st, i);
          game.audio.play('buzz');
          game.audio.play('click');
          render();
          if (st.every(Boolean)) { done = true; setTimeout(solve, 600); game.audio.play('sparkle'); }
        };
        grid.append(b);
        cells.push(b);
      }
      const render = () => cells.forEach((c, i) => { c.classList.toggle('on', st[i]); c.classList.remove('hint'); });
      render();
      const solution = () => {
        let best = null;
        for (let m = 0; m < 512; m++) {
          let s = st.slice();
          let n = 0;
          for (let i = 0; i < 9; i++) if (m & (1 << i)) { s = press(s, i); n++; }
          if (s.every(Boolean) && (best == null || n < best.n)) best = { m, n };
        }
        return best ? [...Array(9).keys()].filter((i) => best.m & (1 << i)) : [];
      };
      return {
        hints: () => ['Try pressing the switches in the CORNERS and the CENTER first.', 'The glowing dashed switch is part of the solution. Press it!', 'Keep asking — each hint shows another correct switch.'],
        onHint() { const sol = solution(); render(); if (sol.length) cells[sol[0]].classList.add('hint'); },
      };
    },
  },

  // ---------------------------------------------------------------- 4. Morse telegraph
  morse: {
    title: 'TELEGRAPH',
    sub: 'An old telegraph lamp is blinking a word over and over. Decode it with the chart and type it in.',
    keys: 'Type the word · Enter to submit · Esc close',
    build({ game, body, solve, panel }) {
      const CODES = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..' };
      const WORD = 'NAP';
      body.innerHTML = `
        <div class="morse-lamp"></div>
        <div class="morse-tape"></div>
        <div class="morse-chart">${Object.entries(CODES).map(([k, v]) => `<div><b>${k}</b> ${v}</div>`).join('')}</div>
        <div class="morse-input"><input maxlength="8" spellcheck="false" autocomplete="off" placeholder="???"><button class="btn mint">SEND</button></div>
        <div class="help" style="text-align:center;margin-top:8px">Short flash = dot ( . ) · Long flash = dash ( - )</div>`;
      const lamp = $('.morse-lamp', body), tape = $('.morse-tape', body), input = $('input', body);
      setTimeout(() => input.focus(), 50);
      const U = 0.24;
      const seq = [];
      for (const ch of WORD) {
        const code = CODES[ch];
        [...code].forEach((sym, i) => {
          seq.push({ on: true, d: sym === '.' ? U : U * 3, sym });
          seq.push({ on: false, d: i < code.length - 1 ? U : U * 3, gap: i === code.length - 1 });
        });
      }
      seq[seq.length - 1].d = U * 9;
      seq[seq.length - 1].reset = true;
      let idx = 0, timer = null, alive = true, tapeStr = '';
      const lamp3d = game.level?.stations?.[1]?.lamp;
      const step = () => {
        if (!alive) return;
        const s = seq[idx];
        lamp.classList.toggle('on', s.on);
        lamp3d?.setLamp(s.on);
        if (s.on) { game.audio.play('beep', { dur: s.d }); tapeStr += s.sym; }
        else if (s.gap) tapeStr += '   ';
        tape.textContent = tapeStr;
        if (s.reset) tapeStr = '';
        idx = (idx + 1) % seq.length;
        timer = setTimeout(step, s.d * 1000);
      };
      timer = setTimeout(step, 600);
      const submit = () => {
        const v = input.value.trim().toUpperCase();
        if (v === WORD) { alive = false; lamp3d?.setLamp(false); solve(); }
        else {
          game.audio.play('error');
          panel.classList.remove('shake'); void panel.offsetWidth; panel.classList.add('shake');
          input.select();
        }
      };
      $('.morse-input .btn', body).onclick = submit;
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); e.stopPropagation(); });
      return {
        hints: () => ['The word has 3 letters. The tape under the lamp shows the dots and dashes.', 'The first letter is  - .  which is N.', 'N (-.) · A (.-) · P (.--.)  →  something you want to do right now...'],
        dispose() { alive = false; clearTimeout(timer); lamp3d?.setLamp(false); },
      };
    },
  },

  // ---------------------------------------------------------------- 5. Sliding poster
  slider: {
    title: 'TORN POSTER',
    sub: 'Someone cut up the museum\'s most famous poster. Slide the pieces back into place.',
    keys: 'Click a tile next to the gap (or arrow keys) · Esc close',
    build({ game, body, solve }) {
      const img = posterImage();
      let s = [1, 2, 3, 4, 5, 6, 7, 8, 0];
      const neighbors = (i) => [i - 3, i + 3, i % 3 ? i - 1 : -1, i % 3 < 2 ? i + 1 : -1].filter((j) => j >= 0 && j < 9);
      let prev = -1;
      for (let k = 0; k < 34; k++) {
        const e = s.indexOf(0);
        const opts = neighbors(e).filter((j) => j !== prev);
        const j = opts[Math.floor(Math.random() * opts.length)];
        [s[e], s[j]] = [s[j], s[e]];
        prev = e;
      }
      if (s.join() === '1,2,3,4,5,6,7,8,0') { const e = s.indexOf(0); const j = neighbors(e)[0]; [s[e], s[j]] = [s[j], s[e]]; }
      body.innerHTML = `<div class="slider"></div><div class="help" style="text-align:center">Tiny numbers show where each piece belongs.</div>`;
      const grid = $('.slider', body);
      let done = false;
      const tiles = [];
      for (let i = 0; i < 9; i++) {
        const t = el('div', 'tile');
        t.onclick = () => move(i);
        grid.append(t);
        tiles.push(t);
      }
      const render = () => {
        tiles.forEach((t, i) => {
          const v = s[i];
          t.classList.toggle('empty', v === 0);
          t.classList.remove('hint');
          if (v) {
            const p = v - 1;
            t.style.backgroundImage = `url(${img})`;
            t.style.backgroundPosition = `${(p % 3) * 50}% ${Math.floor(p / 3) * 50}%`;
            t.innerHTML = `<span class="n">${v}</span>`;
          } else { t.style.backgroundImage = ''; t.innerHTML = ''; }
        });
      };
      const move = (i) => {
        if (done) return;
        const e = s.indexOf(0);
        if (!neighbors(e).includes(i)) { game.audio.play('tick'); return; }
        [s[e], s[i]] = [s[i], s[e]];
        game.audio.play('click');
        game.audio.play('thud', { vol: 0.25 });
        render();
        if (s.join() === '1,2,3,4,5,6,7,8,0') { done = true; render(); game.audio.play('sparkle'); setTimeout(solve, 700); }
      };
      render();
      let table = null;
      const nextMove = () => {
        if (!table) table = solveTable();
        const key = s.join('');
        const nxt = table.get(key);
        if (nxt == null) return -1;
        // the tile that moves is the one now where the empty will go
        const e = s.indexOf(0);
        return nxt.split('').indexOf('0') !== e ? nxt.split('').indexOf('0') : -1;
      };
      return {
        onKey(e) {
          const em = s.indexOf(0);
          const map = { ArrowUp: em + 3, ArrowDown: em - 3, ArrowLeft: em % 3 < 2 ? em + 1 : -1, ArrowRight: em % 3 ? em - 1 : -1 };
          if (map[e.code] != null && map[e.code] >= 0 && map[e.code] < 9) { e.preventDefault(); move(map[e.code]); }
        },
        hints: () => ['Solve the TOP row first (1, 2, 3), then don\'t touch it.', 'The glowing tile is the best next move. Ask again for more!', 'Still glowing — keep following the hints and it will solve itself.'],
        onHint() { const m = nextMove(); render(); if (m >= 0) tiles[m].classList.add('hint'); },
      };
    },
  },
};

// BFS from the solved state: maps each state -> the next state on a shortest path to solved.
function solveTable() {
  const goal = '123456780';
  const next = new Map([[goal, null]]);
  const q = [goal];
  const nb = (i) => [i - 3, i + 3, i % 3 ? i - 1 : -1, i % 3 < 2 ? i + 1 : -1].filter((j) => j >= 0 && j < 9);
  for (let h = 0; h < q.length; h++) {
    const cur = q[h];
    const e = cur.indexOf('0');
    for (const j of nb(e)) {
      const a = cur.split('');
      [a[e], a[j]] = [a[j], a[e]];
      const k = a.join('');
      if (!next.has(k)) { next.set(k, cur); q.push(k); }
    }
  }
  return next;
}

let posterURL = null;
function posterImage() {
  if (posterURL) return posterURL;
  const c = document.createElement('canvas');
  c.width = c.height = 360;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, 360);
  g.addColorStop(0, '#ff9a5a');
  g.addColorStop(1, '#7a1f4d');
  x.fillStyle = g;
  x.fillRect(0, 0, 360, 360);
  x.fillStyle = 'rgba(255,255,255,0.15)';
  for (let i = 0; i < 12; i++) { x.beginPath(); x.moveTo(180, 200); x.arc(180, 200, 300, i * 0.52, i * 0.52 + 0.26); x.fill(); }
  // donut
  x.fillStyle = '#d49a5c'; x.beginPath(); x.arc(180, 220, 90, 0, 7); x.fill();
  x.fillStyle = '#ff7eb6'; x.beginPath(); x.arc(180, 214, 82, 0, 7); x.fill();
  x.fillStyle = '#7a1f4d'; x.beginPath(); x.arc(180, 216, 30, 0, 7); x.fill();
  const cols = ['#3bc9ff', '#ffe14d', '#7dff6b', '#fff', '#b86bff'];
  for (let i = 0; i < 40; i++) {
    const a = Math.random() * 7, r = 40 + Math.random() * 36;
    x.save(); x.translate(180 + Math.cos(a) * r, 214 + Math.sin(a) * r); x.rotate(Math.random() * 3);
    x.fillStyle = cols[i % 5]; x.fillRect(-6, -2, 12, 4); x.restore();
  }
  // T-Rex head biting it
  x.fillStyle = '#2b1d14';
  x.beginPath(); x.moveTo(260, 120); x.lineTo(350, 90); x.lineTo(360, 150); x.lineTo(300, 175); x.lineTo(250, 160); x.fill();
  x.fillStyle = '#fff';
  for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(262 + i * 16, 160 - i * 3); x.lineTo(268 + i * 16, 175 - i * 3); x.lineTo(274 + i * 16, 158 - i * 3); x.fill(); }
  x.fillStyle = '#ff3b3b'; x.beginPath(); x.arc(320, 110, 7, 0, 7); x.fill();
  x.fillStyle = '#fff';
  x.font = 'bold 50px Arial Black, Arial';
  x.textAlign = 'center';
  x.strokeStyle = '#2b1d14';
  x.lineWidth = 8;
  x.strokeText('DONUT DAY', 180, 64);
  x.fillText('DONUT DAY', 180, 64);
  x.font = 'bold 30px Arial Black, Arial';
  x.strokeText('MUSEUM GIFT SHOP', 180, 344);
  x.fillText('MUSEUM GIFT SHOP', 180, 344);
  posterURL = c.toDataURL();
  return posterURL;
}
