// Defaults. To change them WITHOUT rebuilding, edit game-config.js next to index.html.
const user = (typeof window !== 'undefined' && window.LOCKED_OUT_CONFIG) || {};

export const CONFIG = {
  // Name shown in subtitles for the security guard (you)
  guardName: 'YOU (GUARD)',
  // Name shown for the developer on the menu TV (also you)
  devName: 'THE DEV',
  // Game title on the menu (two lines)
  title: ['LOCKED', 'OUT'],
  // GoatCounter code for anonymous play counting ('' = off). See game-config.js.
  analytics: '',
  // Dev mode: tap the logo on the menu 7 times and type this to unlock everything ('' = no dev mode)
  devCode: 'IAMTHEDEV',
  // Show "a new version is out" on the menu (asks GitHub for the latest release; false = never ask)
  checkUpdates: true,
  // Where the game is online, for "Play in its own tab" when a page it's embedded in blocks mouse lock
  playUrl: '',
  // Or a page that builds the game itself (like the museum website) can hand over its own way to open
  // the game in a tab: a function, used instead of playUrl
  popout: null,
  ...user,
};
