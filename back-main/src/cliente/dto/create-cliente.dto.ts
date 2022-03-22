import { ApiProperty } from '@nestjs/swagger';
export class CreateClienteDto {

	@ApiProperty({ required: true, default: null })
  	name: string;

  	@ApiProperty({ required: false, default: null })
  	email: string;

  	@ApiProperty({ required: false, default: null })
  	cpf: string;

  	@ApiProperty({ required: false, default: null })
  	cnpj: string;

  	@ApiProperty({ required: false, default: null })
  	telefone: string;

    @ApiProperty({ required: false, default: null })
    latitude: string

    @ApiProperty({ required: false, default: null })
    longitude: string

    @ApiProperty({ required: false, default: null })
    endereco: string

    @ApiProperty({ required: false, default: null })
    bairro: string

    @ApiProperty({ required: false, default: null })
    cidade: string

    @ApiProperty({ required: false, default: null })
    estado: string

    @ApiProperty({ required: false, default: null })
    numero: string

}
