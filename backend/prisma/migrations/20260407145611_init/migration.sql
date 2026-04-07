/*
  Warnings:

  - You are about to drop the column `innId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `Inn` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accommodationId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_innId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "innId",
ADD COLUMN     "accommodationId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Inn";

-- CreateTable
CREATE TABLE "Accommodation" (
    "id" SERIAL NOT NULL,
    "accommodation_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "rooms" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
