import { Search } from "lucide-react";

import ComponentShowcaseLayout from "@/layouts/component-showcase-layout";
import IconedInput from "@/components/composites/iconed-input";

export default function IconedInputShowcase() {
  return (
    <ComponentShowcaseLayout
      componentName="Iconed Input"
      from="mathewbushuru/design-system"
      fromLink="https://github.com/mathewbushuru/design-system"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/composites/iconed-input.tsx"
      uses="Input primitive, Button primitive"
      usesLink={null}
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default IconedInput with Icon
      </h1>
      <div className="sm:max-w-md">
       <IconedInput action={Search}/>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default IconedInput with Text
      </h1>
      <div className="sm:max-w-md">
       <IconedInput action="Search"/>
      </div>

    </ComponentShowcaseLayout>
  );
}
