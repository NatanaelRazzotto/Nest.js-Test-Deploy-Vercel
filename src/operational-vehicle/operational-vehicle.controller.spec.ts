import { Test, TestingModule } from '@nestjs/testing';
import { OperationalVehicleController } from './operational-vehicle.controller';

describe('OperationalVehicleController', () => {
  let controller: OperationalVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationalVehicleController],
    }).compile();

    controller = module.get<OperationalVehicleController>(OperationalVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
