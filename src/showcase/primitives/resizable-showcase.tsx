import ShowcaseLayout from "@/layouts/showcase-layout";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/primitives/resizable";

export default function ResizableShowcase() {
  return (
    <ShowcaseLayout
      name="Resizable"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/primitives/resizable.tsx"
      uses="react-resizable-panels"
      usesLink="https://github.com/bvaughn/react-resizable-panels"
    >
      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Horizontal Resizable
      </h1>
      <div className="sm:max-w-md">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-24 max-w-md rounded-lg border"
        >
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Vertical Resizable (with handle)
      </h1>
      <div className="sm:max-w-md">
        <ResizablePanelGroup
          direction="vertical"
          className="min-h-48 max-w-md rounded-lg border"
        >
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Horizontal Resizable with default sizes
      </h1>
      <div className="sm:max-w-md">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-24 max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>25%</ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>75%</ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        Horizontal + Vertical Resizable
      </h1>
      <div className="sm:max-w-md">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-48 rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            One
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                Two
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                Three
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ShowcaseLayout>
  );
}
