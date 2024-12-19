import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

// Define the handler for each HTTP method (GET, POST)
export const GET = (req, res) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
