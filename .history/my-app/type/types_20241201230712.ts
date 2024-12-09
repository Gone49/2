export type ServiceProps = {
  title: string;
  image: string;
  slug: string;
};

// type/register.d.ts (or any file you choose)
export interface RegisterInputProps {
  name: string;
  email: string;
  phone: string; // Added phone field
  role: "doctor" | "patient" | "admin"; // Ensure the role matches the updated values
  password: string;
  confirmPassword: string;
}

// types.ts or wherever your types are defined
export interface LoginInputProps {
  userId: string;
  role: "admin" | "doctor" | "patient";
  password: string;
}
