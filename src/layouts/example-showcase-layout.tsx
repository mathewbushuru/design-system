import { ExternalLink } from "lucide-react";

import Button from "@/components/primitives/button";

export default function ExampleShowcaseLayout({
  exampleName,
  from,
  fromLink,
  code,
  codeLink,
  design,
  designLink,
  children,
}: {
  exampleName: string;
  from: string;
  fromLink: string;
  design: string;
  designLink: string;
  code: string;
  codeLink: string;
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 lg:m-6">
      <h1 className="my-2 text-center text-lg font-semibold underline sm:text-left">
        {exampleName}
      </h1>

      <div className="mb-4">
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 text-sm font-semibold">
            From<span className="hidden sm:inline">:</span>
          </span>
          <a
            href={fromLink}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>{from}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 text-sm font-semibold">
            Design<span className="hidden sm:inline">:</span>
          </span>
          <a
            href={designLink}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>{design}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 text-sm font-semibold">
            Code<span className="hidden sm:inline">:</span>
          </span>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>{code}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-md shadow-lg dark:border">{children}</div>
    </div>
  );
}
