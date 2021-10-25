-- CreateTable
CREATE TABLE "Sponsor" (
    "id" SERIAL NOT NULL,
    "sponsorName" VARCHAR(225) NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Sponsor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sponsor" ADD CONSTRAINT "Sponsor_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
