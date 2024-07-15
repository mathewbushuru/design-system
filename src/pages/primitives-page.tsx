import RootLayout from "@/layouts/root-layout";

import ButtonShowcase from "@/showcase/primitives/button-showcase";
import CardShowcase from "@/showcase/primitives/card-showcase";
import DropdownMenuShowcase from "@/showcase/primitives/dropdown-menu-showcase";
import InputShowcase from "@/showcase/primitives/input-showcase";
import ResizableShowcase from "@/showcase/primitives/resizable-showcase";
import SheetShowCase from "@/showcase/primitives/sheet-showcase";

const PrimitivesPage = () => {
  return (
    <RootLayout>
      <div data-testid="primitives-page">
        <ButtonShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <CardShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <DropdownMenuShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <InputShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <ResizableShowcase />
        <div className="my-4 h-px bg-primary/50 sm:hidden" />

        <SheetShowCase />

      </div>
    </RootLayout>
  );
};

export default PrimitivesPage;
