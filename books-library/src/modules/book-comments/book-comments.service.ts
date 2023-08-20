import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookComment, BookCommentDocument } from "src/modules/book-comments/mongo.schemas/book-comment.schema";
import { iCreateBookCommentDto } from "./interfaces/book-comment-create.interface";

@Injectable()
export class BookCommentsService {
  constructor(
    @InjectModel(BookComment.name) private BookCommentModel: Model<BookCommentDocument>,
  ) {}

  public async create(data: iCreateBookCommentDto): Promise<BookCommentDocument> {
    const comment = new this.BookCommentModel(data);
    try {
      await comment.save();
    } catch (e) {
      console.error(e);
    }
    return comment;
  }

  public async findAllBookComment(bookId: string): Promise<BookCommentDocument[]> {
    try {
      return await this.BookCommentModel.find({ bookId }).select('-__v').exec();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async delete(id: string): Promise<boolean> {
    try {
      await  this.BookCommentModel.findOneAndRemove({ _id: id });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
