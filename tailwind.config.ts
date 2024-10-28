import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ff0000",
        dark: "#0b1622",
        gray: "#a6aebf",
        light: "#edf2f4",
        "dark-blue": "#2b2d42",
      },
      boxShadow: {
        normal: "0px 0px 64px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        fira: ["var(--font-fira-code)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
