import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { MotoboyModule } from './motoboy/motoboy.module';
import { PagamentoModule } from './pagamento/pagamento.module';
import { OrdemModule } from './ordem/ordem.module';
import { EntregaModule } from './entrega/entrega.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
//import { BloqueiosModule } from './bloqueios/bloqueios.module';
import { PixModule } from './pix/pix.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PeriodoModule } from './periodo/periodo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user_test',
      password: 'test',
      database: 'my_db_name',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ClienteModule, MotoboyModule, PagamentoModule, OrdemModule, EntregaModule, OcorrenciaModule, PixModule, PeriodoModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
