import { PrismaClient } from "@prisma/client";

console.log("🔍 Caricamento prisma.ts"); // 👈 Aggiungi questo

console.log("DATABASE_URL presente:", !!process.env.DATABASE_URL); // 👈 Aggiungi

console.log("DATABASE_URL valore:", process.env.DATABASE_URL?.substring(0, 20)); // 👈 Primi 20 caratteri

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

console.log("✅ Prisma caricato"); // 👈 E questo
