-- CreateTable
CREATE TABLE "competition" (
    "id" SERIAL NOT NULL,
    "compName" VARCHAR(225) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "competition_pkey" PRIMARY KEY ("id")
);
