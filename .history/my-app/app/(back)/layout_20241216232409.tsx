
import Footer from "@/components/Frontend/Footer";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    <div className="">{children}</div> 
    <div ></div><Footer />
  </div>
      
  )}
