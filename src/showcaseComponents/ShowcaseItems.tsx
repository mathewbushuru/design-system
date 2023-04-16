import React from "react";

import { UnorderedList } from "@chakra-ui/react";
import ShowcaseItem from "./ShowcaseItem";

type ShowcaseItemsProps = {};

const ShowcaseItems: React.FC<ShowcaseItemsProps> = () => {
  return (
    <UnorderedList spacing={6} mt={3} pb={10}>
      <ShowcaseItem
        componentName="AirbnbCard"
        mobileResponsive={true}
        darkModeToggle={true}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="ColorSchemeToggle"
        mobileResponsive={true}
        darkModeToggle={true}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="FooterCenteredLinks"
        mobileResponsive={true}
        darkModeToggle={false}
        ui="TailwindCSS"
      />

      <ShowcaseItem
        componentName="HeroImageReviews"
        mobileResponsive={true}
        darkModeToggle={false}
        ui="TailwindCSS"
      />

      <ShowcaseItem
        componentName="HolyGrail"
        mobileResponsive={false}
        darkModeToggle={false}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="NavbarDrawer"
        mobileResponsive={true}
        darkModeToggle={true}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="NavbarDividedHorizontal"
        mobileResponsive={false}
        darkModeToggle={false}
        ui="TailwindCSS"
      />

      <ShowcaseItem
        componentName="NavbarDividedVertical"
        mobileResponsive={false}
        darkModeToggle={true}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="NavbarLogoBtns"
        mobileResponsive={false}
        darkModeToggle={false}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="SimpleCart"
        mobileResponsive={true}
        darkModeToggle={true}
        ui="ChakraUI"
      />

      <ShowcaseItem
        componentName="SocialMediaCard"
        mobileResponsive={true}
        darkModeToggle={true}
        ui="ChakraUI"
      />
    </UnorderedList>
  );
};
export default ShowcaseItems;
