import { FC } from "react";
import { Flex, Heading } from "@chakra-ui/react";

import AirbnbCard from "@/components/cards/AirbnbCard";

const properties = [
  {
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Shawnigan Lake, Canada",
    beds: 3,
    baths: 2,
    title: "Shawnigan Lake, Canada",
    formattedPrice: "3640.00",
    reviewCount: 25,
    rating: 4,
  },
  {
    imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Lopez Island, Washington",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 5,
  },
  {
    imageUrl: "https://images.pexels.com/photos/16076910/pexels-photo-16076910.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Stanley, Idaho, US",
    formattedPrice: "$3400.00",
    reviewCount: 59,
    rating: 3,
  },
];

interface AirbnbCardProps {}

const AirbnbCardPage: FC<AirbnbCardProps> = ({}) => {
  return (
    <Flex minH="100vh" py={10} px={4} direction="column" gap={4} align="center">
      <Heading color="brand.500"> AirbnbCard</Heading>

      {properties.map((property) => (
        <AirbnbCard {...property} />
      ))}
    </Flex>
  );
};

export default AirbnbCardPage;
