"use client"
 
import * as React from "react"
 
import { Calendar } from "@/components/ui/calendar"

export default function Avaiblity() {
    const [bookDate, setBookDate] = React.useState<Date | undefined>(new Date())
    console.log(bookDate);
    
  return (
    <div>
        <h2>Select the Date and Time</h2>
      <div className="grid grid-cols-2">
        <div className="sm:col-span-1 col-span-full">

        </div>
        <div className="sm:col-span-1 col-span-full">
            <h2 className='pb-4'>Selected date and time</h2>
        </div>
        </div>
        <Calendar
      mode="single"
      selected={bookDate}
      onSelect={setBookDate}
      className="rounded-md border"
    />
      {/* Availablity time */}
    </div>
  )
}
