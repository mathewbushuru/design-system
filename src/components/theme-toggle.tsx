import { Sun, Moon } from "lucide-react";

import useTheme from "@/hooks/use-theme";
import Button from "@/components/primitives/button";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button variant="ghost" onClick={handleThemeChange}>
      {theme === "light" && (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      {theme === "dark" && (
        <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
