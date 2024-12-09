export type ServiceProps = {
  title: string;
  image: string;
  slug: string;
};

// type/register.d.ts (or any file you choose)
export interface RegisterInputProps {
  email: string;
  password: string;
  name: string;
  phoneNumber?: string; // Add this (optional or required)
}

// types.ts or wherever your types are defined
export interface LoginInputProps {
  userId: string;
  role: "admin" | "doctor" | "patient";
  password: string;
}
