/*
  Warnings:

  - Added the required column `carId` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "carId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" VARCHAR(225) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
