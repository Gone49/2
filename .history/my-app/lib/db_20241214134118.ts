import { PrismaClient } from "@prisma/client";

// Declare the global variable once (not multiple times)
declare global {
  var prisma: PrismaClient | undefined;
}

// Only initialize and export the client here
export const rismaClient = globalThis.prisma || new PrismaClient();

// Ensure the global instance is set only in non-production environments
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
