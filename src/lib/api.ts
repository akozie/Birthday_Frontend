const API_BASE_URL = import.meta.env.VITE_API_URL || "https://birthdaybackend-production.up.railway.app";

// Helper for cleaner error handling
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

export const api = {
  // Memories
  getMemories: async () => {

    // Temporarily change your fetch logic
    const response = await fetch(`${API_BASE_URL}/api/v1/memories`);
    const text = await response.text(); // Get raw text
    console.log("Raw Response:", text); // See exactly what the server sent

    // const response = await fetch(`${API_BASE_URL}/api/v1/memories`);
    return handleResponse(response);
  },

  createMemory: async (formData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/memories`, {
      method: "POST",
      body: formData, 
    });
    return handleResponse(response);
  },

  // Private Messages (The Time Capsule)
  getMessages: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/messages`);
      return response.ok ? await response.json() : [];
    } catch {
      return [];
    }
  },


  sendMessage: async (name: string, content: string) => {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });
    return handleResponse(response);
  },
};