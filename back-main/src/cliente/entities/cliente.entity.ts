import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class ClienteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    email: string

    @Column({length: 65})
    telefone: string

    @Column({length: 65})
    cpf: string

    @Column({length: 65})
    cnpj: string

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

    
}
