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
        // Primary backgrounds
        void: "#07090C",
        panel: "#0F141C",
        surface: "#161B23",
        border: "#1C222B",
        
        // Accent colors
        cyan: {
          DEFAULT: "#22D3EE",
          glow: "#22D3EE",
        },
        mint: "#34D399",
        amber: "#F59E0B",
        violet: "#A78BFA",
        crimson: "#DC2626",
        
        // Text
        text: "#E8EDF1",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.2)',
        'glow-cyan-sm': '0 0 10px rgba(34, 211, 238, 0.15)',
        'glow-mint': '0 0 20px rgba(52, 211, 153, 0.2)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.2)',
        'glow-violet': '0 0 20px rgba(167, 139, 250, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;