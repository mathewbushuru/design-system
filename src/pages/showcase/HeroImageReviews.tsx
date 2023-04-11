import { FC } from "react";

import HeroImageReviews from "@/components/heros/HeroImageReviews";

interface HeroImageReviewsPageProps {}

const HeroImageReviewsPage: FC<HeroImageReviewsPageProps> = ({}) => {
  return (
    <div className="m-4 sm:m-8">
      <HeroImageReviews />
    </div>
  );
};

export default HeroImageReviewsPage;
