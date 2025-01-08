"use client";

import React, { useState } from "react";
import { cn } from "./utils"; // Assuming a utility function for classnames
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card";
import { Label, Input, Button } from "./UI";
import Link from "next/link"; // Replace with your routing library if different

const LoginForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async action
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Login submitted!");
    }, 2000);
  };

  return (
    <div className={cn("flex flex-col gap-6", props.className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm text-cyan-600 underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Login with Google
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-cyan-600 underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
