/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#64ffda',
        background: '#191A19',
      },
      fontFamily: {
        SpaceMono: ['Space Mono', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            visibility: 'visible',
            opacity: 1,
          },
        },
      },
      animation: {
        'fadeIn-1': '1s fadeIn',
        'fadeIn-1.5': '1.5s fadeIn',
        'fadeIn-2': '2s fadeIn',
      },
    },
  },
  plugins: [],
};
