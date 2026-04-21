import { motion } from 'framer-motion';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const SparkleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950" />

      {/* 1. Sparkles (Static Twinkling with varied sizes) */}
      {[...Array(50)].map((_, i) => {
        const size = random(1, 5); // Variety in size
        return (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${random(0, 100)}%`,
              left: `${random(0, 100)}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: random(2, 6), repeat: Infinity, delay: random(0, 5) }}
          />
        );
      })}

      {/* 2. Falling Stars/Bubbles (Varied sizes and speeds) */}
      {[...Array(20)].map((_, i) => {
        const size = random(5, 30); // Bubbles of different sizes
        const duration = random(10, 25); // Speed linked to size (slower = bigger/further)
        
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              // Using translucent pink/violet/white for a bubble effect
              background: i % 3 === 0 ? 'rgba(236, 72, 153, 0.2)' : 
                          i % 3 === 1 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              top: `${random(-20, -10)}%`,
              left: `${random(0, 100)}%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [`0px`, `${random(-50, 50)}px`],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: random(0, 20),
            }}
          />
        );
      })}
    </div>
  );
};