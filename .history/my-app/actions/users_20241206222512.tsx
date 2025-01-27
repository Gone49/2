"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

// Function to generate a 6-digit token
const  generateToken =() => {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export async function createUser(formdata: RegisterInputProps) {
  const { name, email, phone, role, password, confirmPassword } = formdata;

  console.log("Received Input Data:", formdata); // Log incoming user input data

  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return { error: "Passwords do not match!" };
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("User already exists!");
      return { error: "User already exists!", status: 409 };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully.");

    // Generate a 6-digit token
    const token = generateToken();
    console.log("Generated Token:", token);

    // Prepare response data
    const userDataWithToken = {
      ...formdata, // Includes name, email, phone, role, password, confirmPassword
      token,       // Adds the generated token to the response
    };

    console.log("User Data with Token:", userDataWithToken);

    // Create the new user in the database
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        token: String(token), // Save the generated token
      },
    });

    console.log("User created successfully:", newUser);

    return { message: "User created successfully!", user: newUser, token };
  } catch (error) {
    console.error("Error during user creation:", error); // Log errors if any
    return { error: "Something went wrong!" };
  }
}
