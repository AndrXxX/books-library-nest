import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from '@nestjs/testing';
import { Book, BookDocument } from "src/modules/books/mongo.schemas/book.schema";
import { BooksService } from './books.service';

describe("BooksService", () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useFactory: () => ({
            findAll: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOneAndUpdate: jest.fn(),
            findOneAndRemove: jest.fn(),
          }),
        }
      ],
      exports: [BooksService],
    }).compile();

    booksService = await app.get<BooksService>(BooksService);
  });

  describe("findAll", () => {
    it("should return an array of Books", async () => {
      const result: BookDocument[] = [new Book() as BookDocument];
      jest.spyOn(booksService, "findAll").mockImplementation(async () => result);
      expect(await booksService.findAll()).toBe(result);
    });
  });
});
