import { CONFIG } from '../config.js';

// Every spoken line in the game. Each line has a speaker and an emotion (`mood`).
// Your own clips/photos go in assets/clips/ (see assets/clips/README.md):
//   <lineId>.mp4         you saying that exact line (plays with its sound)
//   <who>-<emotion>.mp4  a short silent reaction, used for every line with that emotion
//   <who>-<emotion>.jpg  a photo of you making that face

export const SPEAKERS = {
  guard: { name: () => CONFIG.guardName, color: 'gold' },
  dev: { name: () => CONFIG.devName, color: 'pink' },
  aaron: { name: () => 'AARON', color: 'sky' },
  mummy: { name: () => 'THE MUMMY', color: 'sand' },
  museos: { name: () => 'MUSE-OS', color: 'mint' },
};

// The faces you can act out. `act` is the stage direction shown in the clips README.
export const EMOTIONS = {
  normal: { emoji: '🙂', label: 'Normal', act: 'Your regular face. Just chilling.' },
  happy: { emoji: '😄', label: 'Happy', act: 'Big smile!' },
  hungry: { emoji: '🤤', label: 'Hungry', act: 'Stare at an imaginary donut. Lick your lips.' },
  cool: { emoji: '😎', label: 'Cool', act: 'Smug grin, one eyebrow up. You are the best.' },
  confused: { emoji: '🤔', label: 'Confused', act: 'Squint and tilt your head. "Huh?"' },
  annoyed: { emoji: '😒', label: 'Annoyed', act: 'Roll your eyes. Ugh.' },
  angry: { emoji: '😠', label: 'Angry', act: 'Frown as hard as you can. Grrr.' },
  shocked: { emoji: '😲', label: 'Shocked', act: 'Eyes huge, mouth wide open. WHAT?!' },
  scared: { emoji: '😱', label: 'Scared', act: 'Hands on your cheeks. Silent scream.' },
  sad: { emoji: '😢', label: 'Sad', act: 'Big pout. Fake cry.' },
  sleepy: { emoji: '😴', label: 'Sleepy', act: 'Huge yawn, eyes half closed.' },
};
const MOOD_ALIASES = { shock: 'shocked', tired: 'sleepy' };
export const moodOf = (m) => (EMOTIONS[m] ? m : MOOD_ALIASES[m] || 'normal');

