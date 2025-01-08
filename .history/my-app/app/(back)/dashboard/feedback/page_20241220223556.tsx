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

    // In a real-world application, you would send the feedback data to the backend here.
    console.log("Submitted Feedback:", formData);

    // Reset form fields after submission
    setFormData({ name: "", specialization: "", feedback: "" });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Doctor's Feedback</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border px-3 py-2 w-full rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="specialization" className="block font-medium mb-1">
              Specialization:
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              className="border px-3 py-2 w-full rounded"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block font-medium mb-1">
              Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              className="border px-3 py-2 w-full rounded"
              rows={5}
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600 mb-2">Thank you!</h2>
          <p>Your feedback has been submitted successfully.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Another Feedback
          </button>
        </div>
      )}
    </div>
  );
}
