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
        // Heyron.ai official colors
        bg: {
          primary: "#0c1018",
          secondary: "#111822",
          card: "#182230",
        },
        text: {
          primary: "#e8edf2",
          secondary: "#8a9bb0",
          muted: "#5a6a7a",
        },
        border: "#243040",
        accent: {
          DEFAULT: "#5ec4d4",
          hover: "#4ab0c0",
        },
        success: "#4ade80",
        urgent: "#f87171",
        // Legacy aliases for compatibility
        void: "#0c1018",
        panel: "#182230",
        surface: "#111822",
        cyan: {
          DEFAULT: "#5ec4d4",
          glow: "#5ec4d4",
        },
        mint: "#4ade80",
        amber: "#f59e0b",
        violet: "#a78bfa",
        crimson: "#dc2626",
        muted: "#8a9bb0",
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(94, 196, 212, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(94, 196, 212, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(94, 196, 212, 0.2)',
        'glow-cyan-sm': '0 0 10px rgba(94, 196, 212, 0.15)',
        'glow-mint': '0 0 20px rgba(74, 222, 128, 0.2)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.2)',
        'glow-violet': '0 0 20px rgba(167, 139, 250, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;