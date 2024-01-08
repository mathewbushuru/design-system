import { GanttChart } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

function MobileNavbar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex w-full items-center justify-between border-b px-4 py-2 backdrop-blur-md">
      <div className="flex items-center">
        <Drawer>
          <DrawerTrigger>
            <GanttChart className="h-6 w-6 lg:hidden" />
            <div className="sr-only">Open side navigation</div>
          </DrawerTrigger>
          <DrawerContent position="left">
            Sidebar
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

export default MobileNavbar;
