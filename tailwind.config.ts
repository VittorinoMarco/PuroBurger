import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        "puro-black": "#000000",
        "puro-white": "#ffffff",
        "puro-green": "#8DC63F", // acid lime green — PuroSpritz branding + card borders
        "puro-green-hover": "#7ab535",
        // Aliases for compatibility
        "puro-dark": "#000000",
        "puro-olive": "#73ad48",
        "puro-gold": "#73ad48",
        "puro-cream": "#ffffff",
        "puro-light": "#f5f5f5",
        "puro-red": "#B03A2E",
      },
      borderRadius: {
        "food": "8px",
        "food-lg": "12px",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
