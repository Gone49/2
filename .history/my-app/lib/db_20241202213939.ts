

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  id           Int           @id @default(autoincrement())
  name         String
  email        String        @unique
  dateOfBirth  DateTime
  status       String // Active, Inactive, etc.
  appointments Appointment[]
  Doctor       Doctor[]      @relation("DoctorPatients")
}

model Doctor {
  id          Int          @id @default(autoincrement())
  name        String
  email       String       @unique
  specialty   String
  patients    Patient[]    @relation("DoctorPatients")
  Appointment Appointment[]
}

model Appointment {
  id        Int      @id @default(autoincrement())
  date      DateTime
  patientId Int
  doctorId  Int
  status    String // Scheduled, Completed, etc.
  patient   Patient  @relation(fields: [patientId], references: [id])
  doctor    Doctor   @relation(fields: [doctorId], references: [id])
}

model Account {
  id                Int      @id @default(autoincrement())
  userId            Int
  provider          String
  providerAccountId String   @unique
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  user              User     @relation(fields: [userId], references: [id])
}

model Session {
  id        Int      @id @default(autoincrement())
  userId    Int
  createdAt DateTime @default(now())
  expiresAt DateTime
  user      User     @relation(fields: [userId], references: [id])
}

enum UserRole {
  ADMIN
  DOCTOR
  PATIENT
}

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  phone     String? // Ensure the phone field is added
  role      UserRole
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  accounts  Account[]
  sessions  Session[]
}