import React from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";

type SimpleLoginProps = {};

const SimpleLogin: React.FC<SimpleLoginProps> = () => {
  return (
    <Flex h="100vh" bg="teal" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.100" p={12} rounded={6}>
        <Heading mb={6} textAlign="center" color="brand.primary" fontWeight={700}>
          Login
        </Heading>
        <Input
          placeholder="mathew@mathew.com"
          variant="outline"
          mb={3}
          p="4px 12px"
          type="email"
          rounded={6}
        />
        <Input
          placeholder="password"
          variant="outline"
          mb={6}
          p="8px 20px"
          rounded={6}
          type="password"
        />
        <Button bg="teal" color="gray.100" colorScheme="teal">Login</Button>
      </Flex>
    </Flex>
  );
};
export default SimpleLogin;
