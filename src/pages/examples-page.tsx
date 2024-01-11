import { ExternalLink } from "lucide-react";

import LearnCompany from "@/showcase/examples/learn-company/app";
import RootLayout from "@/components/root-layout";
import Button from "@/components/ui/button";

function ExamplesPage() {
  return (
    <RootLayout>
      <div className="m-4 lg:m-6">
        <div className="mb-4">
          <div className="flex flex-col items-center sm:flex-row">
            <span className="w-16 font-semibold text-sm">
              From<span className="hidden sm:inline">:</span>
            </span>
            <a
              href="https://github.com/mathewbushuru/design-system"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3"
            >
              <Button variant="link" size="sm">
                <span>mathewbushuru/design-system</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <span className="w-16 font-semibold text-sm">
              Design<span className="hidden sm:inline">:</span>
            </span>
            <a
              href="https://www.coursera.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3"
            >
              <Button variant="link" size="sm">
                <span>coursera.org</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center sm:flex-row">
            <span className="w-16 font-semibold text-sm">
              Code<span className="hidden sm:inline">:</span>
            </span>
            <a
              href="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/button.tsx"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-3"
            >
              <Button variant="link" size="sm">
                <span>mathewbushuru/design-system</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-md shadow-lg dark:border">
          <LearnCompany />
        </div>
      </div>
    </RootLayout>
  );
}

export default ExamplesPage;
