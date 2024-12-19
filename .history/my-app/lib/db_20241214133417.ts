import { PrismaClient } from "@prisma/client";

// Declare global object to avoid TypeScript error for global prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize prismaClient
export const PrismaClient = globalThis.prisma || new PrismaClient();

// If in development, assign prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
