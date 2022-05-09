import { Module } from '@nestjs/common';
import { SendService } from './send.service';
import { SendController } from './send.controller';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [SendController],
  providers: [SendService]
})
export class SendModule {}
