import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sales{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sales_amount: string;

    @Column()
    sales_type: string;

    @Column()
    sales_description: string;
}