"use server";

import { RegisterInputProps } from "@/type/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";
import { error } from "console";
import {Resend} from "resend"
import EmailTemplate from "@/components/Emails/Email-templet";


export async function createUser(formData: RegisterInputProps) {
  const resend= new Resend()
  const { email, name, password, phone, role } = formData;
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
         name ,
         email,
         phone,
         password: hashedPassword,
         role,
         token: userToken,
       },
     });

      //Send an Email with the Token on the link as a search param
    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Gecko. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "CareBridge <info@carebridgeinfoin.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
     return {
      data: newUser,
      error : null,
      status:200,
     }
     
    
  } catch (error) {
    console.log(error);
    return {
      error: "Something Went wrong",
    };
  }
}
