import { PrismaClient } from "@prisma/client";

// Extend the globalThis interface for TypeScript
declare global {
  var prisma: PrismaClient | undefined;
}

// Use let to avoid redeclaration issues
let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaClient = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaClient = global.prisma;
}

export { prismaClient };
