"use client";
import React, { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Placeholder for sending feedback to the backend
    console.log("Submitted Feedback:", formData);

    // Reset form fields after submission
    setFormData({ name: "", specialization: "", feedback: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Doctor's Feedback
        </h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="specialization" className="block text-sm font-semibold text-gray-600 mb-2">
                Specialization
              </label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="Enter your specialization"
                required
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-semibold text-gray-600 mb-2">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
            <p className="text-gray-600">
              Your feedback has been submitted successfully. We appreciate your input.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
            >
              Submit Another Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
