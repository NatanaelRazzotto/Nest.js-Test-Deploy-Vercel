import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class VehicleService {

    constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.vehicle.findMany();
    }

    async findById(id: string) {
        return this.prisma.vehicle.findUnique({
          where: { id },
        });
      }
}
