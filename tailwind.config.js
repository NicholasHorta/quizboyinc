/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, ts}'],
  theme: {
    extend: {
      colors: {
        'qz-pink-alt': '#e60073',
        'qz-pink': '#ff66b2',
        'qz-red-alt': '#ff0033',
        'qz-red': '#ff6666',
        'qz-green': '#66ff66',
        'qz-green-alt': '#00cc00',
        'qz-blue-alt': '#0099ff',
        'qz-blue': '#66ccff',
        'qz-yellow-alt': '#ffcc00',
        'qz-yellow': '#ffdb4d'
      }
    }
  },
  plugins: []
};
