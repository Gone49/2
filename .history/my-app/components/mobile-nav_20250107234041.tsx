"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

import { docsConfig } from "../config/doc"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const toggleMenu = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <div>
      <Button
        onClick={toggleMenu}
        variant="ghost"
        className="-ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="!size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {open && (
        <div className="absolute top-0 left-0 z-50 w-full max-h-[60svh] overflow-auto bg-white p-6">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  className?: string
  children: React.ReactNode // This ensures children prop is correctly typed
}

const MobileLink = React.forwardRef<HTMLAnchorElement, MobileLinkProps>(
  ({ className, children, onOpenChange, ...props }, ref) => {
    const { pathname } = useRouter()

    const isActive = pathname === props.href

    return (
      <Link
        ref={ref}
        className={cn(
          "text-sm font-medium text-muted-foreground hover:text-primary",
          className,
          isActive ? "text-primary" : ""
        )}
        {...props}
        onClick={() => onOpenChange?.(false)}
      >
        {children}
      </Link>
    )
  }
)

MobileLink.displayName = "MobileLink"
