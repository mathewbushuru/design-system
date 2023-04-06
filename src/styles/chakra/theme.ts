import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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

const checkboxStyles = {
  baseStyle: {
    control: {
      _focus: {
        ring: 2,
        ringColor: "brand.500",
      },
    },
  },
};

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
};

const theme = extendTheme(
  {
    colors,
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            backgroundColor: mode("brand.500", "brand.200")(props),
            color: mode("gray.50", "gray.900")(props),
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
            _hover:{
              backgroundColor: mode("brand.600", "brand.300")(props),
            }
          }),
        },
      },
      Checkbox: { ...checkboxStyles },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
    },
    fonts: {
      heading: `Montserrat, ${baseTheme.fonts?.heading}`,
      body: `Inter, ${baseTheme.fonts?.body}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
