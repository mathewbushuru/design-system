import { Heart } from "lucide-react";

import ComponentShowcaseLayout from "@/layouts/component-showcase-layout";
import Button from "@/components/primitives/button";

export default function ButtonShowcase() {
  return (
    <ComponentShowcaseLayout
      componentName="Button"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/button.tsx"
      uses="HTML Button Element"
      usesLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button>Default button</Button>
        <Button disabled>Disabled button</Button>
      </div>

      <hr className="-mx-6 my-4 sm:hidden" />

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Variants
      </h1>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button variant="default">Default button</Button>
        <Button variant="destructive">Destructive button</Button>
        <Button variant="outline">Outline button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button variant="link">Link button</Button>
      </div>

      <hr className="-mx-6 my-4 sm:hidden" />

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Sizes
      </h1>
      <div className="flex flex-col items-center gap-2 sm:flex-row">
        <Button size="lg">Large button</Button>
        <Button size="default">Default button</Button>
        <Button size="sm">Small button</Button>
        <Button size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </ComponentShowcaseLayout>
  );
}
