/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.1em',
        'widest': '0.2em',
      },
    },
  },
  plugins: [],
}

