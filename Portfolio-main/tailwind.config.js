/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./components/**/*.{js,jsx}",   
    "./App.jsx"                     
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        'card-bg': 'var(--card-bg)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        surface: 'var(--surface)',
        'electric-cyan': '#00f0ff',
        'neon-purple': '#bf00ff',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
