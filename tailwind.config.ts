import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rf-navy": "#2a1e48",
        "rf-navy-deep": "#1d1d1b",
        "rf-navy-mid": "#3d2e62",
        "rf-pink": "#e73a68",
        "rf-pink-light": "#f9afc6",
        "rf-pink-deep": "#c42550",
        "rf-white": "#FFFFFF",
        "rf-off-white": "#F5F4F8",
        "rf-black": "#1d1d1b",
        "rf-grey": {
          100: "#dfe1e1",
          200: "#c8cbcb",
          300: "#a8acac",
          400: "#7a7e7e",
          500: "#4f5252",
        },
        "rf-success": "#2ECC8B",
        "rf-warning": "#F5A623",
        "rf-error": "#E8315A",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "monospace"],
      },
      fontWeight: {
        thin: "100",
        ultralight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
        heavy: "950",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3.5rem",
        "5xl": "5rem",
        "6xl": "7rem",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.25",
        normal: "1.5",
        loose: "1.75",
      },
      letterSpacing: {
        tight: "-0.03em",
        normal: "0em",
        wide: "0.06em",
        widest: "0.12em",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px",
        "2xl": "32px",
        pill: "999px",
      },
      boxShadow: {
        sm: "0 1px 4px rgba(27,20,60,0.15)",
        md: "0 4px 20px rgba(27,20,60,0.25)",
        lg: "0 12px 48px rgba(27,20,60,0.35)",
        "glow-pink": "0 0 32px rgba(232,49,90,0.35)",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4,0,0.2,1)",
        out: "cubic-bezier(0,0,0.2,1)",
        bounce: "cubic-bezier(0.34,1.56,0.64,1)",
        apple: "cubic-bezier(0.16,1,0.3,1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
