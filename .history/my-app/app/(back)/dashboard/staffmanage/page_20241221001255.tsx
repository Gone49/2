"use clientimport React, { useState } from 'react';

type Staff = {
  id: number;
  name: string;
  role: string;
};

const initialStaff: Staff[] = [
  { id: 1, name: 'Dr. John Doe', role: 'Cardiologist' },
  { id: 2, name: 'Nurse Jane Smith', role: 'Nurse' },
  { id: 3, name: 'Dr. Emily Davis', role: 'Dermatologist' },
];

const Page = () => {
  const [staff, setStaff] = useState<Staff[]>(initialStaff);
  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffRole, setNewStaffRole] = useState('');
  const [show, setShow] = useState(true);

  // Add a new staff member
  const addStaff = () => {
    const newStaff = { id: staff.length + 1, name: newStaffName, role: newStaffRole };
    setStaff([...staff, newStaff]);
    setNewStaffName('');
    setNewStaffRole('');
  };

  // Remove a staff member
  const removeStaff = (id: number) => {
    setShow(false);
    setTimeout(() => {
      setStaff(staff.filter(member => member.id !== id));
      setShow(true); // Reset show state after animation
    }, 500); // Wait for animation duration (500ms)
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Staff Management</h1>

      {/* Add New Staff */}
      <div className="mb-4">
        <input
          type="text"
          value={newStaffName}
          onChange={(e) => setNewStaffName(e.target.value)}
          placeholder="Staff Name"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={newStaffRole}
          onChange={(e) => setNewStaffRole(e.target.value)}
          placeholder="Staff Role"
          className="border p-2 mr-2"
        />
        <button
          onClick={addStaff}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Staff
        </button>
      </div>

      {/* Staff List with Animations */}
      <div className="staff-list">
        {staff.map((member) => (
          <div
            key={member.id}
            className={`staff-item bg-white p-4 mb-4 border rounded-lg shadow-md transform transition-all duration-500 ease-in-out ${
              show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <p>{member.name} - {member.role}</p>
            <button
              onClick={() => removeStaff(member.id)}
              className="bg-red-500 text-white p-2 mt-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
