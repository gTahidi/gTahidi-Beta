/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gtahidiCream: "#F8EFE4",
        gtahidiPurple: "#9089B8",
        gtahidiPurpleTwo: "#e2e7e7",
        gtahidiPurpleThree: "#EFC3E6",
        gtahidiPink: "#F577DB",
        gtahidiBlue: "#1e9bff",
        gtahidiLightBlue: "#f4faff",
        gtahidiRed: "#fa8a8c",
        linearGradientPurple: "#D8DFF1",
        linearGradientPink: "#F8EFE4",
        gtahidiDarkBlue: "#494080",
      },
    },
  },
  plugins: [],
};
