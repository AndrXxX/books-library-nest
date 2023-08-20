import { ExecutionContext, INestApplication } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";
import { Test } from '@nestjs/testing';
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt.auth.guard";
import { BooksController } from "src/modules/books/books.controller";
import * as request from 'supertest';
import { BooksService } from './books.service';

describe('Cats', () => {
  let app: INestApplication;
  let booksService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    })
      .overrideGuard(JwtAuthGuard).useValue(new class extends AuthGuard('local') {
        canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
          return true;
        }
      })
      .overrideProvider(BooksService).useValue(booksService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET books`, () => {
    return request(app.getHttpServer())
      .get('/books')
      .expect(200)
      .expect(booksService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
