import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

import ButtonShowcase from "@/showcase/components/button-showcase";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen flex-col items-center gap-4 bg-background p-8 text-foreground">
        Design system
        <div className="">
          <ThemeToggle />
        </div>
        <ButtonShowcase />
      </div>
    </ThemeProvider>
  );
}

export default App;
