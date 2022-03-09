import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptService } from './subscript.service';

describe('SubscriptService', () => {
  let service: SubscriptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubscriptService],
    }).compile();

    service = module.get<SubscriptService>(SubscriptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
