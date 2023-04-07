import {
  Box,
  IconButton,
  useDisclosure,
  Text,
  Input,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Icon,
  Heading,
  List,
  ListItem,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { IconMenu2, IconBrandTabler } from "@tabler/icons-react";
import { FC, useRef } from "react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Box m={{ base: 4, md: 8 }} display="flex" justifyContent="flex-end">
      <IconButton
        aria-label="open nav"
        as={IconMenu2}
        variant="outline"
        size="sm"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display="flex" alignItems="center" gap={1}>
            <Icon as={IconBrandTabler} fontSize="4xl" color="brand.500" />
            <Heading size="md" color="brand.500">
              Logo
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Input type="search" placeholder="Search" variant="outline" />
            <List spacing={3} mt="8" ml="3">
              <VStack alignItems="start" divider={<StackDivider/>}>
                <ListItem>
                  <Text>Home</Text>
                </ListItem>
                <ListItem>
                  <Text>About us</Text>
                </ListItem>
                <ListItem>
                  <Text>Our team</Text>
                </ListItem>
                <ListItem>
                  <Text>Careers</Text>
                </ListItem>
                <ListItem>
                  <Text>Privacy</Text>
                </ListItem>
              </VStack>
            </List>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Sign up
            </Button>
            <Button>Log in</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default PlayGround;
