import { Module } from '@nestjs/common';
import { UnsubscriptService } from './unsubscript.service';
import { UnsubscriptController } from './unsubscript.controller';

@Module({
  controllers: [UnsubscriptController],
  providers: [UnsubscriptService]
})
export class UnsubscriptModule {}
