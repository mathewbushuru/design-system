import { Menu } from "lucide-react";
import { Button } from "@mathewbushuru/ui";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">

      <nav className="flex items-center gap-2 border-b px-2 py-3 sm:gap-3 sm:px-6 lg:h-screen lg:flex-col lg:items-start lg:border-b-0 lg:border-r lg:py-6">
        <Menu className="h-5 w-5 lg:hidden" />
        <a
          className="font-mono font-semibold tracking-widest"
          target="_blank"
          href="https://github.com/mathewbushuru"
        >
          @mathewbushuru
        </a>
        <ul className="mt-12 gap-4 hidden lg:flex lg:flex-col">
          <li className="tracking-wide cursor-pointer">Components</li>
          <li className="tracking-wide cursor-pointer">Hooks</li>
        </ul>
      </nav>

      <Button />

    </div>
  );
}

export default App;
