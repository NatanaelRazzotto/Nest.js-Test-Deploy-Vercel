import { Test, TestingModule } from '@nestjs/testing';
import { OperationalVehicleService } from './operational-vehicle.service';

describe('OperationalVehicleService', () => {
  let service: OperationalVehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationalVehicleService],
    }).compile();

    service = module.get<OperationalVehicleService>(OperationalVehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
