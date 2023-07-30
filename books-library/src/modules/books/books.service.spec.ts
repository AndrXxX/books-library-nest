import { Test, TestingModule } from '@nestjs/testing';
import { Book } from "./data/book";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.service";

describe('CatsService', () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
      exports: [BooksService]
    }).compile();

    booksService = await app.resolve<BooksService>(BooksService);
  });

  describe('root', () => {
    it('adds a book', () => {
      const book = new Book();
      booksService.create(book);
      const books = booksService.findAll();
      expect(books).toHaveLength(1);
    });
  });
});
