import { useState, useEffect } from 'react';
import { api } from '../api';

export const Guestbook = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const loadMessages = () => api.getMessages().then(setMessages);

  useEffect(() => { loadMessages(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.sendMessage(name, content);
    setName(''); setContent('');
    loadMessages();
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">Birthday Wishes Guestbook</h2>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input className="w-full p-2 mb-2 bg-gray-700 text-white rounded" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea className="w-full p-2 mb-2 bg-gray-700 text-white rounded" placeholder="Your wish..." value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="bg-pink-600 text-white px-4 py-2 rounded">Send Wish</button>
      </form>

      {/* Messages */}
    <div className="space-y-4">
    {/* Add this check: */}
    {Array.isArray(messages) && messages.length > 0 ? (
        messages.map((m: any) => (
        <div key={m._id} className="border-b border-gray-600 pb-2">
            <p className="font-bold text-pink-400">{m.name}</p>
            <p className="text-white">{m.content}</p>
        </div>
        ))
    ) : (
        <p className="text-gray-500">No wishes yet. Be the first!</p>
    )}
    </div>
    </div>
  );
};