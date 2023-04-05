import Head from "next/head";
import { Container, UnorderedList, Flex, Icon } from "@chakra-ui/react";

import ShowcaseItems from "@/showcaseComponents/ShowcaseItems";
import Footer from "@/showcaseComponents/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mathew's Components Library</title>
        <meta name="description" content="React/Next TypeScript Components" />
      </Head>
      <Container pt={6} maxW={"container.xl"}>
        <ShowcaseItems/>
      </Container>
      <Footer />
    </>
  );
}
