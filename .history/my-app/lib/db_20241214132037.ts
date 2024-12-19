import { PrismaClient } from "@prisma/client";

// Extend the global object to include the prisma property
declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

// Create a single PrismaClient instance
const prismaClient = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaClient; // Cache the Prisma client instance in development
}

export { prismaClient };
