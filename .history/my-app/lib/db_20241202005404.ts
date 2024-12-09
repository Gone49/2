// db.ts (TypeScript) or db.js (JavaScript)
import { PrismaClient } from '@prisma/client'

// Global variable to hold the Prisma Client instance
let prismaClient: PrismaClient

// Check if we are in a development environment to use the global instance
if (process.env.NODE_ENV === 'development') {
  // In development mode, we use a global instance to avoid multiple Prisma Client instances
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient()
  }
  prismaClient = global.prismaClient
} else {
  // In production, we create a new Prisma Client instance on every request (no global)
  prismaClient = new PrismaClient()
}

// Export the Prisma Client to be used elsewhere in your application
export { prismaClient }
