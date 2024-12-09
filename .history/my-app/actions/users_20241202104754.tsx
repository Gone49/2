""
import { prismaClient } from "@/lib/db"; // Update with your db file path
import { RegisterInputProps } from "@/type/types";

export async function createUser(data: RegisterInputProps) {
  try {
    // 1. Extract credentials
    const { email, password, name, phoneNumber } = data;

    // 2. Check if the user already exists in the database
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        error: "User already exists!",
      };
    }

    // Continue with user creation if they don't exist
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prismaClient.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        phoneNumber,
      },
    });

    return {
      message: "User created successfully!",
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        phoneNumber: newUser.phoneNumber,
      },
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
}
