import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from "./modules/books/books.module";

const modules = [
  BooksModule,
];

@Module({
  imports: [
    ...modules,
    MongooseModule.forRoot(process.env.DB_URL || 'mongodb://localhost:27017/mydb')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
