import MobileNavbar from "@/components/mobile-navbar";
import SideNavigation from "@/components/side-navigation";

const HomePage = () => {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden min-w-60 border-r lg:block h-screen">
        <SideNavigation />
      </div>

      {/* Page content  */}
      <div className="flex flex-1 flex-col items-center gap-4 overflow-y-scroll pb-8 pt-20">
        <MobileNavbar />
        Home
      </div>
    </div>
  );
};

export default HomePage;
