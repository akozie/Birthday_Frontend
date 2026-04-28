import { motion } from 'framer-motion';

interface MemoryProps {
  title: string;
  description: string;
  media_url: string;
}

export const MemoryCard = ({ title, description, media_url }: MemoryProps) => {
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(media_url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-transparent hover:from-pink-500/60 hover:via-purple-500/40 transition-all duration-500"
    >
      {/* Inner Card */}
      <div className="flex flex-col h-full bg-slate-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

        {/* Media */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {isVideo ? (
            <video
              src={media_url}
              controls
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <img
              src={media_url}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Floating label (modern touch) */}
          <div className="absolute bottom-3 left-3 px-3 py-1 text-xs bg-white/10 backdrop-blur-md text-white rounded-full border border-white/10">
            Memory
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-pink-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Subtle bottom glow */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>
    </motion.div>
  );
};