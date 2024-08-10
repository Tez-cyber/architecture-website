/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron': "url('./assets/new-img.jpg')",
      },
      width: {
        'contain': '960px',
        "sContain": '500px'
      },
      colors: {
        'darkBrown': "#2b2b2b",
        "darkCream": "#a39280",
        "lightCream": "#c0a27e",
      }
    },
  },
  plugins: [],
}