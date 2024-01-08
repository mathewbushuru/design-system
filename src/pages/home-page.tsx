import ThemeToggle from "@/components/theme-toggle";

import ButtonShowcase from "@/showcase/components/button-showcase";

const HomePage = () => {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden min-w-40 border-r border-border lg:block">
        Sidebar
      </div>

      {/* Page content  */}
      <div className="flex flex-1 flex-col items-center gap-4 overflow-y-scroll py-8">
        Design system
        <div className="">
          <ThemeToggle />
        </div>
        <p className="border border-border p-4 text-muted-foreground">
          Muted text
        </p>
        <ButtonShowcase />
      </div>
    </div>
  );
};

export default HomePage;
