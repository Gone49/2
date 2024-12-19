import React from 'react'


export default function Dashboard() {
  return (
    <div className="w-full max-w-md">
    <h2 className="text-xl font-serif text-center mb-4">Search Patient</h2>
    <div className="flex">
      <input
        type="text"
        className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
        placeholder="Enter UPIN"
      />
      <button className="bg-cyan-500 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    </div>
  </div>
  
  )
}
