import Footer from "@/components/Frontend/Footer";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SessionProvider></SessionProvider> {children}
      <Footer /></div>
      
      // Doctors dashbord
    
  );
}
