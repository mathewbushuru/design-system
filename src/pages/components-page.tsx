import RootLayout from "@/layouts/root-layout";

import ButtonShowcase from "@/showcase/components/button-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";
import InputShowcase from "@/showcase/components/input-showcase";

const ComponentsPage = () => {
  return (
    <RootLayout>
      <div>
        <ButtonShowcase />
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

export default ComponentsPage;
