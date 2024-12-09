'use client';

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Avaiblity() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(undefined);
  const [isClient, setIsClient] = React.useState(false);
  const [showAllSlots, setShowAllSlots] = React.useState(false);

  // Virtual data for available time slots
  const availableSlots = [
    "9:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:30 PM - 4:30 PM",
    "5:00 PM - 6:00 PM",
    "6:30 PM - 7:30 PM",
    "8:00 PM - 9:00 PM",
  ];

  // Ensure the component is rendered only on the client
  React.useEffect(() => {
    setIsClient(true);
    setBookDate(new Date()); // Initialize the date when the component mounts
  }, []);

  // Format the date without the GMT offset
  const formattedDate = bookDate ? bookDate.toLocaleDateString() : "No date selected";

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Book appointment function
  const handleBookAppointment = () => {
    if (bookDate && selectedTime) {
      alert(`Appointment booked for ${formattedDate} at ${selectedTime}`);
      // You can also send this data to your server here
    }
  };

  // Toggle between showing all slots or just the first 5
  const toggleSlots = () => {
    setShowAllSlots(!showAllSlots);
  };

  if (!isClient) {
    return null; // Render nothing until client-side JavaScript takes over
  }

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Select the Date and Time</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Calendar Component */}
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            mode="single"
            selected={bookDate}
            onSelect={setBookDate}
            className="rounded-md border"
          />
        </div>

        {/* Available Time Slots */}
        <div className="sm:col-span-1 col-span-full">
          <h3 className="text-lg font-semibold text-gray-800 w-full">Available Time Slots</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {/* Show only 5 slots initially */}
            {(showAllSlots ? availableSlots : availableSlots.slice(0, 6)).map((slot, index) => (
              <button
                key={index}
                className={`text-gray-600 border p-2 rounded-md ${selectedTime === slot ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"}`}
                onClick={() => handleTimeSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          
          {/* Toggle View More / View Less */}
          <button
            onClick={toggleSlots}
            className="mt-4 text-blue-600 hover:underline"
          >
            {showAllSlots ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Display Selected Date and Time */}
      <div className="mt-4 ml-">
        <p className="text-gray-600">{`Selected Date: ${formattedDate}`}</p>
        <p className="text-gray-600">{`Selected Time: ${selectedTime || "No time selected"}`}</p>
      </div>

      {/* Book Appointment Button */}
      <div className="mt-4">
        <button
          onClick={handleBookAppointment}
          disabled={!bookDate || !selectedTime}
          className={`w-full py-2 px-4 rounded-md text-white ${bookDate && selectedTime ? "bg-black hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"}`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
