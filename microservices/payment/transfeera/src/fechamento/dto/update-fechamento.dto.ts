import { PartialType } from '@nestjs/mapped-types';
import { CreateFechamentoDto } from './create-fechamento.dto';

export class UpdateFechamentoDto extends PartialType(CreateFechamentoDto) {}
