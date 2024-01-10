// inpired by coursera - https://www.coursera.org/

import { Menu, Search } from "lucide-react";

import Button from "@/components/ui/button";

function LearnCompany() {
  return (
    <div className="">
      {/* Learn Co Navbar */}
      <div className="flex items-center border-b px-3 py-4 lg:px-4">
        {/* Navbar left  */}
        <div className="flex flex-1 items-center justify-between lg:justify-start lg:gap-4">
          <Menu className="h-6 w-6 stroke-1 text-muted-foreground lg:hidden" />
          <span className="text-lg font-bold tracking-widest text-primary">
            learn company
          </span>
          <Button size="sm" className="hidden lg:block">Explore</Button>
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

      {/* Learn Co  body  */}
      <div className="m-4 h-10">Body</div>
    </div>
  );
}

export default LearnCompany;
