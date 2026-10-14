// The game's version comes from package.json, and every version gets a matching GitHub release
// (made automatically by .github/workflows/release.yml when it lands on main). To release an update:
// bump "version" in package.json, add a section for it to CHANGELOG.md, rebuild, and merge.
import { version } from '../package.json';

export const VERSION = 'v' + version;
export const RELEASES_URL = 'https://github.com/Hudsoonvid/Cs-game/releases';
const LATEST_API = 'https://api.github.com/repos/Hudsoonvid/Cs-game/releases/latest';

// The newest released version ('v1.2.3'), or null if GitHub can't be reached. Asked once per visit.
let latest = null;
export function latestVersion() {
  latest ||= fetch(LATEST_API, { headers: { Accept: 'application/vnd.github+json' } })
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => (/^v\d+\.\d+\.\d+$/.test(j?.tag_name || '') ? j.tag_name : null))
    .catch(() => null);
  return latest;
}

// is version a newer than b? ('v0.5.0' vs 'v0.4.1')
export function isNewer(a, b) {
  const [x, y] = [a, b].map((v) => v.replace(/^v/, '').split('.').map(Number));
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
}
