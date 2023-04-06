import { FC } from "react";
import { Badge, Box, Image, Icon } from "@chakra-ui/react";
import { IconStarFilled } from "@tabler/icons-react";

interface AirbnbCardProps {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}

const AirbnbCard: FC<AirbnbCardProps> = ({
  imageUrl,
  imageAlt,
  beds,
  baths,
  title,
  formattedPrice,
  reviewCount,
  rating,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />

      <Box p={6}>
        <Box display="flex" alignItems="center">
          <Badge borderRadius="full" px={2} colorScheme="brand">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml={2}
          >
            {beds} beds &bull; {baths} baths
          </Box>
        </Box>

        <Box
          mt={1}
          fontWeight="semibold"
          lineHeight="tight"
          as="h4"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box>
          {formattedPrice}
          <Box color="gray.600" fontSize="sm" as="span">
            /wk
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon
                as={IconStarFilled}
                color={i < rating ? "brand.500" : "gray.300"}
                key={i}
              />
            ))}
          <Box as="span" ml={2} color="gray.600" fontSize="sm">
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AirbnbCard;
