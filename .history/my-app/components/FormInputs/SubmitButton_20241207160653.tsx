// SubmitButton.tsx
import React from "react";

interface SubmitButtonProps {
  text: string; // Button text
  isSubmitting: boolean; // Indicates whether the form is being submitted
}

const SubmitButton: React.FC<SubmitButtonProps> = ( {tittle} :isSubmitting ) => {
  return (
    <button
      type="submit"
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
      disabled={isSubmitting} // Disable the button while submitting
    >
      {isSubmitting ? "Submitting..." : text} {/* Change text based on submission state */}
    </button>
  );
};

export default SubmitButton;

