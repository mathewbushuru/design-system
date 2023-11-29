/** @type {import('tailwindcss').Config} */

import { Colors } from "./colors"

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: Colors.background,
        foreground: Colors.foreground,
        primary: {
          DEFAULT: Colors.primaryBackground,
          foreground: Colors.primaryForeground,
        },
        secondary: {
          DEFAULT: Colors.secondaryBackground,
          foreground: Colors.secondaryForeground,
        },
        popover: {
          DEFAULT: Colors.popoverBackground,
          foreground: Colors.popoverForeground,
        },
        muted: {
          DEFAULT: Colors.mutedBackground,
          foreground: Colors.mutedForeground,
        },
        destructive: {
          DEFAULT: Colors.destructiveBackground,
          foreground: Colors.destructiveForeground,
        },
        border: Colors.border,
      },
    },
  },
  plugins: [],
};
