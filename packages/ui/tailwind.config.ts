/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss";

const baseConfig = require("@mathewbushuru/config/tailwind.config");

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [baseConfig],
};

export default config;
