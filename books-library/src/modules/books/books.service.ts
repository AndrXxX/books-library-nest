import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { iCreateBookDto } from "./interfaces/book-create.interface";
import { iUpdateBookDto } from "./interfaces/book-update.interface";
import { Book, BookDocument } from "./mongo.schemas/book.schema";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,) {
  }

  public create(data: iCreateBookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  public findAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public update(id: string, data: iUpdateBookDto): Promise<BookDocument> | any {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  public delete(id: string): Promise<BookDocument> | any {
    return this.BookModel.findOneAndRemove({ _id: id });
  }

}
