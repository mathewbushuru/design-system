import { ExternalLink } from "lucide-react";

import Button from "@/components/ui/button";

export default function ComponentShowcaseLayout({
  componentName,
  from,
  fromLink,
  code,
  codeLink,
  uses,
  usesLink,
  children,
}: {
  componentName: string;
  from: string;
  fromLink: string;
  code: string;
  codeLink: string;
  uses: string;
  usesLink: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-12 py-6">
      <h1 className="my-2 text-center text-lg font-semibold underline sm:text-left">
        {componentName}
      </h1>

      <div className="mb-8">
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
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 text-sm font-semibold">
            Uses<span className="hidden sm:inline">:</span>
          </span>
          <a
            href={usesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>{uses}</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}