import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from "src/app.gateway";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { AuthModule } from "./modules/auth/auth.module";
import { BookCommentsModule } from "./modules/book-comments/book-comments.module";
import { BooksModule } from "./modules/books/books.module";
import { RxjsExampleModule } from "./modules/rxjs-example/rxjs-example.module";
import { UsersModule } from "./modules/users/users.module";

const modules = [
  BooksModule,
  MongooseModule.forRoot(config.dbUrl),
  RxjsExampleModule,
  UsersModule,
  AuthModule,
  BookCommentsModule,
];

@Module({
  imports: [
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
