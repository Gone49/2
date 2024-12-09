"use client";

import { LoginInputProps } from "@/type/types";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";  // Ensure path is correct
import SubmitButton from "../FormInputs/SubmitButton"; // Ensure path is correct

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    console.log(data);
  }

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

      <div className="relative z-10 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Log In to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Use TextInput component for fields */}
          <TextInput
            id="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            register={register}
            error={errors.email?.message}
          />

          <TextInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <SubmitButton label="Log In" />

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

export default LoginForm;
