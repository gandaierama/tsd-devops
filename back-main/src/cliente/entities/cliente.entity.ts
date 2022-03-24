import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class ClienteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string

    @Column({length: 65, default: "ghost@texte.com", nullable: false})
    email: string

    @Column({length: 65, default: "11989445477", nullable: true })
    telefone: string

    @Column({length: 65, default: "30086789045", nullable: true })
    cpf: string

    @Column({length: 65, default: "1200020030400", nullable: true })
    cnpj: string

    @Column({length: 65, default: "-100", nullable: true })
    latitude: string

    @Column({length: 65, default: "-200", nullable: true })
    longitude: string

    @Column({length: 65, default: "rua teste", nullable: true})
    endereco: string

    @Column({length: 65, default: "bairro", nullable: true })
    bairro: string

    @Column({length: 65, default: "cidade", nullable: true })
    cidade: string

    @Column({length: 2, default: "sp", nullable: true })
    estado: string

    @Column({length: 65, default: "33", nullable: true })
    numero: string
    
}
