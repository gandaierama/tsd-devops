import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class PagamentoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    valor: string

    @Column('uuid')
    motoboy: string

    @Column({length: 65})
    date: string

    @Column()
    description: string

    @Column('uuid')
    user: string
}
