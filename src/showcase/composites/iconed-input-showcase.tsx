import ComponentShowcaseLayout from "@/layouts/component-showcase-layout";
import { Input } from "@/components/primitives/input";

export default function IconedInputShowcase() {
  return (
    <ComponentShowcaseLayout
      componentName="Iconed Input"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/input.tsx"
      uses="HTML Input Element"
      usesLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default input
      </h1>
      <div className="sm:max-w-md">
        <Input />
      </div>

    </ComponentShowcaseLayout>
  );
}
