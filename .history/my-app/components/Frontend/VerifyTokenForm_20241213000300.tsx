"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "f";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

async function updateUserById(id: string) {
  // Example implementation
  return fetch(`/api/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ verified: true }),
  });
}

export default function VerifyTokenForm({
  userToken,
  id,
}: {
  userToken: any;
  id: string;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { token: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const userInputToken = parseInt(data.token);
    if (userInputToken === userToken) {
      setShowNotification(false);
      try {
        await updateUserById(id);
        setLoading(false);
        toast.success("Account Verified");
        router.push("/login");
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setShowNotification(true);
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Wrong Token!</span> Please check the
            token and try again.
          </Alert>
        )}
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Token Here</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the 6-figure pass code sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
