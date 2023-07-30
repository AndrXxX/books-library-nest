import { Injectable } from '@nestjs/common';
import { iBook } from "src/interfaces/book.interface";

@Injectable()
export class BooksService {
  private readonly books: iBook[] = [];

  create(book: iBook) {
    this.books.push(book);
  }

  findAll(): iBook[] {
    return this.books;
  }

}
