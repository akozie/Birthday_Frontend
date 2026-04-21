import { motion } from 'framer-motion';

interface MemoryProps {
  title: string;
  description: string;
  media_url: string;
}

export const MemoryCard = ({ title, description, media_url }: MemoryProps) => {
  // Enhanced check for video formats
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(media_url);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden shadow-2xl hover:border-pink-500/50 transition-all duration-500"
    >
      {/* Media Container with gradient overlay for "elite" feel */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        {isVideo ? (
          <video 
            src={media_url} 
            controls 
            preload="metadata"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <img 
            src={media_url} 
            alt={title} 
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        {/* Subtle gradient overlay to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-black text-white mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-[15px] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};