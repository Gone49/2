import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types"; // Import only what's needed
import { Label } from "../ui/label";
import Input from "../ui/input";
import Link from "next/link";

interface TextInputProps {
  id: keyof RegisterInputProps; // `id` will be a key of `RegisterInputProps`
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<RegisterInputProps>; // Use `RegisterInputProps` here
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
      {/* Using custom Label component */}
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="flex items-center">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Link
          href="#"
          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
        >
          Forgot your password?
        </Link>
      </div>

      {/* Using custom Input component */}
      <Input
        id={id} // Use `id` directly since it's already a valid key of `RegisterInputProps`
        type={type}
        placeholder={placeholder}
        required
        {...register(id, { required: `${label} is required` })} // Register the field
      />

      {/* Displaying error message */}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
