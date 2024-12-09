"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(formdata: RegisterInputProps) {
  const { name, email, phone, role, password, confirmPassword } = formdata;

  try {
    if (password !== confirmPassword) {
      return { error: "Passwords do not match!" };
    }

    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists!", status: 409 };
    }

    // Function to generate a 6-digit token
    const generateToken = () => {
      const min = 100000;
      const max = 999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = generateToken(); // Generate token

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        token: String(token), // Store token in the database
      },
    });
  
    // Return user and token together
    return {
      message: "User created successfully!",
      user: newUser,
      token: token,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
