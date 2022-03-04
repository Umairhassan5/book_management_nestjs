
import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Post('/add')
    async addBook(@Body() body : CreateBookDTO) {
        const book = await this.booksService.addBook(body.id, body.title, body.description, body.author);
        return book;
    }

    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get('/:id')
    async getBook(@Param('id') id: string){
        const book = await this.booksService.getBook(parseInt(id));
        if(!book){
            throw new NotFoundException('Book not found against this ID')
        }
        return book;
    }

    @Patch('/:id')
    async updateBook(@Param('id') id: string, @Body() body: UpdateBookDto){
        return this.booksService.updateBookDetails(parseInt(id), body);
    }
   
    @Delete('/:id')
    async deleteBook(@Param('id') id: string){
        return this.booksService.deleteBook(parseInt(id));
    }
}
