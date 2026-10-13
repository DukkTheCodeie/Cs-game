import { Game } from './game/game.js';
import { $ } from './core/util.js';
import { VERSION } from './version.js';
import { logEvent } from './core/analytics.js';

// LOCKED OUT — entry point.
// Builds the game behind the "click to start" screen (a click is needed to unlock audio).

function fatal(err) {
  console.error(err);
  const b = $('#boot');
  if (!b) return;
  b.classList.remove('off', 'loading');
  b.querySelector('.boot-inner').innerHTML = `
    <div class="boot-logo" style="font-size:48px">UH OH 🍩</div>
    <div class="boot-tips" style="max-width:520px">The game couldn't start. Your browser might not support WebGL, or something broke.<br><br>
    <code style="color:#ff8a8a">${String(err?.message || err).replace(/</g, '&lt;')}</code><br><br>${VERSION}</div>`;
}

addEventListener('DOMContentLoaded', async () => {
  const boot = $('#boot');
  const ver = document.createElement('div');
  ver.className = 'boot-version';
  ver.textContent = VERSION;
  boot?.append(ver);
  let game;
  try {
    game = new Game();
    window.game = game;
  } catch (e) {
    fatal(e);
    return;
  }
  const ready = game.boot().catch(fatal);
  $('#boot-start').addEventListener('click', async () => {
    logEvent('play');
    boot.classList.add('loading');
    game.audio.init();
    game.audio.play('select');
    // Unlock speech + video playback while we still have the user's click (needed on iPhone/Safari).
    try {
      if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        speechSynthesis.speak(u);
      }
    } catch (_) { /* ignore */ }
    await ready;
    boot.style.transition = 'opacity .8s';
    boot.style.opacity = '0';
    setTimeout(() => boot.classList.add('off'), 800);
    game.start();
  });
});
