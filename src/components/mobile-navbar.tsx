import { GanttChart } from "lucide-react";

import ThemeToggle from "@/components/theme-toggle";

function MobileNavbar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex w-full items-center justify-between border-b px-4 py-2 backdrop-blur-md">
      <div className="flex items-center">
        <GanttChart className="h-6 w-6 lg:hidden" />
        <span className="font-semibold font-mono tracking-widest ml-0.5 lg:ml-2">@mathewbushuru</span>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default MobileNavbar;
