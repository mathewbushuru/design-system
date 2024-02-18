export default function WhoWeAreSection() {
  return (
    <div className="flex flex-col px-3 py-12 sm:px-6 sm:py-20 sm:text-foreground/80 lg:flex-row lg:gap-3 lg:py-24">
      {/* Title  */}
      <div className="lg:flex-1 lg:pl-12">
        <h5 className="mb-4 font-serif text-xl tracking-wide">Who We Are</h5>
        <div className="mb-5 h-px max-w-12 bg-foreground dark:bg-muted-foreground sm:bg-foreground/55" />
      </div>

      {/* Content  */}
      <div className="lg:flex-[5] lg:pr-12">
        <p className="antialiased sm:text-lg">
          Our lawyers around Europe work together in multidisciplinary teams to
          provide full-service capabilities to clients on their most complex
          legal matters. Without a centralized office, we work as a cohesive
          unit, with a culture that encourages and draws strength from the
          diversity of our employee's backgrounds, knowledge and skills, while
          also prioritizing their wellbeing. Our open assignment system allows
          each attorney to choose their practice areas and specific cases. This
          entrepreneurial approach yields higher levels of commitment and
          morale, yielding better results for clients.
        </p>
      </div>
    </div>
  );
}
