'use client'; // This makes the component a client component

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const { slug } = useParams(); // Access the slug parameter

  if (!slug) {
    return <div className="text-center text-red-500">Doctor's information not found.</div>;
  }

  // Sample available appointment times (you can fetch this data from an API or database later)
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    // Sample data - you can replace this with a call to your API to fetch available times
    setAvailableTimes(['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM']);
  }, []);

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
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
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
        <div className="text-center sm:text-left">
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

      {/* Available Appointment Times Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Available Appointment Times</h3>
        {availableTimes.length === 0 ? (
          <p className="text-gray-600">No available appointment times for this doctor.</p>
        ) : (
          <ul className="space-y-2">
            {availableTimes.map((time, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-bold">{time}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}