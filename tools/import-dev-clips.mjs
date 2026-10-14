// Puts recorded dev lines into the game: converts each take to a small square .mp4 that plays
// everywhere (needs ffmpeg), saves it as assets/clips/<lineId>.mp4, and notes in
// assets/clips/recorded.json which text (and which take) each clip is, so lines that change later
// show up as "re-record" in the Dev Line Booth.
//   node tools/import-dev-clips.mjs <takes.json> <folder with the videos>
// takes.json: { "dev01": { "file": "dev01.mp4", "hash": "...", "text": "...", "asset": "..." }, ... }
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const [manifestPath, dir] = process.argv.slice(2);
if (!manifestPath || !dir) { console.error('usage: node tools/import-dev-clips.mjs <takes.json> <folder>'); process.exit(1); }
const clips = new URL('../assets/clips/', import.meta.url).pathname;
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const recFile = join(clips, 'recorded.json');
const recorded = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};

for (const [id, m] of Object.entries(manifest)) {
  if (!/^dev\d+$/.test(id) || !/^[\w.-]+$/.test(m.file)) { console.warn('skipping', id); continue; }
  const out = join(clips, `${id}.mp4`);
  // square 360×360, H.264 + AAC, small, and it starts playing right away
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', join(dir, m.file),
    '-vf', "crop='min(iw,ih)':'min(iw,ih)',scale=360:360,fps=30", '-c:v', 'libx264', '-profile:v', 'main', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '96k', '-ac', '1', '-movflags', '+faststart', out]);
  for (const ext of ['webm', 'mov']) if (existsSync(join(clips, `${id}.${ext}`))) unlinkSync(join(clips, `${id}.${ext}`));
  recorded[id] = { hash: m.hash, ...(m.asset ? { asset: m.asset } : {}) };
  console.log(`${id}.mp4  ${(readFileSync(out).length / 1024).toFixed(0)} KB  "${m.text}"`);
}
const sorted = Object.fromEntries(Object.entries(recorded).sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })));
writeFileSync(recFile, JSON.stringify(sorted, null, 2) + '\n');
console.log(`imported ${Object.keys(manifest).length} clips`);
