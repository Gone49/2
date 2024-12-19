import { UserRole } from "@prisma/client";

export type ServiceProps = {
  title: string;
  image: string;
  slug: string;
};

export interface RegisterInputProps {
  name: string;
  email: string;
  phone: string; // Matches the `phone` field in the schema
  role: UserRole; // Matches the `UserRole` enum
  password: string;
  confirmPassword: string;
}

export interface LoginInputProps {
  email: string;
  role: UserRole;
  password: string;
}
