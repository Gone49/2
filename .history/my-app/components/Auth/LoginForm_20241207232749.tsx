"use client";

import { createUser } from "@/actions/users";
import { LoginInputProps } from "@/type/types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = async () => {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    setIsSubmitting(true);
    console.log("Form Data Before Submission:", data);}
   
   try {
     const user=createUser 
   } catch (error) {
    
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

      {/* Login Form */}
      <div className="relative z-60 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>
        <form>
          {/* ID Input */}
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your User ID"
              required
            />
          </div>

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
              required
            >
              <option value="">-- Select Role --</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <p className="text-right text-gray-600 mt-2 mb-1 text-sm">
          <a
            href="/forgot-password"
            className="text-cyan-500 hover:underline font-medium"
          >
            Forgot Password?
          </a>
        </p>

          {/* Submit Button */}
          <button
             title="Log In"
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-300 transition"
          >
            Log In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-cyan-500 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      
      </div>
    </div>
  );
};

export default LoginPage;
