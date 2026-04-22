import { BirthdayCountdown } from "@/lib/components/BirthdayCountdown";
import { SecretMessage } from "@/lib/components/SecretMessage";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// === Dynamic Text Component (Changes every few seconds) ===
const DynamicGreeting = () => {
  const messages = ["My Best Friend", "My Rock", "My Home", "My Everything"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % messages.length), 3000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
      >
        {messages[index]}
      </motion.span>
    </AnimatePresence>
  );
};

// === Floating Particle Component ("Bubbles") ===
const BackgroundParticles = () => {
  const particles = Array.from({ length: 30 }); // Number of particles

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        // Randomize size, position, and velocity
        const size = Math.random() * 10 + 4; // 4px to 14px
        const initialX = Math.random() * 100; // 0% to 100% width
        const initialY = Math.random() * 100; // 0% to 100% height
        const duration = Math.random() * 20 + 10; // 10s to 30s slow movement

        return (
          <motion.div
            key={i}
            className="absolute bg-pink-500/10 rounded-full"
            style={{ width: size, height: size, left: `${initialX}%`, top: `${initialY}%` }}
            animate={{
              y: [0, -200, 0], // Move up, then back down
              x: [0, (Math.random() - 0.5) * 100, 0], // Slight drift
              opacity: [0.1, 0.4, 0.1], // Pulse effect
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};


// === The Main Exciting Homepage Component ===
export const Home = () => {
  // Set the target date here (Year, MonthIndex, Day)
  const targetDate = new Date('2026-04-28T00:00:00');
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden selection:bg-pink-500/30">
      <div className="pt-22 px-6"> 
      <h4 className="text-6xl font-black text-white mb-2">Countdown to Silver Jubilee</h4>
      <h4 className="text-slate-400  py-4">The celebration begins in...</h4>
      {/* 1. Animated Background Particles */}
      <BackgroundParticles />
      <BirthdayCountdown targetDate={targetDate} />
      </div>
      {/* 2. Photo Grid Section ("Her Pictures") */}
      {/* ADD YOUR REAL IMAGE URLS HERE! */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 z-10 p-4 bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} // Elegant ease-out
      >
        <img src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?q=80&w=600&auto=format&fit=crop" alt="Babe 1" className="rounded-xl aspect-square object-cover shadow-lg border-2 border-slate-700" />
        <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=600&auto=format&fit=crop" alt="Babe 2" className="rounded-xl aspect-square object-cover shadow-lg border-2 border-slate-700 md:translate-y-6" />
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop" alt="Babe 3" className="rounded-xl aspect-square object-cover shadow-lg border-2 border-slate-700" />
        <img src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=600&auto=format&fit=crop" alt="Babe 4" className="rounded-xl aspect-square object-cover shadow-lg border-2 border-slate-700 md:translate-y-6" />
      </motion.div>

      {/* 3. The "Exciting Text" Section */}
      <motion.div 
        className="z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <h1 className="text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
          Happy Birthday to <DynamicGreeting />
        </h1>
        
        {/* <p className="text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          Babe, .. years looks incredible on you. This is your space—a digital time capsule filled with our favorite adventures and wishes from the people who adore you. Dive in!
        </p> */}
      </motion.div>

      {/* 4. Elegant Call to Action Cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 p-12 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl max-w-lg"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mb-6"
        >
          🎂
        </motion.div>
        
        <p className="text-slate-300 text-lg italic leading-relaxed">
          "Today is not just about a birthday; it’s about celebrating the day the world became a much brighter place because you arrived in it."
        </p>

        {/* Decorative divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto mt-8 rounded-full" />
      </motion.div>

      {/* Subtle hint to look at the Navbar */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-slate-500 text-sm tracking-widest uppercase"
      >
      </motion.p>
      <SecretMessage /> {/* The Hidden Surprise Component */}
    </div>
  );
};

export default Home;