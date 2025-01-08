

import { MainNav } from "@/components/main-nav"
// import { MobileNav } from "@/components/mobile-nav"
// import { ModeSwitcher } from "@/components/mode-switcher"
import { Button } from "./ui/button"
import { Link, Mail } from "lucide-react"


export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          {/* <MobileNav /> */}
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* <CommandMenu />(search bar) */}
            </div>
            <nav className="flex items-center gap-0.5">
            <Button asChild>
             <Link href = "/login">
              <Mail className="mr-" /> Login with Email</Link>
                </Button>
    
              {/* <ModeSwitcher /> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}