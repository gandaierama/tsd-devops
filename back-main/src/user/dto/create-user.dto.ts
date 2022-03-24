import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

	@ApiProperty({ required: true, default: null })
  	name: string;

  	@ApiProperty({ required: false, default: null })
  	email: string;

    @ApiProperty({ required: false, default: null })
    senha: string
}
