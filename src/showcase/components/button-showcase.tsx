// https://ui.shadcn.com/docs/components/button

import { Heart } from "lucide-react";

import Button from "@/components/ui/button";

export default function ButtonShowcase() {
  return (
      <div className="px-12 py-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>Default button</Button>
          <Button disabled>Disabled button</Button>
        </div>

        <hr className="-mx-12 my-4 sm:hidden" />

        <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">Variants</h1>
        <div className="flex gap-2 flex-col sm:flex-row">
          <Button variant="default">Default button</Button>
          <Button variant="destructive">Destructive button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button variant="link">Link button</Button>
        </div>

        <hr className="-mx-12 my-4 sm:hidden" />

        <h1 className="my-4 text-center font-semibold text-muted-foreground sm:text-left">Sizes</h1>
        <div className="flex gap-2 items-center flex-col sm:flex-row">
          <Button size="lg">Large button</Button>
          <Button size="default">Default button</Button>
          <Button size="sm">Small button</Button>
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <hr className="-mx-12 my-4 sm:hidden" />

      </div>
  );
}
