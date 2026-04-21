import { motion } from 'framer-motion';

export const ExcitingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      {/* Base Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/50 via-slate-950 to-pink-950/30" />
      
      {/* Floating Animated Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-screen filter blur-3xl opacity-30"
          style={{
            width: Math.random() * 400 + 200 + 'px',
            height: Math.random() * 400 + 200 + 'px',
            background: i % 2 === 0 ? '#510f30' : '#1b0354', // Pink and Purple
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};