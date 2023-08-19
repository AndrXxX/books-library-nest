import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { BooksModule } from "./modules/books/books.module";
import { RxjsExampleModule } from "./modules/rxjs-example/rxjs-example.module";
import { UsersModule } from "./modules/users/users.module";

const modules = [
  BooksModule,
  MongooseModule.forRoot(config.dbUrl),
  RxjsExampleModule,
  UsersModule,
];

@Module({
  imports: [
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
