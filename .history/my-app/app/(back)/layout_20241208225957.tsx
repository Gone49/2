import Footer from "@/components/Frontend/Footer";
app/layout.tsx or app/layout.js

import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children} {/* Your app's content */}
        </SessionProvider>
      </body>
    </html>
  );
}
