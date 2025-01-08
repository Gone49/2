'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Using framer-motion for animation

// Define staff data type
type Staff = {
  id: number;
  name: string;
  role: string;
  department: string;
  leaveStatus: boolean;
};

export default function Page() {
  // Define staff list and form input states
  const [staffList, setStaffList] = useState<Staff[]>([
    { id: 1, name: 'Dr. John Doe', role: 'Cardiologist', department: 'Cardiology', leaveStatus: false },
    { id: 2, name: 'Nurse Jane Smith', role: 'Nurse', department: 'Emergency', leaveStatus: true },
  ]);
  
  const [newStaff, setNewStaff] = useState<Staff>({
    id: 0,
    name: '',
    role: '',
    department: 'Cardiology', // Default to 'Cardiology'
    leaveStatus: false,
  });

  // Departments available for selection
  const departments = ['Cardiology', 'Emergency', 'Dental', 'Dermatology', 'General Ward'];

  // Handle input changes for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStaff({
      ...newStaff,
      [name]: value,
    });
  };

  // Add new staff to the list with animation
  const addStaff = () => {
    const newId = staffList.length + 1;
    setStaffList([
      ...staffList,
      { ...newStaff, id: newId, leaveStatus: false },
    ]);
    setNewStaff({ id: 0, name: '', role: '', department: 'Cardiology', leaveStatus: false });
  };

  // Remove staff from the list
  const removeStaff = (id: number) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Staff Management</h1>

      {/* Form to add staff */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Add New Staff</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter staff name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={newStaff.role}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter staff role"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium">Department:</label>
          <select
            id="department"
            name="department"
            value={newStaff.department}
            onChange={handleInputChange}
            className="border px-4 py-2 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={addStaff}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Staff
        </button>
      </div>

      {/* Staff List with animation */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Staff List</h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {staffList.length > 0 ? (
            staffList.map((staff) => (
              <motion.li
                key={staff.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="border p-4 mb-2 flex justify-between items-center rounded-lg shadow-sm"
              >
                <div>
                  <p className="font-bold">{staff.name}</p>
                  <p>{staff.role} - {staff.department}</p>
                </div>
                <button
                  onClick={() => removeStaff(staff.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </motion.li>
            ))
          ) : (
            <p>No staff available.</p>
          )}
        </motion.ul>
      </div>
    </div>
  );
}
