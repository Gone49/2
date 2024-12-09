// SelectInput.tsx
import { UseFormRegister } from "react-hook-form";
import { RegisterInputProps } from "@/type/types";

interface SelectInputProps {
  id: keyof RegisterInputProps;
  label: string;
  register: UseFormRegister<RegisterInputProps>;
  options: { value: string; label: string }[];
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  register,
  options,
  error,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block text-gray-700 font-medium text-sm mb-1">
        {label}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...register(id, { required: `${label} is required` })}
      >
        <option value="">-- Select Role --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default SelectInput;
