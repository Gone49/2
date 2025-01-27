"use client";

import { RegisterInputProps } from "@/type/types"; // Ensure you are using the correct type for registration
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";  // Import TextInput component
import SubmitButton from "../FormInputs/SubmitButton";  // Import SubmitButton component
import { createUser } from "@/actions/users";

const RegisterPage = ({role="USER"}:{id : role}) => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const {
  
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>(); // Use `RegisterInputProps` here for form handling

  // Handle form submission
  async function onSubmit(data: RegisterInputProps) {
    setIsSubmitting(true); // Start submitting
    console.log(data);
    try {
      const user=await createUser(data)
    } catch (error) {
      console.log(error);
      
    }
    // Simulate an API call or form submission process
    setTimeout(() => {
      setIsSubmitting(false); // Finish submitting
    }, 2000); // Simulate a delay
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
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Use TextInput component for fields */}
          <TextInput
            id="name" // Use the correct key for RegisterInputProps
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            register={register}
            error={errors.name?.message} // Map the correct error message from formState
          />

          <TextInput
            id="email" // Use the correct key for RegisterInputProps
            label="Gmail"
            placeholder="Enter your Gmail"
            type="email"
            register={register}
            error={errors.email?.message} // Map the correct error message
          />

          <TextInput
            id="phone" // Use the correct key for RegisterInputProps
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            register={register}
            error={errors.phone?.message} // Map the correct error message
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
              {...register("role", { required: "Role is required" })} // Map to the "role" field in RegisterInputProps
            >
              <option value="">-- Select Role --</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            {errors.role && <span className="text-red-500 text-sm">{errors.role.message}</span>}
          </div>

          <TextInput
            id="password" // Use the correct key for RegisterInputProps
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            error={errors.password?.message} // Map the correct error message
          />

          <TextInput
            id="confirmPassword" // Use the correct key for RegisterInputProps
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            register={register}
            error={errors.confirmPassword?.message} // Map the correct error message
          />

          {/* Submit Button */}
          <SubmitButton text="Sign Up" isSubmitting={isSubmitting} /> {/* Pass the text and isSubmitting state */}
        </form>

        {/* Footer */}
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
