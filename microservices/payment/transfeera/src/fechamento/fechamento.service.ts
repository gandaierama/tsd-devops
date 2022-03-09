import { Injectable } from '@nestjs/common';
import { CreateFechamentoDto } from './dto/create-fechamento.dto';
import { UpdateFechamentoDto } from './dto/update-fechamento.dto';

@Injectable()
export class FechamentoService {
  create(createFechamentoDto: CreateFechamentoDto) {
    return 'This action adds a new fechamento';
  }

  findAll() {
    return `This action returns all fechamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fechamento`;
  }

  update(id: number, updateFechamentoDto: UpdateFechamentoDto) {
    return `This action updates a #${id} fechamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} fechamento`;
  }
}
