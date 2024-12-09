import React, { useState, useEffect } from "react";
import Link from "next/link";

const Logo = () => {
  const [isClient, setIsClient] = useState(false);

  // To handle client-only rendering
  useEffect(() => {
    setIsClient(true); // Ensure this only runs on the client side
  }, []);

  return (
    <Link href="/" className="flex justify-center items-center">
      <h1
        className={`text-2xl font-serif font-bold text-gray-900 ${
          isClient
            ? "bg-gradient-to-r from-black via-gray-500 to-transparent bg-clip-text text-transparent"
            : ""
        }`}
      >
        CareBridge
      </h1>
    </Link>
  );
};

export default Logo;
