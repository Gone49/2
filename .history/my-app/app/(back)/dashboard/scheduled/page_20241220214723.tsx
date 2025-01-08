"use client";
import React, { useState } from 'react';

type Patient = {
  id: number;
  name: string;
  photo: string;
  UPIN: string;
  treatment: string;
  description: string;
  lastUpdated: string; // Added field to store last updated time
};

const patientsData: Patient[] = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://via.placeholder.com/100',
    UPIN: 'UPIN12345',
    treatment: 'Cardiology',
    description: 'Heart-related treatment required',
    lastUpdated: '2024-12-18 10:30 AM', // Added last updated time
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/100',
    UPIN: 'UPIN67890',
    treatment: 'Orthopedics',
    description: 'Joint pain and physical therapy',
    lastUpdated: '2024-12-18 02:00 PM',
  },
  {
    id: 3,
    name: 'Emily Davis',
    photo: 'https://via.placeholder.com/100',
    UPIN: 'UPIN54321',
    treatment: 'Dermatology',
    description: 'Skin allergy and rash',
    lastUpdated: '2024-12-17 04:45 PM',
  },
  // Add more patients as needed
];

export default function Page() {
  const [filter, setFilter] = useState('');
  const [patients, setPatients] = useState<Patient[]>(patientsData);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTreatment = e.target.value;
    setFilter(selectedTreatment);

    if (selectedTreatment === '') {
      setPatients(patientsData); // Reset to full list if no filter
    } else {
      const filteredPatients = patientsData.filter(
        (patient) => patient.treatment === selectedTreatment
      );
      setPatients(filteredPatients);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patient List</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-medium">
          Filter by Treatment:
        </label>
        <select
          id="filter"
          className="border px-2 py-1"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
          {/* Add more options based on available treatments */}
        </select>
      </div>
      <div className="grid gap-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="border p-4 flex items-center rounded shadow"
          >
            <img
              src={patient.photo}
              alt={patient.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-grow">
              <h2 className="font-bold text-lg">{patient.name}</h2>
              <p className="text-gray-600">UPIN: {patient.UPIN}</p>
              <p className="text-gray-800">{patient.description}</p>
              <p className="text-sm text-gray-500">Treatment: {patient.treatment}</p>
            </div>
            <div>
  <a
    href={`/reports/${patient.UPIN}`}
    className="text-blue-500 hover:underline font-medium"
  >
    View Reports
  </a>
  <p className="text-sm text-gray-400 m">
    Recently Updated: {patient.lastUpdated}
  </p>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
