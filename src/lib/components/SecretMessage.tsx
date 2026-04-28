import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "You make every day feel like a birthday. I love you so much.",
  "25 years of you, and I'm still falling for you every single day.",
  "You are the best thing that has ever happened to me. Happy 25th!",
  "Cheers to 25 years of being the most amazing person I know.",
  "I'm so lucky to be the one who gets to celebrate you today and every day.",
  "Happy 25th birthday, my love! Here's to many more years of happiness together.",
  "You are the light of my life, and I can't wait to see what the future holds for us. Happy 25th!",
  "To the most incredible person I know, happy 25th birthday! You deserve all the love and happiness in the world.",
  "Every moment with you is a gift. Happy 25th birthday, my darling!",
  "25 years of you, and I'm still in awe of how amazing you are. Happy birthday, my love!",
  "Happy 25th birthday, Sweet Home!❤️",
];

export const SecretMessage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleOpen = () => {
    // Pick a random message
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMsg);
    setIsOpen(true);
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className="fixed bottom-8 right-8 text-4xl hover:scale-125 transition-transform z-50 animate-pulse hover:animate-none"
      >
        ❤️
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-[100] flex items-center justify-center p-8 text-center"
          >
            <motion.div 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }}
              className="max-w-xl bg-slate-900 border border-slate-700 p-10 rounded-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-black text-pink-500 mb-6">Just for you...</h2>
              <p className="text-xl text-slate-100 leading-relaxed mb-8 italic">
                "{currentMessage}"
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};