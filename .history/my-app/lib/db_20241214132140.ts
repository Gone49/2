import { PrismaClient } from "@prisma/client";

// Extend globalThis (or global in Node.js) with prisma
declare global {
  // This is the correct way to extend globalThis in Node.js
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

// Create a single PrismaClient instance
const prismaClient = globalThis.prisma ?? new PrismaClient();

// Cache the Prisma client instance in development to prevent multiple instances
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
