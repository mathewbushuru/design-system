import Button from "@/components/primitives/button";

export default function CallToAction() {
  return (
    <div className="mx-auto mb-4 mt-8 flex max-w-screen-xl flex-col items-center gap-8 p-4 sm:mt-10 sm:flex-row lg:p-8">
      <div className="flex flex-1 items-center justify-center">
        <img
          src="https://images.pexels.com/photos/6205749/pexels-photo-6205749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="young woman reading book on chair under bright lamp"
          className="shadow-xs lg:w-68 w-60 rounded-full"
        />
      </div>
      <div className="grid flex-1 justify-items-center gap-2 sm:justify-items-start">
        <h1 className=" px-4 text-center text-2xl sm:text-left">
          Take the next step toward your personal and professional goals with
          Learn.
        </h1>
        <p className="mb-4 mt-2 px-4 text-center text-foreground/80 sm:mb-6 sm:text-left">
          Join now to receive personalized recommendations from the full Learn
          catalog.
        </p>
        <Button size="lg" className="sm:ml-4">
          Join for free
        </Button>
      </div>
    </div>
  );
}
