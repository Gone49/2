"use client"; // Ensure the component is treated as a client-side component 

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

con: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>("");

  // Handle the date change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // Handle the time change with the correct type
  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time!");
    } else {
      alert(`Appointment booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
      // Submit the booking details to backend or store in state
    }
  };

    function setIsModalOpen(arg0: boolean): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Book an Appointment</h1>

      <div className="space-y-4">
        {/* Book Appointment Button */}
        <div>
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal when clicked
            className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Modal: Date and Time Picker */}
      {setIsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Select Appointment Details</h2>

            <div className="space-y-4">
              {/* Date Picker */}
              <div>
                <label htmlFor="date" className="block text-xl">Select Date:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()} // Prevent selecting past dates
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Time Picker */}
              <div>
                <label htmlFor="time" className="block text-xl">Select Time:</label>
                <TimePicker
                  onChange={handleTimeChange}
                  value={selectedTime}
                  disableClock={true}
                  className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-between space-x-2">
                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
                >
                  Book Appointment
                </button>
                {/* Close Modal Button */}
                <button
                  onClick={() => setIsModalOpen(false)} // Close the modal
                  className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
