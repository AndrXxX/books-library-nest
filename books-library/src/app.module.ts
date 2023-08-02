import { Module } from '@nestjs/common';
import { BooksModule } from "src/modules/books/books.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

const modules = [
  BooksModule,
];

@Module({
  imports: [
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
