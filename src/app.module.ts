import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule,VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
