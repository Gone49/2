"use client";

import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Hospital } from "lucide-react";
import { Session } from "next-auth";






interface DateTime {
  date: number | string;
  time: string;
  day: string;
  month: string;
  year: number;
}

function Navbar({session}: {session: Session}) {
  const user=session.user

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
      <div className="flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center  ml-8">
          
          <h1 className="font-serif font-thin text-2xl">CareBridge</h1>
        </Link>

        {/* Hospital Info */}
        <div className="flex flex-col items-center mx-auto mb-2 mr-16">
          <h4 className="text-2xl font-light font-serif">
            Authorised Hospital Digitalised System
          </h4>
          <h5 className="text-xl font-light mt-2 font-serif">
            <span className="ml-24">Hospital Name: {user.name}</span><br />
            <span className="ml-20">:{user.id}</span><br />
          </h5>

          {/* Real-time Date, Day, Year, and Time */}
          <p id="dateTime" className="text-lg">
            {`${dateTime.day}, ${dateTime.date}-${dateTime.month} ${dateTime.year}, ${dateTime.time}`}
          </p>
        </div>

        {/* Logout a */}
        <div className="ml-auto -bottom-3">
          <Link
            href="/login"
            className="text-gray-800 bg-gray-00 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 rounded-lg py-2 px-3"
          >
            Logout
          </Link>
        </div>
      </div>
      {/* Navigation Bar with Cyan Background */}
  
      </div> )}
      
  


export default Navbar;
