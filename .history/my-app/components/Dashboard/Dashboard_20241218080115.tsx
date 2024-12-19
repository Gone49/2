import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [upin, setUpin] = useState(""); // State to store UPIN input
  const [error, setError] = useState("");

  // Mock data for upcoming appointments
  const upcomingAppointments = [
    {
      id: "12345",
      description: { about: { problem: "Routine Check-up" } },
      scheduled: { timing: "2024-05-10, 10:00 AM" },
    },
    {
      id: "67890",
      description: { about: { problem: "Follow-up Visit" } },
      scheduled: { timing: "2024-05-12, 2:00 PM" },
    },
    {
      id: "11223",
      description: { about: { problem: "Consultation" } },
      scheduled: { timing: "2024-05-15, 1:00 PM" },
    },
  ];

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUpin(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (!upin.trim()) {
      setError("Please enter a valid UPIN.");
      return;
    }
    console.log("Searching for patient with UPIN:", upin);
    alert(`Searching for patient with UPIN: ${upin}`);
    setUpin("");
  };

  const handleViewAll = () => {
    alert("Viewing all upcoming appointments...");
    console.log("Displaying all upcoming appointments.");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Top Section */}
      <div className="flex flex-row items-start justify-center gap-8 mt-5 w-full max-w-7xl">
        {/* Patient Check-up Section */}
        <div className="w-full md:w-1/3 bg-white p-4 shadow-lg rounded-lg mr-96 mt-16">
          <h1 className="text-2xl font-serif mb-4 text-gray-700">Patient Check-up:</h1>
          <div className="mb-4">
            <label className="font-medium text-gray-600">Patient's UPIN:</label>
            <input
              type="text"
              value={upin}
              onChange={handleInputChange}
              className="bg-gray-100 text-center border border-gray-400 rounded-md px-3 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Enter UPIN here"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2 ml-36"
          >
            Submit
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Upcoming Appointments Section */}
        <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-serif mb-4">Upcoming Appointments</h2>
          {upcomingAppointments.map((appointment, index) => (
            <div
              key={index}
              className="bg-gray-100 p-2 rounded-lg mb-3 shadow-sm"
            >
              <p className="text-sm font-semibold">UPIN: {appointment.id}</p>
              <p className="text-xs text-gray-600">
                {appointment.description.about.problem}
              </p>
              <p className="text-xs text-gray-500">
                {appointment.scheduled.timing}
              </p>
            </div>
          ))}
          <button
            onClick={handleViewAll}
            className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-3 py-1 block mx-auto"
          >
            View All
          </button>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="flex-grow flex items-end justify-center py-8 w-full">
         <div mb-24>Reports</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl w-full">
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
              className="bg-cyan-100 hover:bg-cyan-200 text-center p-3 rounded-lg shadow-md transition duration-300"
            >
              <NavLink
                to={feature.path}
                className="text-gray-700 font-semibold hover:text-cyan-600"
              >
                {feature.name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
