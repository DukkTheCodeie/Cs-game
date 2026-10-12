import { $, el, sleep } from '../core/util.js';

// The security office computer (MUSE-OS login screen). Driven by cutscene scripts.
export class Computer {
  constructor(game) {
    this.game = game;
    this.modal = null;
  }

  open() {
    this.close();
    const m = (this.modal = el('div', 'modal'));
    m.style.background = 'rgba(0,0,0,0.75)';
    m.innerHTML = `<div class="computer"><div class="screen"></div></div>`;
    $('#modal-root').append(m);
    this.screen = $('.screen', m);
    this.showLogin();
  }

  close() {
    this.modal?.remove();
    this.modal = null;
  }

  showLogin() {
    this.screen.className = 'screen';
    this.screen.innerHTML = `
      <div class="login-box">
        <div class="login-avatar">💂</div>
        <div class="login-user">NIGHT_GUARD</div>
        <div class="login-pw"><span class="dots"></span><span class="caret"></span></div>
        <div class="login-btns"><button class="lb login">LOG IN</button><button class="lb hint">HINT?</button></div>
        <div class="login-msg"></div>
      </div>`;
    this.dots = $('.dots', this.screen);
    this.msg = $('.login-msg', this.screen);
  }

  async type(text, { visible = false, speed = 0.11 } = {}) {
    const g = this.game;
    for (const ch of text) {
      if (g.sched.skipping) break;
      this.dots.textContent += visible ? ch : '•';
      g.audio.play('type');
      await g.wait(speed + Math.random() * 0.06);
    }
    if (g.sched.skipping) this.dots.textContent = visible ? text : '•'.repeat(text.length);
  }

  clear() {
    if (this.dots) this.dots.textContent = '';
  }

  setMsg(text, ok = false) {
    this.msg.textContent = text;
    this.msg.classList.toggle('ok', ok);
    if (!ok && text) {
      this.game.audio.play('error');
      const box = $('.login-box', this.screen);
      box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    }
  }

  async press(which) {
    const b = $(`.lb.${which}`, this.screen);
    if (!b) return;
    b.classList.add('press');
    this.game.audio.play('click');
    await sleep(160);
    b.classList.remove('press');
  }

  showHint() {
    this.screen.className = 'screen';
    this.screen.style.background = '#000';
    this.screen.innerHTML = `<div class="museos-hint"><span class="glitch">SOLVE THE PUZZLES</span>PUZZLE #1 SLEEPS WHERE GIANTS ONCE WALKED<br><br>&gt; DINOSAUR HALL_</div>`;
    this.game.audio.play('glitch');
  }

  showDenied(fragments) {
    this.screen.className = 'screen denied';
    this.screen.style.background = '';
    this.screen.innerHTML = `<div class="denied-text">ACCESS DENIED</div>
      <div class="museos-hint" style="color:#ff8a8a;text-shadow:none">PASSWORD FRAGMENTS: ${fragments.length} / 6<br><span style="font-size:.7em">${fragments.join(' · ')} · ???</span></div>`;
    this.game.audio.play('error');
    this.game.audio.play('glitch', { delay: 0.2 });
  }
}

export function showGameOver(game, { title = 'GAME OVER', sub = '', buttons = [] }) {
  return new Promise((resolve) => {
    const d = el('div', '', `<div class="go-title">${title}</div><div class="go-sub">${sub}</div><div class="row" style="gap:14px;justify-content:center;display:flex;flex-wrap:wrap"></div>`);
    d.id = 'gameover-scr';
    const row = d.querySelector('.row');
    for (const b of buttons) {
      const btn = el('button', 'btn big ' + (b.cls || ''), b.label);
      btn.onclick = () => { game.audio.play('select'); d.remove(); resolve(b.value); };
      row.append(btn);
    }
    document.body.append(d);
  });
}
