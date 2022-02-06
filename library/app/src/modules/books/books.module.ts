import { Module } from '@nestjs/common';
import { BooksController } from "src/modules/books/books.controller";
import { BooksService } from "src/modules/books/books.service";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
