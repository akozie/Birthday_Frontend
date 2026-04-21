import { motion, AnimatePresence } from 'framer-motion';

export const MemoryModal = ({ memory, onClose }: { memory: any, onClose: () => void }) => {
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(memory.media_url);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {isVideo ? (
            <video src={memory.media_url} controls autoPlay className="w-full aspect-video" />
          ) : (
            <img src={memory.media_url} alt={memory.title} className="w-full h-auto" />
          )}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-3">{memory.title}</h2>
            <p className="text-slate-300 leading-relaxed">{memory.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};