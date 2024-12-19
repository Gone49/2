import React, { useState } from "react";

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
    setError(""); // Clear error message on change
  };

  const handleSubmit = () => {
    if (!upin.trim()) {
      setError("Please enter a valid UPIN.");
      return;
    }
    // Add functionality to search for the patient
    console.log("Searching for patient with UPIN:", upin);
    alert(`Searching for patient with UPIN: ${upin}`);
    // Reset input
    setUpin("");
  };

  return (
    <div className="w-full md:w-1/3 mt-5 mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-serif my-3 pl-4 text-gray-700">
        Patient Check-up:
      </h1>

      {/* UPIN Input */}
      <div className="pl-4 mb-4">
        <label className="font-medium font-sans text-gray-600">
          Patient's UPIN:
        </label>
        <input
          type="text"
          value={upin}
          onChange={handleInputChange}
          className="bg-gray-100 text-center border border-gray-400 rounded-md px-2 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Enter UPIN here"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-md px-4 py-2 ml-4"
      >
        Submit
      </button>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2 pl-4">{error}</p>}
    </div>
  );
};

export default Dashboard;
