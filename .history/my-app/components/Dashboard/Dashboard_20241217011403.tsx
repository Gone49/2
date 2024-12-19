import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      {/* Main Content Wrapper */}
      <div className="flex justify-center mx-4 mt-2">
        {/* Left Column: Patient Check-up */}
        <div className="w-full md:w-1/3 mt-5">
          <h1 className="text-2xl font-serif my-1 pl-20">Patient Check-up:</h1>
          <br />
          <h2 className="font-medium font-sans pl-20">
            Patient's UPIN:
            <input
              type="text"
              className="bg-gray-200 text-center"
              placeholder="Enter UPIN here"
            />
          </h2>
          <button className="bg-cyan-500 mx-48 w-28 my-2 text-center mb-56">
            Submit
          </button>
          <h1 className="text-3xl text-cyan-800 font-serif font-bold pl-20">
            Today's Reports:
          </h1>
        </div>

        {/* Right Column: Upcoming Appointments */}
        <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg ml-2 mr-20">
          <h2 className="text-2xl font-serif">Upcoming Appointments</h2>

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

          <button className="view-all mx-20 my-4">View All</button>
        </div>
      </div>

      {/* Bottom Section: Features Grid */}
      <div className="mt-8 pb-4">
        <div className="grid grid-cols-6 gap-4 max-w-6xl w-full mx-auto">
          {/* Feature Items */}
          {[
            { name: 'Blood Reports', path: '/blood-reports' },
            { name: 'Oxygen', path: '/oxygen' },
            { name: 'Asthma', path: '/asthma' },
            { name: 'X-ray', path: '/xray' },
            { name: 'Lung', path: '/lung' },
            { name: 'Diabetes', path: '/diabetes' },
            { name: 'CT scan', path: '/ct-scan' },
            { name: 'MRI', path: '/mri' },
            { name: 'Endoscopy', path: '/endoscopy' },
            { name: 'ECG', path: '/ecg' },
            { name: 'Ultrasound', path: '/ultrasound' },
            { name: 'Heart', path: '/heart' },
          ].map((feature, index) => (
            <div key={index} className="bg-cyan-100 p-4 text-right">
              <NavLink to={feature.path}>{feature.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
