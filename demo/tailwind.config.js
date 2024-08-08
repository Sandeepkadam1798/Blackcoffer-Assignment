/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "orange-color":"var(--orange-color)",
        "bg-color":"var(--bg-color)",
        "green-color":"var(--green-color)",
        "pink-color":"var(--pink-color)",
        "skyblue-color":"var(--skyblue-color)",
        "grey-color":"var(--grey-color)",
        "white-color":"var(--white-color)",
        "black-color":"var(--black-color)",
      },

      fontFamily: {
        integral: ['var(--font-integral)'],
        Poppins: ['var(--font-Poppins)']
      },


      fontFamily: {
        integral: ['Integral CF', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

