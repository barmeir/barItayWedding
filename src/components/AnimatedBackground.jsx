import { motion } from 'framer-motion';

const BLOBS = [
  { color: '#c4b5fd', x: '5%', y: '10%', size: 380 },
  { color: '#f472b6', x: '70%', y: '20%', size: 320 },
  { color: '#22d3ee', x: '20%', y: '70%', size: 360 },
  { color: '#ac8afd', x: '80%', y: '75%', size: 280 },
  { color: '#ddd6fe', x: '50%', y: '45%', size: 300 },
];

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="blob"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: b.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.06, 0.96, 1],
          }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
