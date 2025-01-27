"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(data: RegisterInputProps) {
  const { name, email, phone, role, password, confirmPassword } = data;

  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists!" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        accounts: {
          create: [], // Optionally create accounts here if needed
        },
      },
    });

    return { message: "User created successfully!", user: newUser };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
