// db.ts
import { PrismaClient } from "@prisma/client";

// Use the global variable defined in global.d.ts
export const prismaClient = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismaClient;
}
