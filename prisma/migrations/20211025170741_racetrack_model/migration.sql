-- CreateTable
CREATE TABLE "RaceTrack" (
    "id" SERIAL NOT NULL,
    "trackName" VARCHAR(225) NOT NULL,
    "countryName" VARCHAR(225) NOT NULL,
    "laps" INTEGER NOT NULL,

    CONSTRAINT "RaceTrack_pkey" PRIMARY KEY ("id")
);
