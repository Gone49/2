import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

const prismaClient = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  global.prisma = prismaClient;
}

export { prismaClient };
