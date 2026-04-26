// 12 placeholder stages. Replace `riddle`, `answers`, `hints`, `caption`,
// and the corresponding `/public/images/stage-XX.jpg` files when ready.
//
// `answers` is matched case-insensitively after trim. Add as many synonyms as you want.
// `accent` is one of: cyan, magenta, violet, gold (used for the stage tint).

export const stages = [
  {
    id: 1,
    title: 'Welcome to Cyprus',
    riddle:
      'A Mediterranean island where ancient myth meets modern shores — name the country that hosts our celebration.',
    answers: ['cyprus', 'קפריסין'],
    hints: [
      'It is an island in the eastern Mediterranean.',
      'Aphrodite was said to be born here.',
      'Five letters in English, starts with C.',
    ],
    image: '/images/stage-01.jpg',
    caption: 'Where it all begins ✨',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'Secret Destination',
    riddle:
      'Lost city of legend, our resort borrows its name. Whisper it back to us and the gates will open.',
    answers: ['atlantis', 'atlantis garden', 'אטלנטיס'],
    hints: [
      'A mythical sunken city.',
      'Plato wrote about it first.',
      'The resort is named "____ Garden".',
    ],
    image: '/images/stage-02.jpg',
    caption: 'Garden of the lost city 🌊',
    accent: 'violet',
  },
  {
    id: 3,
    title: 'The Origin Story',
    riddle:
      'Two engineers, one industry. Where do Bar and Itay\'s love story and careers both belong?',
    answers: ['high-tech', 'hightech', 'high tech', 'tech', 'הייטק'],
    hints: [
      'They met at work.',
      'Think keyboards, code, and coffee.',
      'A common Israeli term, hyphenated.',
    ],
    image: '/images/stage-03.jpg',
    caption: 'Where worlds collided 💻',
    accent: 'cyan',
  },
  {
    id: 4,
    title: 'The Physical Lock',
    riddle:
      'Step away from your screen. Find the object near reception with a four-digit dial — enter the code that frees the next clue.',
    answers: ['1234'],
    hints: [
      'Walk to the resort lobby.',
      'Look for a small chest or padlock.',
      'It opens with the year you think they met.',
    ],
    image: '/images/stage-04.jpg',
    caption: 'Reality unlocked 🔓',
    accent: 'gold',
  },
  {
    id: 5,
    title: 'Veganism',
    riddle:
      'No animal products on this couple\'s plate. What lifestyle do Bar and Itay share?',
    answers: ['vegan', 'veganism', 'טבעוני', 'טבעונות'],
    hints: [
      'Plant-based all the way.',
      'No meat, no dairy, no eggs.',
      'Five letters in English.',
    ],
    image: '/images/stage-05.jpg',
    caption: 'Plants on plants on plants 🌱',
    accent: 'magenta',
  },
  {
    id: 6,
    title: 'Superheroes',
    riddle:
      'Cape, cowl, and a brooding skyline. Itay\'s favorite hero patrols which fictional city?',
    answers: ['gotham', 'גות׳אם', 'גותאם'],
    hints: [
      'It is not Metropolis.',
      'It is home to a billionaire vigilante.',
      'Six letters, starts with G.',
    ],
    image: '/images/stage-06.jpg',
    caption: 'For the night protector 🦇',
    accent: 'violet',
  },
  {
    id: 7,
    title: 'Group Selfie',
    riddle:
      'Gather three guests, find the largest palm tree on the property, and snap a selfie. Type the color of its trunk to continue.',
    answers: ['brown', 'חום'],
    hints: [
      'Look up — way up.',
      'Trunk colors are pretty universal.',
      'Five letters in English.',
    ],
    image: '/images/stage-07.jpg',
    caption: 'A picture worth a thousand cheers 📸',
    accent: 'gold',
  },
  {
    id: 8,
    title: 'The Late One',
    riddle:
      'Between the two of them, one is famously fashionably late. Which name do you whisper first?',
    answers: ['itay', 'איתי'],
    hints: [
      'Hint: it is not the bride.',
      'Four letters in English.',
      'Starts with I.',
    ],
    image: '/images/stage-08.jpg',
    caption: 'Worth the wait 🕰️',
    accent: 'magenta',
  },
  {
    id: 9,
    title: 'The AC Riddle',
    riddle:
      'In a Cypriot summer, what tiny machine becomes everyone\'s best friend? (Two letters.)',
    answers: ['ac', 'a/c', 'a.c.', 'מזגן'],
    hints: [
      'You will hear it humming all afternoon.',
      'It cools rooms.',
      'Two letters, sometimes written with a slash.',
    ],
    image: '/images/stage-09.jpg',
    caption: 'Bless the cold air ❄️',
    accent: 'cyan',
  },
  {
    id: 10,
    title: 'Timeline',
    riddle:
      'Met at work, moved in together, got engaged, and now — what comes next on April 26, 2026?',
    answers: ['wedding', 'marriage', 'חתונה'],
    hints: [
      'It is the reason you are all here.',
      'White dresses and dancing.',
      'Seven letters in English.',
    ],
    image: '/images/stage-10.jpg',
    caption: 'A timeline of one big yes 💍',
    accent: 'violet',
  },
  {
    id: 11,
    title: 'Time Capsule',
    riddle:
      'If you had to bury one word for Bar and Itay to find in fifty years, what would it be?',
    answers: ['love', 'אהבה'],
    hints: [
      'It is what holds it all together.',
      'Four letters in English.',
      'Starts with L.',
    ],
    image: '/images/stage-11.jpg',
    caption: 'Forever and always 💖',
    accent: 'magenta',
  },
  {
    id: 12,
    title: 'The Final Stretch',
    riddle:
      'Finish the line: "May your love be as endless as the Cypriot ____."',
    answers: ['sea', 'ים'],
    hints: [
      'Look outside; you can probably see it.',
      'Three letters in English.',
      'It rhymes with "free".',
    ],
    image: '/images/stage-12.jpg',
    caption: 'To the horizon and beyond 🌅',
    accent: 'gold',
  },
];

export function isCorrectAnswer(stage, input) {
  const cleaned = String(input || '').trim().toLowerCase();
  if (!cleaned) return false;
  return stage.answers.some((a) => String(a).trim().toLowerCase() === cleaned);
}
