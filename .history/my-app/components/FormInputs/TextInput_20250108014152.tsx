import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types"; // Import only what's needed
import { Label } from "../ui/label";
import Input from "../ui/input";

interface TextInputProps {
  id: keyof RegisterInputProps; // `id` will be a key of `RegisterInputProps` now
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
  <div className="grid gap-2">

  <Input
    id="email"
    type="email"
    placeholder="m@example.com"
    required
  />
</div> 
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>  <Label htmlFor="email" className="text-sm font-medium">
    Email
  </Label>
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
