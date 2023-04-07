import { FC } from "react";
import { useColorMode, Box, Icon } from "@chakra-ui/react";
import { IconSun, IconMoonStars, IconCircleFilled } from "@tabler/icons-react";

interface ColorSchemeToggleProps {}

const ColorSchemeToggle: FC<ColorSchemeToggleProps> = ({}) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      borderWidth="1px"
      rounded="full"
      px={2}
      py={1}
      bg="gray.100"
      cursor="pointer"
      display="flex"
      alignItems="center"
      gap={3}
      onClick={toggleColorMode}
    >
      {colorMode === "dark" ? (
        <Icon color="teal" fontSize="2xl" as={IconSun} />
      ) : (
        <Icon color="teal" fontSize="2xl" as={IconCircleFilled} />
      )}

      {colorMode === "light" ? (
        <Icon color="teal" fontSize="2xl" as={IconMoonStars} />
      ) : (
        <Icon color="teal" fontSize="2xl" as={IconCircleFilled} />
      )}
    </Box>
  );
};

export default ColorSchemeToggle;
