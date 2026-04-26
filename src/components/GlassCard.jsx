import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', strong = false, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`${strong ? 'glass-strong' : 'glass'} rounded-3xl p-6 sm:p-8 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
