import { ApiProperty } from '@nestjs/swagger';
export class CreateEntregaDto {

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

    @ApiProperty({ required: false, default: null })
    status: string

    @ApiProperty({ required: false, default: null })
    motoboy: string

    @ApiProperty({ required: false, default: null })
    foto: string

    @ApiProperty({ required: false, default: null })
    cliente: string

}
