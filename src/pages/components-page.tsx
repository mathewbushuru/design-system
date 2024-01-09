import RootLayout from "@/components/root-layout";

import ButtonShowcase from "@/showcase/components/button-showcase";
import DropdownMenuShowcase from "@/showcase/components/dropdown-menu-showcase";
import DrawerShowCase from "@/showcase/components/drawer-showcase";

const ComponentsPage = () => {
  return (
    <RootLayout>
      <div>
        <h1 className="mt-2 ml-12 text-center text-lg font-semibold underline sm:text-left">
          Button
        </h1>
        <ButtonShowcase />

        <h1 className="my-2 ml-12 text-center text-lg font-semibold underline sm:text-left">
          Drawer
        </h1>
        <DrawerShowCase />

        <h1 className="mt-2 ml-12 text-center text-lg font-semibold underline sm:text-left">
          Dropdown Menu
        </h1>
        <DropdownMenuShowcase />
      </div>
    </RootLayout>
  );
};

export default ComponentsPage;