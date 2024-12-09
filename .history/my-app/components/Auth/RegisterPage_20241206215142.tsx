"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

// Function to generate a 6-digit token
const generateToken = () => {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export async function createUser(formdata: RegisterInputProps) {
  const { name, email, phone, role, password, confirmPassword } = formdata;

  try {
    // Log incoming data for debugging
    console.log("Form data received:", formdata);

    // Check if passwords match
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    // Check if the user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists!", status: 409 };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a 6-digit token
    const token = generateToken();

    // Log the generated token for debugging
    console.log("Generated Token:", token);

    // Create the new user
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role: role.toUpperCase(), // Ensure role is stored as provided (case-insensitive)
        password: hashedPassword,
        accounts: {
          create: [], // Optionally create accounts here if needed
        },
        token: String(token), // Save the generated token
      },
    });

    // Log the newly created user for debugging
    console.log("New User Created:", newUser);

    return { message: "User created successfully!", user: newUser };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Something went wrong!" };
  }
}
