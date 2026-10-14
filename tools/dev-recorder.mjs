// Builds dev-recorder.html, the "Dev Line Booth": a page (published as a claude.ai artifact, so it works
// on a phone) for recording the dev's lines, one video per line. It marks lines that are new, or whose
// text changed since the take that's in the game (assets/clips/recorded.json).
//   node tools/dev-recorder.mjs                 → dev-recorder.html
//   node tools/dev-recorder.mjs --todo          → just list the dev lines that need (re)recording
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

globalThis.window = {};
const { LINES, EMOTIONS } = await import('../src/game/script.js');
const root = new URL('../', import.meta.url);
const pkg = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));

// the same hash as the recorder page: tells us when a line's text changed after it was recorded
export function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16); }

const recFile = new URL('assets/clips/recorded.json', root);
const recorded = existsSync(recFile) ? JSON.parse(readFileSync(recFile, 'utf8')) : {};
const lines = Object.entries(LINES)
  .filter(([, L]) => L.who === 'dev')
  .map(([id, L]) => ({ id, mood: L.mood, text: L.text }))
  .sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));

if (process.argv.includes('--todo')) {
  const todo = lines.filter((L) => recorded[L.id]?.hash !== hash(L.text));
  for (const L of todo) console.log(`${recorded[L.id] ? 'RE-RECORD' : 'NEW      '} ${L.id}  ${L.text}`);
  console.log(`${todo.length} of ${lines.length} dev lines need recording.`);
} else {
  const fill = (tag, v) => (s) => s.replace(tag, () => v);
  let html = readFileSync(new URL('tools/dev-recorder.template.html', root), 'utf8');
  for (const f of [
    fill('/*LINES*/[]', JSON.stringify(lines)),
    fill('/*RECORDED*/{}', JSON.stringify(recorded)),
    fill('/*EMOTIONS*/{}', JSON.stringify(EMOTIONS)),
    fill("/*VERSION*/''", JSON.stringify('v' + pkg.version)),
  ]) html = f(html);
  writeFileSync(new URL('dev-recorder.html', root), html);
  console.log(`wrote dev-recorder.html: ${lines.length} dev lines, ${lines.filter((L) => recorded[L.id]?.hash !== hash(L.text)).length} to record`);
}
