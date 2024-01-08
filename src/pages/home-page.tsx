import ThemeToggle from "@/components/theme-toggle";
import MobileNavbar from "@/components/mobile-navbar";

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
        <MobileNavbar />

        <div className="">Design system</div>
        <p className="border p-4 text-muted-foreground">Muted text</p>
        <ButtonShowcase />
        <DropdownMenuShowcase />
        <DrawerShowCase />
      </div>
    </div>
  );
};

export default HomePage;
