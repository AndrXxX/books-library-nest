import { Module } from '@nestjs/common';
import { BooksModule } from "src/modules/books/books.module";
import { RxjsExampleModule } from "src/modules/rxjs-example/rxjs-example.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';

const modules = [
  BooksModule,
  MongooseModule.forRoot(config.dbUrl),
  RxjsExampleModule,
];

@Module({
  imports: [
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
