import React, { useState, useEffect } from "react";
import Link from "next/link";

const Logo = () => {
  const [isClient, setIsClient] = useState(false);

  // To handle client-only rendering
  useEffect(() => {
    setIsClient(true); // Ensure this only runs on the client side
  }, []);

  return (
    <Link href="/" className="flex justify-center items-center font-serif ">
      
        CareBridge
      
    </Link>
  );
};

export default Logo;
