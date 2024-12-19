import { PrismaClient } from "@prisma/client";

// Declare prismaClient on the global object
declare global {
  // Use let or const to declare the global prisma property on globalThis
  let prisma: PrismaClient | undefined;
}

export const prismaClient = globalThis.prisma || new PrismaClient();

// In development, assign the prismaClient to globalThis
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}

export { prismaClient };
