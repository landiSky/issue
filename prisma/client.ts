// lib/prisma.ts
// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help
// Using this approach ensures that only one instance of Prisma Client exists,
// even during hot-reloading in development.
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
