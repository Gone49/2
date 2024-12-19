import Footer from "@/components/Frontend/Footer";
import Das
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    <Navbar />
  
    {children}
    <Footer />
  </div>
      
  )}