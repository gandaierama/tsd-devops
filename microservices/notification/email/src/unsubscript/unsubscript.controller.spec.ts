import { Test, TestingModule } from '@nestjs/testing';
import { UnsubscriptController } from './unsubscript.controller';
import { UnsubscriptService } from './unsubscript.service';

describe('UnsubscriptController', () => {
  let controller: UnsubscriptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnsubscriptController],
      providers: [UnsubscriptService],
    }).compile();

    controller = module.get<UnsubscriptController>(UnsubscriptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
