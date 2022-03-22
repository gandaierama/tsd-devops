import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class OrdemEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column('uuid')
    cliente: string

    @Column('uuid')
    date: string

    @Column({length: 65})
    periodo: string

    @Column({length: 65})
    days: string

    @Column({length: 65})
    diaria: string

    @Column({length: 65})
    entrega: string


}
