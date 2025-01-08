"use client";

import { RegisterInputProps } from "@/type/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";  // Import useRouter from next/navigation
import { Card, CardHeader } from "../ui/card";

const Register = ({ role = "USER" }: { role: UserRole }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();  // Initialize the router from next/navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  // Type guard to check user data
  function isUserData(user: { data: any; error: string | null; status: number }): user is { data: { id: string }; error: null; status: number } {
    return user.data !== null;
  }

  // Ensure that router is only used after the component mounts on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use router here on the client-side
    }
  }, []);  // Empty dependency array ensures this runs only after mount

  // Handle form submission
  async function onSubmit(data: RegisterInputProps) {
    setIsSubmitting(true);

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    data.role = role.toUpperCase() as UserRole;

    try {
      const user = await createUser(data);

      if (user.status === 200 && isUserData(user)) {
        toast.success("User created successfully!");
        router.push(`/verify-account/${user.data.id}`);  // Client-side routing
      } else if (user.status === 400) {
        toast.error(user.error);
      } else {
        toast.error("Unexpected response.");
      }
    } catch (error) {
      toast.error("An error occurred.");
      console.error(error);
    }

    setIsSubmitting(false);
  }

  return (
    <div className={className} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              {/* Google Login Button */}
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
