import { GanttChart } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";
import SideNavigation from "@/components/side-navigation";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/primitives/sheet";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between px-4 py-2 shadow-md backdrop-blur-md dark:border-b">
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
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
