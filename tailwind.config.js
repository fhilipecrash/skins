/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ak47': 'url("/src/assets/ak47.png")',
        'karambit': 'url("/src/assets/karambit.png")',
        'p90': 'url("/src/assets/p90.png")',
        'm4a1': 'url("/src/assets/m4a1.png")',
        'awp': 'url("/src/assets/awp.png")',
      }
    },
  },
  plugins: [],
}
