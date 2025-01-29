import type React from "react"
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


const Button = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
      <button className="relative inline-flex h-12 overflow-hidden rounded-3xl p-[1px] focus:outline-none md:mt-2">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] p-4 bg-[conic-gradient(from_90deg_at_50%_50%,#c1ff72_0%,#93c658_50%,#c1ff72_100%)]" />
          <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center px-7 hover:text-white rounded-3xl text-sm font-medium bg-[#c1ff72] group-hover:bg-slate-950 backdrop-blur-3xl gap-2 ${otherClasses}`}>
              {title}
          </span>
      </button>
  )
}

export default Button
export { buttonVariants };