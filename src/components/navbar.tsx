import { GanttChart } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";
import SideNavigation from "@/components/side-navigation";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/primitives/drawer";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-14 w-full items-center justify-between px-4 py-2 shadow-md backdrop-blur-md dark:border-b z-50">
      <div className="flex items-center">
        <Drawer>
          <DrawerTrigger>
            <GanttChart className="h-6 w-6 lg:hidden" />
            <div className="sr-only">Open side navigation</div>
          </DrawerTrigger>
          <DrawerContent position="left" size="sm" className="dark:border-r">
            <SideNavigation />
          </DrawerContent>
        </Drawer>

        <span className="ml-1 font-mono font-semibold tracking-widest lg:ml-2">
          @mathewbushuru
        </span>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Navbar;
