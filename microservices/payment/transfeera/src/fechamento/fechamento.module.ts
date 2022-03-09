import { Module } from '@nestjs/common';
import { FechamentoService } from './fechamento.service';
import { FechamentoController } from './fechamento.controller';

@Module({
  controllers: [FechamentoController],
  providers: [FechamentoService]
})
export class FechamentoModule {}
