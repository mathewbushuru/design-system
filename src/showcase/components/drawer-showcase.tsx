import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerAction,
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
    <div className="rounded-md border border-border px-12 py-6">
      <h1 className="mb-4 mt-4 text-center font-semibold underline">
        All drawer positions
      </h1>
      <div className="flex flex-col gap-2 sm:flex-row">
        {drawerPositions.map((position) => (
          <Drawer key={position}>
            <DrawerTrigger asChild>
              <Button>Open {position} drawer</Button>
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
                <Button variant="outline">Cancel</Button>
                <DrawerAction asChild>
                  <Button>Save changes</Button>
                </DrawerAction>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>

      <h1 className="mb-4 mt-4 text-center font-semibold underline">
        All drawer sizes and positions
      </h1>
      <div className="flex flex-col gap-2">
        {drawerPositions.map((position) => (
          <div
            className="flex flex-col flex-wrap justify-center gap-2 sm:flex-row"
            key={position}
          >
            {drawerSizes.map((size) => (
              <Drawer key={size}>
                <DrawerTrigger asChild>
                  <Button variant="outline">
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
                    <Button variant="outline">Cancel</Button>
                    <DrawerAction asChild>
                      <Button>Save changes</Button>
                    </DrawerAction>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrawerShowCase;
