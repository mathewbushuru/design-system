import { Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-secondary p-3 sm:p-6">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-lg font-medium uppercase tracking-wider sm:text-xl">
          Twist & Dawkins
        </h1>
        <div className="flex items-center gap-2">
          <Search className="h-5 w-5 hover:text-link" />
          <Menu className="h-6 w-6 hover:text-link" />
        </div>
      </div>
      
      <h3 className="py-14 text-center font-serif text-2xl font-medium tracking-wider sm:text-left sm:text-4xl">
        About Twist
      </h3>
    </div>
  );
}
