import { Body, Controller, Get, Post } from '@nestjs/common';
import { iBook } from "src/interfaces/book.interface";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Post()
  async create(@Body() createBookDto: iBook) {
    await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<iBook[]> {
    return await this.booksService.findAll();
  }
}
