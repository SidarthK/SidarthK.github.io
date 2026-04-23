import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafb",
        surface: "#ffffff",
        text: "#111111",
        muted: "#2f2f2f",
        line: "#e5e7eb",
        accent: "#0096c7",
        "accent-strong": "#0096c7",
        "accent-deep": "#0096c7",
        "accent-soft": "#0096c7",
        "accent-tint": "#0096c7"
      },
      fontFamily: {
        sans: ["'Public Sans'", "'Segoe UI'", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
