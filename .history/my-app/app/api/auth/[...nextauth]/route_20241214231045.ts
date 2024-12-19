import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(request: Request) {
    return new Response("GET request");
  }
  
  export async function POST(request: Request) {
    return new Response("POST request");
  }
  

