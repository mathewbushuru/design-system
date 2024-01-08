import MobileNavbar from "@/components/mobile-navbar";
import SideNavigation from "@/components/side-navigation";

import ButtonShowcase from "@/showcase/components/button-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";

const ShowcasePage = () => {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden min-w-60 border-r lg:block h-screen">
        <SideNavigation />
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

export default ShowcasePage;
