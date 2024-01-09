import SideNavigation from "@/components/side-navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar  */}
      <div className="hidden h-screen min-w-60 border-r px-4 lg:block">
        <SideNavigation />
      </div>

      {/* Page content  */}
      <div className=" flex-1 overflow-y-scroll pt-14">
        <Navbar />
        <div className="flex h-full flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
