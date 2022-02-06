import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../schemas/user.schema';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  public title: string;

  @Prop({ default: "" })
  public description: string;

  @Prop({ default: "" })
  public authors: string;

  @Prop({ default: "" })
  public favorite: string;

  @Prop({ default: "" })
  public fileCover: string;

  @Prop({ default: "" })
  public fileName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const BookSchema = SchemaFactory.createForClass(Book);

