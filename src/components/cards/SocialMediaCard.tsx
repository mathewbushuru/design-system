import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  IconButton,
  CardBody,
  CardFooter,
  Button,
  Box,
  Text,
  Image
} from "@chakra-ui/react";
import {
  IconDotsVertical,
  IconThumbUp,
  IconMail,
  IconShare3,
} from "@tabler/icons-react";
import { FC } from "react";

interface SocialMediaCardProps {}

const SocialMediaCard: FC<SocialMediaCardProps> = ({}) => {
  return (
    <>
      <Card maxW="container.sm" overflow="hidden">
        <CardHeader>
          <Flex gap={10}>
            <Flex align="center" gap="4" wrap="wrap" flex={1}>
              <Avatar name="Mathew Bushuru" src="https://media.licdn.com/dms/image/C5603AQHX1QMfvjwVQw/profile-displayphoto-shrink_400_400/0/1627834950987?e=1686182400&v=beta&t=7M9HRKzAq_Xd5kFYaJFHpl2h9XXP8eX8qb002IDnV1U" />
              <Box>
                <Heading size="sm">Mathew Bushuru</Heading>
                <Text>Software developer</Text>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus eos neque, saepe ipsam quam nam beatae autem nisi iusto. Maxime quo incidunt molestias veritatis fuga repudiandae sequi quae aperiam.
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
          alt="Lions Gate Bridge Vancouver"
        />
        <CardFooter justify="space-between" flexWrap="wrap">
          <Button variant="ghost" leftIcon={<IconThumbUp />}>
            Like
          </Button>
          <Button variant="ghost" leftIcon={<IconMail />}>
            Comment
          </Button>
          <Button variant="ghost" leftIcon={<IconShare3 />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default SocialMediaCard;
