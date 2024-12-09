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
      return { error: "User already exists!", status: 409 };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a 6-digit token
    const token = generateToken();

    // Create the new user
    const newUser = await prismaClient.user.create({
      data:{
        name: string | null;
        id: number;
        email: string;
        phone: string;
        role: string;
        password: string;
        token: string;
      }
      ,
    });

    return { message: "User created successfully!", user: newUser };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
