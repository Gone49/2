"use server";
 import EmailTemplate from "@/components/Emails/Email-templet";
import { prismaClient } from "@/lib/db";
 import { RegisterInputProps } from "@/type/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
export async function createUser(formData: RegisterInputProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
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
        name: name,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
      
    }
  console.log(data);
  );
    //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with CareBridge. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "Medical App <info@jazzafricaadventures.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}