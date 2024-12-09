"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

type Doctor = {
  name: string;
  specialization: string;
  education: string;
  experience: string;
  hospitalName: string;
  profileImage: string; // Add profile image as it will be fetched from the database
};

const DoctorList: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]); // Initially empty, will be filled with data from DB
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 profiles

  // Fetch doctors from the database
  useEffect(() => {
    const fetchDoctors = async () => {
      // TODO: Replace this with actual database fetch
      // Example: Fetching data from an API endpoint that connects to the database
      // const response = await fetch("/api/doctors");
      // const data = await response.json();
      // setDoctors(data);

      // For now, set the dummy data for testing
      setDoctors([{
        name: "Dr. Akash Mehta", specialization: "Dermatologist", education: "MBBS, MD", experience: "10 Years", hospitalName: "City Hospital", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Shankar Sourtul", specialization: "Dentist", education: "BDS", experience: "5 Years", hospitalName: "Dental Clinic", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Vijay Mishra", specialization: "Orthopedic", education: "MBBS, MS", experience: "8 Years", hospitalName: "Central Hospital", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Priya Deshmukh", specialization: "Pediatrician", education: "MBBS, MD (Pediatrics)", experience: "12 Years", hospitalName: "Children's Hospital", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Rohit Sharma", specialization: "Cardiologist", education: "MBBS, DM (Cardiology)", experience: "15 Years", hospitalName: "Heart Care Clinic", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Ravi Patel", specialization: "Neurologist", education: "MBBS, DM (Neurology)", experience: "20 Years", hospitalName: "Neuro Care", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Kavita Singh", specialization: "Oncologist", education: "MBBS, MD (Oncology)", experience: "14 Years", hospitalName: "Cancer Center", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Amit Khanna", specialization: "General Surgeon", education: "MBBS, MS", experience: "10 Years", hospitalName: "City Hospital", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Supriya Joshi", specialization: "Gynecologist", education: "MBBS, MD (Gynecology)", experience: "8 Years", hospitalName: "Mother Care Clinic", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Rohan Verma", specialization: "ENT Specialist", education: "MBBS, MS (ENT)", experience: "7 Years", hospitalName: "City ENT Hospital", profileImage: "https://via.placeholder.com/150"
      }, {
        name: "Dr. Anjali Sharma", specialization: "Psychiatrist", education: "MBBS, MD (Psychiatry)", experience: "9 Years", hospitalName: "Mental Wellness Center", profileImage: "https://via.placeholder.com/150"
      }]);
    };

    fetchDoctors();
  }, []);

  const handleViewMore = () => setVisibleCount((prevCount) => prevCount + 10); // Show 10 more profiles
  const handleViewLess = () => setVisibleCount(3); // Reset to initial 3 profiles

  const visibleDoctors = doctors.slice(0, visibleCount); // Limit visible doctors based on state

  return (
    <div className="p-6">
      {/* Responsive Grid for Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleDoctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-32 bg-gray-300 flex items-center justify-center text-gray-600">
              {/* Replace with doctor's profile image */}
              <Image 
  src={doctor.profileImage} 
  alt={doctor.name} 
  width={150} 
  height={150} 
  className="w-full h-full object-cover" 
/>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">Specialization: <span className="font-medium">{doctor.specialization}</span></p>
              <p className="text-gray-600">Education: <span className="font-medium">{doctor.education}</span></p>
              <p className="text-gray-600">Experience: <span className="font-medium">{doctor.experience}</span></p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600">Hospital Name: <span className="font-medium">{doctor.hospitalName}</span></p>
                {/* Location Button */}
                <button
                  onClick={() => alert(`Viewing location for ${doctor.hospitalName}`)}
                  className="bg-cyan-500 text-white py-1 px-2 rounded-md flex items-center gap-2 hover:bg-cyan-600 transition"
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                  <span>Location</span>
                </button>
              </div>
              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <Link
                  href="/Doctors/slug"
                  className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition"
                >
                  View Profile
                </Link>
                <button
                  onClick={() => alert(`Booking appointment with ${doctor.name}`)}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Buttons for Loading More or Less Profiles */}
      <div className="flex justify-center mt-6 gap-4">
        {visibleCount < doctors.length && (
          <button
            onClick={handleViewMore}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
          >
            View More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={handleViewLess}
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
