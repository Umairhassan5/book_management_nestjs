import {Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { Book } from "src/books/book.entity";

@Entity()
export class Publications {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publication_date: string;

    @Column()
    publication_place: string;

    @Column()
    publication_number: string;

    @Column()
    publication_type: string;

    @Column()
    publication_name: string

    @OneToOne(type => Book, publication_book_id => publication_book_id.id )
    @JoinColumn({name: "publication_book_id"})
    publication: Book;
}