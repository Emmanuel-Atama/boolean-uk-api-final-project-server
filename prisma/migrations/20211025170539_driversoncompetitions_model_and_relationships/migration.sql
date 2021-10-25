/*
  Warnings:

  - You are about to drop the `competition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `driver` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "competition";

-- DropTable
DROP TABLE "driver";

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(225) NOT NULL,
    "lastName" VARCHAR(225) NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" SERIAL NOT NULL,
    "compName" VARCHAR(225) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriversOnCompetitions" (
    "driverId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,

    CONSTRAINT "DriversOnCompetitions_pkey" PRIMARY KEY ("driverId","competitionId")
);

-- AddForeignKey
ALTER TABLE "DriversOnCompetitions" ADD CONSTRAINT "DriversOnCompetitions_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriversOnCompetitions" ADD CONSTRAINT "DriversOnCompetitions_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
