import { $, el, escapeHtml, sleep } from '../core/util.js';
import { LINES, SPEAKERS } from '../game/script.js';
import { modal } from './menu.js';
import { CLIP_DIR } from './clips.js';

const GROUPS = [
  ['guard', 'THE SECURITY GUARD (you)'],
  ['dev', 'THE DEV in the menu TV (also you)'],
  ['aaron', 'AARON (get a friend!)'],
  ['museos', 'MUSE-OS, the museum computer'],
];

function extFor(type) {
  if (/webm/.test(type)) return 'webm';
  if (/mp4/.test(type)) return 'mp4';
  if (/quicktime/.test(type)) return 'mov';
  if (/png/.test(type)) return 'png';
  if (/jpe?g/.test(type)) return 'jpg';
  if (/webp/.test(type)) return 'webp';
  return 'bin';
}

export function openClipStudio(game) {
  const clips = game.clips;
  const m = modal(`
    <h2>🎬 CLIP STUDIO</h2>
    <div class="sub">Put yourself in the game! Record (or upload) a clip for any line — it replaces the cartoon actor in cutscenes and in the menu TV.</div>
    <div class="help">${clips.canStore ? '' : '<b style="color:var(--red)">This browser blocked storage, so recordings can\'t be saved here — use the file method below.</b><br>'}
      <b>Two ways to add clips:</b><br>
      1. Press <b>● REC</b> to film with your webcam, or <b>⬆</b> to upload a video. Saved in this browser.<br>
      2. For everyone who plays your game: put files in <code>${CLIP_DIR}</code> named after the line id, e.g. <code>${CLIP_DIR}guard05.mp4</code>. Press <b>⬇</b> to download a recording with the right name.<br>
      Photos work too: <code>${CLIP_DIR}guard.png</code> / <code>dev.png</code> become your face when there's no video.</div>
    <div class="clip-group">YOUR FACE (photos)</div>
    <div class="clip-list portraits"></div>
    <div class="lines"></div>`, () => unsub());
  const portraits = $('.portraits', m.panel);
  const linesBox = $('.lines', m.panel);

  const render = () => {
    portraits.innerHTML = '';
    for (const who of ['guard', 'dev', 'aaron']) {
      const key = 'portrait_' + who;
      const have = clips.portrait(who);
      const row = el('div', 'clip-row', `
        <div><div class="line">${SPEAKERS[who].name()} — photo</div>
        <div class="meta">${have ? `<span class="ok">✓ ${have.source === 'file' ? 'from file' : 'saved in browser'}</span>` : 'using the cartoon face'} · file name: <code>${who}.png</code></div></div>
        <div class="acts"></div>`);
      const acts = $('.acts', row);
      acts.append(btn('📷 Snap', () => record(game, key, `Smile! This photo becomes ${SPEAKERS[who].name()}'s face.`, true).then(render), !clips.canStore));
      acts.append(btn('⬆', () => upload(game, key, 'image/*').then(render), !clips.canStore, 'Upload a photo'));
      if (clips.recorded[key]) {
        acts.append(btn('⬇', () => download(key, clips.recorded[key]), false, 'Download'));
        acts.append(btn('🗑', () => clips.remove(key).then(render), false, 'Delete'));
      }
      portraits.append(row);
    }
    linesBox.innerHTML = '';
    for (const [who, title] of GROUPS) {
      linesBox.append(el('div', 'clip-group', title));
      const list = el('div', 'clip-list');
      for (const [id, L] of Object.entries(LINES)) {
        if (L.who !== who) continue;
        const have = clips.get(id);
        const row = el('div', 'clip-row', `
          <div><div class="line">“${escapeHtml(L.text)}”</div>
          <div class="meta">id <code>${id}</code> · ${have ? `<span class="ok">✓ ${have.source === 'file' ? 'video file found' : 'recorded'}</span>` : 'cartoon + voice'}</div></div>
          <div class="acts"></div>`);
        const acts = $('.acts', row);
        acts.append(btn('● REC', () => record(game, id, L.text).then(render), !clips.canStore));
        acts.append(btn('⬆', () => upload(game, id, 'video/*').then(render), !clips.canStore, 'Upload a video'));
        if (have) acts.append(btn('▶', () => preview(have.url), false, 'Play'));
        if (clips.recorded[id]) {
          acts.append(btn('⬇', () => download(id, clips.recorded[id]), false, 'Download with the right file name'));
          acts.append(btn('🗑', () => clips.remove(id).then(render), false, 'Delete'));
        }
        list.append(row);
      }
      linesBox.append(list);
    }
  };
  const unsub = clips.onChange(render);
  render();
}

function btn(label, fn, disabled = false, title = '') {
  const b = el('button', 'btn small', label);
  b.disabled = disabled;
  if (title) b.title = title;
  b.onclick = fn;
  return b;
}

function download(id, rec) {
  const a = document.createElement('a');
  a.href = rec.url;
  a.download = `${id.replace(/^portrait_/, '')}.${extFor(rec.type)}`;
  document.body.append(a);
  a.click();
  a.remove();
}

function preview(url) {
  const m = modal(`<h2>▶ PREVIEW</h2><div class="rec-stage"><video class="playback" controls autoplay playsinline src="${url}"></video></div>`);
  $('video', m.panel).play().catch(() => {});
}

