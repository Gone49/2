'use client';

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function Avaiblity() {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date());
    console.log(bookDate);

    return (
        <div className="w-full bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select the Date and Time</h3>
            <div className="grid grid-cols-2 gap-4">
                <div className="sm:col-span-1 col-span-full">
                    {/* Add any additional content for the first column here */}
                </div>
                <div className="sm:col-span-1 col-span-full">
                    <h2 className="pb-4">Selected date and time</h2>
                    <p className="text-gray-600">{bookDate ? bookDate.toString() : "No date selected"}</p>
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
                {/* Render time slots or additional availability options here */}
            </div>
        </div>
    );
}
