import RootLayout from "@/components/root-layout";

import ButtonShowcase from "@/showcase/components/button-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";

const ComponentsPage = () => {
  return (
    <RootLayout>
      <div className="">Design system</div>
      <p className="border p-4 text-muted-foreground">Muted text</p>
      <ButtonShowcase />
      <DropdownMenuShowcase />
      <DrawerShowCase />
    </RootLayout>
  );
};

export default ComponentsPage;
