import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/shared/lib/utils/tailwind-cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border border-1px border-gray-200 bg-grey-200 p-2.5 text-horizontal font-mono transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus:border-blue-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 ",
        className
      )}
      {...props}
    />
  )
}

export { Input }
