// Puts recorded lines (the dev's, the guard's, Aaron's) into the game (needs ffmpeg). Each take becomes
// assets/clips/<lineId>.mp4, a small square video that plays everywhere, or assets/clips/<lineId>.mp3 when
// the video is black (camera covered: then the game plays just the voice and the cartoon talks along). Silence at the start and
// end is trimmed and the volume evened out. assets/clips/recorded.json notes which text (and which take)
// each clip is, so lines that change later show up as "re-record" in the line booths.
//   node tools/import-clips.mjs <takes.json> <folder with the videos>
// takes.json: { "dev01": { "file": "dev01.mp4", "hash": "...", "text": "...", "asset": "..." }, ... }
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const [manifestPath, dir] = process.argv.slice(2);
if (!manifestPath || !dir) { console.error('usage: node tools/import-clips.mjs <takes.json> <folder>'); process.exit(1); }
const clips = new URL('../assets/clips/', import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const recFile = join(clips, 'recorded.json');
const recorded = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};
const ff = (...args) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { maxBuffer: 1 << 26 });
// trim silence at both ends, then even out the loudness
const AUDIO = 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.3,areverse,loudnorm=I=-16:TP=-1.5:LRA=11';

// how bright the video is, on average (0-255): a covered camera is all but black
function brightness(file) {
  try {
    const px = ff('-i', file, '-vf', 'fps=2,scale=32:24', '-f', 'rawvideo', '-pix_fmt', 'gray', '-');
    let sum = 0;
    for (const b of px) sum += b;
    return px.length ? sum / px.length : 0;
  } catch (_) { return 0; } // (no video at all)
}

for (const [id, m] of Object.entries(manifest)) {
  if (!/^(dev|guard|aaron)\d+$/.test(id) || !/^[\w.-]+$/.test(m.file)) { console.warn('skipping', id); continue; }
  const src = join(dir, m.file);
  const voiceOnly = brightness(src) < 6;
  const out = join(clips, `${id}.${voiceOnly ? 'mp3' : 'mp4'}`);
  // (MP3 plays in every browser)
  if (voiceOnly) ff('-i', src, '-vn', '-af', AUDIO, '-c:a', 'libmp3lame', '-b:a', '64k', '-ac', '1', '-ar', '44100', out);
  // square 360×360, H.264 + AAC, small, and it starts playing right away
  else ff('-i', src, '-vf', "crop='min(iw,ih)':'min(iw,ih)',scale=360:360,fps=30", '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-c:v', 'libx264', '-profile:v', 'main', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '96k', '-ac', '1', '-ar', '44100', '-movflags', '+faststart', out);
  // (only one recording per line)
  for (const ext of ['mp4', 'webm', 'mov', 'm4a', 'mp3']) {
    const f = join(clips, `${id}.${ext}`);
    if (f !== out && existsSync(f)) unlinkSync(f);
  }
  recorded[id] = { hash: m.hash, ...(m.asset ? { asset: m.asset } : {}) };
  console.log(`${id}.${voiceOnly ? 'mp3 (voice only)' : 'mp4'}  ${(readFileSync(out).length / 1024).toFixed(0)} KB  "${m.text}"`);
}
const sorted = Object.fromEntries(Object.entries(recorded).sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })));
writeFileSync(recFile, JSON.stringify(sorted, null, 2) + '\n');
console.log(`imported ${Object.keys(manifest).length} clips`);
