import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste"})
    name: string

    @Column({length: 65, default: "ghost@texte.com"})
    email: string

    @Column({length: 65, default: "11989445477" })
    senha: string
    
}
