import { GraduationCap } from "lucide-react";

import Navbar from "@/examples/learn-company/components/navbar";

import Button from "@/components/primitives/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/primitives/card";

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
        <div className="mb-8 flex flex-wrap items-center justify-center gap-5 px-2 sm:gap-12">
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

      <div className="p-4 lg:p-8">
        <h3 className="my-4 text-center font-semibold text-link sm:text-left">
          Degree programs
        </h3>
        <p className="mb-4 text-center text-3xl leading-10 text-foreground/90 sm:text-left">
          Find a top degree that fits your life
        </p>
        <p className="mb-8 text-center text-lg font-light leading-6 text-foreground/90 sm:text-left">
          Breakthrough pricing on 100% online degrees from top universities
        </p>
        <div className="mb-8 flex flex-col gap-8 sm:flex-row">
          <Card className="max-w-xs cursor-pointer transition-transform duration-300 hover:scale-105">
            <CardHeader className="p-3">
              <img
                src="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Glass building near tree grove"
                className="mb-4 h-48 max-w-xs rounded-md object-cover"
              />
              <CardTitle>
                <span className="text-xl">University of London</span>
              </CardTitle>
              <CardDescription>
                <span className="">
                  Bachelor of Science in Computer Science
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3">
              <span className="flex items-center gap-1 text-sm font-light text-primary">
                <GraduationCap className="stroke-1" /> Earn a degree
              </span>
            </CardContent>
          </Card>

          <Card className="max-w-xs cursor-pointer transition-transform duration-300 hover:scale-105">
            <CardHeader className="p-3">
              <img
                src="https://images.unsplash.com/photo-1692776691970-39dc4edfd870?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A person walking in front of a building"
                className="mb-4 h-48 max-w-xs rounded-md object-cover"
              />
              <CardTitle>
                <span className="text-xl">University of British Columbia</span>
              </CardTitle>
              <CardDescription>
                <span className="">Master of Business Administration</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3">
              <span className="flex items-center gap-1 text-sm font-light text-primary">
                <GraduationCap className="stroke-1" /> Earn a degree
              </span>
            </CardContent>
          </Card>

          <Card className="max-w-xs cursor-pointer transition-transform duration-300 hover:scale-105 sm:hidden lg:block">
            <CardHeader className="p-3">
              <img
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People walking near paccar hall univeristy of washington during daytime"
                className="mb-4 h-48 max-w-xs rounded-md object-cover"
              />
              <CardTitle>
                <span className="text-xl">University of Washington</span>
              </CardTitle>
              <CardDescription>
                <span className="">
                  Bachelor of Science in Computer Science
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3">
              <span className="flex items-center gap-1 text-sm font-light text-primary">
                <GraduationCap className="stroke-1" /> Earn a degree
              </span>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button size="lg">Show 8 more</Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary bg-popover text-primary hover:text-primary"
          >
            View all
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LearnCompany;
