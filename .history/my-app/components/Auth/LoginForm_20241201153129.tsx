// LoginPage.tsx
"use client";

import { LoginInputProps } from "@/type/types"; // Ensure correct path
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput"; // TextInput import
import SubmitButton from "../FormInputs/SubmitButton"; // SubmitButton import

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use `useForm<LoginInputProps>` to specify the form input types
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputProps>();

  // On submit handler
  const onSubmit = async (data: LoginInputProps) => {
    setIsSubmitting(true);
    console.log(data);
    setTimeout(() => setIsSubmitting(false), 2000); // Simulate submit
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center filter lg:block hidden" style={{ backgroundImage: "url('/bg.jpg')" }}></div>
      <div className="absolute inset-0"></div>

      <div className="relative z-60 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Pass 'userId' and 'register' correctly */}
          <TextInput 
            id="userId" 
            label="User ID" 
            placeholder="Enter your User ID" 
            type="text" 
            register={register} 
            error={errors.userId?.message} 
          />
          
          {/* Role select input */}
          <div className="mb-3">
            <label htmlFor="role" className="block text-gray-700 font-medium text-sm mb-1">Select Your Role</label>
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

          {/* Password input */}
          <TextInput 
            id="password" 
            label="Password" 
            placeholder="Enter your password" 
            type="password" 
            register={register} 
            error={errors.password?.message} 
          />

          <SubmitButton text="Log In" isSubmitting={isSubmitting} />
        </form>

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
