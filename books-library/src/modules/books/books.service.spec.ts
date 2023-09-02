import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from '@nestjs/testing';
import { Book } from "src/modules/books/mongo.schemas/book.schema";
import { BooksService } from './books.service';

describe("BooksService", () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useFactory: () => ({}),
        }
      ],
      exports: [BooksService],
    }).compile();

    booksService = await app.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(booksService).toBeDefined();
  });
});
