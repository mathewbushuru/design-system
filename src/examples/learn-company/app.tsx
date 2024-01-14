import Navbar from "@/examples/learn-company/components/navbar";

import Button from "@/components/primitives/button";

import AmdSvg from "@/assets/amd-svg";
import AwsSvg from "@/assets/aws-svg";
import GoogleSvg from "@/assets/google-svg";
import IbmSvg from "@/assets/ibm-svg";
import KaggleSvg from "@/assets/kaggle-svg";
import FacebookSvg from "@/assets/facebook-svg";
import AppleSvg from "@/assets/apple-svg";
import IntelSvg from "@/assets/intel-svg";

function LearnCompany() {
  return (
    <div className="bg-popover pb-12 lg:pb-24">
      <Navbar />

      {/* Hero */}
      <div className="flex items-center p-4 lg:p-8">
        {/* Hero left  */}
        <div className="flex-1">
          <h1 className="my-2 px-2 text-center text-xl font-semibold leading-9 sm:my-4 sm:text-2xl">
            Discover the power of generative AI
          </h1>
          <p className="px-4 text-center font-light leading-6 text-muted-foreground">
            Learn in-demand skills and unlock a world of innovation, problem
            solving, and creativity from industry leaders IBM, Google Cloud, and
            more. Save $200 on your first year premium subscription and unlock
            thousands of industry-grade courses for one all-inclusive price.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <Button>Save now</Button>
            <Button variant="outline" className="bg-popover">
              Get 50% off Learn for teams pricing{" "}
            </Button>
          </div>
        </div>

        {/* Hero right  */}
        <div className="hidden lg:block lg:flex-1">
          <img
            src="https://images.pexels.com/photos/7195437/pexels-photo-7195437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="woman-in-teal-uniform-wearing-eyeglasses-and-headphones-while-looking-at-the-laptop"
            className="mx-auto w-80 rounded-lg"
          />
        </div>
      </div>

      <div className="bg-muted p-4 text-foreground/80 lg:p-8">
        <h1 className="mb-4 mt-8 px-4 text-center text-2xl">
          We collaborate with{" "}
          <span className="text-primary">
            300+ leading universities and companies
          </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-5 px-2 mb-8 sm:gap-12">
          <AwsSvg className="h-10 " />
          <AmdSvg className="h-14 " />
          <FacebookSvg className="h-7 " />
          <IbmSvg className="h-16 " />
          <GoogleSvg className="h-7 " />
          <KaggleSvg className="h-20 " />
          <AppleSvg className="h-8 " />
          <IntelSvg className="h-16 " />
        </div>
      </div>
    </div>
  );
}

export default LearnCompany;
