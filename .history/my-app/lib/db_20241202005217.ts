// db.tx.js
import { PrismaClient } from '@prisma/client'

// Declare Prisma Client instance globally for development environments (to avoid multiple instances)
let prismaClient

if (process.env.NODE_ENV === 'development') {
  // In development, assign the global instance
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient()
  }
  prismaClient = global.prismaClient
} else {
  // In production, always create a new instance
  prismaClient = new PrismaClient()
}

// Export the prisma client for usage in other files
export { prismaClient }
