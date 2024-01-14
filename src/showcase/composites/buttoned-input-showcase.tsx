import { Search } from "lucide-react";

import ComponentShowcaseLayout from "@/layouts/component-showcase-layout";
import ButtonedInput from "@/components/composites/buttoned-input";

export default function ButtonedInputShowcase() {
  return (
    <ComponentShowcaseLayout
      componentName="Buttoned Input"
      from={null}
      fromLink={null}
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/composites/buttoned-input.tsx"
      uses="Input primitive, Button primitive"
      usesLink={null}
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default IconedInput with Icon
      </h1>
      <div className="sm:max-w-md">
       <ButtonedInput action={Search}/>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default IconedInput with Text
      </h1>
      <div className="sm:max-w-md">
       <ButtonedInput action="Search"/>
      </div>

    </ComponentShowcaseLayout>
  );
}
