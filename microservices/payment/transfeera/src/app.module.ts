import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoteModule } from './lote/lote.module';
import { ContaModule } from './conta/conta.module';
import { FechamentoModule } from './fechamento/fechamento.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user_test',
      password: 'test',
      database: 'db_transfeera',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),LoteModule, ContaModule, FechamentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
