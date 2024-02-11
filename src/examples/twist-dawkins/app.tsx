import { Search, Menu } from "lucide-react";

export default function TwistDawkins() {
  return (
    <div className="bg-popover">
      {/* Header  */}
      <div className="bg-secondary p-3 sm:p-6">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-lg font-medium uppercase tracking-wider sm:text-xl">
            Twist & Dawkins
          </h1>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 hover:text-link" />
            <Menu className="h-6 w-6 hover:text-link" />
          </div>
        </div>
        <h3 className="py-14 text-center font-serif text-2xl font-medium tracking-wider sm:text-left sm:text-4xl">
          About Twist
        </h3>
      </div>

      {/* Hero  */}
      <div className="flex flex-col bg-secondary/20 px-3 py-12 dark:bg-primary/5 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:py-24">
        {/* Title  */}
        <div className="lg:flex-1 lg:pl-12">
          <h5 className="mb-4 font-serif text-xl tracking-wide">Overview</h5>
          <div className="mb-5 h-px max-w-12 bg-foreground dark:bg-muted-foreground sm:bg-foreground/55" />
        </div>

        {/* Content  */}
        <div className="lg:flex-[5] lg:pr-12">
          <p className="antialiased sm:text-lg">
            We are a legal consultancy based in the bustling heart of Victorian
            London, offering specialized services to a diverse clientele across
            the city and its outskirts. Our expertise is in debt resolution,
            property disputes, labour relations, and other legal challenges. At
            the helm of our practice, are our principal partners, Mr. Oliver
            Twist and Mr. Jack Dawkins, whose unparalleled legal acumen and
            dedication to justice have significantly shaped our firm's ethos and
            operations. We pride ourselves in attracting the best legal minds
            and forming formidable teams that excel in their respective fields.
            Our firm is built on the principles of innovation, ethics and team
            work. These tenets have been cornerstone of our enduring
            relationships with our clients since our establishment in 1839.
          </p>
        </div>
      </div>

      {/* Stats  */}
      <div className="flex flex-col gap-4 px-3 py-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12 sm:px-6 sm:py-20">
        <div className="group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-none hover:shadow-2xl sm:w-[40%]">
          <p className="font-serif text-2xl text-primary">
            185+ Years of Excellence
          </p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Read about our history
          </p>
        </div>

        <div className="group group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-none hover:shadow-2xl sm:w-[40%]">
          <p className="font-serif text-2xl text-primary">
            Approximately 1200 Attorneys Firmwide
          </p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Meet our lawyers
          </p>
        </div>

        <div className="group max-w-md cursor-pointer border border-primary px-8 py-24 text-center transition-all duration-500 hover:border-none hover:shadow-2xl sm:w-[40%]">
          <p className="font-serif text-2xl text-primary">
            Offices in 10 Cities Around Europe
          </p>
          <p className="mt-4 text-lg text-muted-foreground antialiased group-hover:text-primary">
            Explore our offices
          </p>
        </div>
      </div>

      {/* Services  */}
      <div className="flex flex-col bg-secondary/20 px-3 py-12 dark:bg-primary/5 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:py-24">
        {/* Title  */}
        <div className="lg:flex-1 lg:pl-12">
          <h5 className="mb-4 font-serif text-xl tracking-wide">Services</h5>
          <div className="mb-5 h-px max-w-12 bg-foreground dark:bg-muted-foreground sm:bg-foreground/55" />
        </div>

        {/* Content  */}
        <div className="space-y-5 sm:text-lg lg:flex-[5] lg:pr-12">
          <p>
            <span className="font-semibold text-primary">Transactional: </span>
            <span className="antialiased">
              Our attorneys manage and conclude complex agreements, representing
              both individual patrons and business proprietors in a range of
              intricate dealings, including land transactions, partnership
              formations, and investment arrangements within the burgeoning
              industries of this era.
            </span>
          </p>

          <p>
            <span className="font-semibold text-primary">Litigation: </span>
            <span className="antialiased">
              Our trial lawyers provide robust representation for individuals
              and enterprises embroiled in legal disputes. With a team seasoned
              from early in their careers in the art of advocacy and
              negotiation, our litigation practice is known for resolving
              conflicts effectively, often avoiding the need for a full trial.
            </span>
          </p>

          <p>
            <span className="font-semibold text-primary">
              Intellectual property:{" "}
            </span>
            <span className="antialiased">
              In an era where the industrial revolution sparks innovation, our
              clients receive counsel from a team adept in the legal nuances of
              invention and creativity. Our expertise extends to matters of
              patents, trademarks and copyrights.
            </span>
          </p>

          <p>
            <span className="font-semibold text-primary">Restructuring: </span>
            <span className="antialiased">
              Our restructuring lawyers offer guidance through the complexities
              faced by financially unstable enterprises, employing a keen
              understanding of business advisory, crisis management, and the
              intricacies of insolvency law.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
