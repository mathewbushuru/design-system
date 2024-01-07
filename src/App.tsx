import ThemeProvider from "@/components/theme-provider";
import ThemeToggle from "./components/theme-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="h-screen bg-background text-foreground flex flex-col items-center p-8 gap-4">
        Design system
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
