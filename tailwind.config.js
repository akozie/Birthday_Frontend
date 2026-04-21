/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can now use these classes in your components!
        // e.g., bg-midnight, text-birthday-pink
        midnight: '#020617', 
        'birthday-pink': '#ec4899',
      },
    },
  },
  plugins: [],
}
