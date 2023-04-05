import React from "react";
import { ListItem, ListIcon, Link } from "@chakra-ui/react";
import {
  IconMoonStars,
  IconDeviceMobileCode,
  IconExternalLink,
} from "@tabler/icons-react";

type ShowcaseItemProps = {
  componentName: string;
  mobileResponsive: true | false;
  darkModeToggle: true | false;
};

const ShowcaseItem: React.FC<ShowcaseItemProps> = ({
  componentName,
  mobileResponsive,
  darkModeToggle,
}) => {
  return (
    <ListItem fontSize={20} fontWeight={600} cursor="pointer">
      <Link href={`/showcase/${componentName}`} isExternal>
        {componentName}{" "}
        {darkModeToggle && <ListIcon as={IconMoonStars} color="teal" />}
        {mobileResponsive && (
          <ListIcon as={IconDeviceMobileCode} color="teal" />
        )}
        <ListIcon as={IconExternalLink} />
      </Link>
    </ListItem>
  );
};
export default ShowcaseItem;
