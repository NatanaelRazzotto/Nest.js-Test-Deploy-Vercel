import { Module } from '@nestjs/common';
import { OperationalVehicleService } from './operational-vehicle.service';
import { OperationalVehicleController } from './operational-vehicle.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OperationalVehicleService],
  controllers: [OperationalVehicleController]
})
export class OperationalVehicleModule {}
