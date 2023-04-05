import React from "react";
import {
  Heading,
  VStack,
  HStack,
  Text,
  Button,
  AspectRatio,
  Image,
  Divider,
  StackDivider,
} from "@chakra-ui/react";

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
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="lg" fontWeight={700}>
          Your Cart
        </Heading>
        <Text>
          Create <Button variant="link">a new account</Button> to get shipping
          updates to your email and 10% off your order.
        </Text>
      </VStack>
      <HStack spacing={6} w="80%" justify="space-between" p="0 32px">
        <AspectRatio ratio={1} width={24}>
          <Image src="https://unsplash.it/300/300" />
        </AspectRatio>
        <VStack spacing={0} align="left">
          <Text color="gray.700" fontWeight={600}>
            Random Item
          </Text>
          <Text color="gray.400" fontSize="14px">
            Code: NDCSPSMCDXS
          </Text>
        </VStack>
        <Text color="gray.700">$99.99</Text>
      </HStack>
      <VStack w="full" alignItems="stretch">
        <HStack justifyContent="space-between" p="0 32px">
          <Text color="gray.500">Subtotal</Text>
          <Text color="gray.700">$99.99</Text>
        </HStack>
        <HStack justifyContent="space-between" p="0 32px">
          <Text color="gray.500">Tax</Text>
          <Text color="gray.700">${(0.12 * 99.99).toFixed(2)}</Text>
        </HStack>
        <HStack justifyContent="space-between" p="0 32px">
          <Text color="gray.500">Shipping</Text>
          <Text color="gray.700">${(0.03 * 99.99).toFixed(2)}</Text>
        </HStack>
        <StackDivider />
        <Divider />
        <StackDivider />
        <HStack justifyContent="space-between" p="0 32px">
          <Text color="gray.700">Total</Text>
          <Text color="gray.700" fontWeight={600}>
            ${(1.15 * 99.99).toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
export default CartSummary;
