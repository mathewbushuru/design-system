import { Heart, ExternalLink } from "lucide-react";

import Button from "@/components/ui/button";

export default function ButtonShowcase() {
  return (
    <div className="px-12 py-6">
      <div className="mb-8">
        <div className="flex flex-col items-center sm:flex-row">
          <span className="">
            From<span className="hidden sm:inline">:</span>{" "}
          </span>
          <a
            href="https://github.com/shadcn-ui/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link">
              <span>shadcn/ui</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span className="">
            Code<span className="hidden sm:inline">:</span>{" "}
          </span>
          <a
            href="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/button.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link">
              <span>mathewbushuru/design-system</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span>
            Uses<span className="hidden sm:inline">:</span>{" "}
          </span>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link">
              <span>HTML Button Element</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

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
    </div>
  );
}
