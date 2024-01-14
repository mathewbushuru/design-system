import { type LucideIcon } from "lucide-react";

import Button from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";

interface IconedInputProps extends React.HTMLAttributes<HTMLDivElement> {
  action: LucideIcon | string;
}

export default function IconedInput({ action }: IconedInputProps) {
  const Action = action;
  return (
    <div className="flex">
      <Input className="rounded-r-none focus-visible:ring-transparent" />
      <Button className="rounded-l-none">
        {typeof action === "string" ? action : <Action className="w-5 h-5"/>}
      </Button>
    </div>
  );
}
