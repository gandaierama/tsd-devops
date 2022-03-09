import { Injectable } from '@nestjs/common';
import { CreateSubscriptDto } from './dto/create-subscript.dto';
import { UpdateSubscriptDto } from './dto/update-subscript.dto';

@Injectable()
export class SubscriptService {
  create(createSubscriptDto: CreateSubscriptDto) {
    return 'This action adds a new subscript';
  }

  findAll() {
    return `This action returns all subscript`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscript`;
  }

  update(id: number, updateSubscriptDto: UpdateSubscriptDto) {
    return `This action updates a #${id} subscript`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscript`;
  }
}
