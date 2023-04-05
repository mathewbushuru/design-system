import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "@/styles/chakra/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ChakraBaseProvider theme={theme}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    // </ChakraBaseProvider>
  );
}
