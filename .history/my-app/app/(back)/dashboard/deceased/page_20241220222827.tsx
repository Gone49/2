"use client";
import React, { useState } from "react";

type DeceasedPatient = {
  id: number;
  UPIN: string;
  dateOfDeath: string;
  description: string;
};

const deceasedPatientsData: DeceasedPatient[] = [
  {
    id: 1,
    UPIN: "UPIN12345",
    dateOfDeath: "2024-12-10",
    description: "Heart failure due to cardiac arrest.",
  },
  {
    id: 2,
    UPIN: "UPIN67890",
    dateOfDeath: "2024-12-12",
    description: "Respiratory failure from severe pneumonia.",
  },
  {
    id: 3,
    UPIN: "UPIN54321",
    dateOfDeath: "2024-12-15",
    description: "Multiple organ failure post-surgery.",
  },
];

export default function Page() {
  const [filterDate, setFilterDate] = useState<string>("");
  const [filteredPatients, setFilteredPatients] =
    useState<DeceasedPatient[]>(deceasedPatientsData);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate === "") {
      setFilteredPatients(deceasedPatientsData);
    } else {
      const filtered = deceasedPatientsData.filter(
        (patient) => patient.dateOfDeath === selectedDate
      );
      setFilteredPatients(filtered);
    }
  };

  const clearFilter = () => {
    setFilterDate("");
    setFilteredPatients(deceasedPatientsData);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Deceased Patients Reports</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-medium">
          Filter by Date of Death:
        </label>
        <input
          type="date"
          id="filter"
          className="border px-2 py-1"
          value={filterDate}
          onChange={handleFilterChange}
        />
        <button
          onClick={clearFilter}
          className="ml-2 px-4 py-1 border bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Filter
        </button>
      </div>
      <div className="grid gap-4">
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="border p-4 rounded shadow flex flex-col"
            >
              <p className="font-bold text-lg">UPIN : {patient.UPIN}</p>
              <p className="text-gray-500">Date of Death : {patient.dateOfDeath}</p>
              <p className="text-gray-800">Remarks : {patient.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No records found for the selected date.</p>
        )}
      </div>
    </div>
  );
}
