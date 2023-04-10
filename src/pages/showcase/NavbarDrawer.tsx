import { FC } from "react";
import { Box, Center, useColorMode } from "@chakra-ui/react";
import { IconMoonStars } from "@tabler/icons-react";

import NavbarDrawer from "@/components/navbars/NavbarDrawer";

interface NavbarDrawerPageProps {}

const NavbarDrawerPage: FC<NavbarDrawerPageProps> = ({}) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <NavbarDrawer />
      <Box
        position="absolute"
        left={{ base: 2, md: 8 }}
        top={{ base: 1, md: 0 }}
        cursor="pointer"
        onClick={toggleColorMode}
      >
        <IconMoonStars />
      </Box>
    </>
  );
};

export default NavbarDrawerPage;
