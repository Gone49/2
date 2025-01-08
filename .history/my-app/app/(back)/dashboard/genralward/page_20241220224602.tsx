"use client";
import React, { useState } from "react";

const dummyPatients = [
  {
    upin: "UPIN12345",
    name: "John Doe",
    treatmentType: "Orthopedics",
    admissionTime: "2024-12-18 10:30 AM",
  },
  {
    upin: "UPIN67890",
    name: "Jane Smith",
    treatmentType: "Cardiology",
    admissionTime: "2024-12-19 08:15 AM",
  },
  {
    upin: "UPIN54321",
    name: "David Brown",
    treatmentType: "Neurology",
    admissionTime: "2024-12-20 01:45 PM",
  },
];

export default function GeneralWardPatients() {
  const [patients, setPatients] = useState(dummyPatients);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setFilterType("");
  };

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.upin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      !filterType || patient.treatmentType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        General Ward - Current Patients
      </h1>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or UPIN"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={filterType}
          onChange={handleFilter}
          className="border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Treatment Types</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
        </select>
        <button
          onClick={handleClearFilters}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
        >
          Clear Filters
        </button>
      </div>
      {filteredPatients.length > 0 ? (
        <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">UPIN</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Treatment Type</th>
              <th className="py-2 px-4 text-left">Admission Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                key={patient.upin}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4">{patient.upin}</td>
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.treatmentType}</td>
                <td className="py-2 px-4">{patient.admissionTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No patients match your criteria.</p>
      )}
    </div>
  );
}
