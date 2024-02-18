export default function CharitySection() {
  return (
    <>
      {/* Investing in communities  */}
      <div className="flex flex-col px-3 py-12 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:gap-3 lg:py-24">
        {/* Title  */}
        <div className="lg:flex-1 lg:pl-12">
          <h5 className="mb-4 font-serif text-xl tracking-wide">
            Investing in Justice and Our Communities
          </h5>
          <div className="mb-5 h-px max-w-12 bg-foreground dark:bg-muted-foreground sm:bg-foreground/55" />
        </div>

        {/* Content  */}
        <div className="lg:flex-[5] lg:pr-12">
          <p className="antialiased sm:text-lg">
            We are committed to advancing the communities in which we live and
            work, and we dedicate substantial energy, talent and resources to
            meaningful causes and initiatives that reflect our values and
            vision. For us, it’s simple. We have a responsibility to make a
            difference and to help our communities succeed.
          </p>
        </div>
      </div>

      {/* Charity  */}
      <div className="flex flex-col gap-4 px-3 pb-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12 sm:px-6 sm:pb-20">
        <div className="group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[43%] lg:w-[29%]">
          <p className="font-serif text-2xl text-primary">Pro Bono</p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            We are dedicated to providing free legal services to clients who
            cannot afford counsel
          </p>
        </div>

        <div className="group group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[43%] lg:w-[29%]">
          <p className="font-serif text-2xl text-primary">Charitable Giving</p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            We proudly support nonprofits and law-related organizations with
            generous financial contributions
          </p>
        </div>

        <div className="group max-w-md cursor-pointer border border-primary px-8 py-20 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[43%] lg:w-[29%]">
          <p className="font-serif text-2xl text-primary">Sustainability</p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            We are committed to reducing our environment footprint, creating
            efficient service for clients and a vibrant work atmosphere for
            employees
          </p>
        </div>
      </div>
    </>
  );
}
