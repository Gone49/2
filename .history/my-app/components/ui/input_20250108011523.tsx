import React from "react";

// Extend the InputProps to allow more attributes like `id`, `required`, etc.
interface InputProps {
  id: string; // Added id prop
  type?: string;
  placeholder: string;
  required?: boolean;
  [key: string]: any; // Allow other input attributes (e.g., name, className, etc.)
}

const Input = ({ id, type = "text", placeholder, required, ...props }: InputProps) => {
  return <input id={id} className="border p-2" placeholder={placeholder} type={type} required={required} {...props} />;
};

export default Input;
