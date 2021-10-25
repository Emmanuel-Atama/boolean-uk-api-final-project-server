-- CreateTable
CREATE TABLE "driver" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(225) NOT NULL,
    "lastName" VARCHAR(225) NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);
