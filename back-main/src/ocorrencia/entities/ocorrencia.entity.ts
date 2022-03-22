import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class OcorrenciaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    description: string


    @Column('uuid')
    motoboy: string
}
