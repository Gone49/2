"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Home",
       link=
    },
    {
      title: "Components",
      dropdown: [
        { title: "Button", link: "/docs/components/button" },
        { title: "Card", link: "/docs/components/card" },
      ],
    },
    {
      title: "Blocks",
      dropdown: [
        { title: "Hero Section", link: "/blocks/hero" },
        { title: "Footer", link: "/blocks/footer" },
      ],
    },
    {
      title: "Charts",
      dropdown: [
        { title: "Line Chart", link: "/charts/line" },
        { title: "Bar Chart", link: "/charts/bar" },
      ],
    },
    {
      title: "Themes",
      dropdown: [
        { title: "Dark Theme", link: "/themes/dark" },
        { title: "Light Theme", link: "/themes/light" },
      ],
    },
    {
      title: "Colors",
      dropdown: [
        { title: "Primary Colors", link: "/colors/primary" },
        { title: "Secondary Colors", link: "/colors/secondary" },
      ],
    },
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {menuItems.map((item) => (
          <div key={item.title} className="relative">
            <button
              onClick={() => toggleDropdown(item.title)}
              className={cn(
                "transition-colors hover:text-foreground/80",
                activeDropdown === item.title
                  ? "text-foreground"
                  : "text-foreground/80"
              )}
            >
              {item.title}
            </button>
            {item.dropdown && activeDropdown === item.title && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                {item.dropdown.map((dropdownItem) => (
                  <li key={dropdownItem.title}>
                    <Link
                      href={dropdownItem.link}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {dropdownItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
