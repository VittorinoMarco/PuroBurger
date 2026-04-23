import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        md: "1.75rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        puro: {
          black: "#000000",
          ink: "#0a0a0a",
          panel: "#101010",
          card: "#141414",
          border: "#1f1f1f",
          white: "#ffffff",
          muted: "#a3a3a3",
          green: "#8DC63F",
          "green-hover": "#7ab535",
          "green-soft": "#b6e175",
          olive: "#73ad48",
          red: "#B03A2E",
        },
      },
      borderRadius: {
        food: "10px",
        "food-lg": "16px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(141,198,63,.35), 0 12px 40px -12px rgba(141,198,63,.35)",
        card: "0 8px 24px -8px rgba(0,0,0,.6)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".65" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-in-up": "fade-in-up .6s ease-out both",
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
        "green-gradient":
          "linear-gradient(135deg, #8DC63F 0%, #73ad48 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
