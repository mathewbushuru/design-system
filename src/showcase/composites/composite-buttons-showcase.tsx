import ShowcaseLayout from "@/layouts/showcase-layout";
import { BrandButtons } from "@/components/composites/composite-buttons";

export default function CompositeButtonsShowcase() {
  return (
    <ShowcaseLayout
      name="Composite Buttons"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/composites/composite-buttons.tsx"
      uses="Button primitive"
    >
      <h1 className="mb-6 mt-4 text-center font-semibold text-muted-foreground sm:text-left">
        Buttons from different brands
      </h1>
      <div className="sm:max-w-screen-md lg:max-w-screen-lg">
        <BrandButtons />
      </div>
    </ShowcaseLayout>
  );
}
