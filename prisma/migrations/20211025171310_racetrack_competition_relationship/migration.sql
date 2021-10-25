/*
  Warnings:

  - You are about to drop the `RaceTrack` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `racetrackId` to the `Competition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "racetrackId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "RaceTrack";

-- CreateTable
CREATE TABLE "Racetrack" (
    "id" SERIAL NOT NULL,
    "trackName" VARCHAR(225) NOT NULL,
    "countryName" VARCHAR(225) NOT NULL,
    "laps" INTEGER NOT NULL,

    CONSTRAINT "Racetrack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_racetrackId_fkey" FOREIGN KEY ("racetrackId") REFERENCES "Racetrack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
