import ShowcaseLayout from "@/layouts/showcase-layout";
import BrandButtons from "@/components/composites/brand-buttons";

export default function BrandButtonsShowcase() {
  return (
    <ShowcaseLayout
      name="Brand Buttons"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/composites/brand-buttons.tsx"
      uses="Button primitive"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
       Buttons from different brands
      </h1>
      <div className="sm:max-w-md">
        <BrandButtons />
      </div>
    </ShowcaseLayout>
  );
}
