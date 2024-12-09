import {PrismaClient} from "@prisma/client"

declare global{
    var prismaa : PrismaClient | undefined;
}
export const prismaClient=global