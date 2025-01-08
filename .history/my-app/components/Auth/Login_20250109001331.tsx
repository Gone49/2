"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginFormWithBg({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      console.log("Form submitted");
      setIsSubmitting(false);
    }, 2000);
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-300",
        className
      )}
      {...props}
    >
      <Card className="max-w-lg w-full bg-white shadow-md rounded-lg border border-gray-200">
        <CardHeader className="text-center p-6">
          <CardTitle className="text-xl font-semibold text-gray-800">
            Login
          </CardTitle>
          <CardDescription className="text-gray-600 mt-1">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@hospital.com"
                  required
                  className="mt-1 border-gray-300 focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="text-sm text-cyan-600 hover:text-cyan-700"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 border-gray-300 focus:ring-cyan-400 focus:border-cyan-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2 transition-all"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outline"
                className="w-full border border-gray-300 text-gray-700 hover:bg-cyan-50 rounded-lg py-2 transition-all"
              >
                Login with Google
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="text-cyan-600 hover:underline hover:text-cyan-700"
              >
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
