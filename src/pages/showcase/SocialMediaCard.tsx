import { FC } from "react";
import { Box, Center, useColorMode } from "@chakra-ui/react";

import SocialMediaCard from "@/components/cards/SocialMediaCard";
import { IconMoonStars } from "@tabler/icons-react";

interface SocialMediaCardPageProps {}

const SocialMediaCardPage: FC<SocialMediaCardPageProps> = ({}) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Center padding={{ base: 4, md: 12 }}>
        <SocialMediaCard />
      </Center>
      <Box
        position="absolute"
        right={{ base: 2, md: 8 }}
        top={{ base: 2, md: 8 }}
        cursor="pointer"
        onClick={toggleColorMode}
      >
        <IconMoonStars />
      </Box>
    </>
  );
};

export default SocialMediaCardPage;
