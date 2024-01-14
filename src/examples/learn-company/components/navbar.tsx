import { Menu, Search } from "lucide-react";

import Button from "@/components/primitives/button";
import ButtonedInput from "@/components/composites/buttoned-input";

export default function Navbar() {
  return (
    <div className="flex items-center border-b px-3 py-4 lg:px-5">
      {/* Navbar left  */}
      <div className="flex flex-1 items-center justify-between lg:justify-start lg:gap-4">
        <Menu className="h-6 w-6 stroke-1 text-muted-foreground lg:hidden" />
        <span className="text-pointer text-lg font-bold tracking-widest text-primary">
          learn company
        </span>
        <Button size="sm" className="hidden lg:block">
          Explore
        </Button>
        <ButtonedInput
          action={Search}
          placeholder="What do you want to learn?"
          className="hidden lg:flex flex-1 max-w-64"
          inputStyles="bg-popover"
        />
        <Search className="h-6 w-6 stroke-1 text-muted-foreground lg:hidden" />
      </div>

      {/* Navbar Right  */}
      <div className="hidden lg:block">
        <Button
          variant="link"
          className="font-medium text-foreground hover:text-link"
        >
          Online degrees
        </Button>
        <Button
          variant="link"
          className="font-medium text-foreground hover:text-link"
        >
          Find your new career
        </Button>
        <Button variant="link" className="font-medium ">
          Log in
        </Button>
        <Button size="sm">Join for free</Button>
      </div>
    </div>
  );
}
