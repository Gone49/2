import React from 'react';

const DoctorWelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome, Dr. [Doctor's Name]</h1>
        <p className="mt-2 text-lg text-gray-600">We're glad to have you as part of our healthcare provider network.</p>
      </div>

      {/* Key Information or Actions */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-700">Your Dashboard</h2>
        <p className="mt-2 text-gray-600">
          From here, you can access your appointments, patient records, and update your information. Let's get started!
        </p>

        {/* Navigation Buttons */}
        <div className="mt-6 space-y-4">
          <a
            href="/appointments"
            className="block text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            View Appointments
          </a>
          <a
            href="/patients"
            className="block text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            View Patient Records
          </a>
          <a
            href="/settings"
            className="block text-center bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600"
          >
            Update Profile & Settings
          </a>
        </div>
      </div>

      {/* Log Out Section */}
      <div className="mt-8">
        <a
          href="/logout"
          className="text-red-500 font-semibold hover:underline"
        >
          Log Out
        </a>
      </div>
    </div>
  );
};

export default DoctorWelcomePage;
