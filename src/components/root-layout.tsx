import SideNavigation from "@/components/side-navigation";
import Navbar from "@/components/navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden h-screen min-w-60 border-r px-4 lg:block">
        <SideNavigation />
      </div>

      {/* Page content  */}
      <div className="flex flex-1 flex-col items-center gap-4 overflow-y-scroll pb-8 pt-20">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
