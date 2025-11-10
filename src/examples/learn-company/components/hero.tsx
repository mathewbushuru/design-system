import Button from "@/components/primitives/button";

import useTheme from "@/hooks/use-theme";

export default function Hero() {
  const { version } = useTheme();

  const imgSrc =
    version === "v1"
      ? "https://images.pexels.com/photos/7195437/pexels-photo-7195437.jpeg?auto=compress&cs=tinysrgb&w=320&dpr=2"
      : "https://images.pexels.com/photos/5908728/pexels-photo-5908728.jpeg?auto=compress&cs=tinysrgb&w=480&dpr=2";

  return (
    <div className="p-4 lg:p-8">
      <div className="mx-auto flex max-w-(--breakpoint-xl) items-center">
        {/* Hero left  */}
        <div className="flex-1">
          <h1 className="my-2 px-2 text-center text-xl leading-9 font-semibold sm:my-4 sm:text-2xl">
            Discover the power of generative AI
          </h1>
          <p className="text-muted-foreground my-6 px-4 text-center leading-6 font-light lg:my-0">
            Learn in-demand skills and unlock a world of innovation, problem
            solving, and creativity from industry leaders IBM, Google Cloud, and
            more. Save $200 on your first year premium subscription and unlock
            thousands of industry-grade courses for one all-inclusive price.
          </p>
          <div className="my-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <Button>Save now</Button>
            <Button variant="outline" className="bg-popover">
              Get 50% off Learn for teams pricing{" "}
            </Button>
          </div>
        </div>

        {/* Hero right  */}
        <div className="hidden lg:block lg:flex-1">
          <img
            src={imgSrc}
            alt="woman-in-teal-uniform-wearing-eyeglasses-and-headphones-while-looking-at-the-laptop"
            className="mx-auto w-80 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
