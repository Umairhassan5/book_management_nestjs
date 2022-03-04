import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stock_items: string;

    @Column()
    stock_number: number;

    @Column()
    stock_type: string;

    @Column()
    stock_description: string;
}