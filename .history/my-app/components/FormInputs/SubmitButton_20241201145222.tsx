import React from "react";

interface SubmitButtonProps {
  text: string;
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, isSubmitting }) => {
  return (
    <button
      type="submit"
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : text}
    </button>
  );
};

export default SubmitButton;
