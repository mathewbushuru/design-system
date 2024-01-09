// https://ui.shadcn.com/docs/components/dropdown-menu

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