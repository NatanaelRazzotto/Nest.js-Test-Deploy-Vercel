import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAll() {
    return this.vehicleService.findAll();
  }

    // Rota para buscar um usuário por id
    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.vehicleService.findById(id);
    }

//   @Post()
//   async create(@Body() data: { email: string; name?: string }) {
//     return this.vehicleService.create(data);
//   }
}
