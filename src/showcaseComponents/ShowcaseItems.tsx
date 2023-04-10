import React from "react";

import { UnorderedList } from "@chakra-ui/react";
import ShowcaseItem from "./ShowcaseItem";

type ShowcaseItemsProps = {};

const ShowcaseItems: React.FC<ShowcaseItemsProps> = () => {
  return (
    <UnorderedList spacing={6} mt={3}>
      <ShowcaseItem
        componentName="AirbnbCard"
        mobileResponsive={true}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="ColorSchemeToggle"
        mobileResponsive={true}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="HolyGrail"
        mobileResponsive={false}
        darkModeToggle={false}
      />

      <ShowcaseItem
        componentName="NavbarDrawer"
        mobileResponsive={true}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="NavbarDividedHorizontal"
        mobileResponsive={false}
        darkModeToggle={false}
      />

      <ShowcaseItem
        componentName="NavbarDividedVertical"
        mobileResponsive={false}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="NavbarLogoBtns"
        mobileResponsive={false}
        darkModeToggle={false}
      />

      <ShowcaseItem
        componentName="SimpleCart"
        mobileResponsive={true}
        darkModeToggle={true}
      />

      <ShowcaseItem
        componentName="SocialMediaCard"
        mobileResponsive={true}
        darkModeToggle={true}
      />
    </UnorderedList>
  );
};
export default ShowcaseItems;
