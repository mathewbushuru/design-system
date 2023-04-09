import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { IconBrandTabler } from "@tabler/icons-react";

const analyticsMockItems = [
  "Orders",
  "Clients",
  "Databases",
  "Budget",
  "Products",
  "Releases",
  "Incidents",
  "Pages",
  "Downtime",
  "Actions",
  "Reports",
];

interface NavbarDividedVerticalProps {
  navItems: any;
}

const NavbarDividedVertical: FC<NavbarDividedVerticalProps> = ({
  navItems,
}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <HStack w="full" h="100vh" alignItems="stretch" spacing="0">
        <Box
          w="20"
          borderRight="1px solid"
          borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
        >
          <Aside navItems={navItems} />
        </Box>
        <Box
          w="60"
          bg={colorMode === "light" ? "gray.100" : "gray.800"}
          borderRight="1px solid"
          borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
        >
          <MainNav items={analyticsMockItems} />
        </Box>
        <Box flexGrow="1">{/* Content  */}</Box>
      </HStack>
    </>
  );
};

function Aside({ navItems }: { navItems: any }) {
  return (
    <Flex direction="column" align="center" gap="4" mt="5">
      <IconButton
        variant="outline"
        icon={<IconBrandTabler />}
        size="md"
        aria-label="nav-home"
      />
      <Divider />

      {navItems.map((navItem: any) => {
        if (navItem.label === "Analytics") {
          return (
            <IconButton
              variant="solid"
              icon={navItem.icon}
              aria-label={navItem.label}
              key={navItem.label}
            />
          );
          //todo - implement active link instead of this
        }
        return (
          <>
            <IconButton
              variant="ghost"
              icon={navItem.icon}
              aria-label={navItem.label}
              key={navItem.label}
            />
          </>
        );
      })}
    </Flex>
  );
}

function MainNav({ items }: { items: any }) {
  return (
    <Flex direction="column" align="center" gap="0" mt="5">
      <Heading size="md" w="full" pl="4" pt="2" alignSelf="left">
        Analytics
      </Heading>
      <Divider mt="6" mb="4" />

      {/* todo : implement active link to replace this */}
      <Button w="full" variant="solid" rounded="none" justifyContent="start" key="dashboard">
        Dashboard
      </Button>

      {items.map((navItem: any) => (
        <Button
          w="full"
          variant="ghost"
          rounded="none"
          justifyContent="start"
          key={navItem}
        >
          {navItem}
        </Button>
      ))}
    </Flex>
  );
}

export default NavbarDividedVertical;
