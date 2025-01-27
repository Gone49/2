import Footer from "@/components/Frontend/Footer";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children} {/* Your app's content */}
    </SessionProvider>
  );
}
    
  );
}
