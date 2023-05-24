import React from "react";
import {
  ListItem,
  ListIcon,
  Link,
  Image,
  Badge,
  Divider,
} from "@chakra-ui/react";
import {
  IconMoonStars,
  IconDeviceMobileCode,
  IconExternalLink,
} from "@tabler/icons-react";

interface ShowcaseItemProps {
  componentName: string;
  mobileResponsive: boolean;
  darkModeToggle: boolean;
  ui: string;
}

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  componentName,
  mobileResponsive,
  darkModeToggle,
  ui,
}) => {
  return (
    <>
      <ListItem
        fontSize={20}
        fontWeight={600}
        cursor="pointer"
        listStyleType="none"
        mb={10}
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <Link href={`/showcase/${componentName}`} isExternal>
          {componentName}{" "}
          {darkModeToggle && <ListIcon as={IconMoonStars} color="teal" />}
          {mobileResponsive && (
            <ListIcon as={IconDeviceMobileCode} color="teal" />
          )}
          <ListIcon as={IconExternalLink} />
        </Link>
        {ui === "TailwindCSS" && (
          <Badge variant="outline" colorScheme="teal" mt={1}>
            {ui}
          </Badge>
        )}
        <Image
          src={`/${componentName}.jpg`}
          mt={4}
          shadow="2xl"
          rounded="md"
          maxW={{ lg: "container.lg" }}
        />
      </ListItem>
      <Divider />
    </>
  );
};
export default ShowcaseItem;
