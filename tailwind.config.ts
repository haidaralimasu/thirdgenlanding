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
          DEFAULT: "#000",
        },
        foreground: {
          DEFAULT: "#fff",
          secondary: "#666",
          tertiary: "#333",
        },
        border: {
          DEFAULT: "#222",
        },
        accent: {
          DEFAULT: "#FF8700",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      spacing: {
        "32": "8rem",
      },
    },
  },
  plugins: [],
};
export default config;
