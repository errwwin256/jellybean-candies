/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jellyPink: "#FF69B4",
        jellyBlue: "#4FC3F7",
        jellyYellow: "#FFD54F",
        jellyGreen: "#81C784",
        jellyPurple: "#BA68C8",
        jellyOrange: "#FFB74D",
        jellyRed: "#E57373",
      },
      fontFamily: {
        jelly: ["'Luckiest Guy'", "cursive"],
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
