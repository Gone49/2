// import { authOptions } from "@/config/auth";
import NextAuth from "next-auth";
 
const handler = NextAuth({...});
 
export { handler as GET, handler as POST };