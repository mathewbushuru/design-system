import { Menu } from "lucide-react";
import { Button } from "@mathewbushuru/ui";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex items-center gap-2 border-b px-2 py-3 sm:gap-3 sm:px-6">
        <Menu className="h-5 w-5" />
        <a
          className="font-mono font-semibold tracking-widest"
          target="_blank"
          href="https://github.com/mathewbushuru"
        >
          @mathewbushuru
        </a>
      </nav>
      <Button />
    </div>
  );
}

export default App;
