"use client"
import React, { useState, useEffect } from 'react';

// Define a type for the report structure
interface Report {
  id: number;
  category: string;
  title: string;
  content: string;
}

// Example data, replace this with your actual reports fetching logic
const reports: Report[] = [
  { id: 1, category: 'Asthma', title: 'Asthma Report 1', content: 'Details of report 1' },
  { id: 2, category: 'Asthma', title: 'Asthma Report 2', content: 'Details of report 2' },
  { id: 3, category: 'Diabetes', title: 'Diabetes Report 1', content: 'Details of report 3' },
  { id: 4, category: 'Asthma', title: 'Asthma Report 3', content: 'Details of report 4' },
  // Add more reports here
];

export default function AsthmaReportsPage() {
  // Explicitly type the state with the Report array type
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);

  useEffect(() => {
    // Filter reports by category "Asthma"
    const asthmaReports = reports.filter(report => report.category === 'Asthma');
    setFilteredReports(asthmaReports);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Asthma Reports</h1>

        {filteredReports.length > 0 ? (
          <div className="space-y-6">
            {filteredReports.map(report => (
              <div key={report.id} className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">{report.title}</h2>
                <p className="text-gray-600">{report.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">No asthma reports available.</p>
        )}
      </div>
    </div>
  );
}
