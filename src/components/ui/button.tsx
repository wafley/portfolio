import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 border-foreground bg-clip-padding text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-primary active:not-aria-[haspopup]:translate-x-[4px] active:not-aria-[haspopup]:translate-y-[4px] active:not-aria-[haspopup]:shadow-none disabled:pointer-events-none disabled:opacity-50 shadow-[4px_4px_0_0_var(--color-foreground)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0_0_var(--color-foreground)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "bg-background text-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        ghost:
          "border-transparent shadow-none hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 hover:bg-muted text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        link: "border-transparent shadow-none hover:shadow-none hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 px-4 py-2 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
