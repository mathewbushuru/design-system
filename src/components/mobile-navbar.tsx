import { GanttChart } from "lucide-react"

import ThemeToggle from "@/components/theme-toggle"

function MobileNavbar() {
  return (
    <div className="fixed left-0 right-0 top-0 flex w-full items-center justify-between border-b px-4 py-2 lg:hidden backdrop-blur-md">
          <GanttChart className="h-6 w-6" />
          <ThemeToggle />
        </div>
  )
}

export default MobileNavbar