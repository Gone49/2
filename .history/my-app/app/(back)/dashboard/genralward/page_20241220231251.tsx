"use client";
import React, { useState } from "react";

type Patient = {
  id: number;
  UPIN: string;
  name: string;
  treatmentType: string;
  admissionDate: string;
};

const patientsData: Patient[] = [
  {
    id: 1,
    UPIN: "UPIN12345",
    name: "John Doe",
    treatmentType: "General Ward",
    admissionDate: "2024-12-01",
  },
  {
    id: 2,
    UPIN: "UPIN67890",
    name: "Jane Smith",
    treatmentType: "ICU",
    admissionDate: "2024-12-05",
  },
  {
    id: 3,
    UPIN: "UPIN54321",
    name: "Emily Davis",
    treatmentType: "General Ward",
    admissionDate: "2024-12-10",
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
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Patients in ICU and General Ward</h1>

      <div className="mb-6 flex items-center gap-6">
        <div>
          <label htmlFor="treatmentType" className="mr-2 text-lg font-medium text-gray-700">
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
          <label htmlFor="admissionDate" className="mr-2 text-lg font-medium text-gray-700">
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
          className="ml-4 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-200 transition duration-200"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid gap-6">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="border rounded-lg shadow-lg bg-white p-6 flex flex-col space-y-"
            >
              <p className="text-lg font-semibold text-gray-800">UPIN: {patient.UPIN}</p>
              <p className="text-gray-600">Name: {patient.name}</p>
              <p className="text-gray-600">Treatment Type: {patient.treatmentType}</p>
              <p className="text-gray-600">Admission Date: {patient.admissionDate}</p>
              <a
                href={`/patients/${patient.UPIN}`}
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No patients found for the selected filters.</p>
        )}
      </div>
    </div>
  );
}
