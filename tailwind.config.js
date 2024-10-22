/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E7A81",
        primary15: "#0E7A8126",
        primary20: "#0E7A8133",
        text: "#131313",
        text60: "#13131399",
        text70: "#131313B3",
      },
      fontFamily: {},
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
