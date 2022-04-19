import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class EntregaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    latitude: string

    @Column({length: 65})
    longitude: string

    @Column({length: 65})
    endereco: string

    @Column({length: 65})
    bairro: string

    @Column({length: 65})
    cidade: string

    @Column({length: 65})
    estado: string

    @Column({length: 65})
    numero: string

    @Column({length: 65})
    status: string

    @Column({length: 65})
    motoboy: string

    @Column({length: 65})
    foto: string

    @Column({length: 65})
    cliente: string
}
