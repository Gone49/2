'use client'
import React, { useState } from 'react';

type Staff = {
  id: number;
  name: string;
  photo: string;
  role: string;
  department: string;
  lastUpdated: string; // Store last updated date and time
};

const staffData: Staff[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    photo: 'https://via.placeholder.com/100',
    role: 'Cardiologist',
    department: 'Cardiology',
    lastUpdated: '2024-12-19T08:30:00', // Yesterday at 8:30 AM
  },
  {
    id: 2,
    name: 'Nurse Jane Smith',
    photo: 'https://via.placeholder.com/100',
    role: 'Nurse',
    department: 'Emergency',
    lastUpdated: '2024-12-20T09:00:00', // Today at 9:00 AM
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    photo: 'https://via.placeholder.com/100',
    role: 'Dermatologist',
    department: 'Dermatology',
    lastUpdated: '2024-12-18T10:15:00', // Not today or yesterday
  },
  {
    id: 4,
    name: 'Mr. Mark Wilson',
    photo: 'https://via.placeholder.com/100',
    role: 'Wardboy',
    department: 'General Ward',
    lastUpdated: '2024-12-20T10:45:00', // Today at 10:45 AM
  },
  {
    id: 5,
    name: 'Dr. Sarah Lee',
    photo: 'https://via.placeholder.com/100',
    role: 'Dentist',
    department: 'Dental',
    lastUpdated: '2024-12-19T07:30:00', // Yesterday at 7:30 AM
  },
];

export default function Page() {
  const [staff] = useState<Staff[]>(staffData);
  const [filterDate, setFilterDate] = useState<string>('');

  // Get today's and yesterday's dates
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // Format date as "YYYY-MM-DD"
  };

  const todayFormatted = formatDate(today);
  const yesterdayFormatted = formatDate(yesterday);

  // Handle filter date change
  const handleDateFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);
  };

  // Filter staff based on selected date or default to today/yesterday
  const filteredStaff = staff.filter((member) => {
    if (filterDate) {
      return member.lastUpdated.startsWith(filterDate);
    }
    return member.lastUpdated.startsWith(todayFormatted) || member.lastUpdated.startsWith(yesterdayFormatted);
  });

  // Function to display date as "Today", "Yesterday" or classic date
  const formatLastUpdated = (lastUpdated: string) => {
    const date = new Date(lastUpdated);
    const formattedDate = date.toISOString().split('T')[0]; // Get the date part only

    if (formattedDate === todayFormatted) {
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (formattedDate === yesterdayFormatted) {
      return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return `${formattedDate} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`; // Classic date format with time
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Staff Present Today or Yesterday</h1>

      {/* Date filter input */}
      <div className="mb-4">
        <label htmlFor="filterDate" className="mr-2 font-medium">
          Filter by Date:
        </label>
        <input
          type="date"
          id="filterDate"
          value={filterDate}
          onChange={handleDateFilterChange}
          className="border px-2 py-1"
        />
      </div>

      {/* Staff Display */}
      <div className="grid gap-4">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((member) => (
            <div
              key={member.id}
              className="border p-4 flex items-center rounded shadow"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="font-bold text-lg">{member.name}</h2>
                <p className="text-gray-600">Role: {member.role}</p>
                <p className="text-gray-800">Department: {member.department}</p>
              </div>
              <div>
                <a
                  href={`/staff/${member.id}`}
                  className="text-blue-500 hover:underline font-medium ml-14 mt-2"
                >
                  View Profile
                </a>
                <div className="mt-12">
                  <p className="text-sm text-gray-400">
                    Last Updated: {formatLastUpdated(member.lastUpdated)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No staff members updated today or yesterday.</p>
        )}
      </div>
    </div>
  );
}
