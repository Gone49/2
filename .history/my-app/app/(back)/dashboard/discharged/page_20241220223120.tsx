"use client";
import React, { useState } from "react";

type DischargedPatient = {
  id: number;
  UPIN: string;
  dischargeDate: string;
  summary: string;
};

const dischargedPatientsData: DischargedPatient[] = [
  {
    id: 1,
    UPIN: "UPIN12345",
    dischargeDate: "2024-12-18",
    summary: "Recovered from surgery and advised bed rest.",
  },
  {
    id: 2,
    UPIN: "UPIN67890",
    dischargeDate: "2024-12-17",
    summary: "Treated for pneumonia and prescribed follow-ups.",
  },
  {
    id: 3,
    UPIN: "UPIN54321",
    dischargeDate: "2024-12-16",
    summary: "Managed diabetes and hypertension; follow-up required.",
  },
];

export default function Page() {
  const [filterDate, setFilterDate] = useState<string>("");
  const [filteredPatients, setFilteredPatients] =
    useState<DischargedPatient[]>(dischargedPatientsData);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate === "") {
      setFilteredPatients(dischargedPatientsData);
    } else {
      const filtered = dischargedPatientsData.filter(
        (patient) => patient.dischargeDate === selectedDate
      );
      setFilteredPatients(filtered);
    }
  };

  const clearFilter = () => {
    setFilterDate("");
    setFilteredPatients(dischargedPatientsData);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Recently Discharged Patients</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-medium">
          Filter by Discharge Date:
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
              <p className="font-bold text-lg">UPIN: {patient.UPIN}</p>
              <p className="text-gray-500">
                Discharge Date: {patient.dischargeDate}
              </p>
              <p className="text-gray-800"> Remarks: {patient.summary}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No discharged patients found for the selected date.
          </p>
        )}
      </div>
    </div>
  );
}
