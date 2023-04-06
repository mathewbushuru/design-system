import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  withDefaultVariant
} from "@chakra-ui/react";

import {
  buttonStyles,
  checkboxStyles,
  inputSelectStyles,
} from "./componentThemes";

const colors = {
  brand: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044",
  },
};



const themeConfig = {
  colors,
  components: {
    Button: { ...buttonStyles },
    Checkbox: { ...checkboxStyles },
    Input: { ...inputSelectStyles },
    Select: { ...inputSelectStyles },
  },
  fonts: {
    heading: `Montserrat, ${baseTheme.fonts?.heading}`,
    body: `Inter, ${baseTheme.fonts?.body}`,
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  themeConfig,
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
