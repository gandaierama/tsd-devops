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
@Module({
  imports: [TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
      }),
    }), ClienteModule, MotoboyModule, PagamentoModule, OrdemModule, EntregaModule, OcorrenciaModule, PixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
