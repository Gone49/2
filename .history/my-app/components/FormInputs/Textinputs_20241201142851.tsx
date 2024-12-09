// components/Forminput/TextInputs.tsx
import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  type,
  register,
  error,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block text-gray-700 font-medium text-sm mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        placeholder={placeholder}
        {...register(id, { required: `${label} is required` })}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
