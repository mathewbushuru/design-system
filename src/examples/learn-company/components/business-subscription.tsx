import { ExternalLink } from "lucide-react";

import Button from "@/components/primitives/button";

import PlSvg from "@/assets/pl-svg";
import MlbSvg from "@/assets/mlb-svg";
import NhlSvg from "@/assets/nhl-svg";
import NbaSvg from "@/assets/nba-svg";
import F1Svg from "@/assets/f1-svg";
import FifaSvg from "@/assets/fifa-logo";
import VodafoneSvg from "@/assets/vodafone-svg";
import BentleySvg from "@/assets/bentley-svg";
import SnowflakeSvg from "@/assets/snowflake-svg";

export default function BusinessSubscription() {
  return (
    <div className="bg-muted p-4 lg:p-8">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 lg:flex-row">
        <div className="mx-auto max-w-lg lg:flex-1">
          <h1 className="mb-4 mt-8 px-2 text-center text-2xl sm:mb-6 sm:text-left">
            The ideal solution for your business
          </h1>
          <p className="mb-4 px-2 text-center text-foreground/80 sm:mb-6 sm:text-left">
            Get the world-class learning and development chosen by top teams
            across the globe. All on Learn for Business.
          </p>
          <Button size="lg" className="mb-4 w-full sm:mb-6">
            Discover Learn for Business
          </Button>
          <p className="text-center text-foreground/80 sm:text-left">
            Upskill a small team?{" "}
            <span className="inline-flex cursor-pointer text-link underline underline-offset-2">
              Check out Learn for Teams{" "}
              <ExternalLink className="my-auto ml-1 h-5 w-4 stroke-2" />
            </span>
          </p>
        </div>

        <div className="lg:flex-1">
          <div className="mx-auto  mb-8 grid max-w-xs grid-cols-3 items-center justify-items-center gap-x-8 gap-y-8 sm:gap-x-12 sm:gap-y-12">
            <PlSvg className="h-10 sm:h-12" />
            <MlbSvg className="h-10 sm:h-12" />
            <NhlSvg className="h-10 sm:h-12" />
            <NbaSvg className="h-10 sm:h-12" />
            <F1Svg className="h-12 sm:h-14" />
            <FifaSvg className="h-10 sm:h-12" />
            <VodafoneSvg className="h-8 sm:h-10" />
            <BentleySvg className="h-12 sm:h-12" />
            <SnowflakeSvg className="h-8 sm:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
