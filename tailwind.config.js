/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '8.5xl': ['7rem', { lineHeight: '1' }],
      },
      fontFamily: {
        custom: ['Lato', 'sans-serif'],
      },
      screens: {
        phone: '430px',

        lg: '1150px',
        '3xl': '1550px',
      },
    },
  },
};
