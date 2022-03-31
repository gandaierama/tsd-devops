import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { PayModule } from './pay/pay.module';
import { CheckModule } from './check/check.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user_test',
      password: 'test',
      database: 'db_cielo',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),TokenModule, PayModule, CheckModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
