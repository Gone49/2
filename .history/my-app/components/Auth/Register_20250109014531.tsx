"use client";

import { RegisterInputProps } from "@/type/types";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import Input from "../ui/input";
import { Button } from "../ui/button";

const Register = ({ role = "USER", className, ...props }: { role: UserRole; className?: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Initialize the router from next/navigation

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Add setValue for handling form field values manually
  } = useForm<RegisterInputProps>();

  // Type guard to check user data
  function isUserData(user: { data: any; error: string | null; status: number }): user is { data: { id: string }; error: null; status: number } {
    return user.data !== null;
  }

  // Handle form submission
  async function onSubmit(data: RegisterInputProps) {
    setIsSubmitting(true);

    // Check if the data is valid (not null or empty)
    if (!data || !data.name || !data.email || !data.password || !data.confirmPassword) {
      toast.error("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    // Ensure passwords match
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    // Ensure the role is valid and properly formatted
    const userRole = role ? role.toUpperCase() : "USER"; // Default to USER if no role is passed
    data.role = userRole as UserRole;

    try {
      // Log data before submission
      console.log("Form Data", data);

      const user = await createUser(data);

      if (user.status === 200 && isUserData(user)) {
        toast.success("User created successfully!");
        router.push(`/verify-account/${user.data.id}`); // Client-side routing
      } else if (user.status === 400) {
        toast.error(user.error || "Bad Request");
      } else {
        toast.error("Unexpected response.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Error submitting form:", error);
    }

    setIsSubmitting(false);
  }

  return (
    <div className={className} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register with your email and password to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Full Name Field */}
              <div className="grid gap-2">
                <TextInput
                  id="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  type="text"
                  register={register}
                  error={errors.name?.message}
                />
              </div>

              {/* Email Field */}
              <div className="grid gap-2">
                <TextInput
                  id="email"
                  label="Gmail"
                  placeholder="Enter your Gmail"
                  type="email"
                  register={register}
                  error={errors.email?.message}
                  {...register("email", { required: "Email is required" })}
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
                  placeholder="Enter your password"
                  required
                  {...register("password", { required: "Password is required" })}
                />
              </div>

              {/* Confirm Password Field */}
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  {...register("confirmPassword", { required: "Please confirm your password" })}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "creating Account..." : "Register"}
              </Button>

              {/* Google Login Button */}
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;