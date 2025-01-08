"use client";

import { useState } from "react"; // Import useState
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

  // Placeholder for form submission logic
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
        "flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500",
        className
      )}
      {...props}
    >
      <Card className="max-w-md w-full shadow-xl bg-white rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
          <CardDescription ="text-gray-600 mt-2">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* Email Field */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Password Field */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Link
                    href="#"
                    className="ml-auto text-sm text-blue-500 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 transition duration-300"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outline"
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md py-2"
              >
                Login with Google
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
