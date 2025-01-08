"use client"; // Ensure the component is treated as a client-side component
import React, { useEffect, useState } from "react";


const Hero: React.FC = () => {
  const texts = [
    "Transforming Healthcare with Technology",
    "Connecting You to Better Healthcare",
    "Empowering Healthcare Solutions",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length); // Update text index
        setFade(true); // Start fade-in
      }, 800); // Time for fade-out to complete
    }, 4000); // Time between transitions

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts.length]);

  return (
    <section
      className="relative bg-white text-black flex-1 flex items-center justify-center bg-cover bg-center" 
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?healthcare')",
        // marginTop: "8rem", // Add enough margin to match navbar and search bar height
      }}
    >
      <div className="z-10 text-center px-6 sm:px-12">
        <h1
          className={`text-5xl sm:text-6xl font-bold leading-tight mb-6 transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentText]}
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          A better way to connect with healthcare services. Fast, reliable, and
          always available for your needs.
        </p>
      </div>
    </section>
  );
};

export default Hero;
