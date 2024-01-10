import { ExternalLink } from "lucide-react";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputShowcase() {
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
            href="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/input.tsx"
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
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link">
              <span>HTML Input Element</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

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
    </div>
  );
}
