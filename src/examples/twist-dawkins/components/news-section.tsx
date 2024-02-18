export default function NewsSection() {
  return (
    <div className="flex flex-col bg-secondary/20 px-3 py-12 dark:bg-primary/5 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:gap-3 lg:py-24">
      {/* Title  */}
      <div className="lg:flex-1 lg:pl-12">
        <h5 className="mb-4 font-serif text-xl tracking-wide">
          News <br className="hidden lg:block" /> & Recognition
        </h5>
        <div className="mb-5 h-px max-w-12 bg-foreground dark:bg-muted-foreground sm:bg-foreground/55" />
      </div>

      {/* Content  */}
      {/* <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-3 sm:text-lg lg:flex-[5] lg:pr-12"> */}
      <div className="dynamic-grid  grid gap-4 py-2 sm:text-lg lg:flex-[5] lg:pr-12">
        <div className="group h-72 max-w-sm cursor-pointer border border-primary px-6 py-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl">
          <p className="text-primary group-hover:text-foreground/80">
            22 June 1839 - Award
          </p>
          <div className="mt-6 h-[2px] max-w-6 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Award Winners of the Decade <br /> 1839
          </p>
        </div>

        <div className="group h-72 max-w-sm cursor-pointer border border-primary px-6 py-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl">
          <p className="text-primary group-hover:text-foreground/80">
            15 June 1839 - Award
          </p>
          <div className="mt-6 h-[2px] max-w-6 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Chambers UK Awards <br /> 1839
          </p>
        </div>

        <div className="group h-72 max-w-sm cursor-pointer border border-primary px-6 py-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl">
          <p className="text-primary group-hover:text-foreground/80">
            12 June 1839 - Award
          </p>
          <div className="mt-6 h-[2px] max-w-6 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground antialiased group-hover:text-primary">
            The Legal 500 United Kingdom 1839
          </p>
        </div>

        <div className="group hidden h-72 max-w-sm cursor-pointer border border-primary px-6 py-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:block">
          <p className="text-primary group-hover:text-foreground/80">
            08 June 1839 - Award
          </p>
          <div className="mt-6 h-[2px] max-w-6 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground antialiased group-hover:text-primary">
            PILI Pro Bono Recognition Roster 1839
          </p>
        </div>

        <div className="group hidden h-72 max-w-sm cursor-pointer border border-primary px-6 py-8 transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:block">
          <p className="text-primary group-hover:text-foreground/80">
            02 June 1839 - Award
          </p>
          <div className="mt-6 h-[2px] max-w-6 bg-primary"></div>
          <p className="mt-6 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Beacons of Justice Award
            <br /> 1839
          </p>
        </div>
      </div>
    </div>
  );
}
