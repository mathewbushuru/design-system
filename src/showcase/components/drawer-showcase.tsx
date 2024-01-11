import { ExternalLink } from "lucide-react";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerAction,
  DrawerCancel,
} from "@/components/ui/drawer";
import Button from "@/components/ui/button";

const drawerPositions: ["right", "left", "top", "bottom"] = [
  "right",
  "left",
  "top",
  "bottom",
];

const drawerSizes: ["default", "content", "sm", "lg", "xl", "full"] = [
  "default",
  "content",
  "sm",
  "lg",
  "xl",
  "full",
];

function DrawerShowCase() {
  return (
    <div className="px-12 py-6">
      <h1 className="my-2 text-center text-lg font-semibold underline sm:text-left">
        Drawer
      </h1>

      <div className="mb-8">
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 font-semibold text-sm">
            From<span className="hidden sm:inline">:</span>
          </span>
          <a
            href="https://github.com/shadcn-ui/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>shadcn/ui</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col items-center sm:flex-row">
          <span className="w-12 font-semibold text-sm">
            Code<span className="hidden sm:inline">:</span>
          </span>
          <a
            href="https://github.com/mathewbushuru/design-system/blob/main/src/components/ui/drawer.tsx"
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
          <span className="w-12 font-semibold text-sm">
            Uses<span className="hidden sm:inline">:</span>
          </span>
          <a
            href="https://www.radix-ui.com/primitives/docs/components/alert-dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3"
          >
            <Button variant="link" size="sm">
              <span>@radix-ui/react-alert-dialog</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        {drawerPositions.map((position) => (
          <Drawer key={position}>
            <DrawerTrigger asChild>
              <Button>{position} drawer</Button>
            </DrawerTrigger>
            <DrawerContent position={position}>
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're done
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-4 py-4">Drawer content here</div>
              <DrawerFooter>
                <DrawerCancel asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerCancel>
                <DrawerAction asChild>
                  <Button>Save changes</Button>
                </DrawerAction>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        All drawer sizes and positions
      </h1>
      <div className="flex flex-col gap-2">
        {drawerPositions.map((position) => (
          <div className="flex flex-col gap-2 sm:flex-row" key={position}>
            {drawerSizes.map((size) => (
              <Drawer key={size}>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="sm:w-32">
                    {position} {size}
                  </Button>
                </DrawerTrigger>
                <DrawerContent position={position} size={size}>
                  <DrawerHeader>
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                      Make changes to your profile here. Click save when you're
                      done
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="grid gap-4 py-4">Drawer content here</div>
                  <DrawerFooter>
                    <DrawerCancel asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerCancel>
                    <DrawerAction asChild>
                      <Button>Save changes</Button>
                    </DrawerAction>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ))}
            <hr className="-mx-6 my-2 sm:hidden" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrawerShowCase;
