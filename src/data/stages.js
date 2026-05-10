// `answers` is matched case-insensitively after trim. Add as many variants as you want.
// For multiple-choice stages: set `options` (array of strings) and `correctAnswer` (string).
// `accent` is one of: cyan, magenta, violet, gold (used for the stage tint).

export const stages = [
  
  {
    id: 2,
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
    id: 1,
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
    caption: 'מקום המפגש של שני עולמות 💻',
    accent: 'cyan',
  },
  {
    id: 3,
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
    caption: 'מקום המפגש של שני עולמות',
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
    image: 'images/stage-05.jpg',
    caption: 'צמחים על צמחים על צמחים 🌱',
    accent: 'magenta',
  },
  {
    id: 6,
    title: 'גיבורים על העל',
    riddle:
     ' גלימה, מסכה וקו רקיע אפלולי. הגיבור האהוב של איתי הוא:',
    answers: ['betman', 'באטמן', 'בטמן','batman', 'the batman','betmen'],
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
    title: 'המאחרן',
    riddle:
      'בין שניהם, אחד מפורסם בכך שהוא תמיד מאחר. את מי תלחשו ראשון?',
    answers: ['איתי', 'itay'],
    hints: [
      'רמז: זאת לא הכלה.',
      'ארבע אותיות באנגלית.',
      'מתחיל בא׳.',
    ],
    image: 'images/stage-08.jpg',
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
    image: 'images/stage-10.jpg',
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
    image: 'images/stage-11.jpg',
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
  {
    id: 13,
    type: 'story',
    title: 'הסיפור שלנו',
    slides: [
      'היה פעם קבוצת פייסבוק טבעונית קטנה.\nשבה שני אנשים לא ידעו שחייהם עומדים להשתנות לנצח.',
      'הודעה אחת הפכה לשתיים, שתיים לעשרות.\nקפה ראשון, ואז עוד אחד.\nאט-אט בנו עולם משלהם.',
      'היום, כאן בקפריסין,\nהם אומרים "כן" לכל ימי חייהם.\nואתם כאן כדי לחגוג איתם. 🤍',
    ],
    image: 'images/stage-11.jpg',
    caption: 'כי כל סיפור גדול מתחיל בצעד קטן 💌',
    accent: 'magenta',
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
];

export function isCorrectAnswer(stage, input) {
  if (stage.correctAnswer !== undefined) {
    return String(input || '').trim() === String(stage.correctAnswer).trim();
  }
  const cleaned = String(input || '').trim().toLowerCase();
  if (!cleaned) return false;
  return (stage.answers || []).some((a) => String(a).trim().toLowerCase() === cleaned);
}
