"use server";

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/type/types";


export async function createUser(data: RegisterInputProps) {
  try {
    // Check if the user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return { error: "User already exists!" };
    }

    // Hash the user's password
    const hashedPassword = await crypto.hash(data.password, 10);

    // Create the new user in the database
    const newUser = await prismaClient.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name, // Assuming your user model includes a 'name' field
      },
    });

    // Return the created user (excluding sensitive data)
    return {
      message: "User created successfully!",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
