/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        'primary-light': '#D8E9A8',
        background: '#191A19',
        'background-light': '#2F3030',
      },
      fontFamily: {
        SpaceMono: ['Space Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
