// Packs the whole game into ONE html file (the page, style.css, game-config.js and dist/game.js), for
// hosts that want a single file, sharing in Google Classroom/Drive, or opening straight from a computer.
//   npm run build && node tools/single-file.mjs        → locked-out.html
// The fonts still come from Google Fonts (they fall back to built-in fonts offline). Clips in
// assets/clips/ aren't packed in: the single file always uses the robot voice and drawn faces.
import { readFileSync, writeFileSync } from 'node:fs';

const read = (f) => readFileSync(new URL('../' + f, import.meta.url), 'utf8');
// a script or style can't contain its own closing tag
const safe = (code, tag) => code.replace(new RegExp(`</(${tag})`, 'gi'), '<\\/$1');

let html = read('index.html');
const swap = (tag, inline) => {
  if (!html.includes(tag)) throw new Error('index.html no longer has: ' + tag);
  html = html.replace(tag, () => inline);
};
swap('<link rel="stylesheet" href="style.css">', `<style>\n${safe(read('style.css'), 'style')}\n</style>`);
swap('<script src="game-config.js"></script>', `<script>\n${safe(read('game-config.js'), 'script')}\n</script>`);
swap('<script src="dist/game.js"></script>', `<script>\n${safe(read('dist/game.js'), 'script')}\n</script>`);

const out = process.argv[2] || 'locked-out.html';
writeFileSync(new URL('../' + out, import.meta.url), html);
console.log(`wrote ${out}: ${(Buffer.byteLength(html) / 1e6).toFixed(2)} MB`);
