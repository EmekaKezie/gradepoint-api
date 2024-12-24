
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class gradepoint_user{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    name?: string;
}