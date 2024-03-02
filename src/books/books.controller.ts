import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';
import { BooksService } from './books.service';
import { title } from 'process';
import { query } from 'express';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { filter } from 'rxjs';
import { FilterBookDto } from './dto/filter-book.dto';
import { Book } from './entity/book.entity';

@Controller('books')
export class BooksController {
     constructor(private booksService: BooksService) {}
@Get()
async getBooks(
      @Query() filter: FilterBookDto): Promise<Book[]> {     
      return this.booksService.getBooks(filter);   
      // return this.booksService.getBooks({ title, author, category }); 
}
// @Get('/:id')
// getBook(@Param('id') id:string) {
//       return this.booksService.getBook(id);
// }

 @Post()
 async createBook(@Body() payload: CreateBookDto):Promise<void> {
      console.log(payload);
      return this.booksService.createBook(payload);
 }     
//  @Put('/:id')
//  updateBook(@Param('id') id: string, @Body() payload: UpdateBookDto)  {
//             return this.booksService.updateBook(id, payload);
//       }

//       @Delete('/:id')
//       deleteBook(@Param('id') id: string) {
//             return this.booksService.deleteBook(id);
//       }
}
