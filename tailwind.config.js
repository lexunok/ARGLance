/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'midnight': {
        100: '#F4EEFF',
        200: '#DCD6F7',
        300: '#A6B1E1',
        400: '#424874'
      }
    },
    extend: {},
  },
  plugins: [],
}