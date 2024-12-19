import { PrismaClient } from "@prisma/client";

// Extend the global object with prisma property
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

// Initialize prismaClient
export const prismaClient = globalThis.prisma || new PrismaClient();

// If in development, assign prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
