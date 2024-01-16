import { Menu, Search } from "lucide-react";

import Button from "@/components/primitives/button";
import ButtonedInput from "@/components/composites/buttoned-input";

import ExploreButton from "@/examples/learn-company/components/explore-button";

export default function Navbar() {
  return (
    <div className="border-b px-3 py-4 lg:px-5">
      <div className="flex items-center max-w-screen-xl mx-auto">
        {/* Navbar left  */}
        <div className="flex flex-1 items-center justify-between lg:justify-start lg:gap-4">
          <Menu className="h-6 w-6 stroke-1 text-muted-foreground lg:hidden" />
          <span className="text-pointer text-lg font-bold tracking-widest text-primary">
            learn company
          </span>
          <ExploreButton />
          <ButtonedInput
            action={Search}
            placeholder="What do you want to learn?"
            className="hidden max-w-64 flex-1 lg:flex"
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
    </div>
  );
}
