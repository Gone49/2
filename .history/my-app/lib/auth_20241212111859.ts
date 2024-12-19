import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/Email-templet";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";
import { RegisterInputProps } from "@/type/types";

export async function createUser(formData: RegisterInputProps) {
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

    // Generate a token for user verification
    const generateToken = () => Math.floor(100000 + Math.random() * 900000);
    const userToken = generateToken();

    // Create the user in the database
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

    // Prepare email content
    const token = newUser.token;
    const message =
      "Thank you for registering with CareBridge. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website:";

    const emailContent = EmailTemplate({
      name,
      token,
      message,
    });

    // Send the email using Resend's correct method
    const sendMail = await resend.send({
      from: "CareBridge <onboarding@resend.dev>",
      to: email,
      subject: "Verify Your Email Address",
      html: emailContent, // The generated HTML email content
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
