import { Test, TestingModule } from '@nestjs/testing';
import { FechamentoService } from './fechamento.service';

describe('FechamentoService', () => {
  let service: FechamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FechamentoService],
    }).compile();

    service = module.get<FechamentoService>(FechamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
