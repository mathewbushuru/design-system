import Head from "next/head";
import { Container, Box, useColorMode } from "@chakra-ui/react";

import ShowcaseItems from "@/showcaseComponents/ShowcaseItems";
import Footer from "@/showcaseComponents/Footer";
import { IconMoonStars } from "@tabler/icons-react";

export default function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Mathew's Components Library</title>
        <meta name="description" content="React/Next TypeScript Components" />
      </Head>
      <Container pt={6} maxW={"container.xl"}>
        <ShowcaseItems />
      </Container>
      <Footer />
      <Box
        position="absolute"
        right={8}
        top={8}
        cursor="pointer"
        onClick={toggleColorMode}
      >
        <IconMoonStars />
      </Box>
    </>
  );
}
