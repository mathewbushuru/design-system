import ShowcaseLayout from "@/layouts/showcase-layout";
import { Input } from "@/components/primitives/input";

export default function InputShowcase() {
  return (
    <ShowcaseLayout
      name="Input"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/primitives/input.tsx"
      uses="HTML Input Element"
      usesLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Default input
      </h1>
      <div className="sm:max-w-md">
        <Input />
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Disabled input
      </h1>
      <div className="sm:max-w-md">
        <Input disabled />
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        File input
      </h1>
      <div className="sm:max-w-md">
        <Input type="file" />
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Input with placeholder
      </h1>
      <div className="sm:max-w-md">
        <Input placeholder="Type something..." />
      </div>
    </ShowcaseLayout>
  );
}
