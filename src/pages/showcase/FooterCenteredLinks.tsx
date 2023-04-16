import { FC } from "react";

import FooterCenteredLinks from "@/components/footers/FooterCenteredLinks";

interface HeroImageReviewsPageProps {}

const FooterCenteredLinksPage: FC<HeroImageReviewsPageProps> = ({}) => {
  return (
    <div className="">
      <div className="bg-slate-200 min-h-screen">Content</div>
      <FooterCenteredLinks />
    </div>
  );
};

export default FooterCenteredLinksPage;
