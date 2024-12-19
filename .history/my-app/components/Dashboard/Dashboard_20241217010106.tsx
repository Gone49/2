import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 space-y-6 md:space-y-0">
      {/* Left Section: Search Patient */}
      <div className="w-full md:w-2/4 max-w-md">
        <h2 className="text-xl font-serif text-center mb-4">Search Patient</h2>
        <div className="flex">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
            placeholder="Enter UPIN"
          />
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div>

      {/* Right Section: Upcoming Appointments */}
      <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg md:ml-2 md:mr-20">
        <h2 className="text-2xl font-serif mb-4">Upcoming Appointments</h2>

        {/* Appointment 1 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold">UPIN: 123456</p>
          <p className="text-sm text-gray-600">Weakness, Headache</p>
          <p className="text-xs text-gray-500">Scheduled for: 10:30 AM, Sep 25</p>
        </div>

        {/* Appointment 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold">UPIN: 789012</p>
          <p className="text-sm text-gray-600">Heart Pain</p>
          <p className="text-xs text-gray-500">Scheduled for: 11:00 AM, Sep 25</p>
        </div>

        {/* Appointment 3 */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm font-semibold">UPIN: 345678</p>
          <p className="text-sm text-gray-600">Fever, Sore Throat</p>
          <p className="text-xs text-gray-500">Scheduled for: 11:30 AM, Sep 25</p>
        </div>

        <button className="w-full bg-cyan-500 text-white mt-4 py-2 rounded">
          View All
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        {[
          { name: "Blood Reports", path: "/blood-reports" },
          { name: "Oxygen", path: "/oxygen" },
          { name: "Asthma", path: "/asthma" },
          { name: "X-ray", path: "/xray" },
          { name: "CT Scan", path: "/ct-scan" },
          { name: "MRI", path: "/mri" },
        ].map((feature, index) => (
          <div
            key={index}
            onClick={() => console.log(`Navigate to ${feature.path}`)}
            className="bg-cyan-100 text-center py-3 rounded shadow cursor-pointer hover:bg-cyan-200"
          >
            {feature.name}
          </div>
        ))}
      </div>
    </div>
  );
}
