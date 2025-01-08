"use client";

import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Hospital } from "lucide-react";
import { SiteHeader } from "../site-header";



interface DateTime {
  date: number | string;
  time: string;
  day: string;
  month: string;
  year: number;
}

function Navbar() {

  const [dateTime, setDateTime] = useState<DateTime>({
    date: "",
    time: "",
    day: "",
    month: "",
    year: 0,
  });

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const statusRef = useRef<HTMLLIElement | null>(null);
  const appointmentRef = useRef<HTMLLIElement | null>(null);
  const staffRef = useRef<HTMLLIElement | null>(null);
  const reportsRef = useRef<HTMLLIElement | null>(null);
  const othersRef = useRef<HTMLLIElement | null>(null);
  

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      statusRef.current && !statusRef.current.contains(target) &&
      appointmentRef.current && !appointmentRef.current.contains(target) &&
      staffRef.current && !staffRef.current.contains(target) &&
      reportsRef.current && !reportsRef.current.contains(target) &&
      othersRef.current && !othersRef.current.contains(target)
    ) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const day = dayNames[now.getDay()];
      const date = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      const time = now.toLocaleTimeString();

      setDateTime({ day, date, month, year, time });
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="border-b py-4">
  {/* Company Logo and Name */}
  <div className="flex flex-col lg:flex-row items-center justify-between">
    <Link href="/dashboard" className="flex items-center mb-4 lg:mb-0 ml-4 lg:ml-8">
      <h1 className="font-serif font-thin text-xl sm:text-2xl">CareBridge</h1>
    </Link>

    {/* Hospital Info */}
    <div className="flex flex-col items-center text-center lg:mx-auto lg:mb-2 lg:mr-16">
      <h4 className="text-lg sm:text-xl lg:text-2xl font-light font-serif">
        Authorised Hospital Digitalised System
      </h4>
      <h5 id="hospitalName" className="text-sm sm:text-lg lg:text-xl font-light mt-2 font-serif">
        <span id="hospitalCode">Hospital: {Hospital.name}</span>
      </h5>

      {/* Real-time Date, Day, Year, and Time */}
      <p id="dateTime" className="text-xs sm:text-sm lg:text-lg">
        {`${dateTime.day}, ${dateTime.date}-${dateTime.month} ${dateTime.year}, ${dateTime.time}`}
      </p>
    </div>

    {/* Logout */}
    <div className="ml-auto mt-4 lg:mt-0 lg:ml-0 lg:-bottom-3">
      <Link
        href="/login"
        className="text-gray-800 bg-gray-00 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-lg py-2 px-3 text-sm sm:text-base"
      >
        Logout
      </Link>
    </div>
  </div>
</div>)



export default Navbar;