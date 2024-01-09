// inpired by coursera

import { Menu, Search } from "lucide-react";

function LearnCompany() {
  return (
    <div className="">
      {/* Learn Co Navbar */}
      <div className="flex items-center justify-between border-b px-3 py-4">
        <Menu className="text-muted-foreground h-6 w-6 stroke-1"/>
        <span className="text-lg font-bold text-primary">Learn Company</span>
        <Search className="text-muted-foreground h-6 w-6 stroke-1"/>
      </div>
    </div>
  );
}

export default LearnCompany;
