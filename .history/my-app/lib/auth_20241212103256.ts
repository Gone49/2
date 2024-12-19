"use server";

import EmailTemplate from "@/components/Emails/Email-templet";
import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/type/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";

export async function createUser(formData: RegisterInputProps) {
  // Initialize Resend with the correct API key
  const resend = new Resend("re_6p232GVk_NcThavbaGzUMAp1zgeBtQL9w");

  const { name, email, role, phone, password } = formData;
  try {
    // Check if the user already exists
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

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const generateToken = () => Math.floor(100000 + Math.random() * 900000);
    const userToken = generateToken();

    // Create new user in the database
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

    // Email template details
    const token = newUser.token;
    const linkText = "Verify your Account";
    const message =
      "Thank you for registering with CareBridge. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website:";

    // Generate email content
    const emailContent = EmailTemplate({
      name,
      token,
      linkText,
      message,
    });

    console.log("Generated email content:", emailContent);

    // Send email using Resend service with resend.emails.send
    const sendMail = await resend.emails.send({
      from: "CareBridge <onboarding@resend.dev>",
      to: email,
      subject: "Verify Your Email Address",
      react: emailContent, // Pass the generated React email content
    });

    console.log("Email sent successfully:", sendMail);

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
