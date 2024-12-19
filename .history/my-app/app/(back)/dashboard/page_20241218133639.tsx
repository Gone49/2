"use client";

import dynamic from "next/dynamic";
import { Route, Routes, Link } from "react-router-dom";

// Dynamically import components
const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), { ssr: false });
const Active
const BrowserRouter = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), {
  ssr: false, // Disable SSR for BrowserRouter
});

export default function Layout() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          {/* Navigation Links */}
          <Link to="/dashboard">Dashboard</Link> | <Link to="/active">Active</Link>
        </nav>
        <Routes>
          {/* Define Routes for Components */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/active" element={<Active />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
