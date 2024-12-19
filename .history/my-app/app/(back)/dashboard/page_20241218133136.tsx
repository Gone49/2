"use client";
import re
import dynamic from "next/dynamic";

// Dynamically import BrowserRouter to ensure it's only rendered client-side
const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), { ssr: false });
const BrowserRouter = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), {
  ssr: false, // Disable SSR for BrowserRouter
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BrowserRouter>
        <Dashboard />
        {children}
      </BrowserRouter>
    </div>
  );
}
