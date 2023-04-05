import React from "react";
import { Container, Flex } from "@chakra-ui/react";

import CartDetails from "./CartDetails";
import CartSummary from "./CartSummary";

type SimpleCartProps = {};

const SimpleCart: React.FC<SimpleCartProps> = () => {
  return (
    <Container maxW="container.xl" m="0 auto">
      <Flex h="100vh" py={20} gap={6}>
         <CartDetails/>
         <CartSummary/>
      </Flex>
    </Container>
  );
};
export default SimpleCart;
