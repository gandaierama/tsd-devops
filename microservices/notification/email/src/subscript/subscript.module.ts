import { Module } from '@nestjs/common';
import { SubscriptService } from './subscript.service';
import { SubscriptController } from './subscript.controller';

@Module({
  controllers: [SubscriptController],
  providers: [SubscriptService]
})
export class SubscriptModule {}
