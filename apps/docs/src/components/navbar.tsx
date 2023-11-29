import { Menu } from "lucide-react"
import { Button } from "@mathewbushuru/ui"

export default function Navbar() {
  return (
    <nav className="flex items-center gap-2 border-b px-2 py-3 sm:gap-3 sm:px-6 lg:h-screen lg:flex-col lg:items-start lg:border-b-0 lg:border-r lg:py-6">
        <Menu className="h-5 w-5 lg:hidden" />
        <a
          className="font-mono font-semibold tracking-widest"
          target="_blank"
          href="https://github.com/mathewbushuru"
        >
          @mathewbushuru
        </a>
        <ul className="mt-12 hidden gap-4 lg:flex lg:flex-col">
          <li>
            <Button variant="ghost">Components</Button>
            <ul className="ml-4">
                <li><Button variant="ghost">Buttons</Button></li>
            </ul>
          </li>

          <hr />

          <li>
            <Button variant="ghost">Hooks</Button>
          </li>

        </ul>
      </nav>
  )
}
