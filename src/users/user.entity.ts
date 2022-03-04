import { Book } from "src/books/book.entity";
import { AfterInsert, Entity, Column, PrimaryGeneratedColumn, AfterRemove, AfterUpdate, OneToMany } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Book, (book) => book.user)
    books: Book

    @AfterInsert()
    logInsert(){
        console.log('Inserted User with ID', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with ID', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with ID', this.id)
    }
}