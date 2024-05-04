/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Primary
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",

        // Neutral
        // Dark theme
        veryDarkBlueBg: "hsl(230, 17%, 14%)",
        veryDarkBlueTopBg: "hsl(232, 19%, 15%)",
        darkDesaturatedBlueCardBg: "hsl(228, 28%, 20%)",
        darkDesaturatedBlueCardBgHover: "hsl(228, 28%, 30%)",
        desaturatedBlueText: "hsl(228, 34%, 66%)",
        whileText: "hsl(0, 0%, 100%)",

        // Light theme
        lightToggle: "hsl(230, 22%, 74%)",
        whileBg: "hsl(0, 0%, 100%)",
        veryPaleBlueTopBg: "hsl(225, 100%, 98%)",
        lightGrayishBlueCardBg: "hsl(227, 47%, 96%)",
        lightGrayishBlueCardBgHover: "hsl(227, 47%, 91%)",
        darkGrayishBlueText: "hsl(228, 12%, 44%)",
        veryDarkBlueText: "hsl(230, 17%, 14%)",

        attributionLink: "hsl(228, 12%, 44%)",
      },
      backgroundImage: {
        instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        darkToggle:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
    },
  },
  plugins: [],
};
