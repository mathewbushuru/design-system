import {
  Box,
  useDisclosure
} from "@chakra-ui/react";
import { FC } from "react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box m={{ base: 4, md: 8 }}>
       
    </Box>
  );
};

export default PlayGround;
