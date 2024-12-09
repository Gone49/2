"use client";

import { LoginInputProps } from "@/type/types"; // Ensure the correct path
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput"; // Ensure correct path
import SubmitButton from "../FormInputs/SubmitButton"; // Ensure correct path

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Register form inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  const onSubmit = async (data: LoginInputProps) => {
    setIsSubmitting(true); // Start submission
    console.log(data); // Handle form data submission here
    setTimeout(() => setIsSubmitting(false), 2000); // Reset after 2 seconds (simulating submit)
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter lg:block hidden"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Login Form */}
      <div className="relative z-60 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* User ID Input */}
          <TextInput
            id="Id" // Ensure this matches your form's field key (e.g., userId)
            label="User ID"
            placeholder="Enter your User ID"
            type="text"
            register={register}
            error={errors.userId?.message}
          />

          {/* Role Selection */}
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
            >
              <option value="">-- Select Role --</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
          </div>

          {/* Password Input */}
          <TextInput
            id="password" // Ensure this matches your form's field key (e.g., password)
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          {/* Submit Button */}
          <SubmitButton text="Log In" isSubmitting={isSubmitting} />
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-cyan-500 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
