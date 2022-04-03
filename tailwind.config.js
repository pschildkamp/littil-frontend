module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      body: ["Poppins"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: "#acacac",
      yellow: {
        50: "#efa55c",
        100: "#f18f2d",
        200: "#e57200",
      },
      blue: {
        100: "#a1c5ea",
        200: "#2d2e83",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
