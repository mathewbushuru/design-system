import Button from "@/components/primitives/button";

export default function Hero() {
  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center max-w-screen-xl mx-auto">
        {/* Hero left  */}
        <div className="flex-1">
          <h1 className="my-2 px-2 text-center text-xl font-semibold leading-9 sm:my-4 sm:text-2xl">
            Discover the power of generative AI
          </h1>
          <p className="px-4 text-center my-6 font-light leading-6 text-muted-foreground lg:my-0">
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
            src="https://images.pexels.com/photos/7195437/pexels-photo-7195437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="woman-in-teal-uniform-wearing-eyeglasses-and-headphones-while-looking-at-the-laptop"
            className="mx-auto w-80 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
