import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OperationalVehicleService {

    constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.operationalVehicle.findMany();
    }

    async findById(id: string) {
        return this.prisma.operationalVehicle.findUnique({
          where: { id },
          include: {
            registeredVehicle : true ,
            operator : true
          },
        });
      }

    async findByNumber(numberSearch : string){
      return this.prisma.operationalVehicle.findMany({
        where: {
          serialNumber: {
            contains: numberSearch,
            mode: 'insensitive', // Torna a comparação indiferente a maiúsculas/minúsculas
          }
        },
        take: 5, // Limita o número de resultados
        include: {
          registeredVehicle : true ,
          operator : true
        },
      });
    }
}
