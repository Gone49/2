"use server";

import EmailTemplate from "@/components/Emails/Email-templet";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/type/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";

export async function createUser(formData: RegisterInputProps) {
  // Use the new API key
  const resend = new Resend("re_6p232GVk_NcThavbaGzUMAp1zgeBtQL9w");

  const { name, email, role, phone, password } = formData;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        data: null,
        error: `User with this email (${email}) already exists in the database`,
        status: 409,
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
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

    console.log("New user created:", newUser);

    const token = newUser.token;
    const linkText = "Verify your Account";
    const message =
      "Thank you for registering with CareBridge. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website:";
    const emailContent = EmailTemplate({ name, token, linkText, message });

    console.log("Email content:", emailContent);

    const sendMail = await resend.emails.send({
      from: "CareBridge <onboarding@resend.dev>",
      to: email,
      subject: "Verify Your Email Address",
      react: emailContent,
    });

    console.log("Email send response:", sendMail);

    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.error("Error creating user or sending email:", error);
    return {
      error: "Something went wrong",
    };
  }
}
