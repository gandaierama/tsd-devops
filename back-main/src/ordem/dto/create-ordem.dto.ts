import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdemDto {

	@ApiProperty({ required: true, default: null })
  	name: string;

  	@ApiProperty({ required: false, default: null })
    cliente: string

    @ApiProperty({ required: false, default: null })
    date: string

    @ApiProperty({ required: false, default: null })
    periodo: string

    @ApiProperty({ required: false, default: null })
    days: string

    @ApiProperty({ required: false, default: null })
    diaria: string

    @ApiProperty({ required: false, default: null })
    entrega: string
}
