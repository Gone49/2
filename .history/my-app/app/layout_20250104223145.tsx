// app/layout.tsx
import React from "react";
import "./globals.css";
import Provider from "@/components/Provider";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative">
      <main className=" z-10 p-4">
         {/* Content will stay in place */}
        <Provider>
        {children}
        </Provider>
        </main>
      </body>
    </html>
  );
}
