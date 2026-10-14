// Puts the website together in public/ (what Vercel, or any static host, serves): the page, its style
// and config, the built game, and the clips. Run `npm run site` (it builds first).
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const out = new URL('public/', root);
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of ['index.html', 'style.css', 'game-config.js', 'dist/game.js', 'assets']) {
  cpSync(new URL(f, root), new URL(f, out), { recursive: true });
}
console.log('wrote public/');
