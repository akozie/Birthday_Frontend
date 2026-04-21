import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { api } from '../../api';

const Guestbook = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const loadMessages = () => api.getMessages().then(setMessages);

  useEffect(() => { 
    loadMessages(); 
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    await api.sendMessage(name, content);
    
    // Birthday Magic
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#8b5cf6']
    });

    setName(''); 
    setContent('');
    loadMessages();
  };

  return (
    <div className="p-10">
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
          Guest Book
        </h1>
        <p className="text-gray-400 text-lg">Leave your birthday wishes and messages!</p>
      </header>

      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-xl border border-slate-700 shadow-xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-10">
          <input 
            className="w-full p-3 mb-4 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-pink-500 outline-none transition-all" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <textarea 
            className="w-full p-3 mb-4 bg-slate-800 text-white rounded-lg border border-slate-600 focus:border-pink-500 outline-none h-32 transition-all" 
            placeholder="Your wish..." 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          />
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300">
            Send Wish
          </button>
        </form>

        {/* Messages List */}
        <div className="space-y-6">
          <AnimatePresence>
            {Array.isArray(messages) && messages.map((m: any, index: number) => (
              <motion.div 
                key={m._id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-slate-700 pb-4"
              >
                <p className="font-bold text-pink-400 text-lg">{m.name}</p>
                <p className="text-slate-200">{m.content}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Guestbook;