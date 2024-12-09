"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/type/types";
import toast from "react-hot-toast";
import router from "next/router";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputProps>();

  const onSubmit = async (data: LoginInputProps) => {
    setIsSubmitting(true);
    try {
      setIsSubmitting(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsSubmitting(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        
        setIsSubmitting(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ID Input */}
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              User ID
            </label>
            <input
              {...register("userId", { required: "User ID is required" })}
              type="text"
              id="userId"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your User ID"
            />
            {errors.userId && (
              <p className="text-red-500 text-sm">{errors.userId.message}</p>
            )}
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
              {...register("role", { required: "Role is required" })}
              id="role"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              <option value="">-- Select Role --</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="SERVICE_PROVIDER">Service Provider</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
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
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Log In"}
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
  function setShowNotification(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

