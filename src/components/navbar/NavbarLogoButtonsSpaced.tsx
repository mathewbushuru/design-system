import { FC } from "react";
import {
  Flex,
  Spacer,
  Center,
  Icon,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { IconBrandTabler as LogoIcon } from "@tabler/icons-react";

interface NavbarLogoBtnsProps {}

const NavbarLogoBtns: FC<NavbarLogoBtnsProps> = ({}) => {
  return (
    <Flex minW="max-content" align="center" px={4} py={1} boxShadow="0 4px 2px -2px #CBD5E0">
      <Center p={2}>
        <Icon as={LogoIcon} fontSize="4xl" color="brand.500" />
      </Center>
      <Spacer />
      <ButtonGroup>
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default NavbarLogoBtns;
