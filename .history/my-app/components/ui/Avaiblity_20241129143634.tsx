'use client';

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Avaiblity() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<string | undefined>(undefined);
  const [isClient, setIsClient] = React.useState(false);

  // Virtual data for available time slots
  const availableSlots = [
    "9:00 AM - 10:00 AM",
    "10:30 AM - 11:30 AM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:30 PM - 4:30 PM",
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

          {/* Display Selected Date and Time */}
      <div className=">
        <p className="text-gray-600">{`Selected Date: ${formattedDate}`}</p>
        <p className="text-gray-600">{`Selected Time: ${selectedTime || "No time selected"}`}</p>
      </div> 

        {/* Available Time Slots */}
        <div className="sm:col-span-1 col-span-full flex flex-wrap gap-2">
          <h3 className="text-lg font-semibold text-gray-800 w-full">Available Time Slots</h3>
          {availableSlots.map((slot, index) => (
            <button
              key={index}
              className={`text-gray-600 border p-2 rounded-md ${selectedTime === slot ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"}`}
              onClick={() => handleTimeSelect(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

     
    </div>
  );
}
