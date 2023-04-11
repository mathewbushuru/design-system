import { FC } from "react";
import {
  IconChevronRight,
  IconStarFilled,
  IconStarHalfFilled,
  IconBrandApple,
  IconBrandGooglePlay,
} from "@tabler/icons-react";

interface HeroImageReviewsProps {}

const HeroImageReviews: FC<HeroImageReviewsProps> = ({}) => {
  return (
    <>
      {/* Hero section  */}
      <div className="mx-auto max-w-7xl overflow-y-hidden px-4 sm:px-6 lg:px-8">
        {/* Grid  */}
        <div className=" grid gap-4 bg-white  md:grid-cols-2 md:gap-8 xl:gap-20">
          {/* Left grid column  */}
          <div className="flex flex-col justify-center sm:gap-3">
            <h1 className="block max-w-lg text-4xl font-bold text-gray-800 dark:text-white sm:text-4xl  lg:text-5xl lg:leading-tight">
              Start your journey with <span className="text-teal-600">us</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              Hand picked layouts and expertly crafted components, designed for
              any kind of website.
            </p>

            <div className="mt-7 grid w-full gap-3 sm:inline-flex">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-x-1 rounded-md border border-transparent bg-teal-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-1 lg:text-base"
              >
                Get started
                <IconChevronRight className="w-4" />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-x-1 rounded-md border border-teal-600 px-4 py-2 text-center text-sm font-medium  text-teal-600 ring-teal-600 transition hover:bg-teal-50 focus:outline-none focus:ring-2 lg:text-base"
              >
                Contact us
              </a>
            </div>

            <div className="  mt-6 grid grid-cols-2 gap-x-5 lg:mt-10">
              <div className="py-5">
                <div className="flex space-x-1  text-teal-600">
                  {Array(5)
                    .fill("star")
                    .map((_, index) => (
                      <IconStarFilled key={index} className="h-4 w-4" />
                    ))}
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.8</span> /5 - from 15k reviews
                </p>
                <div className="mt-3 flex items-center gap-x-1">
                  <IconBrandApple />
                  <span className="text-sm">App Store</span>
                </div>
              </div>

              <div className="py-5">
                <div className="flex space-x-1  text-teal-600">
                  {Array(4)
                    .fill("star")
                    .map((_, index) => (
                      <IconStarFilled key={index} className="h-4 w-4" />
                    ))}
                  <IconStarHalfFilled className="h-4 w-4" />
                </div>
                <p className="mt-3 text-sm text-gray-800">
                  <span className="font-bold">4.4</span> /5 - from 32k reviews
                </p>
                <div className="mt-3 flex items-center gap-x-1">
                  <IconBrandGooglePlay />
                  <span className="text-sm">Play Store</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right grid column  */}
          <div className="relative sm:ml-4 lg:pt-8">
            <img
              src="https://images.unsplash.com/photo-1565277441243-2be39689f95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Nairobi Skyline"
              className="w-full rounded-md"
            />

            <div className="absolute left-0 top-4">
              <ImageSvgEffect />
            </div>
            <div className="absolute bottom-4 left-0">
              <ImageSvgEffect />
            </div>
            <div className="absolute left-0 top-0 -translate-x-3/4">
              <ImageSvgEffect />
            </div>
            <div className="absolute top-0 left-0 -translate-x-3/4 translate-y-[585px]">
              <ImageSvgEffect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImageReviews;

function ImageSvgEffect() {
  return (
    <svg
      className="ml-auto h-auto w-2/3 text-white"
      width="630"
      height="451"
      viewBox="0 0 630 451"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="531" y="352" width="99" height="99" fill="currentColor" />
      <rect x="482" y="402" width="64" height="49" fill="currentColor" />
      <rect x="433" y="402" width="63" height="49" fill="currentColor" />
      <rect x="384" y="352" width="49" height="50" fill="currentColor" />
      <rect x="531" y="328" width="50" height="50" fill="currentColor" />
      <rect x="334" y="303" width="50" height="49" fill="currentColor" />
      <rect x="581" width="49" height="49" fill="currentColor" />
      <rect x="581" width="49" height="64" fill="currentColor" />
      <rect x="482" y="123" width="49" height="49" fill="currentColor" />
      <rect x="507" y="124" width="49" height="24" fill="currentColor" />
      <rect x="531" y="49" width="99" height="99" fill="currentColor" />
    </svg>
  );
}
