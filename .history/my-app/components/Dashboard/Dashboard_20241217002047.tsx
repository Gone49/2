import React from 'react'
import Navbar from './NavBar'
import { Link } from 'lucide-react'

export default function Dashboard() {

    
  return (
    <div>
    <main><div>
      <div className="flex flex-wrap justify-between mx-4 mt-2">
        {/* Patient Search (Left Side) */}
        <div className="w-full md:w-1/2 lg:w-1/3 mt-4">
          <h1 className="text-2xl font-serif mb-4 text-center">Patient Search:</h1>
          <div className="flex items-center justify-center">
            <input
              type="text"
              className="bg-gray-200 border border-gray-300 text-center px-4 py-2 rounded-lg w-2/3"
              placeholder="Search by UPIN"
            />
            <button className="bg-cyan-500 text-white ml-2 px-4 py-2 rounded-lg">
              Search
            </button>
          </div>
          <h1 className="text-2xl text-cyan-800 font-serif font-bold mt-8 text-center">
            Today's Reports:
          </h1>
        </div>

        {/* Upcoming Appointments (Right Side) */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl font-serif text-center mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <p className="text-sm font-semibold">UPIN: {appointment.upin}</p>
                <p className="text-sm text-gray-600">{appointment.details}</p>
                <p className="text-xs text-gray-500">Scheduled for: {appointment.time}</p>
              </div>
            ))}
          </div>
          <button className="bg-cyan-500 text-white mt-4 px-4 py-2 rounded-lg w-full">
            View All
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center mt-6 pb-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl w-full px-4">
          {[
            { name: "Blood Reports", path: "/blood-reports" },
            { name: "Oxygen", path: "/oxygen" },
            { name: "Asthama", path: "/asthama" },
            { name: "X-ray", path: "/xray" },
            { name: "Lung", path: "/lung" },
            { name: "Diabetes", path: "/diabetes" },
            { name: "CT scan", path: "/ct-scan" },
            { name: "MRI", path: "/mri" },
            { name: "Endoscopy", path: "/endoscopy" },
            { name: "ECG", path: "/ecg" },
            { name: "Ultrasound", path: "/ultrasound" },
            { name: "Heart", path: "/heart" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-cyan-100 p-4 text-center rounded-lg shadow-md"
            >
              <Link to={feature.path}>{feature.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div></main>
    </div>
  )
}
