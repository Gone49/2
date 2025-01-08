import React, { useState } from 'react';

const page = () => {
  const [issueDetails, setIssueDetails] = useState('');

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIssueDetails(e.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (issueDetails.trim()) {
      // Logic for reporting the issue (e.g., sending it to a server or saving it)
      alert('Issue reported successfully');
      setIssueDetails(''); // Clear the input field after submission
    } else {
      alert('Please provide issue details before submitting.');
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Report an Issue</h1>
      
      <textarea
        value={issueDetails}
        onChange={handleInputChange}
        placeholder="Describe the issue here..."
        rows={4}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default page;
