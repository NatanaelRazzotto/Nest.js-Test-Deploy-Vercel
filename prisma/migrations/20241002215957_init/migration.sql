-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "plate" TEXT,
    "serialNumber" TEXT,
    "operatingCategory" DOUBLE PRECISION NOT NULL,
    "imageIDs" TEXT[],
    "videoIDs" TEXT[],
    "bodyworkID" TEXT,
    "powertrainID" TEXT,
    "operatorID" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bodywork" (
    "id" TEXT NOT NULL,
    "nameModel" TEXT NOT NULL,
    "description" TEXT,
    "serialNumber" TEXT,
    "year" DOUBLE PRECISION NOT NULL,
    "manufacturerID" TEXT,

    CONSTRAINT "Bodywork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Powertrain" (
    "id" TEXT NOT NULL,
    "nameModel" TEXT NOT NULL,
    "description" TEXT,
    "serialNumber" TEXT,
    "year" DOUBLE PRECISION NOT NULL,
    "fuel" DOUBLE PRECISION NOT NULL,
    "manufacturerID" TEXT,

    CONSTRAINT "Powertrain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "nationality" TEXT NOT NULL,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_bodyworkID_fkey" FOREIGN KEY ("bodyworkID") REFERENCES "Bodywork"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_powertrainID_fkey" FOREIGN KEY ("powertrainID") REFERENCES "Powertrain"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_operatorID_fkey" FOREIGN KEY ("operatorID") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bodywork" ADD CONSTRAINT "Bodywork_manufacturerID_fkey" FOREIGN KEY ("manufacturerID") REFERENCES "Manufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Powertrain" ADD CONSTRAINT "Powertrain_manufacturerID_fkey" FOREIGN KEY ("manufacturerID") REFERENCES "Manufacturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
