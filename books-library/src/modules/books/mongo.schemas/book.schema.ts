import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { iBook } from "src/interfaces/book.interface";

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book implements iBook {
  @Prop( { required: [true, 'Не указано название'] })
  title: string;

  @Prop( { default: '' })
  description: string;

  @Prop( { default: [] })
  authors: string[];

  @Prop( { default: '' })
  favorite: string;

  @Prop( { default: '' })
  fileCover: string;

  @Prop( { default: '' })
  fileName: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
