import { ApiProperty } from '@nestjs/swagger';
export class CreateClienteDto {

	@ApiProperty()
  	name: string;

  	@ApiProperty()
  	email: string;

  	@ApiProperty()
  	cpf: string;

  	@ApiProperty()
  	cnpj: string;

  	@ApiProperty()
  	telefone: string;

}
