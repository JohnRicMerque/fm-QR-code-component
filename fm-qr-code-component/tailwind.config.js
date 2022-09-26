/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./qr-code-component-main/index.html"],
  theme: {
    extend: {
      colors: {
      white: '#ffffff',
      light_gray: '#d6e2f0',
      grayish_blue: '#7b879d',
      dark_blue: '#1f3251'
    },
      fontFamily: {
        outfit: ['Outfit']
    }, 
      fontSize: {
        primary: '15px'
    }
    }
  },
  plugins: [],
}
