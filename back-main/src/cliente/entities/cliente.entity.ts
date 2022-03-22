import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class ClienteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste"})
    name: string

    @Column({length: 65, default: "ghost@texte.com"})
    email: string

    @Column({length: 65, default: "11989445477" })
    telefone: string

    @Column({length: 65, default: "30086789045" })
    cpf: string

    @Column({length: 65, default: "1200020030400" })
    cnpj: string

    @Column({length: 65, default: "-100" })
    latitude: string

    @Column({length: 65, default: "-200" })
    longitude: string

    @Column({length: 65, default: "rua teste"})
    endereco: string

    @Column({length: 65, default: "bairro" })
    bairro: string

    @Column({length: 65, default: "cidade" })
    cidade: string

    @Column({length: 2, default: "sp" })
    estado: string

    @Column({length: 65, default: "33" })
    numero: string

    
}
