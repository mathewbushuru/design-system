import ShowcaseLayout from "@/layouts/showcase-layout";
import Card from "@/components/primitives/card";

export default function CardShowcase() {
  return (
    <ShowcaseLayout
      name="Card"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/primitives/card.tsx"
      uses="HTML Div Element"
      usesLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default card
      </h1>
      <div className="sm:max-w-md">
        <Card />
      </div>

    </ShowcaseLayout>
  );
}
