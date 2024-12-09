// RegisterPage.tsx
"use client";

import { RegisterInputProps } from "@/type/types";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput"; 
import SubmitButton from "../FormInputs/SubmitButton";
import// New SelectInput component

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center filter lg:block hidden" style={{ backgroundImage: "url('/bg.jpg')" }}></div>
      <div className="absolute inset-0"></div>

      <div className="relative z-10 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm max-w-sm w-full lg:max-w-md lg:backdrop-blur-md">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput id="name" label="Full Name" placeholder="Enter your full name" type="text" register={register} error={errors.name?.message} />
          <TextInput id="email" label="Gmail" placeholder="Enter your Gmail" type="email" register={register} error={errors.email?.message} />
          
          <SelectInput
            id="role"
            label="Select Your Role"
            register={register}
            options={[
              { value: "admin", label: "Admin" },
              { value: "doctor", label: "Doctor" },
              { value: "patient", label: "Patient" },
            ]}
            error={errors.role?.message}
          />

          <TextInput id="password" label="Password" placeholder="Enter your password" type="password" register={register} error={errors.password?.message} />
          <TextInput id="confirmPassword" label="Confirm Password" placeholder="Confirm your password" type="password" register={register} error={errors.confirmPassword?.message} />
          
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
