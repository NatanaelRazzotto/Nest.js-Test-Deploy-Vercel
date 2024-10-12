-- CreateTable
CREATE TABLE "OperationalVehicle" (
    "id" TEXT NOT NULL,
    "serialNumber" TEXT,
    "operatingCategory" DOUBLE PRECISION NOT NULL,
    "imageIDs" TEXT[],
    "videoIDs" TEXT[],
    "operatorID" TEXT,
    "registeredVehicleID" TEXT NOT NULL,

    CONSTRAINT "OperationalVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisteredVehicle" (
    "id" TEXT NOT NULL,
    "plate" TEXT,
    "bodyworkID" TEXT,
    "powertrainID" TEXT,

    CONSTRAINT "RegisteredVehicle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OperationalVehicle" ADD CONSTRAINT "OperationalVehicle_operatorID_fkey" FOREIGN KEY ("operatorID") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperationalVehicle" ADD CONSTRAINT "OperationalVehicle_registeredVehicleID_fkey" FOREIGN KEY ("registeredVehicleID") REFERENCES "RegisteredVehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisteredVehicle" ADD CONSTRAINT "RegisteredVehicle_bodyworkID_fkey" FOREIGN KEY ("bodyworkID") REFERENCES "Bodywork"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisteredVehicle" ADD CONSTRAINT "RegisteredVehicle_powertrainID_fkey" FOREIGN KEY ("powertrainID") REFERENCES "Powertrain"("id") ON DELETE SET NULL ON UPDATE CASCADE;
