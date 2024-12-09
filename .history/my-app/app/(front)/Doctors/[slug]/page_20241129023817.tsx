import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Doctor's Profile</h1>
        <p className="text-gray-600 mt-2">Detailed information about the doctor</p>
      </header>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Profile Picture */}
        <
        <div className="w-28 h-28 sm:w-36 sm:h-36 flex-shrink-0 rounded-full border-2 border-blue-600 overflow-hidden relative">
          <Image
            src="https://via.placeholder.com/150"
            alt="Doctor's Profile"
            width={150} // Specify width
            height={150} // Specify height
            className="object-cover" // Styling
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

      {/* Actions */}
      <div className="flex justify-center mt-6 space-x-6">
        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
          <Link href="/">Back to Dashboard</Link>
        </button>
        <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
}

