/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coregray: "#58667E",
        lightblue: "#E7EDFD",
        lighterblue: "#F8FAFD",
        lightblue: "#F3F5FB",
        darkpurple: "#344062",
        corepurple: "#8588A3",
        corered: "#CB2E42",
        nextgray: "#F0F6FF",
        primarygray: "#666879",
        primaryblue: "#0D75FF",
        coreblue: "rgba(13, 117, 255, 0.05)"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
