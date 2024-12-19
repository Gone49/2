// import Footer from "@/components/Frontend/Footer";
// import Navbar from "@/components/Dashboard/NavBar";
import InventoryDashboard from "@/components/Dashboard/Dashboard";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <div>
    {/* <Navbar /> */}
    <InventoryDashboard
    {children}Your app's content
    {/* <Footer /> */}
  </div>
      
  )}
