export default function OverviewSection() {
  return (
    <div className="flex flex-col bg-secondary/20 px-3 py-12 dark:bg-primary/5 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:gap-3 lg:py-24">
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
          the helm of our practice, are our principal partners, Mr. Oliver Twist
          and Mr. Jack Dawkins, whose unparalleled legal acumen and dedication
          to justice have significantly shaped our firm's ethos and operations.
          We pride ourselves in attracting the best legal minds and forming
          formidable teams that excel in their respective fields. Our firm is
          built on the principles of innovation, ethics and team work. These
          tenets have been cornerstone of our enduring relationships with our
          clients since our establishment in 1839.
        </p>
      </div>
    </div>
  );
}
