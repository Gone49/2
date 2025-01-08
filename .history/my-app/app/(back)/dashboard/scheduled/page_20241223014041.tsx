"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type Patient = {
  id: number;
  name: string;
  photo: string;
  UPIN: string;
  treatment: string;
  description: string;
  lastUpdated: string; // Added field to store last updated time
};

const patientsData: Patient[] = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/100",
    UPIN: "UPIN12345",
    treatment: "Cardiology",
    description: "Heart-related treatment required",
    lastUpdated: "2024-12-18 10:30 AM", // Added last updated time
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/100",
    UPIN: "UPIN67890",
    treatment: "Orthopedics",
    description: "Joint pain and physical therapy",
    lastUpdated: "2024-12-18 02:00 PM",
  },
  {
    id: 3,
    name: "Emily Davis",
    photo: "https://via.placeholder.com/100",
    UPIN: "UPIN54321",
    treatment: "Dermatology",
    description: "Skin allergy and rash",
    lastUpdated: "2024-12-17 04:45 PM",
  },
  {
    id: 4,
    name: "Avanti PAtil",
    photo: "https://via.placeholder.com/100",
    UPIN: "UPIN54321",
    treatment: "Dermatology",
    description: "Skin allergy and rash",
    lastUpdated: "2024-12-17 04:45 PM",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("");
  const [patients, setPatients] = useState<Patient[]>(patientsData);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTreatment = e.target.value;
    setFilter(selectedTreatment);

    if (selectedTreatment === "") {
      setPatients(patientsData); // Reset to full list if no filter
    } else {
      const filteredPatients = patientsData.filter(
        (patient) => patient.treatment === selectedTreatment
      );
      setPatients(filteredPatients);
    }
  };

  const handleImageClick = (photo: string) => {
    setSelectedImage(photo);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
    setSelectedImage("");
  };

  // Close modal if clicked outside of the image modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest(".modal-content")) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold justify-centermb-4">Upcomming Appoinments</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 font-medium">
          Filter by Treatment:
        </label>
        <select
          id="filter"
          className="border px-2 py-1"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
        </select>
      </div>

      <div className="grid gap-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="border p-4 flex items-center rounded shadow"
          >
            <Image
              src={patient.photo}
              alt={patient.name}
              width={100}
              height={100}
              className="w-16 h-16 rounded-full mr-4 cursor-pointer"
              onClick={() => handleImageClick(patient.photo)}
            />
            <div className="flex-grow">
              <h2 className="font-bold text-lg">{patient.name}</h2>
              <p className="text-gray-600">UPIN: {patient.UPIN}</p>
              <p className="text-gray-800">{patient.description}</p>
              <p className="text-sm text-gray-500">
                Treatment: {patient.treatment}
              </p>
            </div>
            <div>
              <a
                href={`/reports/${patient.UPIN}`}
                className="text-blue-500 hover:underline font-medium ml-14 mt-2"
              >
                View Profile
              </a>
              <div className="mt-12">
                <p className="text-sm text-gray-400">
                  Booked at: {patient.lastUpdated}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded modal-content">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={handleCloseModal}
            >
              X
            </button>
            <Image
              src={selectedImage}
              alt="Selected Patient Photo"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
