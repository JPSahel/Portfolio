/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",           
    "./*.js",
    "./components/*.html"           
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      width: {
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },
      height: {
        '144': '36rem', 
        '160': '40rem',
        '192': '48rem',
      }
    },
  },
  plugins: [],
}

