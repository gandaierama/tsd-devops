import { PartialType } from '@nestjs/mapped-types';
import { CreateUnsubscriptDto } from './create-unsubscript.dto';

export class UpdateUnsubscriptDto extends PartialType(CreateUnsubscriptDto) {}
