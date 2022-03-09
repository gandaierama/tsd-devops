import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnsubscriptService } from './unsubscript.service';
import { CreateUnsubscriptDto } from './dto/create-unsubscript.dto';
import { UpdateUnsubscriptDto } from './dto/update-unsubscript.dto';

@Controller('unsubscript')
export class UnsubscriptController {
  constructor(private readonly unsubscriptService: UnsubscriptService) {}

  @Post()
  create(@Body() createUnsubscriptDto: CreateUnsubscriptDto) {
    return this.unsubscriptService.create(createUnsubscriptDto);
  }

  @Get()
  findAll() {
    return this.unsubscriptService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unsubscriptService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnsubscriptDto: UpdateUnsubscriptDto) {
    return this.unsubscriptService.update(+id, updateUnsubscriptDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unsubscriptService.remove(+id);
  }
}
