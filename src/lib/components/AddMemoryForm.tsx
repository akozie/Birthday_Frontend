import { useState } from 'react';
import { api } from '../api';
import { Toast } from '@/lib/components/Toast';
import { useEffect } from 'react';

export const AddMemoryForm = ({ onMemoryAdded }: { onMemoryAdded: () => void }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      setError(null);
    }, 4000);
    
    // This cleanup function prevents the timer from running 
    // if the error changes again or the component unmounts
    return () => clearTimeout(timer);
  }
}, [error]);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // LOG THE DATA
  //   console.log("Title:", title);
  //   console.log("File:", file);
  //   if (!file) {
  //     <Toast message="Please provide a name and select a file." type="error" onClose={() => setError(null)} />
  //     return;
  //   }

  //   // 1. Check duration
  //   const isWithinLimit = await validateVideoDuration(file);
  //   if (!isWithinLimit) {
  //     {error && <Toast message={error} type="error" onClose={() => setError(null)} />}
  //     return;
  //   }

  //   setStatus('uploading');
  //   try {
  //     const formData = new FormData();
  //     formData.append('title', title);
  //     formData.append('description', description);
  //     formData.append('media', file);

  //     await api.createMemory(formData);
      
  //     setStatus('success');
  //     setTitle(''); setDescription(''); setFile(null); // Clear form
  //     onMemoryAdded(); 
  //     setTimeout(() => setStatus('idle'), 3000);
  //   } catch (err) {
  //     console.error("DEBUG ERROR:", err); // This will show in your F12 console
  //     // setStatus('error');
  //     <Toast message="Failed to upload. Please try again!" type="error" onClose={() => setError(null)} />
  //     setError("Failed to upload. Please try again!");
  //     setTimeout(() => setError(null), 4000); // Auto-hide after 4s
  //   }
  // };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // 1. Validation Logic
    if (!title || !file) {
      setError("Please select a file."); // Just set the state!
      return; // Stop here
    }

    const isWithinLimit = await validateVideoDuration(file);
    if (!isWithinLimit) {
      setError("Video is too long! Please keep it under 30 seconds.");
      return; // Stop here
    }

    // 2. Upload Logic
    setStatus('uploading');
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('media', file);

      await api.createMemory(formData);
      
      setStatus('success');
      setTitle(''); setDescription(''); setFile(null);
      onMemoryAdded(); 
      // setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error("DEBUG ERROR:", err);
      setError("Failed to upload. Please try again!"); // Just set the state!
    }
  };

  const validateVideoDuration = (file: File): Promise<boolean> => {
  return new Promise((resolve) => {
    // Only check if it's actually a video
    if (!file.type.startsWith('video/')) return resolve(true);

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(video.src);
      // Resolve true if under 31 seconds (allowing a 1s buffer)
      resolve(video.duration <= 31);
    };
    video.src = URL.createObjectURL(file);
  });
};

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl transition-all">
      {/* ADD THIS LINE HERE */}
    {error && (
      <div className="mb-4">
        <Toast message={error} type="error" onClose={() => setError(null)} />
      </div>
    )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="text" 
          placeholder="Name"
          value={title}
          className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 focus:border-pink-500 outline-none transition-all" 
          onChange={(e) => setTitle(e.target.value)} 
        />
        
      {/* File Upload Section */}
      <div className="w-full">
        <input 
          type="file" 
          accept="image/*,video/*"
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-400 
                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                    file:text-sm file:font-semibold file:bg-pink-500/20 file:text-pink-400 
                    hover:file:bg-pink-500/30 transition-all cursor-pointer" 
          onChange={(e) => setFile(e.target.files?.[0] || null)} 
        />
        
        {/* This text is now explicitly tied to the input above */}
        <p className="text-[12px] text-slate-400 mt-2 px-1 flex items-center gap-2">
          <span className="text-pink-500">✨</span> 
          Supported: JPG, PNG, MP4, MOV (Please keep it under 30s!)
        </p>
      </div>
      </div>
      
      <textarea 
        placeholder="Write a message or describe this memory..." 
        value={description}

        className="w-full mt-4 p-4 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 focus:border-pink-500 outline-none transition-all h-32" 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <button 
        type="submit" 
        disabled={status === 'uploading'}
        className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 disabled:opacity-50"
      >
        {status === 'uploading' ? 'Uploading...' : 'Save Memory'}
      </button>

      {/* Feedback Messages */}
      {status === 'success' && <p className="text-green-400 mt-4 text-center">Memory saved successfully! ✨</p>}
      {status === 'error' && <p className="text-red-400 mt-4 text-center">Something went wrong. Try again.</p>}
    </form>
  );
};