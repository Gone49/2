import React, { useState } from 'react';

type StaffMember = {
  id: number;
  name: string;
  role: string;
  photo: string;
  contact: string;
  lastUpdated: string;
};

const staffData: StaffMember[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    role: 'Cardiologist',
    photo: 'https://via.placeholder.com/100',
    contact: '123-456-7890',
    lastUpdated: '2024-12-10',
  },
  {
    id: 2,
    name: 'Nurse Jane Smith',
    role: 'Registered Nurse',
    photo: 'https://via.placeholder.com/100',
    contact: '987-654-3210',
    lastUpdated: '2024-12-12',
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    role: 'Orthopedic Surgeon',
    photo: 'https://via.placeholder.com/100',
    contact: '555-555-5555',
    lastUpdated: '2024-12-15',
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Staff Members</h1>
      <div className="grid gap-4">
        {staffData.map((staff) => (
          <div
            key={staff.id}
            className="border p-4 flex items-center rounded shadow"
          >
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="flex-grow">
              <h2 className="font-bold text-lg">{staff.name}</h2>
              <p className="text-gray-600">Role: {staff.role}</p>
              <p className="text-sm text-gray-500">Contact: {staff.contact}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Last Updated: {staff.lastUpdated}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
