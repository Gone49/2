import { PrismaClient } from "@prisma/client";

// Ensure Prisma Client is a singleton instance
let prismaClient: PrismaClient;

// In production, create a new Prisma Client instance
if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  // In development, use a global variable to persist Prisma Client instance
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient(); // Save Prisma instance globally
  }
  prismaClient = globalThis.prisma; // Use the existing global instance if available
}

export { prismaClient }; // Export prismaClient for use in your app
