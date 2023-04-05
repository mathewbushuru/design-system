import React from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";

type SimpleLoginProps = {};

const SimpleLogin: React.FC<SimpleLoginProps> = () => {
  return (
    <Flex h="100vh" bg="teal" alignItems="center" justifyContent="center">
      <Flex direction="column" bg="gray.100" p={12} rounded={6}>
        <Heading mb={6} textAlign="center" color="teal" fontWeight={700}>
          Log in
        </Heading>
        <Input
          placeholder="mathew@mathew.com"
          variant="filled"
          mb={3}
          p="8px 20px"
          type="email"
          rounded={6}
        />
        <Input
          placeholder="password"
          variant="filled"
          mb={6}
          p="8px 20px"
          rounded={6}
          type="password"
        />
        <Button colorScheme="teal">Log in</Button>
      </Flex>
    </Flex>
  );
};
export default SimpleLogin;
