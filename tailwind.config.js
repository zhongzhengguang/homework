/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      Cinzel: ["Cinzel', serif"],
    },
    extend: {
      colors: {
        MyColor: {
          FadedRed: "#F27832",
          white1: "#ECE7E5",
          blue1: "#9FC7E8",
          green: "#C9CC41",
        },
      },
    },
    keyframes: {
      bgcTop: {
        "0%": { height: " 0%", width: "100%" },
        "50%": { height: "50%", width: "100%" },
        "100%": { height: " 0%", width: "100%" },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
