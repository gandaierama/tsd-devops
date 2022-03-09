import { Test, TestingModule } from '@nestjs/testing';
import { UnsubscriptService } from './unsubscript.service';

describe('UnsubscriptService', () => {
  let service: UnsubscriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnsubscriptService],
    }).compile();

    service = module.get<UnsubscriptService>(UnsubscriptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
