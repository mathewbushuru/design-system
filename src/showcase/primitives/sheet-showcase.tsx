import ShowcaseLayout from "@/layouts/showcase-layout";
import Button from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetAction,
  SheetCancel,
} from "@/components/primitives/sheet";

const sheetPositions: ["right", "left", "top", "bottom"] = [
  "right",
  "left",
  "top",
  "bottom",
];

const sheetSizes: ["default", "content", "sm", "lg", "xl", "full"] = [
  "default",
  "content",
  "sm",
  "lg",
  "xl",
  "full",
];

function SheetShowCase() {
  return (
    <ShowcaseLayout
      name="Sheet (Drawer)"
      from="shadcn/ui"
      fromLink="https://github.com/shadcn-ui/ui"
      code="mathewbushuru/design-system"
      codeLink="https://github.com/mathewbushuru/design-system/blob/main/src/components/primitives/sheet.tsx"
      uses="@radix-ui/react-alert-dialog"
      usesLink="https://www.radix-ui.com/primitives/docs/components/alert-dialog"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        {sheetPositions.map((position) => (
          <Sheet key={position}>
            <SheetTrigger asChild>
              <Button>{position} sheet</Button>
            </SheetTrigger>
            <SheetContent position={position}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Input placeholder="name" />
                <Input placeholder="username" />
              </div>
              <SheetFooter>
                <SheetCancel asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetCancel>
                <SheetAction asChild>
                  <Button>Save changes</Button>
                </SheetAction>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>

      <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">
        All sheet sizes and positions
      </h1>
      <div className="flex flex-col gap-2">
        {sheetPositions.map((position) => (
          <div className="flex flex-col gap-2 sm:flex-row" key={position}>
            {sheetSizes.map((size) => (
              <Sheet key={size}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="sm:w-32">
                    {position} {size}
                  </Button>
                </SheetTrigger>
                <SheetContent position={position} size={size}>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <Input placeholder="name" />
                    <Input placeholder="username" />
                  </div>
                  <SheetFooter>
                    <SheetCancel asChild>
                      <Button variant="outline">Cancel</Button>
                    </SheetCancel>
                    <SheetAction asChild>
                      <Button>Save changes</Button>
                    </SheetAction>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            ))}
            <hr className="-mx-6 my-2 sm:hidden" />
          </div>
        ))}
      </div>
    </ShowcaseLayout>
  );
}

export default SheetShowCase;
