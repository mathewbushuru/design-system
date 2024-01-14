import RootLayout from "@/layouts/root-layout";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/primitives/drawer-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";

const PrimitivesPage = () => {
  return (
    <RootLayout>
      <div>
        <ButtonShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <CardShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <DrawerShowCase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <DropdownMenuShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <InputShowcase />

      </div>
    </RootLayout>
  );
};

export default PrimitivesPage;
