import { PrismaClient } from "@prisma/client";
 

  var prisma: PrismaClient | undefined;

 
export const prismaClient = prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") prisma = prismaClient;