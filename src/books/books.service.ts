import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

  @Injectable()
  export class BooksService {
      constructor(@InjectRepository(Book) private repo: Repository<Book>){}

        // Add books data
        addBook(id: number, title: string, description: string, author: string){
            const book =  this.repo.create({ id, title, description, author})
            return this.repo.save(book)
        }  
      
        // Get all books
        getBooks(){
                return this.repo.find();
        }
        
        // Get single book with ID
        getBook(id: number){
            if(!id){
                return null
            }
            return this.repo.findOne(id);
        }
        
        // Update the books record
        async updateBookDetails(id: number, attrs: Partial<Book>){
            const book = await this.getBook(id);
            if(!book){
                throw new NotFoundException('Book not found')
            }
            Object.assign(book, attrs );
            return this.repo.save(book)
        }
        
        // Delete the book
        async deleteBook(id: number){
            const book = await this.getBook(id);
            if(!book){
                throw new NotFoundException('Book not found')
            }
            return this.repo.remove(book)
        }
  }