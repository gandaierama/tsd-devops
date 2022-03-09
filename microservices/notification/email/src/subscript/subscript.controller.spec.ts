import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptController } from './subscript.controller';
import { SubscriptService } from './subscript.service';

describe('SubscriptController', () => {
  let controller: SubscriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptController],
      providers: [SubscriptService],
    }).compile();

    controller = module.get<SubscriptController>(SubscriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
