"use client";

import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Link from 'next/link';


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
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center  ml-8">
          
          <h1 className="font-serif font-thin text-2xl">CareBridge</h1>
        </Link>

        {/* Hospital Info */}
        <div className="flex flex-col items-center mx-auto mb-2">
          <h4 className="text-2xl font-light font-serif">
            Authorised Hospital Digitalised System
          </h4>
          <h5 id="hospitalName" className="text-xl font-light mt-2 font-serif">
            <span id="hospitalCode">Hospital: {}</span>
          </h5>

          {/* Real-time Date, Day, Year, and Time */}
          <p id="dateTime" className="text-lg">
            {`${dateTime.day}, ${dateTime.date}-${dateTime.month} ${dateTime.year}, ${dateTime.time}`}
          </p>
        </div>

        {/* Logout a */}
        <div className="ml-auto pt-">
          <Link
            href="/login"
            className="text-gray-800 bg-cyan-100 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 py-2"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* Navigation Bar with Cyan Background */}
      <nav className="bg-cyan-500 shadow sticky z-50">
        <div className="flex items-center justify-between ">
         
          {/* Desktop Navigation */}
          <ul className={`flex space-x-6 font-medium`}>
            <li>
              <Link
                href="/"
                className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 ml-16"
              >
                Home
              </Link>
            </li>

            {/* Status Dropdown */}
            <li className="relative" ref={statusRef}>
              <button
                onClick={() => toggleDropdown("status")}
                className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 focus:outline-none"
              >
                Status
              </button>
              {activeDropdown === "status" && (
                <div className="absolute w-40 bg-gray-200 text-gray-700 border border-gray-200">
                  <div className="relative group">
                    <Link href="/icu" className="block px-2 hover:bg-gray-100">
                      Active Treatment
                    </Link>
                    <div className="absolute left-full top-0 w-28 bg-gray-200 text-gray-700 hidden group-hover:block">
                      <Link
                        href="status/general-ward"
                        className="block px-1 hover:bg-gray-100"
                      >
                        General Ward
                      </Link>
                      <Link href="/icu" className="block px-1 hover:bg-gray-100">
                        ICU
                      </Link>
                    </div>
                  </div>
                  <Link href="/discharged" className="block px-2 hover:bg-gray-100">
                    Discharged
                  </Link>
                  <Link href="/deceased" className="block px-2 hover:bg-gray-100">
                    Deceased
                  </Link>
                </div>
              )}
            </li>

            <li className="relative" ref={appointmentRef}>
              <button
                onClick={() => toggleDropdown("appointment")}
                className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 focus:outline-none"
              >
                Appointments
              </button>
              {activeDropdown === "appointment" && (
                <div className="absolute w-36 bg-gray-200 border border-gray-200 ">
                  <Link href="/scheduled" className="block px-2 text-gray-700 hover:bg-gray-100">
                    Scheduled
                  </Link>
                  <Link href="/completed" className="block px-2 text-gray-700 hover:bg-gray-100">
                    Completed
                  </Link>
                  <Link href="/cancelled" className="block px-2 text-gray-700 hover:bg-gray-100">
                    Cancelled
                  </Link>
                </div>
              )}
            </li>

               {/* Staff Dropdown */}
          <li className="relative" ref={staffRef}>
            <button
              onClick={() => toggleDropdown("staff")}
              className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 focus:outline-none"
            >
              Staff
            </button>
            {activeDropdown === "staff" && (
              <div className="absolute w-44 bg-gray-200 border border-gray-200 ">
                <Link
                  href="/present"
                  className="block px-2 text-gray-700 hover:bg-cyan-100"
                >
                  Staff Present
                </Link>
                <Link
                  href="/leave"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Staff on leave
                </Link>
                <Link
                  href="/request"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Leave Request
                </Link>
                <Link
                  href="/manage"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Management Access
                </Link>
              </div>
            )}
          </li>

          {/* Reports Dropdown */}
          <li className="relative" ref={reportsRef}>
            <button
              onClick={() => toggleDropdown("reports")}
              className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 focus:outline-none"
            >
              Reports
            </button>
            {activeDropdown === "reports" && (
              <div className="absolute w-36 bg-gray-200 border border-gray-200">
                <Link
                  href="/reports/option1"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Blood test
                </Link>
                <Link
                  href="/reports/option36"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Oxygen
                </Link>
                <Link
                  href="/reports/option2"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Urinalysis
                </Link>
                <Link
                  href="/reports/option3"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Heart
                </Link>
                <Link
                  href="/reports/option4"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  X-ray
                </Link>
                <Link
                  href="/reports/option5"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Lungs
                </Link>
                <Link
                  href="/reports/option6"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Diabetes
                </Link>
                <Link
                  href="/reports/option7"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  CT-scan
                </Link>
                <Link
                  href="/reports/option8"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  MRI
                </Link>
                <Link
                  href="/reports/option9"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Endoscopy
                </Link>
                <Link
                  href="/reports/option10"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  ECG
                </Link>
                <Link
                  href="/reports/option11"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Ultrasound
                </Link>
                <Link
                  href="/reports/option12"
                  className="block px-2 text-gray-700 hover:bg-gray-100"
                >
                  Others
                </Link>
              </div>
            )}
          </li>
      
          {/* Others with Dropdown */}
          <li className="relative" ref={othersRef}>
            <button
              onClick={() => toggleDropdown("others")}
              className="block py-5 px-3 duration-200 text-gray-700 hover:text-orange-700 focus:outline-none"
            >
              Others
            </button>
            {activeDropdown === "others" && (
              <div className="absolute w-36 bg-gray-200 border border-gray-200 ">
                <Link
                  href="/update"
                  className="block px-2  text-gray-700 hover:bg-gray-100"
                >
                  Update
                </Link>
                <Link
                  href="/reportissue"
                  className="block px-2  text-gray-700 hover:bg-gray-100"
                >
                  Report Issue
                </Link>
                <Link
                  href="/feedback"
                  className="block px-2  text-gray-700 hover:bg-gray-100"
                >
                  Feedback
                </Link>
              </div>
            )}
          </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
