"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";

export async function createUser(data: RegisterInputProps) {
  const { confirmPassword, email, name, password, phone, role } = data;
  try {
    const existingUser = await prismaClient.user.findUnique({
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
     // Encrypt the Password =>bcrypt
     const hashedPassword = await bcrypt.hash(password, 10);
     //Generate Token
     const generateToken = () => {
       const min = 100000; // Minimum 6-figure number
       const max = 999999; // Maximum 6-figure number
       return Math.floor(Math.random() * (max - min + 1)) + min;
     };
     const userToken = generateToken();
     const newUser = await prismaClient.user.create({
       data: {
         name: fullName,
         email,
         phone,
         password: hashedPassword,
         role,
         token: userToken,
       },
     });
    
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went wrong",
    };
  }
}
