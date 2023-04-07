import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  VStack,
  Flex,
  Avatar,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { IconDots, IconDotsVertical, IconFileLike, IconMail, IconShare, IconShare2, IconShare3, IconThumbUp } from "@tabler/icons-react";
import { FC } from "react";

interface PlayGroundProps {}

const PlayGround: FC<PlayGroundProps> = ({}) => {
  return (
    <Box m={{ base: 4, md: 12 }}>
      <VStack spacing={10} maxW="container.md" mx="auto">
        <Card maxW="sm" mx="auto">
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt={6} spacing={3}>
              <Heading size="md">Living Room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup>
              <Button> Buy Now</Button>
              <Button variant="ghost"> Add to cart</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card direction={{ base: "column", sm: "row" }} overflow="hidden">
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>
              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        <Card overflow="hidden">
          <CardHeader>
            <Flex gap={10}>
              <Flex align="center" gap="4" wrap="wrap" flex={1}>
                <Avatar
                  name="Mathew Bushuru"
                  src="https://bit.ly/sage-adebayo"
                />
                <Box>
                  <Heading size="sm">Mathew Bushuru</Heading>
                  <Text>Soma Co-founder</Text>
                </Box>
              </Flex>

              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<IconDotsVertical />}
              />
            </Flex>
          </CardHeader>

          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />
          <CardFooter justify="space-between" flexWrap="wrap">
            <Button variant="ghost" leftIcon={<IconThumbUp/>}>Like</Button>
            <Button variant="ghost" leftIcon={<IconMail/>}>Comment</Button>
            <Button variant="ghost" leftIcon={<IconShare3/>}>Share</Button>
          </CardFooter>
        </Card>
      </VStack>
    </Box>
  );
};

export default PlayGround;
