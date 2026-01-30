/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'subBg': '#F3F2E9',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'sans': ['Noto Sans JP', 'Karla', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
        'serif': ['Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'serif'],
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical': {
          'writing-mode': 'vertical-rl',
        },
      });
    }),
  ],
}

