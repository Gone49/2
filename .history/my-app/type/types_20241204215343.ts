export type ServiceProps = {
  title: string;
  image: string;
  slug: string;
};

// type/register.d.ts (or any file you choose)
export interface RegisterInputProps {
  name: string;
  email: string;
  phone: string; // Matches the `phone` field in the schema
  UserRole: "ADMIN" | "DOCTOR" | "PATIENT"; // Matches the `UserRole` enum
  password: string;
  confirmPassword: string;
}

// types.ts or wherever your types are defined
export interface LoginInputProps {
  userId: string;
  UserRole: "admin" | "doctor" | "patient";
  password: string;
}
