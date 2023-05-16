/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/**/**.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        button: "#bc2f6a",
        accent: "#bc3b2f",
  
        lPrimary: "#130710",
        lBackground: "#f9f0f7",
        lSecondaryButton: "#ffffff",
  
        dPrimary: "#f7f3f3",
        dBackground: "#181211",
        dSecondaryButton: "231c1a"
      }
    },
  },
  plugins: [],
}

