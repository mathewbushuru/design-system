import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/primitives/resizable";

const defaultPanelSizes = [265, 440, 655];

export default function EmailCompany() {
  return (
    <div className="bg-popover">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-h-[800px] min-h-48"
      >
        <ResizablePanel
          defaultSize={defaultPanelSizes[0]}
          minSize={15}
          maxSize={20}
        >
          <div className="flex h-12 items-center justify-center">
            {/* Account Switcher */}
          </div>
          Sidebar
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultPanelSizes[1]} minSize={30}>
          Two
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultPanelSizes[2]}>
          Three
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
