import React from "react";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <Link isExternal href="https://github.com/mathewbushuru/component-library">
      <Flex
        position="fixed"
        bottom={0}
        bg="teal"
        w="full"
        h={12}
        justify="center"
        align="center"
        fontWeight={700}
        color="gray.50"
        gap={3}
        fontSize={16}
        cursor="pointer"
      >
        Mathew Bushuru
        <Icon as={IconBrandGithubFilled} />
      </Flex>
    </Link>
  );
};
export default Footer;
