'use client';

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Avaiblity() {
  const [bookDate, setBookDate] = React.useState<Date | undefined>(undefined);
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

  if (!isClient) {
    return null; // Render nothing until client-side JavaScript takes over
  }

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Select the Date and Time</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="sm:col-span-1 col-span-full">
          {/* Add any additional content for the first column here */}
        </div>
        <div className="sm:col-span-1 col-span-full">
          <p className="text-gray-600">{formattedDate}</p>
        </div>
      </div>

      {/* Calendar Component */}
      <Calendar
        mode="single"
        selected={bookDate}
        onSelect={setBookDate}
        className="rounded-md border"
      />

      {/* Additional Availability Time Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Available Time Slots</h3>
        <ul className="space-y-2">
          {availableSlots.map((slot, index) => (
            <li key={index} className="text-gray-600">
              {slot}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
