import { Injectable } from '@nestjs/common';
import { CreateOrdemDto } from './dto/create-ordem.dto';
import { UpdateOrdemDto } from './dto/update-ordem.dto';
import { OrdemEntity } from './entities/ordem.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class OrdemService {

    constructor(
      @InjectRepository(OrdemEntity)
      private ordemRepository: Repository<OrdemEntity>,
    ) {}


  create(createOrdemDto: CreateOrdemDto): Promise<OrdemEntity> {
    const obje = new OrdemEntity();
    obje.name = createOrdemDto.name;
    obje.cliente = createOrdemDto.cliente;
    obje.periodo = createOrdemDto.periodo;
    obje.days = createOrdemDto.days;
    obje.diaria = createOrdemDto.diaria;
    obje.entrega = createOrdemDto.entrega;

    return this.ordemRepository.save(obje);
  }


  update(id: string, updateOrdemDto: UpdateOrdemDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<ClienteEntity[]> {
    return this.ordemRepository.find();
  }

  findOne(id: string): Promise<ClienteEntity> {
    return this.ordemRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.ordemRepository.delete(id);
  }
}
