
import NavBar from "@/components/Dashboard/NavBar";
import Footer from "@/components/Frontend/Footer";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div className="bg">
    <div><NavBar /></div>
    <div className="p-3">{children}</div> 
    <div className=" bottom-0  bg-gray-800 text-white"><Footer /></div>
  </div>
      
  )}
