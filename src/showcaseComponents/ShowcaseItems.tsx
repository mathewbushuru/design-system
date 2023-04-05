import React from "react";

import { UnorderedList } from "@chakra-ui/react";
import ShowcaseItem from "./ShowcaseItem";

type ShowcaseItemsProps = {};

const ShowcaseItems: React.FC<ShowcaseItemsProps> = () => {
  return (
    <UnorderedList spacing={6} mt={3}>
      <ShowcaseItem
        componentName="SimpleCart"
        mobileResponsive={true}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="SimpleLogin"
        mobileResponsive={true}
        darkModeToggle={false}
      />
    </UnorderedList>
  );
};
export default ShowcaseItems;
