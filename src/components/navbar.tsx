import { GanttChart, ChevronDown } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";
import SideNavigation from "@/components/side-navigation";

import Button from "@/components/primitives/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/primitives/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/primitives/sheet";

import useTheme from "@/hooks/use-theme";

function Navbar() {
  const { version, setVersion } = useTheme();

  const versionLabel = version === "v1" ? "V1 Theme" : "V2 Theme";

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-14 w-full items-center justify-between px-4 py-2 shadow-md backdrop-blur-md dark:border-b">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger>
            <GanttChart className="h-6 w-6 lg:hidden" />
            <div className="sr-only">Open side navigation</div>
          </SheetTrigger>
          <SheetContent position="left" size="sm" className="dark:border-r">
            <SideNavigation />
          </SheetContent>
        </Sheet>

        <span className="ml-1 font-mono font-semibold tracking-widest lg:ml-2">
          @mathewbushuru
        </span>
      </div>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="secondary" className="lg:mr-2">
              {versionLabel} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setVersion("v1")}>
              V1 Theme
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setVersion("v2")}>
              V2 Theme (Experimental)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
