"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { docsConfig } from "../config/doc"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

  const toggleMenu = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu))
  }

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

          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((subItem) => (
                    <React.Fragment key={subItem.href}>
                      {!subItem.disabled &&
                        (subItem.href ? (
                          <MobileLink
                            href={subItem.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {subItem.title}
                            {subItem.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {subItem.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          subItem.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-2 pt-6">
            {/* Status */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("status")}
                className="w-full text-left"
              >
                Status
              </button>
              {activeDropdown === "status" && (
                <div className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-md">
                  <Link
                    href="/dashboard/genralward"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Active Treatment
                  </Link>
                  <Link
                    href="/dashboard/discharged"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Discharged
                  </Link>
                  <Link
                    href="/dashboard/deceased"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Deceased
                  </Link>
                </div>
              )}
            </div>

            {/* Appointments */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("appointments")}
                className="w-full text-left"
              >
                Appointments
              </button>
              {activeDropdown === "appointments" && (
                <div className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-md">
                  <Link
                    href="/dashboard/scheduled"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Scheduled
                  </Link>
                  <Link
                    href="/dashboard/completed"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Completed
                  </Link>
                  <Link
                    href="/dashboard/cancelled"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Cancelled
                  </Link>
                </div>
              )}
            </div>

            {/* Staff */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("staff")}
                className="w-full text-left"
              >
                Staff
              </button>
              {activeDropdown === "staff" && (
                <div className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-md">
                  <Link
                    href="/dashboard/staffpresent"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Staff Present
                  </Link>
                  <Link
                    href="/dashboard/staffleave"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Staff on leave
                  </Link>
                  <Link
                    href="/dashboard/leaverequest"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Leave Request
                  </Link>
                  <Link
                    href="/dashboard/staffmanage"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Management Access
                  </Link>
                </div>
              )}
            </div>

            {/* Reports */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("reports")}
                className="w-full text-left"
              >
                Reports
              </button>
              {activeDropdown === "reports" && (
                <div className="absolute left-0 mt-2 w-full rounded-md bg-white shadow-md">
                  <Link
                    href="/dashboard/Reports/blood"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Blood test
                  </Link>
                  <Link
                    href="/dashboard/Reports/oxygen"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Oxygen
                  </Link>
                  <Link
                    href="/dashboard/Reports/urinelysis"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Urinalysis
                  </Link>
                  <Link
                    href="/dashboard/Reports/heart"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Heart
                  </Link>
                  <Link
                    href="/dashboard/Reports/xray"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    X-ray
                  </Link>
                  <Link
                    href="/dashboard/Reports/ctscan"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    CT scan
                  </Link>
                  <Link
                    href="/dashboard/Reports/sonography"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Sonography
                  </Link>
                  <Link
                    href="/dashboard/Reports/endoscopy"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Endoscopy
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const MobileLink = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & {
    onOpenChange?: (open: boolean) => void
  }
>(({ className, children, onOpenChange, ...props }, ref) => {
  const { pathname } = useRouter() // Correct usage of pathname from next/router

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
})
MobileLink.displayName = "MobileLink"
