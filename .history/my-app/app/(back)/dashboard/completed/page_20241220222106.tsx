"use client";
import React, { useState } from 'react';

type CompletedAppointment = {
  id: number;
  UPIN: string;
  completionDate: string; // Format: YYYY-MM-DD
  doctorName: string;
  remarks: string;
};

const completedAppointmentsData: CompletedAppointment[] = [
  {
    id: 1,
    UPIN: 'UPIN12345',
    completionDate: '2024-12-18',
    doctorName: 'Dr. Smith',
    remarks: 'Follow-up recommended in 6 months.',
  },
  {
    id: 2,
    UPIN: 'UPIN67890',
    completionDate: '2024-12-19',
    doctorName: 'Dr. Johnson',
    remarks: 'Treatment successfully completed.',
  },
  {
    id: 3,
    UPIN: 'UPIN54321',
    completionDate: '2024-12-19',
    doctorName: 'Dr. Davis',
    remarks: 'No further treatment required.',
  },
];

export default function Page() {
  const [filterDate, setFilterDate] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState<CompletedAppointment[]>(completedAppointmentsData);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate === '') {
      setFilteredAppointments(completedAppointmentsData); // Reset to all appointments if no date selected
    } else {
      const filtered = completedAppointmentsData.filter(
        (appointment) => appointment.completionDate === selectedDate
      );
      setFilteredAppointments(filtered);
    }
  };

  const clearFilters = () => {
    setFilterDate('');
    setFilteredAppointments(completedAppointmentsData);
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Completed Appointments</h1>

      <div className="mb-4 flex items-center gap-4">
        <label htmlFor="filterDate" className="font-medium">
          Filter by Date:
        </label>
        <input
          id="filterDate"
          type="date"
          className="border px-2 py-1"
          value={filterDate}
          onChange={handleFilterChange}
        />
        <button
          className="bg-cyan-500 text-black px-4 py-1 rounded hover:bg-"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {filteredAppointments.length === 0 ? (
        <p className="text-gray-500">No completed appointments for the selected date.</p>
      ) : (
        <div className="grid gap-4">
          {filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="border p-4 rounded shadow flex flex-col"
            >
              <p className="font-bold text-lg">UPIN: {appointment.UPIN}</p>
              <p className="text-sm text-gray-600">
                Completion Date: {appointment.completionDate}
              </p>
              <p className="text-gray-800">
                Doctor: {appointment.doctorName}
              </p>
              <p className="text-gray-500">Remarks: {appointment.remarks}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
