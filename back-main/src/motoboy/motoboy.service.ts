import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { MotoboyEntity } from './entities/motoboy.entity';



//////

@Injectable()
export class MotoboyService {
  constructor(
    @InjectRepository(MotoboyEntity)
    private motoboyRepository: Repository<MotoboyEntity>,
  ) {}

  create(createMotoboyDto: CreateMotoboyDto): Promise<MotoboyEntity> {
    const obje = new MotoboyEntity();
    obje.name = createMotoboyDto.name;
    obje.email = createMotoboyDto.email;
    obje.telefone = createMotoboyDto.telefone;
    obje.cpf = createMotoboyDto.cpf;
    obje.senha = createMotoboyDto.senha;
    obje.cnpj = createMotoboyDto.cnpj;

    return this.motoboyRepository.save(obje);
  }

  async login(email: string, senha: string): Promise<any> {
    const user = await this.motoboyRepository.findOne(email);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
  update(id: string, updateOrdemDto: UpdateMotoboyDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<MotoboyEntity[]> {
    return this.motoboyRepository.find();
  }

  findOne(id: string): Promise<MotoboyEntity> {
    return this.motoboyRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.motoboyRepository.delete(id);
  }
}
