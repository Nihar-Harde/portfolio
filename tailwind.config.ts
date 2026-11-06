import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        washi: {
          DEFAULT: "var(--bg-void)",
          50: "#faf8f2",
          100: "#f6f3eb",
          200: "#ede8de",
          300: "#ded7c8",
        },
        sumi: {
          DEFAULT: "var(--text-primary)",
          light: "var(--text-secondary)",
          muted: "var(--text-muted)",
          900: "#181614",
          800: "#221f1c",
          700: "#36322e",
        },
        vermilion: {
          DEFAULT: "var(--ukiyo-vermilion)",
          dark: "var(--ukiyo-crimson)",
          light: "#d83838",
        },
        kintsugi: {
          DEFAULT: "var(--ukiyo-gold)",
          light: "#d4b068",
        },
        pine: {
          DEFAULT: "var(--ukiyo-pine)",
        },
        surface: "var(--bg-surface)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        japanese: ["var(--font-japanese)", "serif"],
      },
      boxShadow: {
        washi: "0 4px 20px -2px rgba(24, 22, 20, 0.06), 0 2px 6px -1px rgba(24, 22, 20, 0.04)",
        "washi-lg": "0 12px 35px -4px rgba(24, 22, 20, 0.09), 0 4px 12px -2px rgba(24, 22, 20, 0.05)",
        vermilion: "0 0 20px rgba(200, 43, 43, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
