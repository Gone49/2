"use client"; // Ensure the component is treated as a client-side component

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [, setCurrentText] = useState(0);
  const [, setFade] = useState(true);

  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  const texts = [
    "Transforming Healthcare with Technology",
    "Connecting You to Better Healthcare",
    "Empowering Healthcare Solutions",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 800);
    }, 3500);

    return () => clearInterval(interval);
  }, [texts.length]); // Add texts.length to the dependency array

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Searching for:", event.target.value);
  };

  return (
    <div className="min-h-20 flex flex-col">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full bg-cyan-500 text-white shadow-md py-3 mt-1 px-4 border-b border-gray-200 z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Left Section: Sidebar Icon + Company Name */}
          <div className="flex items-center space-x-4">
            {/* Sidebar Toggle Icon */}
            <button
              onClick={toggleSidebar}
              className="text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition"
            >
              Menu
              <i
                className={`fas ${
                  sidebarOpen ? "fa-times" : "fa-bars"
                } text-xl`}
              ></i>
            </button>

            {/* Company Name */}
        
           <Logo />

          </div>

          {/* Right Section: Login Button */}
          <Link
            href="/login"
            className="px-4 py-2 bg-cyan-500 text-white shadow-md font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Search Bar Section */}
      <div className="fixed top-16 left-0 w-full bg-white shadow-md py-2 px-6 mt-3 border-b border-gray-200 z-40 flex items-center justify-center">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search For Doctors..."
          className="p-2 border rounded-md flex-grow max-w-lg focus:ring focus:ring-cyan-300"
        />
        <button
          onClick={() => console.log("Search button clicked")}
          className="ml-2 p-2 bg-cyan-500 text-white rounded-md hover:bg-yellow-400 transition"
        >
          Search
        </button>
      </div>

      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar} // Close sidebar when backdrop is clicked
          ></div>
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 z-50 flex flex-col justify-between">
            <div>
              <div className="font-bold text-lg mb-4">Namaaste Bhidu,</div>
              {/* Navigation Section */}
              <ul className="space-y-2 divide-y divide-gray-600">
                <li className="pt-2">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Appointments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#records"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Health Records
                  </Link>
                </li>
                <li>
                  <Link
                    href="#settings"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Setting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logout Button */}
            <div className="mt-auto">
              <Link
                href="/login"
                className="block w-full text-center text-gray-800 bg-orange-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 py-2 "
              >
                Logout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
