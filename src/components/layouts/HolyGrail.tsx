import { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

interface HolyGrailProps {}

const HolyGrail: FC<HolyGrailProps> = ({}) => {
  return (
    <Grid
      p={2}
      minH="100vh"
      color="blackAlpha.900"
      templateAreas={`
        "header header header"
        "nav main side"
        "nav footer footer"
        `}
      templateColumns="200px 1fr 175px"
      templateRows="50px 1fr 30px"
      gap={1}
    >
      <GridItem bg="brand.500" area="header">
        Header
      </GridItem>
      <GridItem bg="brand.200" area="nav">
        Nav
      </GridItem>
      <GridItem bg="brand.50" area="main">
        Main
      </GridItem>
      <GridItem bg="brand.100" area="side">
        Side
      </GridItem>
      <GridItem bg="brand.500" area="footer">
        Footer
      </GridItem>
    </Grid>
  );
};

export default HolyGrail;
