import ShowcaseLayout from "@/layouts/showcase-layout";
import HamburgerMenu from "@/animations/hamburger-menu/app";

function HamburgerMenuShowcase() {
  return (
    <ShowcaseLayout
      name="Hamburger Menu"
      examplePage={true}
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/animations/hamburger-menu/app.tsx"
      uses="Framer Motion"
    >
      <HamburgerMenu />
    </ShowcaseLayout>
  );
}

export default HamburgerMenuShowcase;
