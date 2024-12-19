import { PrismaClient } from "@prisma/client";

// Declare the global variable once (not multiple times)
declare global {
  var prisma: PrismaClients | undefined;
}

// Only initialize and export the client here
export const PrismaClient = globalThis.prisma || new PrismaClients();

// Ensure the global instance is set only in non-production environments
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
