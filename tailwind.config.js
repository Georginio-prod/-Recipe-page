/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        rose: '#F3E5D7',
        text: '#312E2C',
        h3: '#5F564D',
        ros: "#FFF7FB",
        tit:"#7A284E",
        but: '#7A284E',
        col: '#5F564D',
        tit1: '#854632',
        num:'#854632'
      }
    },
  },
  plugins: [],
}

