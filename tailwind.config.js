/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('./assets/img-2.jpg')",
      },
      width: {
        'contain': '960px',
        "sContain": '500px'
      },
      colors: {
        'darkBrown': "#2b2b2b",
        "cream": "#a39280"
      }
    },
  },
  plugins: [],
}