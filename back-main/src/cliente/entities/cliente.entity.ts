import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class ClienteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string

    @Column({length: 65, default: "ghost@texte.com", nullable: false})
    email: string
    @Column({length: 65, default: "", nullable: false})
    senha: string

    @Column({length: 65, default: "", nullable: true })
    telefone: string

    @Column({length: 65, default: "", nullable: true })
    cpf: string

    @Column({length: 65, default: "", nullable: true })
    cnpj: string

    @Column({length: 65, default: "", nullable: true })
    latitude: string

    @Column({length: 65, default: "", nullable: true })
    longitude: string

    @Column({length: 65, default: "", nullable: true})
    endereco: string

    @Column({length: 65, default: "", nullable: true })
    bairro: string

    @Column({length: 65, default: "", nullable: true })
    cidade: string

    @Column({length: 2, default: "", nullable: true })
    estado: string

    @Column({length: 65, default: "", nullable: true })
    numero: string
    
}
