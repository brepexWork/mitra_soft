const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      custom_brown: "#bb946b",
      custom_red: "#eb5f67",
      colors
    },
    extend: {},
  },
  plugins: [],
}