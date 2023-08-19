import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { iBook } from "src/interfaces/book.interface";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guard";
import { DtoValidationPipe } from "src/validators/dto.validation.pipe";
import { IdValidationPipe } from "src/validators/id.validation.pipe";
import { BooksService } from "./books.service";
import { iCreateBookDto } from "./interfaces/book-create.interface";
import { UpdateBookDto } from "./interfaces/book-update.interface";

@UseGuards(JwtAuthGuard)
@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {
  }

  @Post()
  async create(@Body() createBookDto: iCreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<iBook[]> {
    return await this.booksService.findAll();
  }

  @Put(':id')
  public update(
    @Param('id', IdValidationPipe) id: string,
    @Body(DtoValidationPipe) body: UpdateBookDto,
  ) {
    return this.booksService.update(id as string, body);
  }

  @Delete(':id')
  public delete(
    @Param('id', IdValidationPipe) id: string,
  ) {
    return this.booksService.delete(id as string);
  }
}
