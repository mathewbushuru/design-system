import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-sm ui-font-medium focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50",
  {
    variants: {
      variant: {
        default:
          "ui-bg-primary ui-text-primary-foreground focus-visible:ui-ring-primary hover:ui-bg-primary/80",
        destructive:
          "ui-bg-destructive ui-text-destructive-foreground focus-visible:ui-ring-destructive hover:ui-bg-destructive/80",
        outline:
          "ui-border ui-border-primary ui-bg-background ui-text-primary hover:ui-bg-primary hover:ui-text-primary-foreground focus-visible:ui-ring-primary",
        secondary:
          "ui-bg-secondary ui-text-secondary-foreground hover:ui-bg-secondary/50 focus-visible:ui-ring-primary",
        ghost: "ui-text-secondary-foreground hover:ui-bg-secondary",
        link: "ui-text-primary ui-underline-offset-4 hover:ui-underline",
      },
      size: {
        default: "ui-h-10 ui-px-4 ui-py-2",
        sm: "ui-h-9 ui-rounded-md ui-px-3",
        lg: "ui-h-11 ui-px-8",
        icon: "ui-h-10 ui-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      />
    );
  }
);

export { Button, type buttonVariants, type buttonProps };
