import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/primitives/resizable";

const defaultLayouts = [265, 440, 655];

export default function EmailCompany() {
  return (
    <div className="bg-popover">
      <ResizablePanelGroup
        direction="horizontal"
        className="max-h-[800px] min-h-48"
      >
        <ResizablePanel
          defaultSize={defaultLayouts[0]}
          minSize={15}
          maxSize={20}
        >
          Sidebar
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayouts[1]} minSize={30}>
          Two
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayouts[2]}>Three</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
