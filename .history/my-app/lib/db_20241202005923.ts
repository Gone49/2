import {PrismaClient} from "@prisma/client"

declare global{
    var prismaa : PrismaClient | undefined;
}
export const prismaClient=globalThis.prisma || new PrismaClient();
if (process.env)