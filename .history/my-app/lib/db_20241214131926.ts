import { PrismaClient } from "@prisma/client";

declare global {
  // Extend the Node.js global type to include the Prisma client
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}

// Create a single PrismaClient instance
const prismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaClient; // Reuse the Prisma client in development
}

export { prismaClient };
