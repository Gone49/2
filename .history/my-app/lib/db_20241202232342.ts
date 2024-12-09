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
  phone        String?       // Optional phone field for patients
  dateOfBirth  DateTime
  address      String?       // Optional address field
  status       PatientStatus // Enum to track patient status (e.g., Active, Inactive)
  appointments Appointment[]
  doctor       Doctor[]      @relation("DoctorPatients")
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

model Doctor {
  id          Int          @id @default(autoincrement())
  name        String
  email       String       @unique
  phone       String?      // Optional phone field for doctors
  specialty   String
  patients    Patient[]    @relation("DoctorPatients")
  appointments Appointment[]
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
}

model Appointment {
  id         Int       @id @default(autoincrement())
  date       DateTime
  status     AppointmentStatus // Enum for appointment status
  patientId  Int
  doctorId   Int
  patient    Patient  @relation(fields: [patientId], references: [id])
  doctor     Doctor   @relation(fields: [doctorId], references: [id])
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
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

model User {
  id        Int       @id @default(autoincrement())
  email     String    @unique
  name      String?
  phone     String?   // Optional phone field for user
  role      UserRole
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  accounts  Account[]
  sessions  Session[]
}

enum UserRole {
  ADMIN
  DOCTOR
  PATIENT
}

enum PatientStatus {
  ACTIVE
  INACTIVE
  DISCHARGED
}

enum AppointmentStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
  RESCHEDULED
}
