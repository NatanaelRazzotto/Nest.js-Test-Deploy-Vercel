import { Controller, Get, Param } from '@nestjs/common';
import { OperationalVehicleService } from './operational-vehicle.service';

@Controller('operational-vehicle')
export class OperationalVehicleController {

    constructor(private readonly operationalVehicleService: OperationalVehicleService) {}

    @Get()
    async findAll() {
        return this.operationalVehicleService.findAll();
    }

    // Rota para buscar um usuário por id
    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.operationalVehicleService.findById(id);
    }

    // Rota para buscar um usuário por id
    @Get('/serial-number/:id')
    async findBySerialNumber(@Param('id') id: string) {
        return this.operationalVehicleService.findByNumber(id);
    }

//   @Post()
//   async create(@Body() data: { email: string; name?: string }) {
//     return this.vehicleService.create(data);
//   }
}
