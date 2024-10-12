import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { PrismaModule } from '../prisma/prisma.module';
import { OperationalVehicleModule } from './operational-vehicle/operational-vehicle.module';

@Module({
  imports: [PrismaModule,VehicleModule, OperationalVehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
