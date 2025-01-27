import { FieldValues, UseFormRegister } from "react-hook-form";
import { LoginInputProps, RegisterInputProps } from "@/type/types"; // Import your types

interface TextInputProps<T extends FieldValues> {
  id: keyof T; // Dynamically accepts keys from the passed type
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<T>;
  error?: string;
}

const TextInput = <T extends LoginInputProps | RegisterInputProps>({
  id,
  label,
  placeholder,
  type,
  register,
  error,
}: TextInputProps<T>) => {
  return (
    <div className="mb-4">
      <label htmlFor={String(id)} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>
      <input
        id={String(id)}  // Cast `id` to string
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(String(id), { required: `${label} is required` })} // Cast `id` to string here
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
