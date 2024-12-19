
import Footer from "@/components/Frontend/Footer";

import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
   
  
    <div class>{children}</div> 
    <Footer />
  </div>
      
  )}
