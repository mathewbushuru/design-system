import { FC } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  return (
    <Grid
      m={12}
      h="200px"
      border="1px solid gray"
      templateColumns="repeat(5,1fr)"
      templateRows="repeat(2,1fr)"
      gap={4}
    >
      <GridItem bg="tomato" rowSpan={2} colSpan={1} />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem bg="tomato" colStart={3} colEnd={6} />
    </Grid>
  );
};

export default PlayGround;
