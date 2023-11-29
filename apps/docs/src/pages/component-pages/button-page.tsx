import { Cat } from "lucide-react";
import { Button } from "@mathewbushuru/ui";

import Navbar from "@/components/navbar";

export default function ButtonPage() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />

      <div className="flex flex-col gap-2 p-12">
        <Button> Default Button</Button>
        <Button variant="destructive">Destructive Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link</Button>
        <hr />
        <Button>Default size</Button>
        <Button size="sm">Small size</Button>
        <Button size="lg">Large size</Button>
        <Button size="icon">
          <Cat className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
