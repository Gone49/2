"use client"
import React, { useState } from 'react';

type Staff = {
  id: number;
  name: string;
  role: string;
  department: string;
  address: string;
  dob: string;
  age: number;
  education: string;
  experience: string;
};

const Page = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [newStaff, setNewStaff] = useState<Staff>({
    id: 0,
    name: '',
    role: '',
    department: '',
    address: '',
    dob: '',
    age: 0,
    education: '',
    experience: '',
  });
  const [isAdded, setIsAdded] = useState(false);

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStaff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Calculate age from DOB
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  // Add new staff member
  const addStaff = () => {
    if (newStaff.name && newStaff.role && newStaff.department && newStaff.address && newStaff.dob && newStaff.education && newStaff.experience) {
      const age = calculateAge(newStaff.dob);
      const newStaffMember = { ...newStaff, age, id: staff.length + 1 };
      setStaff([...staff, newStaffMember]);
      setNewStaff({
        id: 0,
        name: '',
        role: '',
        department: '',
        address: '',
        dob: '',
        age: 0,
        education: '',
        experience: '',
      });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500); // Fade the success message after 1.5s
    } else {
      alert("Please fill all fields before submitting.");
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Staff Management Form</h1>

      {/* Add New Staff Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Staff Name</label>
          <input
            type="text"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            placeholder="Enter staff name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={newStaff.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={newStaff.dob}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
          <input
            type="text"
            name="education"
            value={newStaff.education}
            onChange={handleInputChange}
            placeholder="Enter education"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
          <input
            type="text"
            name="experience"
            value={newStaff.experience}
            onChange={handleInputChange}
            placeholder="Enter experience"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
          <select
            name="role"
            value={newStaff.role}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Nurse">Nurse</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Wardboy">Wardboy</option>
            <option value="Dentist">Dentist</option>
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
          <select
            name="department"
            value={newStaff.department}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Emergency">Emergency</option>
            <option value="Dermatology">Dermatology</option>
            <option value="General Ward">General Ward</option>
            <option value="Dental">Dental</option>
          </select>
        </div>

        <div className="col-span-2 flex justify-center">
          <button
            onClick={addStaff}
            className="mt-6 w-1/2 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Staff
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {isAdded && (
        <div className="transition-opacity duration-500 opacity-100 bg-green-500 text-white p-2 rounded-md mb-4 mt-6 text-center">
          Staff added successfully!
        </div>
      )}
    </div>
  );
};

export default Page;
