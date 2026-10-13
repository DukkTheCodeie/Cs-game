// The game's version comes from package.json, and every version gets a matching GitHub release
// (made automatically by .github/workflows/release.yml when it lands on main). To release an update:
// bump "version" in package.json, add a section for it to CHANGELOG.md, rebuild, and merge.
import { version } from '../package.json';

export const VERSION = 'v' + version;
export const RELEASES_URL = 'https://github.com/Hudsoonvid/Cs-game/releases';
