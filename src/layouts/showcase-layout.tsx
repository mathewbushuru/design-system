import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/primitives/button";

interface ShowcaseLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  children: React.ReactNode;
  examplePage?: boolean;
  from?: string;
  fromLink?: string;
  design?: string;
  designLink?: string;
  code?: string;
  codeLink?: string;
  uses?: string;
  usesLink?: string;
}

export default function ShowcaseLayout({
  name,
  children,
  examplePage = false,
  from,
  fromLink,
  design,
  designLink,
  code,
  codeLink,
  uses,
  usesLink,
  className,
}: ShowcaseLayoutProps) {
  return (
    <div className={cn(examplePage ? "m-4 lg:m-6" : "px-12 py-6", className)}>
      <h1 className="my-2 text-center text-lg font-semibold underline underline-offset-2 sm:text-left">
        {name}
      </h1>

      <div className={examplePage ? "mb-4" : "mb-8"}>
        {from && (
          <div className="flex flex-col items-center sm:flex-row">
            <span
              className={cn(
                "text-sm font-semibold text-center sm:text-left",
                examplePage ? "w-32" : "w-12",
              )}
            >
              From<span className="hidden sm:inline">:</span>
            </span>
            {fromLink ? (
              <a
                href={fromLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3"
                tabIndex={-1}
              >
                <Button variant="link" size="sm">
                  <span>{from}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <span className="inline-flex h-9 items-center px-3 text-sm font-semibold text-link">
                {from}
              </span>
            )}
          </div>
        )}

        {design && (
          <div className="flex flex-col items-center sm:flex-row">
            <span
              className={cn(
                "text-sm font-semibold text-center sm:text-left",
                examplePage ? "w-32" : "w-12",
              )}
            >
              Design inspiration<span className="hidden sm:inline">:</span>
            </span>
            {designLink ? (
              <a
                href={designLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3"
                tabIndex={-1}
              >
                <Button variant="link" size="sm">
                  <span>{design}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <span className="inline-flex h-9 items-center px-3 text-sm font-semibold text-link">
                {design}
              </span>
            )}
          </div>
        )}

        {code && (
          <div className="flex flex-col items-center sm:flex-row">
            <span
              className={cn(
                "text-sm font-semibold text-center sm:text-left",
                examplePage ? "w-32" : "w-12",
              )}
            >
              Code<span className="hidden sm:inline">:</span>
            </span>
            {codeLink ? (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3"
                tabIndex={-1}
              >
                <Button variant="link" size="sm">
                  <span>{code}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <span className="inline-flex h-9 items-center px-3 text-sm font-semibold text-link">
                {code}
              </span>
            )}
          </div>
        )}

        {uses && (
          <div className="flex flex-col items-center sm:flex-row">
            <span
              className={cn(
                "text-sm font-semibold text-center sm:text-left",
                examplePage ? "w-32" : "w-12",
              )}
            >
              Uses<span className="hidden sm:inline">:</span>
            </span>
            {usesLink ? (
              <a
                href={usesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3"
                tabIndex={-1}
              >
                <Button variant="link" size="sm">
                  <span>{uses}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <span className="inline-flex h-9 items-center px-3 text-sm font-semibold text-link">
                {uses}
              </span>
            )}
          </div>
        )}
      </div>

      <div
        className={
          examplePage ? "overflow-hidden rounded-md shadow-lg dark:border" : ""
        }
      >
        {children}
      </div>
    </div>
  );
}
