import type { Config } from "tailwindcss";

// Temporary brand tokens. Replace with final Lotachi brand values once the
// identity is finished — see README.md "Brand identity" section for exactly
// where each of these is used.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15161A",
          50: "#F5F5F4",
          100: "#E8E7E4",
          200: "#C9C7C1",
          300: "#A6A39B",
          400: "#686560",
          500: "#57544C",
          600: "#3D3B35",
          700: "#2A2926",
          800: "#1D1D1B",
          900: "#15161A",
        },
        paper: {
          DEFAULT: "#FAF9F6",
          muted: "#F1EFEA",
        },
        accent: {
          DEFAULT: "#0E4B45",
          light: "#E4EDEC",
          dark: "#0A3733",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
