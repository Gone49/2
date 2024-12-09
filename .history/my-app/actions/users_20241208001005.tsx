"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(data: RegisterInputProps) {
  const{
    confirmPassword,
email,
name,
password,

phone,

role,
  }
  try {    const existingUser = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });
  if (existingUser) {
    return {
      data: null,
      error: `User with this email ( ${email})  already exists in the Database`,
      status: 409,
    };
  }

    console.log(data);
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went wrong",
    };
  }
}
