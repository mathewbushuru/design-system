export default function StatsSection() {
  return (
    <div className="flex flex-col gap-4 px-3 py-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12 sm:px-6 sm:py-20">
      <div className="group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[40%]">
        <p className="font-serif text-2xl text-primary">
          185+ Years of Excellence
        </p>
        <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
          Read about our history
        </p>
      </div>

      <div className="group group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[40%]">
        <p className="font-serif text-2xl text-primary">
          Approximately 1200 Attorneys Firmwide
        </p>
        <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
          Meet our lawyers
        </p>
      </div>

      <div className="group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-transparent hover:shadow-2xl sm:w-[40%]">
        <p className="font-serif text-2xl text-primary">
          Offices in 10 Cities Around Europe
        </p>
        <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
          Explore our offices
        </p>
      </div>
    </div>
  );
}
