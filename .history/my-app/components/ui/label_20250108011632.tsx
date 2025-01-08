import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Variants for the Label component
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

// Forward ref to the Label component and accept className and other props
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>>(
  ({ className, children, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}  // Properly handle the className
      {...props}
    >
      {children}  {/* Render the children of the Label */}
    </LabelPrimitive.Root>
  )
)

// Give the component a display name
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
