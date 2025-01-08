
import React, { useState } from "react";

// Define staff data with leave status and last update
type Staff = {
  id: number;
  name: string;
  photo: string;
  role: string;
  department: string;
  leaveStatus: boolean;
  lastUpdated: string;
};

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
    leaveStatus: true,
    lastUpdated: "2024-12-20",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    photo: "https://via.placeholder.com/100",
    role: "Dermatologist",
    department: "Dermatology",
    leaveStatus: false,
    lastUpdated: "2024-12-20",
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
    leaveStatus: true,
    lastUpdated: "2024-12-19",
  },
];

export default function Page() {
  const [filterDate, setFilterDate] = useState<string>("");
  const [filteredStaff, setFilteredStaff] = useState<Staff[]>(staffData);

  // Handle filter date change
  const handleDateFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFilterDate(selectedDate);

    if (selectedDate === "") {
      setFilteredStaff(staffData); // Reset the list when no date is selected
    } else {
      const filtered = staffData.filter(
        (staff) => staff.lastUpdated === selectedDate
      );
      setFilteredStaff(filtered);
    }
  };

  // Function to format the last updated date
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
      <h1 className="text-xl font-bold mb-4">Staff Attendance</h1>

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

      {/* Display staff based on filter */}
      <div className="grid gap-4">
        {filteredStaff.length > 0 ? (
          filteredStaff.map((staff) => (
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
                <p className="text-gray-800">Department: {staff.department}</p>
              </div>
              <div>
                <a
                  href={`/staff/${staff.id}`}
                  className="text-blue-500 hover:underline font-medium ml-14 mt-2"
                >
                  View Profile
                </a>
                <div className="mt-12">
                  <p className="text-sm text-gray-400">
                    Last Updated: {formatLastUpdated(staff.lastUpdated)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No staff present on this date.</p>
        )}
      </div>
    </div>
  );
}
