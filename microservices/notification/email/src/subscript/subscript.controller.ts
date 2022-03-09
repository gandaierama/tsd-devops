import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriptService } from './subscript.service';
import { CreateSubscriptDto } from './dto/create-subscript.dto';
import { UpdateSubscriptDto } from './dto/update-subscript.dto';

@Controller('subscript')
export class SubscriptController {
  constructor(private readonly subscriptService: SubscriptService) {}

  @Post()
  create(@Body() createSubscriptDto: CreateSubscriptDto) {
    return this.subscriptService.create(createSubscriptDto);
  }

  @Get()
  findAll() {
    return this.subscriptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriptDto: UpdateSubscriptDto) {
    return this.subscriptService.update(+id, updateSubscriptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptService.remove(+id);
  }
}
