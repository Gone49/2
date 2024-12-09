import { PrismaClient } from "@prisma/client";

// Declare a global variable for Prisma Client instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create or use a global PrismaClient instance
export const prismaClient = globalThis.prisma || new PrismaClient();

// If not in production, assign the client to the global object
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}
