/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "public-sans": ["Public Sans","sans-serif"],
        "lexend":["Lexend", "sans-serif"]
      }
    },
  },
  plugins: [],
}