import { Test, TestingModule } from '@nestjs/testing';
import { FechamentoController } from './fechamento.controller';
import { FechamentoService } from './fechamento.service';

describe('FechamentoController', () => {
  let controller: FechamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FechamentoController],
      providers: [FechamentoService],
    }).compile();

    controller = module.get<FechamentoController>(FechamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
