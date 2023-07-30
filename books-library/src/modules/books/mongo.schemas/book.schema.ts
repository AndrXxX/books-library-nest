import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
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
