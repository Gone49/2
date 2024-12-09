import Footer from "@/components/Frontend/Footer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div> {children}
      <Footer /></div>
                                                       
    
  );
}
