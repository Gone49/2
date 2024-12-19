"use client";

import dynamic from "next/dynamic";
import { BrowserRouter } from "react-router-dom";

const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), { ssr: false });

export default function Layout({  }: { children: React.ReactNode }) {
  return (
    <div>
      <BrowserRouter></BrowserRouter>
      
      
    </div>
  );
}

