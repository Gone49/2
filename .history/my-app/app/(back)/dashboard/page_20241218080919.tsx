// Layout component
import dynamic from "next/dynamic";
import re

// Dynamically import Dashboard with ssr: false
const Dashboard = dynamic(() => import("@/components/Dashboard/Dashboard"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Layout({  }: { children: React.ReactNode }) {
  return (
    <div>
      {/* This ensures Dashboard is rendered only on the client side */}
      <Dashboard />
    </div>
  );
}

