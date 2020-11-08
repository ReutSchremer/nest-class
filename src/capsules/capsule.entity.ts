import { School } from 'src/school/school.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Capsule {

    @PrimaryGeneratedColumn()
    id

    @Column({ length: 30 })
    name: string

    @ManyToOne(() => School, school => school.id)
    school: School

}