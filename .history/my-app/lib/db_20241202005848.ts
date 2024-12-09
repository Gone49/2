import {PrismaClient} from "@prisma/client"

declare global{
    let prismaa : PrismaClient | undefined;
}
export const prismaClient=globalThis.prisma || new 