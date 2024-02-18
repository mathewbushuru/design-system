export default function ServicesSection() {
  return (
    <div className="flex flex-col bg-secondary/20 px-3 py-12 dark:bg-primary/5 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:gap-3 lg:py-24">
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
            Our trial lawyers provide robust representation for individuals and
            enterprises embroiled in legal disputes. With a team seasoned from
            early in their careers in the art of advocacy and negotiation, our
            litigation practice is known for resolving conflicts effectively,
            often avoiding the need for a full trial.
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
  );
}
