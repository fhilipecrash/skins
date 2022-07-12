/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weapon-1': 'url("/src/assets/weapon-1.png")',
      }
    },
  },
  plugins: [],
}
