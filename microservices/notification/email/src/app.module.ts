import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendModule } from './send/send.module';
import { SubscriptModule } from './subscript/subscript.module';
import { UnsubscriptModule } from './unsubscript/unsubscript.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user_test',
      password: 'test',
      database: 'email',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  SendModule, SubscriptModule, UnsubscriptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
