import { Search, Menu } from "lucide-react";

export default function TwistDawkins() {
  return (
    <div className="h-48 bg-popover">
      {/* Header  */}
      <div className="bg-secondary p-3 sm:p-6">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-lg uppercase tracking-wider sm:text-xl">
            Twist & Dawkins
          </h1>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 hover:text-link" />
            <Menu className="h-6 w-6 hover:text-link" />
          </div>
        </div>
        <div className="font-serif text-center text-2xl py-8 tracking-wider sm:text-left sm:text-4xl">
          About Twist
        </div>
      </div>
    </div>
  );
}
