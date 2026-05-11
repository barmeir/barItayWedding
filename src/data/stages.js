// `answers` is matched case-insensitively after trim. Add as many variants as you want.
// For multiple-choice stages: set `options` (array of strings) and `correctAnswer` (string).
// `accent` is one of: cyan, magenta, violet, gold (used for the stage tint).

export const stages = [
  
  {
    id: 0,
    type: 'story',
    title: 'עזרו לנו למצוא את המטמון 🪎',
    slides: [
 'הוחבאו.\nהטבעות שלנו!!!',
      'עד טקס החתונה נצטרך את הטבעות.\nמי יצילם?',

 'נסו להשתמש בראש.\nביצירתיות.',
      'בכל הרמזים כאן למטה.\n<לא להעתיק>\nלפני שתעזרו באדם אחר, ',
      'אם נתקעתם, הכל בסדר\nשאלו אותנו.\nוהמשיכו לחידה הבאה 🤍',

    ],
    caption: 'כי כל סיפור גדול מתחיל בצעד קטן 💌',
    accent: 'magenta',
  }, 

  {
    id: 1,
    title: 'היעד הסודי',
    
    riddle: `ביומיים הקרובים נבלה בריזורט בשם 
    ______      _________ .
    
    _________ <- אגדי המוזכר בכתביו של הפילוסוף היווני שאיתי מחבב

    ______ <- נמצא בחוץ של כל ארמון מפואר`,
    answers: ['אטלנטיס גרדנס', 'אטלנטיק גרדן', 'אטלנטיס גרדנס', 'אטלנטיס גרדן', 'atlantis', 'atlantis garden', 'atlantis gardens'],
    hints: [
      'אפלטון כתב עליה קודם +מקום בוטני.',
      ' יש עיר מיתולוגית ששקעה בים + יש שם הרבה פרחים.',
      'אטלנ_ _ _ "Garden".',
    ],
    image: 'images/stage-01.jpg',
    caption: 'גן העיר האבודה 🌊',
    accent: 'violet',
  },

  {
    id: 2,
    title: ' ההיכרות',
    riddle: `לפני שהיו משפחה,
    לפני הטיולים,
    לפני ההתלבטויות על מסעדה-
    היו רק שני אנשים
    
    איך איתי ובר הכירו?`,
    options: [
      'בחברת הייטק',
      'בקבוצת פייסבוק',
      'בפיקניק טבעוני קהילתי',
      'דרך חברים של חברים',
      '   ',
      ],
    correctAnswer: 'בקבוצת פייסבוק',
    hints: [
      'הם נפגשו בעבודה?.',
      'טבעוני טעים.',
      'בר התחילה עם איתי.',
    ],
    image: 'images/stage-03.jpg',
    caption: 'לרשום משפט מצחיק או שנון ובעל קשר לחידה TODO',
    accent: 'cyan',
  },

  {
    id: 3,
    title: 'TODO',
    riddle:
      'TODO',
    answers: ['TODO', 'TODO', 'TODO', 'TODO'],
    hints: [
      'TODO .',
      'TODO .',
      'TODO .',
    ],
    image: 'images/stage-05.jpg',
    caption: 'TODO',
    accent: 'violet',
  },

  {
    id: 4,
    title: 'המנעול הפיזי',
    riddle:
      'TODO',
    answers: ['1234'],
    hints: [
      'לכו ללובי של התושב.',     
      'TODO .',
      'TODO .',
    ],
    image: 'images/stage-04.png',
    caption: 'המציאות נפתחה 🔓',
    accent: 'gold',
  },
  {
    id: 5,
    title: 'TODO',
    riddle:
      'TODO',
    answers: ['TODO', 'TODO', 'TODO', 'TODO'],
    hints: [
      'TODO .',
      'TODO .',
      'TODO .',
    ],
    image: 'images/stage-05.jpg',
    caption: 'TODO',
    accent: 'magenta',
  },
  {
    id: 6,
    title: 'גיבורים על העל',
    riddle:
     ' גלימה, מסכה וקו רקיע אפלולי. הגיבור האהוב של איתי הוא:',
    answers: ['betman', 'באטמן', 'בטמן','batman', 'the batman','betmen'],
    hints: [
      'TODO .',
      'TODO .',
      'TODO .',
    ],
    image: 'images/stage-06.png',
    caption: 'לכבוד שומר הלילה 🦇',
    accent: 'violet',
  },
  {
    id: 7,
    title: 'ציר הזמן',
    riddle:
      `מה קרה בפעם הראשונה ש...
      סדרו לפי הסדר הכרונולוגי:
      1. אני אוהב אותך ראשון
      2. טיסה ראשונה ביום הולדת
      3. מעבר דירה יחד
      4. טיול במפלים הלבנים בצפון
      5. לאכול פעם ראשונה פיצה שאיתי הכין`,
    answers: ['54213'],
    hints: [
      'טסנו ללונדון ביום ההולדת של בר ואיתי רשם לה משוואה רומנטית שהוא אוהב אותה',
      'בדייט החמישי שלנו היינו בטיול בצפון',
      'קודם כל פיצה! אח״כ נדבר...',
    ],
    image: 'images/stage-07.jpg',
    caption: 'תמונה ששווה אלף מזל טוב 📸',
    accent: 'gold',
  },
  {
    id: 8,
    title: 'בריכות או ברכות?',
    riddle:
      'לכו לבריכה וחפשו שם את הרמז הבא',
    answers: ['a5', 'A5', '5a', '5A'],
    hints: [
      'TODO .',
      'TODO .',
      'TODO .',,
    ],
    image: 'images/stage-08.jpg',
    caption: 'TODO',
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
    title: 'ים המקום המושלם',
    riddle:
    'מתחת לשמשייה מחכה לכם הרמז הבא',
    answers: ['151093'],
    hints: [
      'TODO משפט מצחיק על ים או שמש💍',
    ],
    image: 'images/stage-10.jpg',
    caption: 'TODO משפט מצחיק על ים או שמש💍',
    accent: 'violet',
  },
  {
    id: 11,
    title: 'קפסולת הזמן',
    riddle:
     `יש יצורים שאיתי אוהב. הוא הציל אותם. מחבק אותם בין ידיו ומלווה אותם עד לביתם החדש במחסה בטוח.
    בר, לעומת זאת… בכל יום מוצאת אותם טורדניים ומחפשת להם טיסה בכיוון אחד .`,
    answers: ['תרנגולים', 'תרנגולות', 'chickens', 'chicken', 'תרנגול', 'תרנגולת'],
    hints: [
      'יש אנשים שמתעוררים מהשעון, בר מתעוררת מטראומה יומית עם נוצות .',
      'אפשר למצוא אותי בחווה או... פשוט ביפו .',
      'אני לא יונה .',
    ],
    image: 'images/stage-11.jpg',
    caption: 'באים איתכם לקליפורניה🐔',
    accent: 'magenta',
  },
  {
    id: 12,
    title: 'היו היה',
    riddle:
      `לבר ואיתי יש משהו משותף עוד מלפני שנולדו, מלפני שחשבו עליהם בכלל.
      מה השם?`,
    answers: ['מזל', 'סבתא מזל'],
    hints: [
      'לפחות 90 שנה אחורה .',
      'אין מצב שזו אותה הסבתא... .',
      'זה רק השם של הסבתא .',
    ],
    image: 'images/stage-12.png',
    caption: 'TODO🌅',
    accent: 'gold',
  },

  {
    id: 14,
    title: 'ביום יום',
    riddle:
      'מה המילה הכי נפוצה שבר אומרת בכל יום?',
    answers: ['אופס', 'שיט','אופסי'],
    hints: [
      'אומרים כשמשהו נופל או משתבש.',
      'לפעמים זה מצחיק',
      '״לא נורא..״',
      'אופס',
       'שיט',
       'אופסי'
    ],
    image: 'images/stage-14.jpg',
    caption: 'כאן הכל מתחיל ✨',
    accent: 'cyan',
  },
    {
    id: 15,
    type: 'form',
    title: 'מתנה אחרונה לזוג',
    riddle:
      'הגעתם עד הסוף — כל הכבוד! 🎉\nלפני שחוגגים, השאירו לבר ואיתי ברכה קצרה בטופס. הם ישמרו אותה לנצח.',
    formUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScf41hN50--g1WED-u3_KahyRgmCSNhZZRzQwt3DSiWqu6ilQ/viewform?usp=publish-editor',
    image: 'images/stage-13.png',
    caption: 'תודה שהיית חלק מהסיפור 💌',
    accent: 'magenta',
  },
  {
    id: 18,
    title: ' ההיכרות',
    riddle: 'איפה בר ואיתי הכירו?',
    options: [
      'בחברת הייטק',
      'בקבוצת פייסבוק',
      'בפיקניק טבעוני קהילתי',
      'דרך חברים של חברים',
      '   ',
      ],
    correctAnswer: 'בקבוצת פייסבוק',
    hints: [
      'הם נפגשו בעבודה?.',
      'טבעוני טעים.',
      'נכון ששניהם אוהבים פיקניקים.',
    ],
    image: 'images/stage-03.jpg',
    caption: 'לרשום משפט מצחיק או שנון ובעל קשר לחידה TODO',
    accent: 'cyan',
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
