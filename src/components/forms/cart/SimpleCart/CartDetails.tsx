import React from "react";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

type CartDetailsProps = {};

const CartDetails: React.FC<CartDetailsProps> = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading fontWeight={700}>Cart details</Heading>
        <Text> If you already have an account, click here to log in</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="99 Lost Way Blvd" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Doeville" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select name="country">
              <option value="ca"> Canada</option>
              <option value="us"> United States of America</option>
              <option value="mx">Mexico</option>
              <option value="br">Brazil</option>
              <option value="br">Kenya</option>
              <option value="br">South Africa</option>
              <option value="br">Finland</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked colorScheme="teal">Ship to billing address</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full" colorScheme="teal">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default CartDetails;
