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

  console.log("Received Input Data:", formdata);

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

    const hashedPassword = await bcrypt.hash(password, 10);
    const token = generateToken();

    console.log("Generated Token:", token); // Ensure token is logged here

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

    return { message: "User created successfully!", user: newUser, token };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
