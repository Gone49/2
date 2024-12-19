import React, { useState, useEffect } from "react";
import { Link } from "lucide-react";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    { upin: "123456", details: "Weakness, Headache", time: "10:30 AM, Sep 25" },
    { upin: "789012", details: "Heart Pain", time: "11:00 AM, Sep 25" },
    { upin: "345678", details: "Fever, Sore Throat", time: "11:30 AM, Sep 25" },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate live notifier updates
    const interval = setInterval(() => {
      // This is just a placeholder. You can fetch or update appointments dynamically.
      setAppointments((prevAppointments) => [
        ...prevAppointments,
        { upin: "987654", details: "New Appointment", time: "12:00 PM, Sep 25" },
      ]);
    }, 60000); // Adding a new appointment every 60 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setSearchTerm(e.target.value);

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      {/* Search Bar
      <div className="w-full max-w-md">
        <h2 className="text-xl font-serif text-center mb-4">Search Patient</h2>
        <div className="flex">
          <input
            // type="text"
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
            placeholder="Enter UPIN"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg">
            Search
          </button>
        </div>
      </div> */}

      {/* Upcoming Appointments */}
      <div className="w-full max-w-md bg-white p-4 shadow rounded-lg">
        <h3 className="text-lg font-serif text-center mb-4">Upcoming Appointments</h3>
        <div className="space-y-2">
          {appointments.filter((appt) => appt.upin.includes(searchTerm)).map((appt, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded shadow">
              <p className="text-sm font-semibold">UPIN: {appt.upin}</p>
              <p className="text-sm text-gray-600">{appt.details}</p>
              <p className="text-xs text-gray-500">{appt.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Buttons */}
      <div className="w-full max-w-md grid grid-cols-3 gap-4 mt-4">
        <Link
          to="/blood-reports"
          className="bg-white text-center py-4 px-6 rounded-lg shadow-md hover:bg-cyan-200"
        >
          <div className="text-3xl mb-2">💉</div>
          <h3 className="text-lg font-semibold">Blood Reports</h3>
        </Link>
        <Link
          to="/x-ray"
          className="bg-white text-center py-4 px-6 rounded-lg shadow-md hover:bg-cyan-200"
        >
          <div className="text-3xl mb-2">🩻</div>
          <h3 className="text-lg font-semibold">X-ray</h3>
        </Link>
        <Link
          to="/mri"
          className="bg-white text-center py-4 px-6 rounded-lg shadow-md hover:bg-cyan-200"
        >
          <div className="text-3xl mb-2">🧲</div>
          <h3 className="text-lg font-semibold">MRI</h3>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
