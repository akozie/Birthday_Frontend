import { Link } from "@tanstack/react-router";
import { motion } from 'framer-motion';
import featuredImage from '../../../../public/art.png';

export const Home = () => {
  return (
    <div className="relative min-h-screen py-20 px-6 max-w-6xl mx-auto">
      
      {/* 1. Hero Header */}
      <motion.header 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-pink-400 uppercase bg-pink-500/10 border border-pink-500/20 rounded-full">
          April 2026
        </div>
        {/* <h4 className="text-7xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          25 Years of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500">
            Absolute Magic
          </span>
        </h4> */}
        {/* <h4 className="text-7xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          A Quarter Century of <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500">
          Pure Brilliance
        </span>
        </h4> */}
        <h4 className="text-7xl md:text-7xl font-black text-white mb-6 tracking-tighter">
  Est. 2001 <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 animate-pulse inline-block hover:scale-105 transition-transform duration-300">
    A True Limited Edition
  </span>
</h4>
      </motion.header>

      {/* 2. Featured Content Strip (Elite Look) */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      >
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden border border-slate-800 h-[300px] flex items-end p-10 bg-slate-900">
            <img src={featuredImage} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Featured" />
            <div className="relative z-10">
                <p className="text-pink-400 font-bold mb-2">Featured Memory</p>
                {/* <h3 className="text-3xl font-bold text-white">Our First Adventure</h3> */}
            </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center text-center">
            <h4 className="text-5xl font-black text-white mb-2">25</h4>
            <p className="text-slate-400 font-medium">Years of being amazing</p>
            <div className="my-6 h-px bg-slate-800 w-full" />
            <h4 className="text-5xl font-black text-white mb-2">∞</h4>
            <p className="text-slate-400 font-medium">Memories to go</p>
        </div>
      </motion.div>

      {/* 3. Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full">
        <Link to="/addmemories" className="group relative p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-pink-500/50 transition-all duration-300 shadow-2xl hover:shadow-pink-500/10">
          <div className="absolute top-0 right-0 p-8 text-4xl opacity-50">✨</div>
          <h2 className="text-3xl font-bold text-white mb-3">Leave a Little Love
                          <span className="text-pink-500 ml-2 font-bold">&rarr;</span>
          </h2>
            <p className="text-slate-400">
              Drop a funny story, a sweet note, a picture, birthday wishes or a video to make her day.
            </p>        
        </Link>
        
        {/* <Link to="/viewmemories" className="group relative p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-violet-500/50 transition-all duration-300 shadow-2xl hover:shadow-violet-500/10">
           <div className="absolute top-0 right-0 p-8 text-4xl opacity-50">🎞️</div>
          <h2 className="text-3xl font-bold text-white mb-3">View Memories</h2>
          <p className="text-slate-400">Dive into our collection of adventures and shared smiles.</p>
        </Link> */}
      </div> 
    </div>
  ); 
};

export default Home;