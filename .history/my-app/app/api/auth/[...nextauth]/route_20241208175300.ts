
import NextAuth from "next-auth";

const handler = NextAuth({
  // Your NextAuth configuration here
  ...
});

export {handler as GET , hn} // Use default export
