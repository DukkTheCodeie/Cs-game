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
  ...user,
};
