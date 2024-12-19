
import NavBar from "@/components/Dashboard/NavBar";
import Footer from "@/components/Frontend/Footer";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    <div><NavBar /></div>
    <div className="p-2">{children}</div> 
    <div className="absolute bottom-0 w-full bg-gray-800 text-white"><Footer /></div>
  </div>
      
  )}
