"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/Email-templet";
import crypto from "crypto";

export async function createUser(formData: RegisterInputProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email, name, password, phone, role } = formData;

  try {
    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        data: null,
        error: "A user with this email already exists.",
        status: 409,
      };
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a secure token
    const userToken = crypto.randomInt(100000, 999999);

    // Create the new user in the database
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });

    // Send verification email
    try {
      await resend.emails.send({
        from: "CareBridge <info@carebridge.com>",
        to: email,
        subject: "Verify Your Email Address",
        react: EmailTemplate({
          name,
          token: userToken,
          linkText: "Verify your Account",
          message:
            "Thank you for registering with CareBridge. To complete your registration and verify your email address, please enter the following 6-digit code:",
        }),
      });
    } catch (emailError) {
      console.error("Error sending email:", emailError);
    }

    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error in createUser:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      status: 500,
    };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prismaClient.user.findUnique({ where: { id } });
    if (!user) {
      return { data: null, error: "User not found", status: 404 };
    }
    return { data: user, error: null, status: 200 };
  } catch (error) {
    console.error("Error in getUserById:", error);
    return { error: "An unexpected error occurred.", status: 500 };
  }
}

export async function updateUserById(id: string) {
  try {
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: { isVerified: true },
    });
    return { data: updatedUser, error: null, status: 200 };
  } catch (error) {
    console.error("Error in updateUserById:", error);
    return { error: "An unexpected error occurred.", status: 500 };
  }
}
