// app/layout.tsx
import React from "react";
import {outfit}
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative">
      <main className=" z-10 p-4">{children}</main> {/* Content will stay in place */}
        
      </body>
    </html>
  );
}
