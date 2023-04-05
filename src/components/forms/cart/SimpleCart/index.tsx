import React from "react";
import { Container, Flex, Box, useColorMode } from "@chakra-ui/react";
import { IconMoonStars } from "@tabler/icons-react";

import CartDetails from "./CartDetails";
import CartSummary from "./CartSummary";

type SimpleCartProps = {};

const SimpleCart: React.FC<SimpleCartProps> = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" m="0 auto">
      <Flex h="100vh" py={20} gap={6} position="relative">
        <CartDetails />
        <CartSummary />
        <Box position="absolute" right={0} top={8} cursor="pointer" onClick={toggleColorMode}>
          <IconMoonStars />
        </Box>
      </Flex>
    </Container>
  );
};
export default SimpleCart;
