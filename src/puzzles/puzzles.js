import { $, el, escapeHtml } from '../core/util.js';
import { drawGlyph, GLYPHS, GLYPH_KEYS, PHARAOH_CODE } from '../world/glyphs.js';

// Every puzzle opens in a modal panel. openPuzzle() resolves true when solved, false if closed.

const HINT_COST = 10;

export function openPuzzle(game, kind, { fragment = '', params = {}, banner = null, rewardText = '+1 DONUT 🍩' } = {}) {
  const def = PUZZLES[kind];
  return new Promise((resolve) => {
    const root = $('#modal-root');
    const modal = el('div', 'modal');
    const panel = el('div', 'panel puzzle');
    panel.innerHTML = `
      <button class="close" title="Close (Esc)">✕</button>
      <h2>${params.title || def.title}</h2>
      <div class="sub">${params.sub || def.sub}</div>
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
          ${fragment ? `<div class="help" style="margin-top:8px">Password fragment unlocked:</div>
          <div class="frag-reveal">${escapeHtml(fragment)}</div>` : banner || ''}
          <div style="font-weight:900;font-size:20px;color:var(--pink)">${rewardText}</div>
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
    const api = def.build({ game, body, solve, panel, params });
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
    build({ game, body, solve, params }) {
      const SHIFT = params.shift ?? 4;
      const plain = params.text ?? 'NEXT PUZZLE: EGYPT WING. KEY IS REX';
      const clue = params.text ? 'NO CLUE THIS TIME. TURN THE WHEEL UNTIL THE MESSAGE MAKES SENSE.' : 'SHIFT EACH LETTER BACK BY THE NUMBER OF FINGERS ON <u>BOTH</u> OF THE KING\'S HANDS.';
      const cipher = [...plain].map((c) => shiftChar(c, SHIFT)).join('');
      let shift = 0, solvedT = null;
      body.innerHTML = `
        <div class="terminal">
          <div style="text-align:center;margin-bottom:8px">&gt; INCOMING TRANSMISSION — ENCRYPTED</div>
          <div class="cipher-text"></div>
          <div style="text-align:center;color:#ffcc4d">"${clue}"</div>
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
        hints: () => (params.text
          ? ['Click ▶ again and again and watch the small green letters under each big one.', `The first word is "${plain.split(' ')[0]}".`, `Turn the wheel until the hub says ${SHIFT}.`]
          : ['The plaque next to the T-Rex has a fun fact about its hands.', 'T. rex had TWO fingers on each hand. Two hands... 2 + 2 = ?', 'Turn the wheel until the hub says 4.']),
        dispose() { clearTimeout(solvedT); },
      };
    },
  },

  // ---------------------------------------------------------------- 2. Pharaoh's Lock (Egyptian Wing)
  pharaoh: {
    title: "PHARAOH'S LOCK",
    sub: 'Four symbols, in the right order. The four pillars in this hall know the answer — count the lines on top of each one.',
    keys: 'Click the symbols (or keys 1–8) · Backspace undo · Esc close',
    build({ game, body, solve, panel }) {
      const notes = game.save.solved.pillars || {};
      const entered = [];
      let done = false;
      const icon = (kind, size = 56, color = '#1d3f8f') => {
        const c = document.createElement('canvas');
        c.width = c.height = size * 2;
        drawGlyph(c.getContext('2d'), kind, size, size, size * 1.7, color);
        return c;
      };
      const strokes = (n) => '<span class="strokes">' + '<i></i>'.repeat(n) + '</span>';
      body.innerHTML = `
        <div class="cartouche">${[1, 2, 3, 4].map((n) => `<div class="cslot"><div class="cg"></div>${strokes(n)}</div>`).join('')}</div>
        <div class="glyph-grid">${GLYPH_KEYS.map((k, i) => `<button class="glyph" data-k="${k}"><span class="gi"></span><small>${i + 1} · ${GLYPHS[k]}</small></button>`).join('')}</div>
        <div class="pillar-notes"><b>Your notes:</b> ${[1, 2, 3, 4].map((n) => `<span class="pn">${strokes(n)} <span class="pg" data-n="${n}">?</span></span>`).join('')}</div>`;
      const slots = [...body.querySelectorAll('.cslot')];
      body.querySelectorAll('.glyph').forEach((b) => {
        b.querySelector('.gi').append(icon(b.dataset.k, 30));
        b.onclick = () => add(b.dataset.k);
      });
      body.querySelectorAll('.pg').forEach((s) => {
        const k = notes[s.dataset.n];
        if (k) { s.textContent = ''; s.append(icon(k, 14, '#e9c46a')); s.title = GLYPHS[k]; }
      });
      slots.forEach((s, i) => (s.onclick = () => { if (i < entered.length && !done) { entered.splice(i); render(); game.audio.play('back'); } }));
      const render = () => slots.forEach((s, i) => {
        const g = $('.cg', s);
        g.innerHTML = '';
        if (entered[i]) g.append(icon(entered[i], 30, '#ffd98a'));
        s.classList.toggle('filled', !!entered[i]);
      });
      const add = (k) => {
        if (done || entered.length >= 4) return;
        entered.push(k);
        game.audio.play('click');
        game.audio.play('tick', { delay: 0.05 });
        render();
        if (entered.length === 4) {
          if (entered.every((g, i) => g === PHARAOH_CODE[i])) {
            done = true;
            panel.querySelector('.cartouche').classList.add('ok');
            game.audio.play('sparkle');
            setTimeout(solve, 800);
          } else {
            game.audio.play('error');
            panel.classList.remove('shake'); void panel.offsetWidth; panel.classList.add('shake');
            setTimeout(() => { if (!done) { entered.length = 0; render(); } }, 650);
          }
        }
      };
      return {
        onKey(e) {
          const m = /^(?:Digit|Numpad)([1-8])$/.exec(e.code);
          if (m) add(GLYPH_KEYS[Number(m[1]) - 1]);
          if (e.code === 'Backspace' && entered.length && !done) { e.preventDefault(); entered.pop(); render(); game.audio.play('back'); }
        },
        hints: () => [
          'Find the four pillars in this hall. Walk up to each one and press USE (E) to read it — it goes in your notes.',
          'The lines on top of a pillar tell you its place in the code: | is first, || is second, ||| third, |||| last.',
          'The code is: BIRD, EYE, SNAKE, ANKH.',
        ],
      };
    },
  },

  // ---------------------------------------------------------------- 3. Roman numerals
  roman: {
    title: 'AQVILA LOCK',
    sub: '"ENTER THE YEAR THIS MVSEVM WAS FOVNDED, CITIZEN." — in normal numbers. Each dial gets one piece of the Roman numeral.',
    keys: 'Click ▲▼ or type digits · Esc close',
    build({ game, body, solve, panel, params }) {
      const year = params.year ?? 1974;
      const code = String(year).padStart(4, '0').split('').map(Number);
      const parts = romanParts(year);
      const numeral = parts.join('');
      const places = ['thousands', 'hundreds', 'tens', 'ones'];
      const val = [0, 0, 0, 0];
      let typed = 0, done = false;
      body.innerHTML = `<div class="aquila">🦅 S · P · Q · R 🦅</div>
        <div class="roman-year">${params.year ? 'THE CODE IS' : 'FOUNDED IN'} <b>${numeral}</b></div>
        <div class="dials"></div>
        <div class="numeral-key">${[['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]].map(([l, n]) => `<span><b>${l}</b> = ${n}</span>`).join('')}</div>
        <div class="help" style="text-align:center">Add the letters up. A small letter <b>before</b> a bigger one is taken away: <b>IV</b> = 5 − 1 = 4.<br>A dial turns <b style="color:var(--mint)">green</b> when it's right!</div>`;
      const dials = $('.dials', body);
      const nums = [], dialEls = [];
      for (let i = 0; i < 4; i++) {
        const d = el('div', 'dial', `<div class="chunk">${parts[i] || '—'}</div><button class="up">▲</button><div class="num">0</div><button class="dn">▼</button><div class="place">${places[i]}</div>`);
        dials.append(d);
        dialEls.push(d);
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
        const ok = val[i] === code[i];
        if (ok && !dialEls[i].classList.contains('ok')) game.audio.play('chime', { vol: 0.35 });
        dialEls[i].classList.toggle('ok', ok);
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
        hints: () => (params.year
          ? ['A dash (—) means that dial is 0. Count each piece: M = 1000, C = 100, X = 10, I = 1.', `${parts[0] || '—'} → ${code[0]} and ${parts[1] || '—'} → ${code[1]}.`, `The code is ${code.join(' ')}.`]
          : ['M is 1000 — one thousand — so the first dial is 1.', 'CM is 1000 take away 100 = 900, so the second dial is 9. LXX is 50 + 10 + 10 = 70, so the third dial is 7.', 'IV is 5 take away 1 = 4. The year is 1 9 7 4.']),
      };
    },
  },

  // ---------------------------------------------------------------- 4. Lights out (fuse box)
  lightsout: {
    title: 'FUSE BOX',
    sub: 'Switch ALL nine fuses ON to power the gate. Each switch also flips its neighbors (up, down, left, right).',
    keys: 'Click the switches (or keys 1–9) · Esc close',
    build({ game, body, solve, params }) {
      const n = params.n ?? 3, N = n * n;
      let st = new Array(N).fill(true);
      const press = (s, i) => {
        const r = Math.floor(i / n), c = i % n;
        const out = s.slice();
        for (const [dr, dc] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const rr = r + dr, cc = c + dc;
          if (rr >= 0 && rr < n && cc >= 0 && cc < n) out[rr * n + cc] = !out[rr * n + cc];
        }
        return out;
      };
      for (const i of params.presses ?? [0, 4, 8, 5]) st = press(st, i);
      if (st.every(Boolean)) st = press(st, Math.floor(N / 2));
      body.innerHTML = `<div class="lights"></div><div class="help" style="text-align:center">Make every switch say <b>ON</b> (green, with a lit bulb).</div>`;
      const grid = $('.lights', body);
      if (n !== 3) grid.classList.add('n' + n);
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
        for (let m = 0; m < 1 << N; m++) {
          let s = st.slice();
          let cnt = 0;
          for (let i = 0; i < N; i++) if (m & (1 << i)) { s = press(s, i); cnt++; }
          if (s.every(Boolean) && (best == null || cnt < best.cnt)) best = { m, cnt };
        }
        return best ? [...Array(N).keys()].filter((i) => best.m & (1 << i)) : [];
      };
      return {
        // keyboard: 1-9 press the switches (laid out like a phone keypad, top-left = 1)
        onKey(e) {
          const m = /^(?:Digit|Numpad)([1-9])$/.exec(e.code);
          if (m && n === 3) cells[Number(m[1]) - 1].click();
        },
        hints: () => ['Try pressing the switches in the CORNERS and the CENTER first.', 'The glowing dashed switch is part of the solution. Press it!', 'Keep asking — each hint shows another correct switch.'],
        onHint() { const sol = solution(); render(); if (sol.length) cells[sol[0]].classList.add('hint'); },
      };
    },
  },

  // ---------------------------------------------------------------- 5. Sliding poster
  slider: {
    title: 'TORN POSTER',
    sub: 'Someone cut up the museum\'s most famous poster. Slide the pieces back into place.',
    keys: 'Click a tile next to the gap (or arrow keys) · Esc close',
    build({ game, body, solve, params }) {
      const img = posterImage();
      let s = [1, 2, 3, 4, 5, 6, 7, 8, 0];
      const neighbors = (i) => [i - 3, i + 3, i % 3 ? i - 1 : -1, i % 3 < 2 ? i + 1 : -1].filter((j) => j >= 0 && j < 9);
      let prev = -1;
      for (let k = 0; k < (params.moves ?? 34); k++) {
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

  // ---------------------------------------------------------------- 6. Memory lock (generated)
  simon: {
    title: 'MEMORY LOCK',
    sub: 'Watch the lights, then press them in the same order.',
    keys: 'Click the pads (or keys 1–4) · Esc close',
    build({ game, body, solve, panel, params }) {
      const len = params.length ?? 4;
      const NAMES = ['RED', 'BLUE', 'GREEN', 'YELLOW'];
      const NOTES = [392, 523, 659, 784];
      const seq = Array.from({ length: len }, () => Math.floor(Math.random() * 4));
      body.innerHTML = `<div class="simon">${NAMES.map((nm, i) => `<button class="pad p${i}" data-i="${i}"><span>${i + 1}</span></button>`).join('')}</div>
        <div class="simon-status">Watch closely…</div>
        <div class="help" style="text-align:center"><button class="btn small simon-replay">↻ Show me again</button></div>`;
      const pads = [...body.querySelectorAll('.pad')];
      const status = $('.simon-status', body);
      let input = [], playing = false, done = false, alive = true, runId = 0;
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const flash = (i, ms = 360) => {
        pads[i].classList.add('lit');
        game.audio.play('note', { f: NOTES[i], dur: ms / 1000 });
        setTimeout(() => pads[i].classList.remove('lit'), ms);
      };
      const show = async () => {
        const id = ++runId;
        playing = true;
        input = [];
        status.textContent = 'Watch closely…';
        await wait(700);
        for (const i of seq) {
          if (!alive || id !== runId) return;
          flash(i);
          await wait(560);
        }
        if (!alive || id !== runId) return;
        playing = false;
        status.textContent = `Your turn! (0/${len})`;
      };
      const press = (i) => {
        if (playing || done) return;
        flash(i, 220);
        input.push(i);
        if (input[input.length - 1] !== seq[input.length - 1]) {
          game.audio.play('error');
          panel.classList.remove('shake'); void panel.offsetWidth; panel.classList.add('shake');
          status.textContent = 'Oops! Watch again…';
          playing = true;
          setTimeout(show, 700);
          return;
        }
        status.textContent = `Your turn! (${input.length}/${len})`;
        if (input.length === len) {
          done = true;
          status.textContent = 'Correct!';
          game.audio.play('sparkle');
          setTimeout(solve, 700);
        }
      };
      pads.forEach((p, i) => (p.onclick = () => press(i)));
      $('.simon-replay', body).onclick = () => { if (!done) show(); };
      show();
      return {
        onKey(e) {
          const m = /^(?:Digit|Numpad)([1-4])$/.exec(e.code);
          if (m) press(Number(m[1]) - 1);
        },
        hints: () => [
          'Say the colors out loud while they flash: "red, blue, blue..." — it helps!',
          `It starts with ${seq.slice(0, 2).map((i) => NAMES[i]).join(', ')}.`,
          `The whole order is: ${seq.map((i) => NAMES[i]).join(', ')}.`,
        ],
        dispose() { alive = false; },
      };
    },
  },
};

// Roman numeral pieces for each digit of a 4-digit number: 1974 → ['M', 'CM', 'LXX', 'IV'].
export function romanParts(num) {
  const d = String(num).padStart(4, '0').split('').map(Number);
  const piece = (x, one, five, ten) => ['', one, one + one, one + one + one, one + five, five, five + one, five + one + one, five + one + one + one, one + ten][x];
  return ['M'.repeat(d[0]), piece(d[1], 'C', 'D', 'M'), piece(d[2], 'X', 'L', 'C'), piece(d[3], 'I', 'V', 'X')];
}

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
