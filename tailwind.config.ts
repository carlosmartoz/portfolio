// Tailwind
import type { Config } from "tailwindcss";

// Config
const config: Config = {
  plugins: [],
  darkMode: "selector",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        red: "#ff0000",
        dark: "#0b1622",
        gray: "#a6aebf",
        light: "#edf2f4",
        "dark-red": "#da0101",
      },
      boxShadow: {
        inset: "inset 0px 0px 0px 1px #ff0000",
        normal: "0px 0px 64px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        fira: ["var(--font-fira-code)", "monospace"],
      },
    },
  },
};

// Export
export default config;
