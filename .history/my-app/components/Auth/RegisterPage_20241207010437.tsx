"use client";

import { RegisterInputProps } from "@/type/types";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";

const RegisterPage = ({ role = "PATIENT" }: { role: UserRole }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    setIsSubmitting(true);
    console.log("Form Data Before Submission:", data);

    data.role = role;

    try {
      const { user, token } = await createUser(data); // Destructure the token
      console.log("User Created:", user);
      console.log(user.data);
    } catch (error) {
      console.error("Error Creating User:", error);
    }

    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center filter lg:block hidden"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      <div className="absolute inset-0"></div>

      <div className="relative z-10 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            register={register}
            error={errors.name?.message}
          />

          <TextInput
            id="email"
            label="Gmail"
            placeholder="Enter your Gmail"
            type="email"
            register={register}
            error={errors.email?.message}
          />

          <TextInput
            id="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            register={register}
            error={errors.phone?.message}
          />

          <div className="mb-3">
            <label
              htmlFor="role"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              Select Your Role
            </label>
            <select
              id="role"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              {...register("role", { required: "Role is required" })}
              defaultValue={role}
            >
              <option value="">-- Select Role --</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            {errors.role && (
              <span className="text-red-500 text-sm">{errors.role.message}</span>
            )}
          </div>

          <TextInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <TextInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />

          <SubmitButton text="Sign Up" isSubmitting={isSubmitting} />
        </form>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
