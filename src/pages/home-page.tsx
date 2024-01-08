import ThemeToggle from "@/components/theme-toggle";

import ButtonShowcase from "@/showcase/components/button-showcase";

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-background p-8 text-foreground">
      Design system
      <div className="">
        <ThemeToggle />
      </div>
      <p className="border border-border p-4 text-muted-foreground">
        Muted text
      </p>
      <ButtonShowcase />
    </div>
  );
};

export default HomePage;
