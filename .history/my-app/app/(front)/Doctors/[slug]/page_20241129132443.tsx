'use client'; // This makes the component a client component

import React, { useState } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import Link from 'next/link';
import DatePicker from 'react-datepicker'; // No CSS import here
import TimePicker from 'react-time-picker'; // No CSS import here

export default function Page() {
  const { slug } = useParams(); // Access the slug parameter

  // States for selected date and time
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('10:00');

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: string | null) => {
    if (time !== null) {
      setSelectedTime(time);
    }
  };

  if (!slug) {
    return <div className="text-center text-red-500">Doctor's information not found.</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Doctor's Profile</h1>
        <p className="text-gray-600 mt-2">
          Detailed information about the doctor {`(ID: ${slug})`}
        </p>
      </header>

      {/* Profile Section */}
      <div className="w-full bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex flex-col items-center sm:items-start">
          {/* Profile Picture */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded-full border-2 border-blue-600 overflow-hidden relative">
            <Image
              src="https://via.placeholder.com/150"
              alt="Doctor's Profile"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center sm:text-left mt-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Dr. John Doe</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Specialization:</span> Cardiology
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Experience:</span> 15 years
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">Bio:</span> Dr. John Doe is a highly experienced
              cardiologist who specializes in treating complex heart conditions and providing
              compassionate care to patients.
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Contact:</span> +1234567890
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Email:</span>{' '}
              <Link href="mailto:johndoe@example.com" className="text-blue-600 underline">
                johndoe@example.com
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Book an Appointment</h3>
        
        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="border-2 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-600" // Tailwind styling here
            calendarClassName="bg-white border-2 border-gray-300 rounded-lg" // Custom styling for calendar popup
            dayClassName="text-gray-600 hover:bg-blue-100" // Custom styling for day cells
          />
        </div>

        {/* Time Picker */}
        <div>
          <label className="block text-gray-600 mb-2">Select Time</label>
          <TimePicker
            onChange={handleTimeChange}
            value={selectedTime}
            className="border-2 p-4 rounded-lg w-full bg-white text-black text-x focus:outline-none focus:ring-2 focus:ring-blue-600" // Larger padding and font size
          />
        </div>
      </div>
    </div>
  );
}

