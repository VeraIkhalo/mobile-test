/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#232323",
          200: "#A5A5A5",
          300: "#383838",
          400: "#5E5E5E"
        },
        green:{
          100: "#E9FFC7",
          300: "#B9FF66",
          600: "#57B100"
        },
        grey: {
          100: "#F5F5F5",
          200: "#DBDBDB",
          300: "#7C7C7C",
          400: "#ECECEC",
          
        }
      },
      fontFamily: {
        ithin: ["Inter-Thin", "sans-serif"],
        iextralight: ["Inter-ExtraLight", "sans-serif"],
        ilight: ["Inter-Light", "sans-serif"],
        iregular: ["Inter-Regular", "sans-serif"],
        imedium: ["Inter-Medium", "sans-serif"],
        isemibold: ["Inter-SemiBold", "sans-serif"],
        ibold: ["Inter-Bold", "sans-serif"],
        iextrabold: ["Inter-ExtraBold", "sans-serif"],
        iblack: ["Inter-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
