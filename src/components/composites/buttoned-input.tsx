import { type LucideIcon } from "lucide-react";
import { type ClassValue } from "clsx";

import { cn } from "@/lib/utils";

import Button from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";

interface IconedInputProps extends React.HTMLAttributes<HTMLDivElement> {
  action: LucideIcon | string;
  placeholder?: string;
  inputStyles?: ClassValue;
  buttonStyles?: ClassValue;
}

export default function ButtonedInput({
  action,
  placeholder,
  className,
  inputStyles,
  buttonStyles,
}: IconedInputProps) {
  const Action = action;
  return (
    <div className={cn("flex", className)}>
      <Input
        className={cn(
          "rounded-r-none focus-visible:ring-transparent",
          inputStyles,
        )}
        placeholder={placeholder}
      />
      <Button className={cn("rounded-l-none", buttonStyles)}>
        {typeof action === "string" ? action : <Action className="h-5 w-5" />}
      </Button>
    </div>
  );
}
