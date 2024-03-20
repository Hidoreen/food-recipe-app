/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',
      
      'md': '640px',

      'lg': '1280px',

      'xl': '1536px',
    },
  },
  plugins: [],
}

