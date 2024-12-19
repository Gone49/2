import { PrismaClient } from "@prisma/client";

// Extend the globalThis object to declare the prisma property
declare global {
  // Add prisma as a property of globalThis
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

export const prismaClient = globalThis.prisma || new PrismaClient();

// If in development, assign prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
