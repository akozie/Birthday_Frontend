
import { AddMemoryForm } from '../../components/AddMemoryForm';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};



const MemoriesPage = () => {

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
           <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
          Birthday Wishes
        </h1>
        <p className="text-gray-400 text-lg">Leave your birthday wishes and messages!</p>
      </header>

      {/* Modern Add Memory Section */}
      <section>
        <AddMemoryForm onMemoryAdded={() => {}} />
      </section>

      {/* Memories Grid */}
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* {memories.map((m: any) => ( */}
          {/* <motion.div key={m._id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}> */}
       {/* <MemoryCard 
            key={m._id} 
            title={m.title} 
            description={m.description} 
            media_url={m.media_url} 
          /> */}
                   
                    {/* </motion.div> */}
        {/* ))} */}
      </motion.div>
    </div>
  );
};

export default MemoriesPage;
