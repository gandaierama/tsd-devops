import { Injectable } from '@nestjs/common';
import { UsersService } from '../cliente/cliente.service';

import { Users2Service } from '../motoboy/motoboy.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string, type: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}