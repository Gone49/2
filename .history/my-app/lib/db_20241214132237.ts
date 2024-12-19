import { PrismaClient } from "@prisma/client";

// Extend globalThis with the prisma property
declare global {
  // TypeScript will now recognize that globalThis can have the prisma property
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

// Create or reuse PrismaClient instance based on environment
const prismaClient = globalThis.prisma ?? new PrismaClient();

// Cache Prisma client in development to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
