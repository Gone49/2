import Dashboard from "@/components/Dashboard/Dashboard";
import Footer from "@/components/Frontend/Footer";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
   
  
    {children}
    <Footer />
  </div>
      
  )}
