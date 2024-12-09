import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types"; // Import only what's needed

export interface RegisterInputProps {
  name: string;
  email: string;
  phone: string; // Matches the `phone` field in the schema
  role: "ADMIN" | "DOCTOR" | "PATIENT"; // Matches the `UserRole` enum
  password: string;
  confirmPassword: string;
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
        id={id} // Use `id` directly since it's already a valid key of `RegisterInputProps`
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(id, { required: `${label} is required` })} // No need for casting here
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;