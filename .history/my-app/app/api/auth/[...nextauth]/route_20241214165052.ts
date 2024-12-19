import { authOptions } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";

// Define the handler for each HTTP method (GET, POST)
export const GET = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export const POST = (req, res) => NextAuth(req, res, authOptions);
