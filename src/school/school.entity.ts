import { Capsule } from 'src/capsules/capsule.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class School {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    code: number

    @Column({ type: 'varchar', length: 30 })
    name: string

    @Column({ default: "jerus" })
    address: string

    @Column({ default: 1 })
    studentsCount: number


    @OneToMany(() => Capsule, capsule => capsule.school)
    capsules: Capsule[]
}