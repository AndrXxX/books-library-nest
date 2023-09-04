import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { iBookComment } from "src/interfaces/book-comment.interface";

export type BookCommentDocument = HydratedDocument<BookComment>;

@Schema()
export class BookComment implements iBookComment {
  @Prop( { required: true })
  bookId: string;

  @Prop( { required: [true, 'Не указан текст комментария'] })
  comment: string;
}

export const BookCommentSchema = SchemaFactory.createForClass(BookComment);
