import { Menu } from "lucide-react";
import { Button } from "@mathewbushuru/ui";

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex gap-2 items-center border-b px-2 py-3">
        <Menu className="w-5 h-5"/>
        <p className="font-mono font-semibold tracking-widest">
          @mathewbushuru
        </p>
      </nav>
      <Button />
    </div>
  );
}

export default App;
