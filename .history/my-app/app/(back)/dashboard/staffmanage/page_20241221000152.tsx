'use client'
import React, { useState } from 'react';

// Define staff data type
type Staff = {
  id: number;
  name: string;
  role: string;
  department: string;
  leaveStatus: boolean;
};

export default function Page() {
  // State to manage the staff list and form input
  const [staffList, setStaffList] = useState<Staff[]>([
    { id: 1, name: 'Dr. John Doe', role: 'Cardiologist', department: 'Cardiology', leaveStatus: false },
    { id: 2, name: 'Nurse Jane Smith', role: 'Nurse', department: 'Emergency', leaveStatus: true },
  ]);
  
  const [newStaff, setNewStaff] = useState<Staff>({
    id: 0,
    name: '',
    role: '',
    department: '',
    leaveStatus: false,
  });

  // Handle input changes for the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStaff({
      ...newStaff,
      [name]: value,
    });
  };

  // Add new staff to the list
  const addStaff = () => {
    const newId = staffList.length + 1;
    setStaffList([
      ...staffList,
      { ...newStaff, id: newId, leaveStatus: false },
    ]);
    setNewStaff({ id: 0, name: '', role: '', department: '', leaveStatus: false });
  };

  // Remove staff from the list
  const removeStaff = (id: number) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Staff Management</h1>

      {/* Form to add staff */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Add New Staff</h2>
        <div className="mb-2">
          <label htmlFor="name" className="mr-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            className="border px-2 py-1"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="role" className="mr-2">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={newStaff.role}
            onChange={handleInputChange}
            className="border px-2 py-1"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="department" className="mr-2">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={newStaff.department}
            onChange={handleInputChange}
            className="border px-2 py-1"
          />
        </div>
        <button
          onClick={addStaff}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Staff
        </button>
      </div>

      {/* List of staff with option to remove */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Staff List</h2>
        <ul>
          {staffList.length > 0 ? (
            staffList.map((staff) => (
              <li key={staff.id} className="border p-2 mb-2 flex justify-between items-center">
                <div>
                  <p><strong>{staff.name}</strong> ({staff.role})</p>
                  <p>{staff.department}</p>
                </div>
                <button
                  onClick={() => removeStaff(staff.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>No staff available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
