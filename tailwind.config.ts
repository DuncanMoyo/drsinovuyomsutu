import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
        heavy: "900",
      },
      colors: {
        lightestTeal: "#E0F2F1",
        lighterTeal: "#B2DFDB",
        lightTeal: "#80CBC4",
        darkTeal: "#4DB6AC",
        darkerTeal: "#26A69A",
        darkestTeal: "#009688",
        lightChampagne: "#F2D6C0",
        peach: "#E5B990",
        desertSun: "#D79B70",
        coral: "#FDDBD8",
        darkCoral: "#FCC9C2",
        darkestCoral: "#FBB7BC",
        cedarChest: "#c6594a", 
        burntUmber: "#81271b",
        darkBrown: "#333333",
        paleRose: "#f9f5f4",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
