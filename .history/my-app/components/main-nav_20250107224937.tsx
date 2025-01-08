"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-10 hidden md:flex">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80 ml-16",
            pathname === "/docs" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Home
        </Link>
      <nav className="flex items-center - gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80 ml-8",
            pathname === "/docs" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Status
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80 ",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Appoinments
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80 ml-8",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Staff
        </Link>
        <Link
          href="/charts"
          className={cn(
            "transition-colors hover:text-foreground/80 ml-8",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/charts")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Reports
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80 ml-8",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Others
        </Link>
      </nav>
    </div>
  )
}