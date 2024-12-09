import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/type/types";

export async function createUser(formdata: RegisterInputProps) {
  const { name, email, phone, role, password, confirmPassword } = formdata;

  console.log("Received Input Data:", formdata); // Log incoming user input data

  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return { error: "Passwords do not match!" };
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.error("User already exists!");
      return { error: "User already exists!", status: 409 };
    }

    // Hash the password
    const hashedPassword = await crypto.hash(password, 10);
    console.log("Password hashed successfully.");

    // Generate a 6-digit token
    const token = generateToken();
    console.log("Generated Token:", token);

    // Log user input and the token before saving to the database
    console.log("User Data to be Saved:", {
      name,
      email,
      phone,
      role,
      hashedPassword,
      token,
    });

    // Create the new user
    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        token: String(token), // Save the generated token
      },
    });

    console.log("User created successfully:", newUser); // Log saved user data

    return { message: "User created successfully!", user: newUser };
  } catch (error) {
    console.error("Error during user creation:", error); // Log errors if any
    return { error: "Something went wrong!" };
  }
}
function generateToken() {
  throw new Error("Function not implemented.");
}

