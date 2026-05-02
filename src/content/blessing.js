// ברכה קבועה למסך הסיום.
// משתמשים ב-{name} כמציין-מקום לשם האורח.
export const blessingTemplate = `ל{name} היקר/ה,

הגעתם לסוף המסע של בר ואיתי.
תודה שחציתם את הים (וכמה חידות)
כדי לחגוג איתנו את האהבה על החוף הקפריסאי.

שהצחוק יהיה רם,
הלב רך,
והזיכרון מהלילה הזה ילווה אתכם לעד.

— באהבה,
בר ואיתי`;

export function renderBlessing(name) {
  return blessingTemplate.replace(/\{name\}/g, name || 'חבר/ה');
}
