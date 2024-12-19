"use server";

import EmailTemplate from "@/components/Emails/Email-templet";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/type/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";

export async function createUser(formData: RegisterInputProps) {
  const resend = new Resend("re_123456789");
  const { name, email, role, phone, password } = formData;

  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        data: null,
        error: `User with email (${email}) already exists.`,
        status: 409,
      };
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a 6-digit token
    const generateToken = () => Math.floor(100000 + Math.random() * 900000);
    const userToken = generateToken();

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

    // Send email with token
    const token = newUser.token;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account";
    const message =
      "Thank you for registering with CareBridge. Please use the following verification code:";
    const sendMail = await resend.emails.send({
      from: "CareBridge <onboarding@resend.dev>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name: firstName, token, linkText, message }),
    });

    console.log("Verification Email Sent:", sendMail);
    console.log("New User Created:", newUser);

    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      data: null,
      error: "Internal server error",
      status: 500,
    };
  }
}
