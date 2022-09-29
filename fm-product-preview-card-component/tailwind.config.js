/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        cream: "#f2ebe3",
        dark_cyan: "hsl(158, 36%, 37%)",
        very_dark_blue: "hsl(212, 21%, 14%)",
        dark_grayish_blue: "hsl(228, 12%, 48%)",
      }, 
      fontFamily: {
        monteserrat: ['Montserrat'],
        fraunces: ['Fraunces']
      }
    },
  },
  plugins: [],
}
