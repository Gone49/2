import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types"; // Import only what's needed
import { Label } from "../ui/label";
import Input from "../ui/input";

interface TextInputProps {
  id: keyof RegisterInputProps; // `id` will be a key of `RegisterInputProps`
  label: string;
  placeholder?: string;
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

      {/* Using custom Input component */}
      <Input
        id={id} // Use `id` directly since it's already a valid key of `RegisterInputProps`
        type={type}
        placeholder=""
        required
        {...register(id, { required: `${label} is required` })} // Register the field
      />

      {/* Displaying error message */}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default TextInput;
