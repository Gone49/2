import React from "react";

interface SubmitButtonProps {
  text: string;
  isSubmitting: boolean; // Tracks form submission state
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
      disabled={isSubmitting} // Disable button while submitting
    >
      {isSubmitting ? "Submitting..." : text} {/* Show loading text when submitting */}
    </button>
  );
};

export default SubmitButton;
