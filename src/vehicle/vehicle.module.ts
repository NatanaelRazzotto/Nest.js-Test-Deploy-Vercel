import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [PrismaModule],
  providers: [VehicleService],
  controllers: [VehicleController]
})
export class VehicleModule {}
