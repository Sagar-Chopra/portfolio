/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001c29', 
        secondary: '#16a34a',
        black: '#000000',
        white: '#FFFFFF',
        textColor: '#3d5257',
        redColor: '#fc1c1c'
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
      },
      fontWeight: {
        '400': '400',
        '500' : '500'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      padding: {
        '46': '46px'
      }
    },
  },
  plugins: [],
};
