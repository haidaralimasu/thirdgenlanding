import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050505",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#EDEDED",
          secondary: "#888888",
        },
        accent: {
          DEFAULT: "#FF8700",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 135, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
