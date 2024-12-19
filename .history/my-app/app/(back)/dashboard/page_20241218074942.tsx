"use client";

import Dashboard from "@/components/Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";

export default function Layout() {
  return (
    <BrowserRouter>
      <div>
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}
