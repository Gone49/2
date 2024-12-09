import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types";

// Define the props for TextInput component
interface TextInputProps {
  id: keyof RegisterInputProps; // This ensures the input field is registered properly with correct typing.
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<RegisterInputProps>; // Register type from react-hook-form
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
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(id, { required: `${label} is required` })} // Register input with validation
      />
      {error && <span className="text-red-500 text-sm">{error}</span>} {/* Error message */}
    </div>
  );
};

export default TextInput;
