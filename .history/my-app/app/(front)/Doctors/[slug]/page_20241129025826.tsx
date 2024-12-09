import React from 'react';
import Image from 'next/image';
import {Link from 'next/link';

function Page() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Dr. John Doe</h1>
        <p className="text-xl text-gray-600">Experienced Cardiologist</p>
      </header>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Profile Picture */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0 rounded-full border-4 border-blue-600 overflow-hidden">
        <Image
        src="https://via.placeholder.com"
        alt="Doctor's Profile"
      />
        </div>

        {/* Profile Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Dr. John Doe</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Specialization:</span> Cardiology
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Experience:</span> 15 years
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Bio:</span> Dr. John Doe is a leading cardiologist specializing in heart disease prevention, diagnosis, and treatment. With 15 years of experience, he is dedicated to providing high-quality, patient-centered care.
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
      <div className="flex justify-center mt-8 space-x-6">
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

export default Page;
