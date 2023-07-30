import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { iBook } from "src/interfaces/book.interface";
import { IParamId } from "src/interfaces/param-id.interface";
import { BooksService } from "./books.service";
import { iCreateBookDto } from "./interfaces/book-create.interface";
import { iUpdateBookDto } from "./interfaces/book-update.interface";
import { BookDocument } from "./mongo.schemas/book.schema";

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Post()
  async create(@Body() createBookDto: iCreateBookDto) {
    await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<iBook[]> {
    return await this.booksService.findAll();
  }

  @Put(':id')
  public update(
    @Param() { id }: IParamId,
    @Body() body: iUpdateBookDto,
  ): Promise<BookDocument> {
    return this.booksService.update(id as string, body);
  }

  @Delete(':id')
  public delete(@Param() { id }: IParamId): Promise<BookDocument> {
    return this.booksService.delete(id as string);
  }
}
