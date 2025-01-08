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

export function Login({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className={cn("flex justify-center items-center min-h-screen bg-gray-50", className)} {...props}>
      <Card className="w-full max-w-md rounded-lg shadow-lg bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-700">Login</CardTitle>
          <CardDescription className="text-gray-500 mt-2">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                  placeholder="Enter your email"
                  className="mt-1 border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                 
                </div>
                
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 border-gray-300 focus:ring-cyan-500 focus:border-cyan-500"
                  required
                />
              </div>
              <Link
                    href="#"
                    className="text-sm text-cyan-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 focus:outline-none"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600"
              >
                Login with Google
              </Button>
            </div>

            {/* Signup Link */}
            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-cyan-600 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
