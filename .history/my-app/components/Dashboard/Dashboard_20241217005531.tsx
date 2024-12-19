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

  


 {/* Features Section */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        {[
          { name: "Blood Reports", path: "/blood-reports" },
          { name: "Oxygen", path: "/oxygen" },
          { name: "Asthma", path: "/asthma" },
          { name: "X-ray", path: "/xray" },
          { name: "CT Scan", path: "/ct-scan" },
          { name: "MRI", path: "/mri" },
        ].map((feature, index) => (
          <div
            key={index}
            onClick={() =>(feature.path)}
            className="bg-cyan-100 text-center py-3 rounded shadow cursor-pointer hover:bg-cyan-200"
          >
            {feature.name}
          </div>
        ))}
      </div>