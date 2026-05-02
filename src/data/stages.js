// `answers` is matched case-insensitively after trim. Add as many variants as you want.
// For multiple-choice stages: set `options` (array of strings) and `correctAnswer` (string).
// `accent` is one of: cyan, magenta, violet, gold (used for the stage tint).

export const stages = [
  {
    id: 1,
    title: 'ברוכים לקפריסין',
    riddle:
      'אי בים תיכוני שבו מיתוס עתיק פוגש חוף מודרני — מה שם המדינה שמארחת אתנו?',
    answers: ['קפריסין', 'cyprus'],
    hints: [
      'אי במזרח הים התיכון.',
      'אומרים שאפרודיטה נולדה כאן.',
      'שמונה אותיות בעברית, מתחילה ב׳ק׳.',
    ],
    image: 'images/stage-01.png',
    caption: 'כאן הכל מתחיל ✨',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'היעד הסודי',
    riddle:
      'ביומיים הקרובים נבלה בריזורט בשם ________ \nמורכב מ2 מילים.\n אגדי המוזכר בכתביו של הפילוסוף היווני שאיתי מחבב _______ + נמצא בחוץ של כל ארמון מפואר ______ ',
    answers: ['אטלנטיס גרדנס', 'אטלנטיק גרדן', 'אטלנטיס גרדנס', 'אטלנטיס גרדן', 'atlantis', 'atlantis garden'],
    hints: [
      'אפלטון כתב עליה קודם +מקום בוטני.',
      ' יש עיר מיתולוגית ששקעה בים + יש שם הרבה פרחים.',
      'אטלנ_ _ _ "Garden".',
    ],
    image: 'images/stage-02.png',
    caption: 'גן העיר האבודה 🌊',
    accent: 'violet',
  },
  {
    id: 3,
    title: 'סיפור ההיכרות',
    riddle: 'איפה בר ואיתי הכירו?',
    options: [
      'בחברת הייטק',
      'בקבוצת פייסבוק',
      'בפיקניק טבעוני קהילתי',
      'דרך חברים של חברים',
    ],
    correctAnswer: 'בקבוצת פייסבוק',
    hints: [
      'הם נפגשו בעבודה?.',
      'טבעוני טעים.',
      'נכון ששניהם אוהבים פיקניקים.',
    ],
    image: 'images/stage-03.png',
    caption: 'מקום המפגש של שני עולמות 💻',
    accent: 'cyan',
  },
  {
    id: 4,
    title: 'המנעול הפיזי',
    riddle:
      'התרחקו מהמסך. ליד הקבלה תמצאו חפץ עם חוגה בת ארבע ספרות — הקלידו את הקוד שמשחרר את הרמז הבא.',
    answers: ['1234'],
    hints: [
      'לכו ללובי של התושב.',
      'חפשו תיבה קטנה או מנעול.',
      'הקוד הוא השנה שבה אתם חושבים שהם נפגשו.',
    ],
    image: 'images/stage-04.png',
    caption: 'המציאות נפתחה 🔓',
    accent: 'gold',
  },
  {
    id: 5,
    title: 'טבעונות',
    riddle:
      'אין מוצרים מן החי על הצלחת. איזה אורח חיים משותף לבר ואיתי?',
    answers: ['טבעוני', 'טבעונות', 'vegan', 'veganism'],
    hints: [
      'מבוסס צמחי לגמרי.',
      'בלי בשר, בלי חלב, בלי ביצים.',
      'מילה בת חמש אותיות בעברית.',
    ],
    image: 'images/stage-05.png',
    caption: 'צמחים על צמחים על צמחים 🌱',
    accent: 'magenta',
  },
  {
    id: 6,
    title: 'גיבורים על העל',
    riddle:
      'גלימה, מסכה וקו רקיע אפלול. הגיבור האהוב של איתי מגן על איזו עיר בדיונית?',
    answers: ['גותם', 'גות׳אם', 'gotham'],
    hints: [
      'זו לא מטרופוליס.',
      'הבית של מיליארדר שהופך ללוחם בלילה.',
      'האות הראשונה היא ג׳.',
    ],
    image: 'images/stage-06.png',
    caption: 'לכבוד שומר הלילה 🦇',
    accent: 'violet',
  },
  {
    id: 7,
    title: 'סלפי קבוצתי',
    riddle:
      'אספו שלושה אורחים, מצאו את עץ הדקל הגדול בתושב, וצלמו סלפי. הקלידו את צבע גזע העץ להמשך.',
    answers: ['חום', 'brown'],
    hints: [
      'תסתכלו למעלה — הרבה למעלה.',
      'צבעי גזעים הם מדי אוניברסליים.',
      'שלוש אותיות בעברית.',
    ],
    image: 'images/stage-07.png',
    caption: 'תמונה ששווה אלף מזל טוב 📸',
    accent: 'gold',
  },
  {
    id: 8,
    title: 'המאחרן',
    riddle:
      'בין שניהם, אחד מפורסם בכך שהוא תמיד מאחר. את מי תלחשו ראשון?',
    answers: ['איתי', 'itay'],
    hints: [
      'רמז: זאת לא הכלה.',
      'ארבע אותיות באנגלית.',
      'מתחיל בא׳.',
    ],
    image: 'images/stage-08.png',
    caption: 'היה שווה לחכות 🕰️',
    accent: 'magenta',
  },
  {
    id: 9,
    title: 'חידת המזגן',
    riddle:
      'בקיץ הקפריסאי, איזו מכשיר קטן הופך לחבר הכי טוב? (שתי אותיות באנגלית.)',
    answers: ['מזגן', 'ac', 'a/c', 'a.c.'],
    hints: [
      'תשמעו אותו מזמזם כל אחר הצהריים.',
      'הוא מקרר חדרים.',
      'שתי אותיות, לפעמים עם לכסון.',
    ],
    image: 'images/stage-09.png',
    caption: 'ברוך האוויר הקריר ❄️',
    accent: 'cyan',
  },
  {
    id: 10,
    title: 'ציר הזמן',
    riddle:
      'נפגשו בעבודה, עברו לגור יחד, התארסו, ועכשיו — מה בתור ב-26 באפריל 2026?',
    answers: ['חתונה', 'wedding', 'marriage'],
    hints: [
      'זו הסיבה שבגללה כולם כאן.',
      'שמלות לבנות וריקודים עד הבוקר.',
      'חמש אותיות בעברית.',
    ],
    image: 'images/stage-10.png',
    caption: 'ציר זמן של "כן" גדול אחד 💍',
    accent: 'violet',
  },
  {
    id: 11,
    title: 'קפסולת הזמן',
    riddle:
      'אם הייתם טומנים בקפסולה מילה אחת שבר ואיתי ימצאו בעוד חמישים שנה — איזו מילה זו?',
    answers: ['אהבה', 'love'],
    hints: [
      'זה מה שמחזיק את הכל יחד.',
      'ארבע אותיות בעברית.',
      'מתחילה בא׳.',
    ],
    image: 'images/stage-11.png',
    caption: 'לנצח ולתמיד 💖',
    accent: 'magenta',
  },
  {
    id: 12,
    title: 'הישור האחרון',
    riddle:
      'השלימו את המשפט: "שהאהבה שלכם תהיה אין סופית כמו הי׳׳׳ הקפריסאי."',
    answers: ['ים', 'sea'],
    hints: [
      'הסתכלו החוצה — כנראה תראו אותו.',
      'שתי אותיות בעברית.',
      'מתחרז עם "עם".',
    ],
    image: 'images/stage-12.png',
    caption: 'אל האופק ומעבר 🌅',
    accent: 'gold',
  },
];

export function isCorrectAnswer(stage, input) {
  if (stage.correctAnswer !== undefined) {
    return String(input || '').trim() === String(stage.correctAnswer).trim();
  }
  const cleaned = String(input || '').trim().toLowerCase();
  if (!cleaned) return false;
  return (stage.answers || []).some((a) => String(a).trim().toLowerCase() === cleaned);
}
