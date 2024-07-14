import SideNavigation from "@/components/side-navigation";
import Navbar from "@/components/navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden h-screen min-w-60 overflow-y-auto px-4 shadow-md dark:border-r lg:block">
        <SideNavigation />
      </div>

      {/* Page content  */}
      <div className="flex-1 overflow-y-scroll pt-14">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
