"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

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
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {/* Status */}
        <div className="relative ml-8">
          <button
            onClick={() => toggleDropdown("status")}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/docs" ? "text-foreground" : "text-foreground/80"
            )}
          >
            Status
          </button>
          {activeDropdown === "status" && (
            <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
              <Link href="/status/active" className="block px-4 py-2 hover:bg-gray-100">
                Active
              </Link>
              <Link href="/status/inactive" className="block px-4 py-2 hover:bg-gray-100">
                Inactive
              </Link>
              <Link href="/status/leave" className="block px-4 py-2 hover:bg-gray-100">
                Leave
              </Link>
            </div>
          )}
        </div>

        {/* Appointments */}
        <div className="relative ml-2">
          <button
            onClick={() => toggleDropdown("appointments")}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs/components") &&
                !pathname?.startsWith("/docs/component/chart")
                ? "text-foreground"
                : "text-foreground/80"
            )}
          >
            Appointments
          </button>
          {activeDropdown === "appointments" && (
            <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
              <Link href="/appointments/upcoming" className="block px-4 py-2 hover:bg-gray-100">
                Upcoming
              </Link>
              <Link href="/appointments/past" className="block px-4 py-2 hover:bg-gray-100">
                Past
              </Link>
            </div>
          )}
        </div>

        {/* Staff */}
        <div className="relative ml-2">
          <button
            onClick={() => toggleDropdown("staff")}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/blocks")
                ? "text-foreground"
                : "text-foreground/80"
            )}
          >
            Staff
          </button>
          {activeDropdown === "staff" && (
            <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
              <Link
                  href="/dashboard/staffpresent"
                  className="block px-2 text-gray-700 hover:bg-cyan-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Staff Present
                </Link>
                <Link
                  href="/dashboard/staffleave"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Staff on leave
                </Link>
                <Link
                  href="/dashboard/leaverequest"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Leave Request
                </Link>
                <Link
                  href="/dashboard/staffmanage"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Management Access
                </Link>
            </div>
          )}
        </div>

        {/* Reports */}
        <div className="relative ml-2">
          <button
            onClick={() => toggleDropdown("reports")}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/docs/component/chart") ||
                pathname?.startsWith("/charts")
                ? "text-foreground"
                : "text-foreground/80"
            )}
          >
            Reports
          </button>
          {activeDropdown === "reports" && (
            <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
              <Link
                  href="/dashboard/Reports/blood"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Blood test
                </Link>
                <Link
                  href="/dashboard/Reports/oxygen"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Oxygen
                </Link>
                <Link
                  href="/dashboard/Reports/urinelysis"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Urinalysis
                </Link>
                <Link
                  href="/dashboard/Reports/heart"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Heart
                </Link>
                <Link
                  href="/dashboard/Reports/xray"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  X-ray
                </Link>
                <Link
                  href="/dashboard/Reports/lungs"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Lungs
                </Link>
                <Link
                  href="/dashboard/Reports/diabetes"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Diabetes
                </Link>
                <Link
                  href="/dashboard/Reports/ctscan"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  CT-scan
                </Link>
                <Link
                  href="/dashboard/Reports/mri"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  MRI
                </Link>
                <Link
                  href="/dashboard/Reports/endoscopy"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Endoscopy
                </Link>
                <Link
                  href="/dashboard/Reports/ecg"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  ECG
                </Link>
                <Link
                  href="/dashboard/Reports/ultrasound"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Ultrasound
                </Link>
                <Link
                  href="/dashboard/Reports/asthma"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setActiveDropdown(null)}
                >
                  Others
                </Link>
            </div>
          )}
        </div>

        {/* Others */}
        <div className="relative ml-2">
  <button
    onClick={() => toggleDropdown("others")}
    className={cn(
      "transition-colors hover:text-foreground/80",
      pathname?.startsWith("/themes")
        ? "text-foreground"
        : "text-foreground/80"
    )}
  >
    Others
  </button>
  {activeDropdown === "others" && (
    <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-md">
      <Link
        href="/dashboard/update"
        className="block px-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setActiveDropdown(null)}
      >
        Update
      </Link>
      <Link
        href="/dashboard/report"
        className="block px-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setActiveDropdown(null)}
      >
        Report Issue
      </Link>
      <Link
        href="/dashboard/feedback"
        className="block px-2 text-gray-700 hover:bg-gray-100"
        onClick={() => setActiveDropdown(null)}
      >
        Feedback
      </Link>
    </div>
      )}
       </div>
      </nav>
    </div>
  );
}
