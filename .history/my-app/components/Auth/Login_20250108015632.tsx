"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"

 
const [isSubmitting, setIsSubmitting] = useState(false);

export function Login({
    
  className,
  ...props
}:
 React.ComponentPropsWithoutRef<"div">) {
    function handleSubmit(onSubmit: any): import("react").FormEventHandler<HTMLFormElement> | undefined {
        throw new Error("Function not implemented.")
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form  onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <TextInput 
                  id,
                  label,
                  placeholder,
                  type,
                  register,
                  error,
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required placeholder={""} />
              </div>
              <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-cyan-500 text-white rounded-lg font-medium text-lg hover:bg-cyan-600 transition-colors duration-300"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
function useState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.")
}

