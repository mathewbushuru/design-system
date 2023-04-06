import { FC } from "react";
import { Container, Box } from "@chakra-ui/react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  return (
    <>
      <Box bg="tomato" p={4} color="white">This is the box</Box>
    </>
  );
};

export default PlayGround;
