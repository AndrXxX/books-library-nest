import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateBookDto } from "src/dto/CreateBookDto";
import { UpdateBookDto } from "src/dto/UpdateBookDto";
import { IParamId } from "src/interfaces/IParamId";
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

  @Put(':id')
  public update(
    @Param() { id }: IParamId,
    @Body() body: UpdateBookDto,
  ): Promise<BookDocument> {
    return this.booksService.update(id as string, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: IParamId): Promise<BookDocument> {
    return this.booksService.delete(id as string);
  }

}
