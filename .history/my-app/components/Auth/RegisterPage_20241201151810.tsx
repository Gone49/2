"use client";

import { RegisterInputProps } from "@/type/types";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput"; // Reuse TextInput
import SubmitButton from "../FormInputs/SubmitButton";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputProps>();

  const onSubmit = async (data: RegisterInputProps) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative z-60 bg-white/95 p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            id="username"
            label="Username"
            placeholder="Enter your username"
            type="text"
            register={register}
            error={errors.username?.message}
          />
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
          <TextInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />
          <SubmitButton text="Sign Up" isSubmitting={false} />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
