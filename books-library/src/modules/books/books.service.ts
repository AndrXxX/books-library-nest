import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { iCreateBookDto } from "./interfaces/book-create.interface";
import { UpdateBookDto } from "./interfaces/book-update.interface";
import { Book, BookDocument } from "./mongo.schemas/book.schema";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
  ) {}

  public async create(data: iCreateBookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);
    try {
      await book.save();
    } catch (e) {
      console.error(e);
    }
    return book;
  }

  public async findAll(): Promise<BookDocument[]> {
    try {
      return await this.BookModel.find().select('-__v').exec();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async update(id: string, data: UpdateBookDto): Promise<boolean> {
    try {
      await this.BookModel.findOneAndUpdate({ _id: id }, data);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await  this.BookModel.findOneAndRemove({ _id: id });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
