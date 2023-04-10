import { FC } from "react";
import NavbarDividedVertical from "@/components/navbars/NavbarDividedVertical";
import { IconMoonStars } from "@tabler/icons-react";
import { Box, useColorMode } from "@chakra-ui/react";
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconCalendarStats,
    IconUser,
    IconSettings,
  } from "@tabler/icons-react";


const navMockItems = [
    { icon: <IconHome2/>, label: "Home" },
    { icon: <IconGauge/>, label: "Dashboard" },
    { icon: <IconDeviceDesktopAnalytics/>, label: "Analytics" },
    { icon: <IconCalendarStats/>, label: "Releases" },
    { icon: <IconUser/>, label: "Account" },
    { icon: <IconFingerprint/>, label: "Security" },
    { icon: <IconSettings/>, label: "Settings" },
  ];

interface NavbarDividedVerticalPageProps {}

const NavbarDividedVerticalPage: FC<NavbarDividedVerticalPageProps> = ({}) => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <NavbarDividedVertical navItems={navMockItems} />
      <Box
        position="absolute"
        right={{ base: 2, md: 8 }}
        top={{ base: 1, md: 4 }}
        cursor="pointer"
        onClick={toggleColorMode}
      >
        <IconMoonStars />
      </Box>
    </>
  );
};

export default NavbarDividedVerticalPage;
