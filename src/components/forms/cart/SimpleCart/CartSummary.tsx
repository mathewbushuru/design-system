import React from "react";
import { VStack } from "@chakra-ui/react";

type CartSummaryProps = {};

const CartSummary: React.FC<CartSummaryProps> = () => {
  return (
    <VStack
      bg="gray.50"
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
    >
      Cart details
    </VStack>
  );
};
export default CartSummary;
