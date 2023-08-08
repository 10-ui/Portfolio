/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "gnav":"Bree Serif",
      "section":"Klee One"
    },
    backgroundColor: {
      "body":"#C49851",
      "header":"#F1EFDD"
    }
  },
  plugins: [],
}

