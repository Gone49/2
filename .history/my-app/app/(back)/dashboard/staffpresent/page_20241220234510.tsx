import React, { useState } from 'react';

type Staff = {
  id: number;
  name: string;
  photo: string;
  role: string;
  department: string;
  lastUpdated: string;
  isPresentToday: boolean; // New field to check if the staff member is present today
};

const staffData: Staff[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    photo: 'https://via.placeholder.com/100',
    role: 'Cardiologist',
    department: 'Cardiology',
    lastUpdated: '2024-12-15',
    isPresentToday: true,
  },
  {
    id: 2,
    name: 'Nurse Jane Smith',
    photo: 'https://via.placeholder.com/100',
    role: 'Nurse',
    department: 'Emergency',
    lastUpdated: '2024-12-14',
    isPresentToday: true,
  },
  {
    id: 3,
    name: 'Dr. Emily Davis',
    photo: 'https://via.placeholder.com/100',
    role: 'Dermatologist',
    department: 'Dermatology',
    lastUpdated: '2024-12-13',
    isPresentToday: false,
  },
  {
    id: 4,
    name: 'Mr. Mark Wilson',
    photo: 'https://via.placeholder.com/100',
    role: 'Wardboy',
    department: 'General Ward',
    lastUpdated: '2024-12-12',
    isPresentToday: true,
  },
  {
    id: 5,
    name: 'Dr. Sarah Lee',
    photo: 'https://via.placeholder.com/100',
    role: 'Dentist',
    department: 'Dental',
    lastUpdated: '2024-12-11',
    isPresentToday: false,
  },
];

export default function Page() {
  const [staff, setStaff] = useState<Staff[]>(staffData);
  const [filterRole, setFilterRole] = useState<string>(''); // Track selected role for filtering

  // Filter staff by presence today
  const filteredStaff = staff.filter(member => member.isPresentToday);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setFilterRole(selectedRole);

    if (selectedRole === '') {
      setStaff(filteredStaff); // Show all present staff if no filter is applied
    } else {
      const filtered = staff.filter(
        (member) => member.isPresentToday && member.role.toLowerCase() === selectedRole.toLowerCase()
      );
      setStaff(filtered);
    }
  };

  const clearFilter = () => {
    setFilterRole('');
    setStaff(filteredStaff); // Reset to show all present staff
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Presented Staff Today</h1>
      
      {/* Filter Section */}
      <div className="mb-4">
        <label htmlFor="roleFilter" className="mr-2 font-medium">
          Filter by Role:
        </label>
        <select
          id="roleFilter"
          className="border px-2 py-1"
          value={filterRole}
          onChange={handleFilterChange}
        >
          <option value="">Select Role</option>
          <option value="nurse">Nurse</option>
          <option value="wardboy">Wardboy</option>
          <option value="dentist">Dentist</option>
          <option value="dermatologist">Dermatologist</option>
          <option value="cardiologist">Cardiologist</option>
          <option value="orthopedic">Orthopedic Surgeon</option>
          <option value="general">General Doctor</option>
        </select>

        {/* Clear Filter Button */}
        <button
          onClick={clearFilter}
          className="ml-2 px-4 py-1 border bg-gray-200 rounded hover:bg-gray-300"
        >
          Clear Filter
        </button>
      </div>

      {/* Staff Display */}
      <div className="grid gap-4">
        {staff.length > 0 ? (
          staff.map((member) => (
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
                    Last Updated: {member.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No staff members present today.</p>
        )}
      </div>
    </div>
  );
}
