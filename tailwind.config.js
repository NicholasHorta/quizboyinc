/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, ts}'],
  theme: {
    extend: {
      colors: {
        'qz-pink-alt': '#e60073',
        'qz-pink': '#ff66b2',
        'qz-pink-op': '#ffccf2',
        'qz-red-alt': '#ff0033',
        'qz-red': '#ff6666',
        'qz-red-op': '#ffcccc',
        'qz-green': '#66ff66',
        'qz-green-op': '#ccffcc',
        'qz-green-alt': '#00cc00',
        'qz-blue-alt': '#0099ff',
        'qz-blue': '#66ccff',
        'qz-blue-op': '#cce5ff',
        'qz-yellow-alt': '#ffcc00',
        'qz-yellow': '#ffdb4d',
        'qz-yellow-op': '#ffe0b3',
        'qz-pink-op-l': '#ffe5f9',
        'qz-red-op-l': '#ffd9d9',
        'qz-green-op-l': '#e5ffe5',
        'qz-blue-op-l': '#e5f0ff',
        'qz-yellow-op-l': '#fff5e0',

      }
    }
  },
  plugins: []
};

