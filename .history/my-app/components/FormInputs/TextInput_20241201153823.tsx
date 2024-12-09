import { UseFormRegister } from "react-hook-form";
import { LoginInputProps } from "@/type/types"; // Import only what's needed

interface TextInputProps {
  id: keyof LoginInputProps; // Use `keyof LoginInputProps` for the id prop
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<LoginInputProps>;
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
      <label htmlFor={String(id)} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>
      <input
        id={String(id)} // Explicitly convert `id` to a string for the id prop
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(id as string, { required: `${label} is required` })} // Ensure id is treated as string in register
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
