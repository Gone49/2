import { NavLink } from "react-router-dom";
import React, { useState } from "react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full p-6">
        {[
          { name: "Blood Reports", path: "/blood-reports", icon: "💉" },
          { name: "Oxygen", path: "/oxygen", icon: "🌬️" },
          { name: "Asthma", path: "/asthma", icon: "🌿" },
          { name: "X-ray", path: "/xray", icon: "🩻" },
          { name: "CT Scan", path: "/ct-scan", icon: "🧠" },
          { name: "MRI", path: "/mri", icon: "🧲" },
          { name: "Blood Reports", path: "/blood-reports", icon: "💉" },
          { name: "Oxygen", path: "/oxygen", icon: "🌬️" },
          { name: "Asthma", path: "/asthma", icon: "🌿" },
          { name: "X-ray", path: "/xray", icon: "🩻" },
          { name: "CT Scan", path: "/ct-scan", icon: "🧠" },
          { name: "MRI", path: "/mri", icon: "🧲" },
        ].map((feature, index) => (
          <NavLink
            key={index}
            to={feature.path}
            className="bg-white text-center py-6 px-4 rounded-lg shadow-md hover:bg-cyan-200 hover:shadow-lg transform transition-all duration-300 ease-in-out"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
