import { PhoneOutgoing } from "lucide-react";

import ShowcaseLayout from "@/layouts/showcase-layout";
import ButtonedInput from "@/components/composites/buttoned-input";

export default function ButtonedInputShowcase() {
  return (
    <>
      <ShowcaseLayout
        name="Buttoned Input"
        code="mathewbushuru/design-system"
        codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/composites/buttoned-input.tsx"
        uses="Button primitive, Input primitive, "
      >
        <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
          Default ButtonedInput with Icon
        </h1>
        <div className="sm:max-w-md">
          <ButtonedInput action={PhoneOutgoing} />
        </div>

        <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
          Default ButtonedInput with Text
        </h1>
        <div className="sm:max-w-md">
          <ButtonedInput action="Search" />
        </div>
      </ShowcaseLayout>
    </>
  );
}
