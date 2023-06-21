/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./src/**/*.{html,js,svg}"],
  theme: {
    extend: {
      colors: {
        primary: 'royalblue'
      }
    },
  },
  plugins: [],
}

