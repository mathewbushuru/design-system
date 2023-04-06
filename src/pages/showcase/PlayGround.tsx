import { FC } from "react";
import { Flex, Spacer, Box } from "@chakra-ui/react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  return (
    <Flex m={12}>
      <Box bg="red.400" p={4}>
        Box 1
      </Box>
      <Spacer/>
      <Box bg="green.400" p={4}>
        Box 2
      </Box>
    </Flex>
  );
};

export default PlayGround;
