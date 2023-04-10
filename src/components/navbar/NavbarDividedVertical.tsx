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

type NavItemType = { icon: any; label: string };

const NavbarDividedVertical = ({ navItems }: { navItems: NavItemType[] }) => {
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

function Aside({ navItems }: { navItems: NavItemType[] }) {
  return (
    <Flex direction="column" align="center" gap="4" mt="5">
      <IconButton
        variant="outline"
        icon={<IconBrandTabler />}
        size="md"
        aria-label="nav-home"
      />
      <Divider />

      {navItems.map((navItem: NavItemType, index: number) => {
        //todo - implement active link solid icon
        return (
          <IconButton
            variant={navItem.label === "Analytics" ? "solid" : "ghost"}
            icon={navItem.icon}
            aria-label={navItem.label}
            key={navItem.label}
          />
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
      <Button
        w="full"
        variant="solid"
        rounded="none"
        justifyContent="start"
        key="dashboard"
      >
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
