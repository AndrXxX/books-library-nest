import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBookDto } from "src/dto/CreateBookDto";
import { Book, BookDocument } from "src/schemas/book.schema";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @Post()
  async create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.booksService.create(body);
  }

  @Get()
  async getAll(): Promise<Book[]> {
    return this.booksService.getAll();
  }

}
