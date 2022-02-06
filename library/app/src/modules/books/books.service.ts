import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { CreateBookDto } from "src/dto/CreateBookDto";
import { UpdateBookDto } from "src/dto/UpdateBookDto";
import { Book, BookDocument } from "src/schemas/book.schema";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,) {
  }

  public create(data: CreateBookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  public getAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public update(id: string, data: UpdateBookDto): Promise<BookDocument> | any {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  public delete(id: string): Promise<BookDocument> | any {
    return this.BookModel.findOneAndRemove({ _id: id });
  }

}
