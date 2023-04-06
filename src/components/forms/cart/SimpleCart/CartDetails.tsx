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
  useBreakpointValue,
} from "@chakra-ui/react";

type CartDetailsProps = {};

const CartDetails: React.FC<CartDetailsProps> = () => {
  const variableColSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="xl" fontWeight={700}>
          Cart details
        </Heading>
        <Text>
          {" "}
          If you already have an account, click{" "}
          <Button variant="link">here</Button> to log in
        </Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={variableColSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={variableColSpan}>
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
        <GridItem colSpan={variableColSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Doeville" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={variableColSpan}>
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
          <Checkbox defaultChecked>
            Ship to billing address
          </Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default CartDetails;