function upload(game, id, accept) {
  return new Promise((resolve) => {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = accept;
    inp.onchange = async () => {
      const f = inp.files?.[0];
      if (f) {
        await game.clips.save(id, f);
        game.audio.play('chime');
      }
      resolve();
    };
    inp.click();
  });
}

// Webcam recorder (video clip) or snapshot (photo)
async function record(game, id, line, photo = false) {
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480, facingMode: 'user' }, audio: !photo });
  } catch (e) {
    modal(`<h2>NO CAMERA 😢</h2><div class="sub">The browser didn't let the game use your camera${photo ? '' : '/microphone'}.</div>
      <div class="help">Check the camera permission next to the address bar and try again — or use the ⬆ button to upload a ${photo ? 'photo' : 'video'} instead.<br><br>(${escapeHtml(e?.message || e)})</div>`);
    return;
  }
  game.audio.stopMusic(0.3);
  return new Promise((resolve) => {
    let rec = null, chunks = [], blob = null, timer = null;
    const m = modal(`<h2>${photo ? '📷 SNAP A PHOTO' : '● RECORD A LINE'}</h2>
      <div class="rec-stage" style="position:relative">
        <div class="rec-line">${photo ? escapeHtml(line) : `Say: “${escapeHtml(line)}”`}</div>
        <video autoplay muted playsinline></video>
        <div class="rec-count"></div>
        <div class="row rec-btns" style="justify-content:center"></div>
        <div class="help rec-status">${photo ? 'Center your face, then press SNAP.' : 'Press RECORD, wait for 3-2-1, say the line, then press STOP. Act it out! 🎭'}</div>
      </div>`, () => { stream.getTracks().forEach((t) => t.stop()); clearInterval(timer); game.audio.playMusic('menu'); resolve(); });
    const video = $('video', m.panel), btns = $('.rec-btns', m.panel), count = $('.rec-count', m.panel), status = $('.rec-status', m.panel);
    video.srcObject = stream;
    const setBtns = (list) => { btns.innerHTML = ''; list.forEach((b) => btns.append(b)); };
    const save = async () => {
      await game.clips.save(id, blob);
      game.audio.play('chime');
      m.close();
    };
    const retake = () => {
      video.classList.remove('playback');
      video.removeAttribute('src');
      video.srcObject = stream;
      video.muted = true;
      video.controls = false;
      video.play().catch(() => {});
      setBtns([start]);
      status.textContent = 'Ready when you are!';
    };
    const countdown = async () => {
      for (const n of ['3', '2', '1']) { count.textContent = n; game.audio.play('beep', { dur: 0.08 }); await sleep(700); }
      count.textContent = '';
    };
    const start = el('button', 'btn pink', photo ? '📷 SNAP' : '● RECORD');
    start.onclick = async () => {
      setBtns([]);
      await countdown();
      if (photo) {
        const c = document.createElement('canvas');
        const s = Math.min(video.videoWidth, video.videoHeight) || 480;
        c.width = c.height = 512;
        const x = c.getContext('2d');
        x.translate(512, 0);
        x.scale(-1, 1);
        x.drawImage(video, (video.videoWidth - s) / 2, (video.videoHeight - s) / 2, s, s, 0, 0, 512, 512);
        game.audio.play('flashlight');
        game.hud.flash('rgba(255,255,255,0.9)', 0.3);
        blob = await new Promise((r) => c.toBlob(r, 'image/png'));
        video.srcObject = null;
        video.src = URL.createObjectURL(blob);
        video.poster = video.src;
        status.textContent = 'Looking good!';
        const img = el('img');
        img.src = URL.createObjectURL(blob);
        img.style.cssText = 'width:240px;border-radius:16px;border:3px solid var(--gold)';
        video.replaceWith(img);
        setBtns([el('button', 'btn mint', '✓ USE THIS'), el('button', 'btn ghost', '↺ RETAKE')]);
        btns.children[0].onclick = save;
        btns.children[1].onclick = () => { img.replaceWith(video); retake(); };
        return;
      }
      const mime = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4'].find((t) => window.MediaRecorder?.isTypeSupported?.(t)) || '';
      try { rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined); } catch (e) { status.textContent = 'Recording is not supported in this browser. Try uploading a video instead.'; return; }
      chunks = [];
      rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      rec.onstop = () => {
        clearInterval(timer);
        blob = new Blob(chunks, { type: rec.mimeType || 'video/webm' });
        video.srcObject = null;
        video.src = URL.createObjectURL(blob);
        video.muted = false;
        video.controls = true;
        video.classList.add('playback');
        video.play().catch(() => {});
        status.textContent = 'How was that? Save it or try again.';
        const ok = el('button', 'btn mint', '✓ USE THIS'), again = el('button', 'btn ghost', '↺ RETAKE');
        ok.onclick = save;
        again.onclick = retake;
        setBtns([ok, again]);
      };
      rec.start(200);
      let sec = 0;
      status.innerHTML = '<span class="rec-dot">● REC</span> 0s';
      timer = setInterval(() => {
        sec++;
        status.innerHTML = `<span class="rec-dot">● REC</span> ${sec}s`;
        if (sec >= 20) rec.state === 'recording' && rec.stop();
      }, 1000);
      const stop = el('button', 'btn pink', '■ STOP');
      stop.onclick = () => rec.state === 'recording' && rec.stop();
      setBtns([stop]);
    };
    setBtns([start]);
  });
}
