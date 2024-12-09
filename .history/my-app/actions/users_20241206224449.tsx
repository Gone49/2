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

  console.log("Received Input Data:", formdata);

  try {
    // Validate passwords match
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    // Check for an existing user by email
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists!", status: 409 };
    }

    // Hash the password and generate a token
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = generateToken();
    console.log("Generated Token:", token); // Log the token

    // Create a new user
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        token: String(token),
      },
    });

    console.log("New User Created with Token:", newUser);

    return { message: "User created successfully!", user: newUser, token };
  } catch (error) {
    console.error("Error in createUser:", error);
    return { error: "Something went wrong!" };
  }
}
