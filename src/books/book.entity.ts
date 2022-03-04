import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "src/users/user.entity";
@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @ManyToOne(() => User, (user)=> user.id)
    @JoinColumn()
    user: User;
}