import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendModule } from './send/send.module';
import { SubscriptModule } from './subscript/subscript.module';
import { UnsubscriptModule } from './unsubscript/unsubscript.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
  SendModule, SubscriptModule, UnsubscriptModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
