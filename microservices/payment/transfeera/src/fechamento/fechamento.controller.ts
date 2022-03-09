import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FechamentoService } from './fechamento.service';
import { CreateFechamentoDto } from './dto/create-fechamento.dto';
import { UpdateFechamentoDto } from './dto/update-fechamento.dto';

@Controller('fechamento')
export class FechamentoController {
  constructor(private readonly fechamentoService: FechamentoService) {}

  @Post()
  create(@Body() createFechamentoDto: CreateFechamentoDto) {
    return this.fechamentoService.create(createFechamentoDto);
  }

  @Get()
  findAll() {
    return this.fechamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fechamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFechamentoDto: UpdateFechamentoDto) {
    return this.fechamentoService.update(+id, updateFechamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fechamentoService.remove(+id);
  }
}
