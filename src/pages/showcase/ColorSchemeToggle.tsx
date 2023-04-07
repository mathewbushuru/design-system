import { FC } from "react";
import { Center } from "@chakra-ui/react";

import ColorSchemeToggle from "@/components/buttons/ColorSchemeToggle";

interface ColorSchemeTogglePageProps {}

const ColorSchemeTogglePage: FC<ColorSchemeTogglePageProps> = ({}) => {
  return (
    <Center m={12}>
      <ColorSchemeToggle />
    </Center>
  );
};

export default ColorSchemeTogglePage;
