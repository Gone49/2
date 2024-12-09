"use server";

import {pr} // Adjust the import path if necessary
import bcrypt from "bcrypt";
import { RegisterInputProps } from "@/type/types";

export async function createUser(data: RegisterInputProps) {
  try {
    const { name, email, phone, role, password, confirmPassword } = data;

    // Validate passwords
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User with this email already exists!" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
      },
    });

    return {
      message: "User registered successfully!",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Something went wrong. Please try again later!" };
  }
}
