import {Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receipts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    receipt_number: number;

    @Column()
    receipt_type: string;

    @Column()
    receipt_description: string;
}