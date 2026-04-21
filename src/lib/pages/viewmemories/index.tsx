import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../../api';
import { MemoryCard } from '../../components/MemoryCard';
import { MemoryModal } from '@/lib/components/MemoryModal';

const MemoriesPage = () => {
  const [memories, setMemories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const fetchMemories = async () => {
    setIsLoading(true);
    const data = await api.getMemories();
    setMemories(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <header className="text-center mb-20">
        <h4 className="text-6xl font-black text-white mb-6">Birthday Wishes</h4>
        <p className="text-xl text-slate-400">Wishes from your loved ones.</p>
      </header>

      {/* Memories Display */}
      {isLoading ? (
        <div className="text-center text-slate-500">Loading memories...</div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AnimatePresence>
            {memories.map((m: any) => (
              <motion.div 
                key={m._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="transition-all hover:-translate-y-2"
                onClick={() => setSelectedMemory(m)} // Move onClick here
              >
                <MemoryCard 
                  title={m.title} 
                  description={m.description} 
                  media_url={m.media_url} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      {/* The Modal */}
    {selectedMemory && (
      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
    )}
    </div>
    
  );
};

export default MemoriesPage;