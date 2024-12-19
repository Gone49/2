"use client";

import React from "react";
import Navbar from "@/components/Dashboard/NavBar"; // Update the path as per your file structure

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar /> {/* Add the Navbar here */}
      <main>{children}</main>
    </div>
  );
}
