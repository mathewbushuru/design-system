/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss";

const baseConfig = require("@mathewbushuru/config/tailwind.config");

const config: Config = {
  ...baseConfig,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000"
        }
      }
    }
  }
};

export default config;
