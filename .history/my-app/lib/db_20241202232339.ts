generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  id          Int           @id @default(autoincrement())
  name        String
  email       String        @unique
  dateOfBirth DateTime
  status      String
  appointments Appointment[]
}

model Doctor {
  id          Int           @id @default(autoincrement())
  name        String
  email       String        @unique
  specialty   String
  patients    Patient[]     @relation("DoctorPatients")
}

model Appointment {
  id        Int       @id @default(autoincrement())
  date      DateTime
  patientId Int
  doctorId  Int
  status    String
  patient   Patient    @relation(fields: [patientId], references: [id])
  doctor    Doctor     @relation(fields: [doctorId], references: [id])
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  role      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
