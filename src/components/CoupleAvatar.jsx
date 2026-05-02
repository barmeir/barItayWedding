import { motion } from 'framer-motion';
//Framer Motion — זו ספריית אנימציות .


const SIZES = {
  sm: 'h-16 w-16 ring-2',
  md: 'h-32 w-32 ring-4',
  lg: 'h-44 w-44 sm:h-48 sm:w-48 ring-4',
  xl: 'h-56 w-56 sm:h-64 sm:w-64 ring-[16px]',
  /*/
    h גובה   w רוחב     ring עובי המסגרת מסביב
    sm:h-... → שינוי גודל במסכים גדולים יותר (responsive)
    שולט בגודל הקומפוננטה דרך מחרוזת אחת
  /*/
};

/**
 * Circular avatar of the couple, used across the app (login, header, finale).
 * Pass `float` ֿ(אנימציה צפה) for a gentle floating animation or `glow` (אפקט זוהר) for the neon shadow.
 */
export default function CoupleAvatar({
  size = 'md',
  float = false,
  glow = false,
  className = '',
  /*/
  קומפוננטת React שמקבלת props:
  size → איזה גודל להשתמש
  float → האם להפעיל אנימציה
  glow → האם להוסיף זוהר
  className → מחלקות נוספות מבחוץ
  הקומפוננטה מחזירה אלמנט <motion.div> עם תמונה של הזוג ומסגרת עגולה, עם אפשרות לאנימציה וזוהר לפי הפרופס שנשלחו.
/*/
  }) {
  const sizeClass = SIZES[size] || SIZES.md; //Takes the size from the object. If none exists → falls back to md. 👉 Fallback mechanism
  const animateProps = float
    ? {
        animate: { y: [0, -8, 0] },
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }
    : {};
  return (
    <motion.div
      {...animateProps}
      className={`relative mx-auto overflow-hidden rounded-full ring-white/30 bg-white/5 ${sizeClass} ${
        glow ? 'shadow-neon' : ''
      } ${className}`}
    >

       {/* תמונה שלנו בחתונה של דנה */}
      <img
        src="/images/couple3.png"
        alt="בר ואיתי"
        loading="eager"
        className="h-full w-full object-cover scale-105"
      />

      {/* תמונה שלנו בלבן 
      <img
        src="/images/couple2.1.png"
        alt="בר ואיתי"
        loading="eager"
        className="h-full w-full object-cover scale-110"
      />
      */}
      
      {/* subtle inner gradient sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 via-transparent to-white/15" />
    </motion.div>
  );
}
