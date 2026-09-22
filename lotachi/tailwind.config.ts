import type { Config } from "tailwindcss";

// LOTACHI brand tokens, from the brand guidelines: Espresso (ink), Soft
// Cream (paper) and Terracotta (accent). Per the guidelines' pairing rule,
// Terracotta is reserved for small accents (links, focus rings, the logo's
// own dot) and must never be used as a full background or button fill —
// solid buttons use ink (Espresso) instead. See src/components/ui/Button.tsx.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#2C1D15",
          50: "#E7DFD2",
          100: "#D8CFC2",
          200: "#BCB2A7",
          300: "#9D9287",
          400: "#7A6E64",
          500: "#63564C",
          600: "#4F4138",
          700: "#403129",
          800: "#34251D",
          900: "#2C1D15",
        },
        paper: {
          DEFAULT: "#EFE7DA",
          muted: "#DFD7CA",
        },
        accent: {
          DEFAULT: "#B5532F",
          light: "#E08A62",
          dark: "#894227",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-instrument-sans)",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
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
