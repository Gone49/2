"use server";
import {ema}
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

    // Function to generate a 6-digit token as a string
    const generateToken = (): string => {
      const min = 100000;
      const max = 999999;
      return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    };

    const hashedPassword = await bcrypt.hash(password, 10);
    const userToken = generateToken(); // Generate token as a string

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        token: userToken, // Assign the string token
      },
    });

    // Return user and token together
    return {
      message: "User created successfully!",
      user: newUser,
      token: userToken,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
