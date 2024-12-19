import React, { useState } from "react";
import { Link, Nink } from "react-router-dom";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([
    { upin: "123456", details: "Weakness, Headache", time: "10:30 AM, Sep 25" },
    { upin: "789012", details: "Heart Pain", time: "11:00 AM, Sep 25" },
    { upin: "345678", details: "Fever, Sore Throat", time: "11:30 AM, Sep 25" },
  ]);

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      {/* Search Bar */}
      <div className="w-full max-w-md">
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

      {/* Upcoming Appointments */}
      <div className="w-full max-w-md bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-serif text-center mb-4">Upcoming Appointments</h3>
        <div className="space-y-2">
          {appointments.map((appt, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded shadow">
              <p className="text-sm font-semibold">UPIN: {appt.upin}</p>
              <p className="text-sm text-gray-600">{appt.details}</p>
              <p className="text-xs text-gray-500">{appt.time}</p>
            </div>
          ))}
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
          <Link
            key={index}
            to={feature.path}
            className="bg-cyan-100 text-center py-3 rounded shadow hover:bg-cyan-200"
          >
            {feature.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
