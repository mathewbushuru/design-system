export default function Footer() {
  return (
    <div className="bg-secondary px-3 py-6 sm:p-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <ul className="flex flex-col items-center gap-2 text-secondary-foreground/80 sm:flex-row sm:gap-4">
          <li className="hover:cursor-pointer hover:text-foreground">
            Locations
          </li>
          <li className="hover:cursor-pointer hover:text-foreground">
            Attorney Advertising
          </li>
          <li className="hover:cursor-pointer hover:text-foreground">
            Privacy & Disclaimers
          </li>
        </ul>

        <h1 className="font-serif text-lg font-medium uppercase tracking-wider sm:text-xl">
          Twist & Dawkins
        </h1>
      </div>
    </div>
  );
}
