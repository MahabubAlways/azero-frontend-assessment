/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-text': '#272727',
        'color-primary': '#FF6543',
    },
      fontFamily: {
        primary: ['ExtraLight'],
        Regular: ['Regular'],
      }
    },
  },
  plugins: [],
}

