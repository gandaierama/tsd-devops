import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptDto } from './create-subscript.dto';

export class UpdateSubscriptDto extends PartialType(CreateSubscriptDto) {}
