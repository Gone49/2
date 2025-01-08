"use client";
import React, { useState } from "react";

type Patient = {
  id: number;
  UPIN: string;
  name: string;
  treatmentType: string;
  admissionDate: string;
  photo: string; // Added photo field
  description: string; // Added description field
  lastUpdated: string; // Added last updated field
};

const patientsData: Patient[] = [
  {
    id: 1,
    UPIN: "UPIN12345",
    name: "John Doe",
    treatmentType: "General Ward",
    admissionDate: "2024-12-01",
    photo: "/path/to/photo1.jpg",
    description: "Admitted for a general check-up.",
    lastUpdated: "2024-12-01 10:00 AM",
  },
  {
    id: 2,
    UPIN: "UPIN67890",
    name: "Jane Smith",
    treatmentType: "ICU",
    admissionDate: "2024-12-05",
    photo: "/path/to/photo2.jpg",
    description: "ICU care for severe respiratory condition.",
    lastUpdated: "2024-12-05 12:30 PM",
  },
  {
    id: 3,
    UPIN: "UPIN54321",
    name: "Emily Davis",
    treatmentType: "General Ward",
    admissionDate: "2024-12-10",
    photo: "/path/to/photo3.jpg",
    description: "Recovering from a minor surgery.",
    lastUpdated: "2024-12-10 09:00 AM",
  },
];

export default function Page() {
  const [filterType, setFilterType] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>(patientsData);

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setFilterType(selectedType);
    filterPatients(selectedType, filterDate);
  };

  const handleDateFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);
    filterPatients(filterType, selectedDate);
  };

  const filterPatients = (type: string, date: string) => {
    let filtered = patientsData;

    if (type) {
      filtered = filtered.filter((patient) => patient.treatmentType === type);
    }

    if (date) {
      filtered = filtered.filter((patient) => patient.admissionDate === date);
    }

    setFilteredPatients(filtered);
  };

  const clearFilters = () => {
    setFilterType("");
    setFilterDate("");
    setFilteredPatients(patientsData);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Patients in ICU and General Ward
      </h1>

      <div className="mb-6 flex items-center gap-6">
        <div>
          <label
            htmlFor="treatmentType"
            className="mr-2 text-lg font-medium text-gray-700"
          >
            Filter by Treatment Type:
          </label>
          <select
            id="treatmentType"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterType}
            onChange={handleTypeFilterChange}
          >
            <option value="">All</option>
            <option value="ICU">ICU</option>
            <option value="General Ward">General Ward</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="admissionDate"
            className="mr-2 text-lg font-medium text-gray-700"
          >
            Filter by Admission Date:
          </label>
          <input
            type="date"
            id="admissionDate"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={filterDate}
            onChange={handleDateFilterChange}
          />
        </div>

        <button
          onClick={clearFilters}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid gap-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="border p-4 flex items-center rounded shadow-lg bg-white"
            >
              <img
                src={patient.photo}
                alt={patient.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="font-bold text-lg text-gray-800">{patient.name}</h2>
                <p className="text-gray-600">UPIN: {patient.UPIN}</p>
                <p className="text-gray-800">{patient.description}</p>
                <p className="text-sm text-gray-500">
                  Treatment: {patient.treatmentType}
                </p>
              </div>
              <div>
                <a
                  href={`/patients/${patient.UPIN}`}
                  className="text-blue-500 hover:underline font-medium ml-14 mt-2"
                >
                  View Profile
                </a>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">Booked at: {patient.lastUpdated}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No patients found for the selected filters.</p>
        )}
      </div>
    </div>
  );
}
