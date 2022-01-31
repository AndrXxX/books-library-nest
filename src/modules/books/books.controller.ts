import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from "src/interfaces/book.interface";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Post()
  async create(@Body() createBookDto: Book) {
    this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
