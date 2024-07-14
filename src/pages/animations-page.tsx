import RootLayout from "@/layouts/root-layout";
import HamburgerMenuShowcase from "@/showcase/animations/hamburger-menu-showcase";

function AnimationsPage() {
  return (
    <RootLayout>
      <div data-testid="animations-page">
        <HamburgerMenuShowcase />
      </div>
    </RootLayout>
  );
}

export default AnimationsPage;
