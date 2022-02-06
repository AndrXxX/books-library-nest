import { Module } from '@nestjs/common';
import { BooksModule } from "src/modules/books/books.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from'@nestjs/mongoose';

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
