import { PrismaClient } from "@prisma/client";

// Declare the global variable using let or const
declare global {
  // Adding prisma as a property of globalThis so it can be accessed globally
  var prisma: PrismaClient | undefined;
}

// Check if the global variable `prisma` exists or not, otherwise create a new instance
export const prismaClient = globalThis.prisma || new PrismaClient();

// In non-production environments, assign prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
