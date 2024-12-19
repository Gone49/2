import React, { useState } from "react";

const Dashboard = () => {
  const [patientID, setPatientID] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState("");

  // Handle search
  const searchPatient = async () => {
    if (patientID.length !== 6) {
      setError("ID must be 6 digits");
      setPatientData(null);
      return;
    }
    try {
      const response = await (
        `http://localhost:5000/api/patient/${patientID}`
      );
      setPatientData(response.data);
      setError("");
    } catch (err) {
      setError("Patient not found or server error");
      setPatientData(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Search Patient</h2>
      <input
        type="text"
        placeholder="Enter 6-digit Patient ID"
        value={patientID}
        onChange={(e) => setPatientID(e.target.value)}
        maxLength={6}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={searchPatient}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {patientData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-bold mb-2">Patient Details</h3>
          <p><strong>ID:</strong> {patientData}</p>
          <p><strong>Name:</strong> {patientData}</p>
          <p><strong>Age:</strong> {patientData}</p>
          <p><strong>Condition:</strong> {patientData}</p>
        </div>
      )}
    </div>
  );
};




export default Dashboard;
