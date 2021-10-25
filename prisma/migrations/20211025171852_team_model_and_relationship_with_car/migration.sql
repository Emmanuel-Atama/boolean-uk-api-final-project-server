-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "teamName" VARCHAR(225) NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
