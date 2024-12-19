"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/type/types";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
imort // Import SignInResponse directly
import { Link } from "lucide-react";

const LoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputProps>();

  const onSubmit = async (data: LoginInputProps) => {
    setIsSubmitting(true);
    try {
      const loginData: SignInResponse | void = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      // Handling loginData
      if (!loginData) {
        throw new Error("Login data is undefined");
      }

      if (loginData?.error) {
        toast.error("Sign-in error: " + loginData.error);
      } else if (loginData?.ok) {
        toast.success("Login Successful");
        router.push("/dashboard");
      } else {
        toast.error("Unexpected error");
      }
    } catch (error) {
      toast.error("It seems something is wrong with your network");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter lg:block hidden"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Login Form */}
      <div className="relative z-10 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* User ID */}
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="block text-gray-700 font-medium text-sm mb-1"
            >
              User ID
            </label>
            <input
              {...register("email", { required: "User ID is required" })}
              type="text"
              id="userId"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your User ID"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Role */}
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
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          {/* Password */}
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
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="remember-me" className="rounded" />
              <label htmlFor="remember-me" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-cyan-600 text-sm">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-cyan-500 text-white rounded-lg font-medium text-lg hover:bg-cyan-600 transition-colors duration-300"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Dodn't have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-500 hover:underline font-medium"
          >
          Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
