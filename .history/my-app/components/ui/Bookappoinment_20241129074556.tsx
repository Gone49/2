"use client"; // Ensure the component is treated as a client-side component

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentBooking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Handle the date change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // Handle the time change
  const handleTimeChange = (time: string) => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Book an Appointment</h1>

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

        {/* Book Appointment Button */}
        <div>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
