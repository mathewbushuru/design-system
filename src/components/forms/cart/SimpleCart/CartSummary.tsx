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
  useColorModeValue,
} from "@chakra-ui/react";

type CartSummaryProps = {};

const CartSummary: React.FC<CartSummaryProps> = () => {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.50");

  return (
    <VStack
      bg={bgColor}
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      rounded={6}
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
      <HStack
        spacing={6}
        w={{ base: "100%", md: "80%" }}
        justify="space-between"
        p={{ base: 0, md: "0 32px" }}
      >
        <AspectRatio
          ratio={1}
          width={{ base: "full", md: 24 }}
          display={{ base: "none", md: "unset" }}
        >
          <Image src="https://unsplash.it/300/300" rounded={6} />
        </AspectRatio>
        <VStack spacing={0} align="left">
          <Text color={textColor} fontWeight={600}>
            Random Item
          </Text>
          <Text color="gray.400" fontSize="14px">
            Code: NDCSPSMCDXS
          </Text>
        </VStack>
        <Text color={textColor}>$99.99</Text>
      </HStack>
      <VStack w="full" alignItems="stretch">
        <HStack justifyContent="space-between" p={{ base: 0, md: "0 32px" }}>
          <Text color="gray.500">Subtotal</Text>
          <Text color={textColor}>$99.99</Text>
        </HStack>
        <HStack justifyContent="space-between" p={{ base: 0, md: "0 32px" }}>
          <Text color="gray.500">Tax</Text>
          <Text color={textColor}>${(0.12 * 99.99).toFixed(2)}</Text>
        </HStack>
        <HStack justifyContent="space-between" p={{ base: 0, md: "0 32px" }}>
          <Text color="gray.500">Shipping</Text>
          <Text color={textColor}>${(0.03 * 99.99).toFixed(2)}</Text>
        </HStack>
        <StackDivider />
        <Divider />
        <StackDivider />
        <HStack justifyContent="space-between" p={{ base: 0, md: "0 32px" }}>
          <Text color={textColor}>Total</Text>
          <Text color={textColor} fontWeight={600}>
            ${(1.15 * 99.99).toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};
export default CartSummary;
