import { PrismaClient } from "@prisma/client";

// Declare the global variable using let or const
declare global {
  // Add prisma as a property of globalThis
  var prisma: PrismaClient | undefined;
}

export const prismaClient = globalThis.prisma || new PrismaClient();

// In non-production environments, assign prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
