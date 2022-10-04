/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pele-cyen": "hsl(193, 100%, 96%)",
        "dark-cyan": "hsl(192, 100%, 9%)",
        "grayish-blue": "hsl(208, 11%, 55%)",
        "c-pink":"hsl(322, 100%, 66%)"
      },
      margin:{
        "c-75":"75px"
      }
    },
  },
  plugins: [],
};
