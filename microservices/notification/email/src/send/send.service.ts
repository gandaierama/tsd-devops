import { Injectable } from '@nestjs/common';
import { CreateSendDto } from './dto/create-send.dto';
import { UpdateSendDto } from './dto/update-send.dto';
import { MailService } from './../mail/mail.service';
@Injectable()
export class SendService {

  constructor(private mailService: MailService) {}


  async signUp() {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    await this.mailService.sendUserConfirmation();
  }

  create(createSendDto: CreateSendDto) {
    this.signUp();
    return 'This action adds a new send';
  }

  findAll() {
    return `This action returns all send`;
  }

  findOne(id: number) {
    return `This action returns a #${id} send`;
  }

  update(id: number, updateSendDto: UpdateSendDto) {
    return `This action updates a #${id} send`;
  }

  remove(id: number) {
    return `This action removes a #${id} send`;
  }
}
