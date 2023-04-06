import { mode } from "@chakra-ui/theme-tools";

export const buttonStyles = {
    variants: {
      primary: (props: any) => ({
        backgroundColor: mode("brand.500", "brand.200")(props),
        color: mode("gray.50", "gray.900")(props),
        _focus: {
          ring: 2,
          ringColor: "brand.500",
        },
        _hover: {
          backgroundColor: mode("brand.600", "brand.300")(props),
        },
      }),
    },
  };
  
  export const checkboxStyles = {
    baseStyle: {
      control: {
        _focus: {
          ring: 2,
          ringColor: "brand.500",
        },
      },
    },
  };
  
  export const inputSelectStyles = {
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
