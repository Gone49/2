import React, { useState } from "react";

// Define staff data with leave status
type Staff = {
  id: number;
  name: string;
  photo: string;
  role: string;
  department: string;
  leaveStatus: boolean; // Boolean indicating whether the staff is on leave
  lastUpdated: string; // Store last updated date
};

// Sample staff data, including leave status
const staffData: Staff[] = [
  {
    id: 1,
    name: "Dr. John Doe",
    photo: "https://via.placeholder.com/100",
    role: "Cardiologist",
    department: "Cardiology",
    leaveStatus: false,
    lastUpdated: "2024-12-19",
  },
  {
    id: 2,
    name: "Nurse Jane Smith",
    photo: "https://via.placeholder.com/100",
    role: "Nurse",
    department: "Emergency",
    leaveStatus: true, // On leave
    lastUpdated: "2024-12-20",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    photo: "https://via.placeholder.com/100",
    role: "Dermatologist",
    department: "Dermatology",
    leaveStatus: true, // On leave
    lastUpdated: "2024-12-18",
  },
  {
    id: 4,
    name: "Mr. Mark Wilson",
    photo: "https://via.placeholder.com/100",
    role: "Wardboy",
    department: "General Ward",
    leaveStatus: false,
    lastUpdated: "2024-12-20",
  },
  {
    id: 5,
    name: "Dr. Sarah Lee",
    photo: "https://via.placeholder.com/100",
    role: "Dentist",
    department: "Dental",
    leaveStatus: true, // On leave
    lastUpdated: "2024-12-19",
  },
];

export default function Page() {
  // Filter staff to show only those who are on leave
  const onLeaveStaff = staffData.filter((member) => member.leaveStatus === true);

  // Function to display date as "Today", "Yesterday" or classic date
  const formatLastUpdated = (lastUpdated: string) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0]; // Format date as "YYYY-MM-DD"
    };

    const todayFormatted = formatDate(today);
    const yesterdayFormatted = formatDate(yesterday);

    if (lastUpdated === todayFormatted) {
      return "Today";
    } else if (lastUpdated === yesterdayFormatted) {
      return "Yesterday";
    } else {
      return lastUpdated; // Classic date format for other dates
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Staff On Leave</h1>

      {/* Display staff who are on leave */}
      <div className="grid gap-4">
        {onLeaveStaff.length > 0 ? (
          onLeaveStaff.map((member) => (
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
          <p className="text-gray-500">No staff members are on leave at the moment.</p>
        )}
      </div>
    </div>
  );
}
