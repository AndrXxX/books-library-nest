import { getModelToken } from "@nestjs/mongoose";
import { Test, TestingModule } from '@nestjs/testing';
import { iCreateBookDto } from "src/modules/books/interfaces/book-create.interface";
import { Book, BookDocument } from "src/modules/books/mongo.schemas/book.schema";
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

describe("BooksController", () => {
  let booksController: BooksController;
  let booksService: BooksService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
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

    booksController = await app.get<BooksController>(BooksController);
    booksService = await app.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(booksController).toBeDefined();
    expect(booksService).toBeDefined();
  });

  describe("findAll", () => {
    it("should return an array of Books", async () => {
      const result: BookDocument[] = [new Book() as BookDocument];
      jest.spyOn(booksService, "findAll").mockImplementation(async () => result);
      expect(await booksController.findAll()).toBe(result);
    });
  });

  describe("create", () => {
    it("should create new Book", async () => {
      const book = new Book() as BookDocument;
      const result: BookDocument[] = [book];
      jest.spyOn(booksService, "findAll").mockImplementation(async () => result);
      jest.spyOn(booksService, "create").mockImplementation(async () => {
        result.push(book);
        return book;
      });
      expect(await booksController.findAll()).toBe(result);
      expect(await booksController.create({} as iCreateBookDto)).toEqual(book);
      expect(await booksController.findAll()).toBe(result);
    });
  });
});
