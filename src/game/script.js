import { CONFIG } from '../config.js';

// Every spoken line in the game. Each id is also the file name for a video clip:
//   assets/clips/<id>.mp4   (or .webm / .mov)
// e.g. assets/clips/guard05.mp4 will play when the guard says "WHAT?! Who changed my password?!"

export const SPEAKERS = {
  guard: { name: () => CONFIG.guardName, color: 'gold' },
  dev: { name: () => CONFIG.devName, color: 'pink' },
  aaron: { name: () => 'AARON', color: 'sky' },
  museos: { name: () => 'MUSE-OS', color: 'mint' },
};

export const LINES = {
  // ---------------- Prologue: the security office
  guard01: { who: 'guard', mood: 'happy', text: 'Mmm. Number three is the T-Rex. Obviously. Nothing beats the King.' },
  aaron01: { who: 'aaron', mood: 'normal', text: "Yo, it's Aaron. Heads up — IT is changing all the computer passwords tonight. So, uh... don't let your session time out. Okay byeee." },
  guard02: { who: 'guard', mood: 'normal', text: "Yeah, yeah. Like that's gonna happen." },
  museos01: { who: 'museos', mood: 'normal', text: 'SESSION EXPIRED.' },
  guard03: { who: 'guard', mood: 'annoyed', text: "Ugh. Whatever. I'll just log back in." },
  guard04: { who: 'guard', mood: 'confused', text: "Huh? Donut-one-two-three. That's literally always my password." },
  guard05: { who: 'guard', mood: 'shock', text: 'WHAT?! Who changed my password?!' },
  museos02: { who: 'museos', mood: 'normal', text: 'Password reset protocol activated. To recover access... SOLVE THE PUZZLES.' },
  museos03: { who: 'museos', mood: 'normal', text: 'Puzzle number one sleeps where giants once walked.' },
  guard06: { who: 'guard', mood: 'happy', text: 'Where giants once walked... the Dino exhibit! Oh yeah, I like the Dino exhibit.' },
  guard07: { who: 'guard', mood: 'happy', text: "Flashlight: check. Donuts: check. Let's go." },

  // ---------------- Chapter 1: Dinosaur Hall
  guard08: { who: 'guard', mood: 'happy', text: 'Whoa. Never gets old. Hey, big guy.' },
  museos04: { who: 'museos', mood: 'normal', text: 'Fragment one: REX. Next puzzle: the Roman Empire hall.' },
  guard09: { who: 'guard', mood: 'normal', text: 'Roman Hall. Got it. Easy.' },
  guard10: { who: 'guard', mood: 'confused', text: '...What was that?' },
  guard11: { who: 'guard', mood: 'shock', text: "Wait. Where's the T-Rex?" },
  guard12: { who: 'guard', mood: 'scared', text: 'Oh crap. Oh crap oh crap. This is like Night at the Museum.' },
  guard13: { who: 'guard', mood: 'scared', text: "Okay. Totally normal. Big dinosaur's just... on a walk. I'm gonna go to the Roman Hall. Quickly." },
  guard14: { who: 'guard', mood: 'scared', text: 'Nope. Nope nope nope nope.' },

  // ---------------- Chapter 2: Roman Hall
  guard15: { who: 'guard', mood: 'normal', text: 'Okay. Romans. Romans are chill. Romans never chased anybody.' },
  museos05: { who: 'museos', mood: 'normal', text: 'Fragment two: 1974. The remaining puzzles lie... beyond the walls.' },
  guard16: { who: 'guard', mood: 'confused', text: 'Beyond the walls? What does that even mea—' },
  guard17: { who: 'guard', mood: 'shock', text: 'OH MY GOSH.' },

  // ---------------- Chapter 3: the chase
  guard18: { who: 'guard', mood: 'scared', text: 'AAAAAAAAAAH!' },
  guard19: { who: 'guard', mood: 'scared', text: 'Why is this hallway so LONG?!' },
  guard20: { who: 'guard', mood: 'shock', text: 'There! A hole shaped exactly like me! That is SO convenient!' },
  guard21: { who: 'guard', mood: 'happy', text: "HA! You can't fit, big guy! Shoulda done more cardio! ...Wait, you don't have lungs." },

  // ---------------- Chapter 4: the archives maze
  museos06: { who: 'museos', mood: 'normal', text: 'Welcome to the archives, guard. Three puzzles remain. Also, your sugar levels are... concerning.' },
  guard22: { who: 'guard', mood: 'annoyed', text: 'My sugar levels are FINE.' },
  guard23: { who: 'guard', mood: 'scared', text: 'Is that... an EYE?! Go away! Shoo!' },
  museos07: { who: 'museos', mood: 'normal', text: 'Fragment three: ZAP.' },
  museos08: { who: 'museos', mood: 'normal', text: 'Fragment four: NAP. ...Interesting word choice.' },
  guard24: { who: 'guard', mood: 'sleepy', text: 'Why would a password have NAP in it... *yaaawn*' },
  museos09: { who: 'museos', mood: 'normal', text: 'Fragment five: DONUT. Please proceed to the break room.' },
  guard25: { who: 'guard', mood: 'happy', text: 'THE. LAST. DONUT. It is beautiful.' },
  guard26: { who: 'guard', mood: 'shock', text: "It's... it's PLASTIC?!" },
  museos10: { who: 'museos', mood: 'normal', text: 'Exhibit 404: replica donut. Not for eating.' },
  guard27: { who: 'guard', mood: 'sleepy', text: 'So... sleepy... just gonna... rest my eyes... five minutes...' },

  // ---------------- Chapter 5: morning
  guard28: { who: 'guard', mood: 'confused', text: "Mmh... huh? It's MORNING?!" },
  guard29: { who: 'guard', mood: 'confused', text: 'The T-Rex is back. Like nothing happened. ...Is that MY HAT?' },
  aaron02: { who: 'aaron', mood: 'normal', text: 'Dude. Did you sleep in the dinosaur exhibit? Again?' },
  guard30: { who: 'guard', mood: 'shock', text: 'Aaron! The T-Rex was ALIVE! It chased me! There was a maze! And a PLASTIC DONUT!' },
  aaron03: { who: 'aaron', mood: 'normal', text: "Sure, buddy. Also, your computer's been beeping all morning. You should probably log in." },
  museos11: { who: 'museos', mood: 'normal', text: 'Fragments entered: five of six. You did not solve the puzzles.' },
  guard31: { who: 'guard', mood: 'shock', text: 'WHAT? I solved like FIVE puzzles!' },
  museos12: { who: 'museos', mood: 'normal', text: 'Five is not six. Goodbye.' },

  // ---------------- The menu. The developer is watching.
  dev01: { who: 'dev', mood: 'happy', text: "Oh hey! Welcome to my game. I made it myself. It's really good, I promise." },
  guard32: { who: 'guard', mood: 'confused', text: 'Wait... that\'s it? That game was WAY too short.' },
  guard33: { who: 'guard', mood: 'shock', text: 'Oh my gosh. Are you serious? This is really it? That\'s the WHOLE game?!' },
  dev02: { who: 'dev', mood: 'tired', text: 'Bro, I was up all night making this.' },
  guard34: { who: 'guard', mood: 'annoyed', text: '...I could do better.' },
  dev03: { who: 'dev', mood: 'angry', text: 'HELL NAW.' },
  dev04: { who: 'dev', mood: 'angry', text: 'GET OUT OF MY GAME!' },
  dev05: { who: 'dev', mood: 'annoyed', text: "...Oh. You're back. Fine. You can play it again. But NO complaining." },
  dev06: { who: 'dev', mood: 'annoyed', text: 'Stop poking the TV.' },
  dev07: { who: 'dev', mood: 'happy', text: 'Psst. Try the Clip Studio. You can put YOURSELF in the game.' },
};

export function lineText(id) {
  return LINES[id]?.text || id;
}
