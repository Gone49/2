"use client";

import dynamic from "next/dynamic";
import { Route, Routes } from "react-router-dom";

// Dynamically import components
const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), { ssr: false });
const BrowserRouter = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), {
  ssr: false, // Disable SSR for BrowserRouter
});

export default function Layout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Define Routes for Components */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
