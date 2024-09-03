/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'crimson': ['"Crimson Pro"', 'serif'],
    },
    extend: {
      'colors': {
        'dark': {
          100: '#adb5bd',
          200: '#0b090a',
        }
      }
    },
  },
  plugins: [],
}