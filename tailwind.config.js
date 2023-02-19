/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coregray: "#58667E",
        lightblue: "#E7EDFD",
        lighterblue: "#F8FAFD"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
