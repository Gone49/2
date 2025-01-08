import React, { useState } from 'react';

type Staff = {
  id: number;
  name: string;
  photo: string;
  role: string;
  department: string;
  lastUpdated: string; // Store last updated date
};

const staffData: Staff[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    photo: 'https://via.placeholder.com/100',
    role: 'Cardiologist',
    department: 'Cardiology',
    lastUpdated: '2024-12-19', // Yesterday
  },
  {
    id: 2,
    name: 'Nurse Jane Smith',
    photo: 'https://via.placeholder.com/100',
    role: 'Nurse',
    department: 'Emergency',
    lastUpdated: '2024-12-20', // Today
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    photo: 'https://via.placeholder.com/100',
    role: 'Dermatologist',
    department: 'Dermatology',
    lastUpdated: '2024-12-18', // Not today or yesterday
  },
  {
    id: 4,
    name: 'Mr. Mark Wilson',
    photo: 'https://via.placeholder.com/100',
    role: 'Wardboy',
    department: 'General Ward',
    lastUpdated: '2024-12-20', // Today
  },
  {
    id: 5,
    name: 'Dr. Sarah Lee',
    photo: 'https://via.placeholder.com/100',
    role: 'Dentist',
    department: 'Dental',
    lastUpdated: '2024-12-19', // Yesterday
  },
];

export default function Page() {
  const [staff, setStaff] = useState<Staff[]>(staffData);

  // Get today's and yesterday's dates
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // Format date as "YYYY-MM-DD"
  };

  const todayFormatted = formatDate(today);
  const yesterdayFormatted = formatDate(yesterday);

  // Filter staff to show only those whose lastUpdated is today or yesterday
  const filteredStaff = staff.filter(
    (member) =>
      member.lastUpdated === todayFormatted || member.lastUpdated === yesterdayFormatted
  );

  // Function to display date as "Today", "Yesterday" or classic date
  const formatLastUpdated = (lastUpdated: string) => {
    if (lastUpdated === todayFormatted) {
      return 'Today';
    } else if (lastUpdated === yesterdayFormatted) {
      return 'Yesterday';
    } else {
      return lastUpdated; // Classic date format for other dates
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Staff Present Today or Yesterday</h1>

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
