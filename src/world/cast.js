// Which look each character gets, from the "Characters" setting:
//   'mixed' (the default): the new guard, Aaron and mummy, with the classic visitors, street crowd and statues
//   'new': everyone in the new look (people.js)
//   'classic': everyone in the classic look (people-classic.js)
// The game sets it from the settings (setCastStyle), and it applies to the next level that's built.
import * as fresh from './people.js';
import * as classic from './people-classic.js';

export const CAST_STYLES = ['mixed', 'new', 'classic'];
let style = 'mixed';
export function setCastStyle(s) { style = CAST_STYLES.includes(s) ? s : 'mixed'; }
export const castStyle = () => style;

// the main characters: you, Aaron and the mummy
const main = () => (style === 'classic' ? classic : fresh);
// everyone else: visitors, the crowd outside, statues and the legionary
export const npcsAreNew = () => style === 'new';
const npc = () => (npcsAreNew() ? fresh : classic);

export const makeGuard = (extra) => main().makeGuard(extra);
export const makeMummy = () => main().makeMummy();
export const makeAaron = () => new (main().Person)({ shirt: 0x8fb3e0, pants: 0x1b2440, cap: true, badge: true, nameTag: true, hair: 0x111111, skin: 0xc68e64, mustache: true });
export const makeVisitor = (r) => npc().makeVisitor(r);
export const makeNpc = (opts) => new (npc().Person)(opts);