export const LINES = {
  // ---------------- Prologue: the security office
  guard01: { who: 'guard', mood: 'hungry', text: 'Mmm. Number three is the T-Rex. Obviously. Nothing beats the King.' },
  aaron01: { who: 'aaron', mood: 'normal', text: "Yo, it's Aaron. Heads up — IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee." },
  guard02: { who: 'guard', mood: 'cool', text: "Yeah, yeah. Like that's gonna happen." },
  museos01: { who: 'museos', mood: 'normal', text: 'SESSION EXPIRED.' },
  guard03: { who: 'guard', mood: 'annoyed', text: "Ugh. Whatever. I'll just log back in." },
  guard04: { who: 'guard', mood: 'confused', text: "Huh? Donut-one-two-three. That's literally always my password." },
  guard05: { who: 'guard', mood: 'shocked', text: 'WHAT?! Who changed my password?!' },
  museos02: { who: 'museos', mood: 'normal', text: 'Password reset protocol activated. To recover access... SOLVE THE PUZZLES.' },
  museos03: { who: 'museos', mood: 'normal', text: 'Puzzle number one sleeps where giants once walked.' },
  guard06: { who: 'guard', mood: 'happy', text: 'Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit.' },
  guard07: { who: 'guard', mood: 'cool', text: "Flashlight: check. Donuts: check. Let's go." },

  // ---------------- Chapter 1: Dinosaur Hall
  guard08: { who: 'guard', mood: 'happy', text: 'Whoa. Never gets old. Hey, big guy.' },
  museos04: { who: 'museos', mood: 'normal', text: 'Fragment one: REX. Next puzzle: the Egyptian Wing.' },
  guard09: { who: 'guard', mood: 'cool', text: 'Egyptian Wing. Got it. Easy.' },
  guard10: { who: 'guard', mood: 'confused', text: '...What was that?' },
  guard11: { who: 'guard', mood: 'shocked', text: "Wait. Where's the T-Rex?" },
  guard12: { who: 'guard', mood: 'scared', text: 'Oh crap. Oh crap oh crap. This is like Night at the Museum.' },
  guard13: { who: 'guard', mood: 'scared', text: "Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Egyptian Wing. Quickly." },

  // ---------------- Chapter 2: the Egyptian Wing
  guard35: { who: 'guard', mood: 'scared', text: 'The Egyptian Wing. Why is it ALWAYS so creepy in here?' },
  museos13: { who: 'museos', mood: 'normal', text: "Puzzle number two: the Pharaoh's Lock. Its secret is written on four pillars. Count the lines." },
  guard42: { who: 'guard', mood: 'scared', text: 'That footprint is the size of a bathtub. The T-Rex came through here.' },
  guard36: { who: 'guard', mood: 'happy', text: 'All four pillars. Now, to the Pharaoh\'s Lock.' },
  museos14: { who: 'museos', mood: 'normal', text: 'Fragment two: MUMMY. Next puzzle: the Roman Empire hall.' },
  guard37: { who: 'guard', mood: 'scared', text: 'Uh... why is the coffin making noises?' },
  guard38: { who: 'guard', mood: 'scared', text: "AAAH! A MUMMY! Stay back! I have a flashlight and I'm not afraid to... shine it!" },
  mummy01: { who: 'mummy', mood: 'hungry', text: 'Mmmph... mmh mmph? *(Is that... a DONUT?)*' },
  guard39: { who: 'guard', mood: 'confused', text: "...You want a donut? You've been in there for three thousand years and you want a DONUT?" },
  mummy02: { who: 'mummy', mood: 'sad', text: 'Mmmph. *(Please.)*' },
  guard40: { who: 'guard', mood: 'annoyed', text: 'Ugh. FINE. One donut. But you owe me.' },
  mummy03: { who: 'mummy', mood: 'happy', text: 'MMMMMMH! *(Best. Snack. In. Three. Thousand. Years.)*' },
  guard41: { who: 'guard', mood: 'cool', text: "Yeah, they're pretty good. Okay. Back to bed, little buddy." },
  guard14: { who: 'guard', mood: 'scared', text: 'Nope. Nope nope nope nope.' },

  // ---------------- Chapter 3: Roman Hall
  guard15: { who: 'guard', mood: 'normal', text: 'Okay. Romans. Romans are chill. Romans never chased anybody.' },
  museos05: { who: 'museos', mood: 'normal', text: 'Fragment three: 1974. The remaining puzzles lie... beyond the walls.' },
  guard16: { who: 'guard', mood: 'confused', text: 'Beyond the walls? What does that even mea—' },
  guard17: { who: 'guard', mood: 'shocked', text: 'OH MY GOSH.' },

  // ---------------- Chapter 4: the chase
  guard18: { who: 'guard', mood: 'scared', text: 'AAAAAAAAAAH!' },
  guard19: { who: 'guard', mood: 'scared', text: 'Why is this hallway so LONG?!' },
  guard20: { who: 'guard', mood: 'happy', text: 'There! A hole shaped exactly like me! That is SO convenient!' },
  guard21: { who: 'guard', mood: 'cool', text: "HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs." },

  // ---------------- Chapter 5: the archives maze
  museos06: { who: 'museos', mood: 'normal', text: 'Welcome to the archives, guard. The last password fragments are behind these gates. Also, your sugar levels are... concerning.' },
  guard22: { who: 'guard', mood: 'annoyed', text: 'My sugar levels are FINE.' },
  guard23: { who: 'guard', mood: 'scared', text: 'Is that... an EYE?! Go away! Shoo!' },
  museos07: { who: 'museos', mood: 'normal', text: 'Fragment four: ZAP.' },
  museos08: { who: 'museos', mood: 'normal', text: 'The next gate needs three keys: red, blue and yellow. They were lost somewhere in this section. Classic.' },
  guard24: { who: 'guard', mood: 'annoyed', text: 'Three keys for ONE gate. Who designs these places?' },
  museos09: { who: 'museos', mood: 'normal', text: 'Fragment five: DONUT. Only one fragment left. It is behind the next gate.' },
  // ...the endless part. There is always another gate.
  guard43: { who: 'guard', mood: 'annoyed', text: 'ANOTHER gate? How big IS this place?!' },
  museos15: { who: 'museos', mood: 'normal', text: 'Fragment six was not here. Have you tried the next gate?' },
  museos16: { who: 'museos', mood: 'normal', text: 'Still no fragment six. It is definitely behind the next gate. Probably.' },
  guard45: { who: 'guard', mood: 'confused', text: 'Wait. These shelves look familiar. Am I going in circles?' },
  museos17: { who: 'museos', mood: 'normal', text: 'Fun fact: nobody has ever reached the end of the archives.' },
  museos18: { who: 'museos', mood: 'normal', text: 'Your sugar levels are now... alarming. Please keep solving puzzles.' },
  guard44: { who: 'guard', mood: 'sleepy', text: 'Need... donut... so... tired...' },
  guard46: { who: 'guard', mood: 'happy', text: 'A secret room! With a DONUT in it!' },
  guard27: { who: 'guard', mood: 'sleepy', text: 'So... sleepy... just gonna... rest my eyes... five minutes...' },
  museos19: { who: 'museos', mood: 'normal', text: 'Guard? ...Guard? Sugar level: zero. The guard is asleep. Logging out.' },

  // ---------------- Chapter 6: morning
  guard28: { who: 'guard', mood: 'confused', text: "Mmh... huh? It's MORNING?!" },
  guard29: { who: 'guard', mood: 'confused', text: 'The T-Rex is back. Like nothing happened. ...Is that MY HAT?' },
  aaron02: { who: 'aaron', mood: 'annoyed', text: 'Dude. Did you sleep in the dinosaur exhibit? Again?' },
  guard30: { who: 'guard', mood: 'shocked', text: 'Aaron! The T-Rex was ALIVE! It chased me! There was a MUMMY! And the archives NEVER END!' },
  aaron03: { who: 'aaron', mood: 'cool', text: "Sure, buddy. Also, your computer's been beeping all morning. You should probably log in." },
  museos11: { who: 'museos', mood: 'normal', text: 'Fragments entered: five of six. You did not solve the puzzles.' },
  guard31: { who: 'guard', mood: 'angry', text: 'WHAT? I solved like FIVE puzzles!' },
  museos12: { who: 'museos', mood: 'normal', text: 'Five is not six. Goodbye.' },

  // ---------------- The menu. The developer is watching.
  dev01: { who: 'dev', mood: 'happy', text: "Oh hey! Welcome to my game. I made it myself. It's really good, I promise." },
  guard32: { who: 'guard', mood: 'confused', text: 'Wait... that\'s it? That game was WAY too short.' },
  guard33: { who: 'guard', mood: 'shocked', text: 'Oh my gosh. Are you serious? This is really it? That\'s the WHOLE game?!' },
  dev02: { who: 'dev', mood: 'sad', text: 'Bro, I was up all night making this.' },
  guard34: { who: 'guard', mood: 'annoyed', text: '...I could do better.' },
  dev03: { who: 'dev', mood: 'angry', text: 'HELL NAW.' },
  dev04: { who: 'dev', mood: 'angry', text: 'GET OUT OF MY GAME!' },
  dev05: { who: 'dev', mood: 'annoyed', text: "...Oh. You're back. Fine. You can play it again. But NO complaining." },
  dev06: { who: 'dev', mood: 'annoyed', text: 'Stop poking the TV.' },
  dev07: { who: 'dev', mood: 'happy', text: "Psst. There's a MUMMY in this game now. I made it at three in the morning." },
};
for (const L of Object.values(LINES)) L.mood = moodOf(L.mood);

// Which emotions each character actually uses (so you know what to act out).
export const SPEAKER_EMOTIONS = {};
for (const L of Object.values(LINES)) {
  (SPEAKER_EMOTIONS[L.who] ||= new Set()).add(L.mood);
}

export function lineText(id) {
  return LINES[id]?.text || id;
}
