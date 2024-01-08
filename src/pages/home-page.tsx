import { GanttChart } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";

import ButtonShowcase from "@/showcase/components/button-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";

const HomePage = () => {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden min-w-40 flex-col items-center gap-2 border-r py-4 lg:flex">
        Sidebar
        <ThemeToggle />
      </div>

      {/* Page content  */}
      <div className="flex flex-1 flex-col items-center gap-4 overflow-y-scroll pb-8 pt-20">
        {/* Mobile Navbar  */}
        <div className="fixed left-0 right-0 top-0 flex w-full items-center justify-between border-b px-4 py-2 lg:hidden backdrop-blur-md">
          <GanttChart className="h-6 w-6" />
          <ThemeToggle />
        </div>
        Design system
        <div className="">
          <ThemeToggle />
        </div>
        <p className="border p-4 text-muted-foreground">Muted text</p>
        <ButtonShowcase />
        <DropdownMenuShowcase />
        <DrawerShowCase />
      </div>
    </div>
  );
};

export default HomePage;
