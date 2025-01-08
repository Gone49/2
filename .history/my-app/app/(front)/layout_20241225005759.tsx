

// import Footer from "@/components/Frontend/Footer";
import Navbar from "@/components/Frontend/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content   Native Navbaar */}
      <main className="flex-grow mt-24">{children}</main>              

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
