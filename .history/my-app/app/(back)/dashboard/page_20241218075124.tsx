"use client";

import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), { ssr: false });

export default function Layout({  }: { children: React.ReactNode }) {
  return (
    <div>
      <Dashboard />
     
    </div>
  );
}

