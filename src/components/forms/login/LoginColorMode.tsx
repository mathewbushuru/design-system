import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type LoginColorModeProps = {};

const LoginColorMode: React.FC<LoginColorModeProps> = () => {
  const { toggleColorMode } = useColorMode();

  const bgBackground = useColorModeValue("blue.50", "gray.700");
  const formBackground = useColorModeValue("blue.100", "blue.900");
  const primaryColor = useColorModeValue("blue.900", "blue.100");
  const btnColor = useColorModeValue("blue", "gray");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center" bg={bgBackground}>
      <Flex direction="column" bg={formBackground} p={12} rounded={6}>
        <Heading
          mb={6}
          textAlign="center"
          color={primaryColor}
          fontWeight={700}
          fontSize={18}
        >
          Log in
        </Heading>
        <Input
          placeholder="mathew@mathew.com"
          variant="filled"
          mb={3}
          p="8px 20px"
          type="email"
          rounded={6}
          bg={bgBackground}
        />
        <Input
          placeholder="password"
          variant="filled"
          mb={6}
          p="8px 20px"
          rounded={6}
          type="password"
          bg={bgBackground}
        />
        <Button colorScheme={btnColor} mb={6}>
          Log in
        </Button>
        <Button colorScheme={btnColor} onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </Flex>
    </Flex>
  );
};
export default LoginColorMode;
