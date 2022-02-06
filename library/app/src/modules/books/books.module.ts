import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { BooksController } from "src/modules/books/books.controller";
import { BooksService } from "src/modules/books/books.service";
import { Book, BookSchema } from "src/schemas/book.schema";
import { User, UserSchema } from "src/schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {
}
