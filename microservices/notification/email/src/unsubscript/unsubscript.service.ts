import { Injectable } from '@nestjs/common';
import { CreateUnsubscriptDto } from './dto/create-unsubscript.dto';
import { UpdateUnsubscriptDto } from './dto/update-unsubscript.dto';

@Injectable()
export class UnsubscriptService {
  create(createUnsubscriptDto: CreateUnsubscriptDto) {
    return 'This action adds a new unsubscript';
  }

  findAll() {
    return `This action returns all unsubscript`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unsubscript`;
  }

  update(id: number, updateUnsubscriptDto: UpdateUnsubscriptDto) {
    return `This action updates a #${id} unsubscript`;
  }

  remove(id: number) {
    return `This action removes a #${id} unsubscript`;
  }
}
